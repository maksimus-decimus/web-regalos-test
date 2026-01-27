import json
import os
import re
import time
import sys
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
try:
    from bs4 import BeautifulSoup
except ImportError:
    print("El paquete 'beautifulsoup4' (bs4) no está instalado. Instálalo con: pip install beautifulsoup4")
    raise

import shutil


class AmazonScraper:
    def __init__(self, headless=True):
        self.driver = None
        self.headless = headless
        self._init_driver()

    @staticmethod
    def clean_text(text):
        """Limpia caracteres Unicode de control y espacios extra"""
        if not text:
            return text
        # Eliminar caracteres de control Unicode (LTR mark, RTL mark, etc.)
        text = re.sub(r'[\u200e\u200f\u202a-\u202e\u2066-\u2069\u200b-\u200d\ufeff]', '', text)
        # Eliminar espacios múltiples y saltos de línea extra
        text = re.sub(r'\s+', ' ', text)
        # Eliminar el carácter especial ‎ que aparece en Amazon
        text = text.replace('‎', '').replace('‏', '')
        return text.strip()

    def _init_driver(self):
        """Inicializa el driver de Selenium con Chrome"""
        options = Options()
        if self.headless:
            options.add_argument('--headless=new')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--disable-blink-features=AutomationControlled')
        options.add_argument('--disable-infobars')
        options.add_argument('--window-size=1920,1080')
        options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
        options.add_experimental_option('excludeSwitches', ['enable-automation'])
        options.add_experimental_option('useAutomationExtension', False)

        # Intentar usar webdriver-manager para manejar chromedriver automáticamente
        try:
            from webdriver_manager.chrome import ChromeDriverManager
            service = Service(ChromeDriverManager().install())
            self.driver = webdriver.Chrome(service=service, options=options)
        except Exception:
            # Si webdriver-manager no está disponible, intentar crear el driver con el chromedriver en PATH.
            # En Windows normalmente hace falta tener chromedriver.exe en el PATH o especificar su ruta.
            print("Aviso: webdriver-manager no está disponible o falló. Intentando usar chromedriver desde PATH.")
            try:
                self.driver = webdriver.Chrome(options=options)
            except Exception as e:
                # Dar información útil al usuario
                raise RuntimeError(
                    "No se pudo inicializar Chromedriver. Instala webdriver-manager (pip install webdriver-manager) "
                    "o coloca chromedriver en el PATH. Error original: {}".format(e)
                )

        self.driver.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument', {
            'source': '''
                Object.defineProperty(navigator, 'webdriver', {
                    get: () => undefined
                })
            '''
        })

    def close(self):
        """Cierra el navegador"""
        if self.driver:
            self.driver.quit()

    def get_page(self, url):
        """Obtiene la página y espera a que cargue"""
        try:
            self.driver.get(url)
            time.sleep(3)  # Esperar carga inicial

            # Esperar a que aparezca el título del producto
            try:
                WebDriverWait(self.driver, 10).until(
                    EC.presence_of_element_located((By.ID, 'productTitle'))
                )
            except TimeoutException:
                print("Timeout esperando el título del producto")

            # Scroll para cargar contenido lazy
            self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight/2);")
            time.sleep(1)
            self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(1)

            return BeautifulSoup(self.driver.page_source, 'html.parser')
        except Exception as e:
            print(f"Error al obtener la página: {e}")
            return None

    def extract_product_id(self, url):
        """Extrae el ID del producto de la URL"""
        match = re.search(r'/dp/([A-Z0-9]+)', url)
        if match:
            return match.group(1)
        match = re.search(r'/gp/product/([A-Z0-9]+)', url)
        if match:
            return match.group(1)
        return None

    def extract_title(self, soup):
        """Extrae el título del producto"""
        selectors = [
            '#productTitle',
            '#title span',
            'h1.product-title-word-break',
            'span.product-title-word-break'
        ]
        for selector in selectors:
            element = soup.select_one(selector)
            if element:
                title = self.clean_text(element.get_text(strip=True))
                if title:
                    return title
        return None

    def extract_price(self, soup):
        """Extrae el precio del producto"""
        price_selectors = [
            '#corePrice_feature_div span.a-price-whole',
            'span.a-price span.a-offscreen',
            '#priceblock_ourprice',
            '#priceblock_dealprice',
            '#priceblock_saleprice',
            'span.priceToPay span.a-offscreen',
            '#apex_offerDisplay_desktop span.a-offscreen',
            'div[data-feature-name="corePrice"] span.a-offscreen',
        ]

        for selector in price_selectors:
            elements = soup.select(selector)
            for element in elements:
                price_text = self.clean_text(element.get_text(strip=True))
                if price_text and ('€' in price_text or re.search(r'\d', price_text)):
                    return price_text

        # Buscar precio con cents
        whole = soup.select_one('span.a-price-whole')
        fraction = soup.select_one('span.a-price-fraction')
        if whole:
            price = self.clean_text(whole.get_text(strip=True))
            if fraction:
                price += self.clean_text(fraction.get_text(strip=True))
            return price + ' €'

        return None

    def extract_description(self, soup):
        """Extrae la descripción del producto"""
        descriptions = []

        # Descripción en bullets
        feature_bullets = soup.select('#feature-bullets ul li span.a-list-item')
        for bullet in feature_bullets:
            text = self.clean_text(bullet.get_text(strip=True))
            if text and not text.startswith('›') and len(text) > 5:
                descriptions.append(text)

        # Descripción del producto
        product_description = soup.select_one('#productDescription p, #productDescription span')
        if product_description:
            desc_text = self.clean_text(product_description.get_text(strip=True))
            if desc_text:
                descriptions.append(desc_text)

        # Descripción en "Sobre este artículo"
        about_item = soup.select('#productFactsDesktopExpander ul li span.a-list-item')
        for item in about_item:
            text = self.clean_text(item.get_text(strip=True))
            if text and len(text) > 5:
                descriptions.append(text)

        return descriptions if descriptions else None

    def extract_features(self, soup):
        """Extrae las características técnicas del producto"""
        features = {}

        # Tabla principal de detalles técnicos
        tech_tables = [
            '#productDetails_techSpec_section_1 tr',
            '#productDetails_techSpec_section_2 tr',
            '#technicalSpecifications_section_1 tr',
            '#technicalSpecifications_section_2 tr',
            'table.prodDetTable tr',
        ]

        for table_selector in tech_tables:
            rows = soup.select(table_selector)
            for row in rows:
                th = row.select_one('th')
                td = row.select_one('td')
                if th and td:
                    key = self.clean_text(th.get_text(strip=True))
                    value = self.clean_text(td.get_text(strip=True))
                    if key and value and key not in features:
                        features[key] = value

        # Detalles del producto (sección expandible)
        detail_sections = [
            '#productDetails_detailBullets_sections1 tr',
            '#detailBullets_feature_div li',
        ]

        for section_selector in detail_sections:
            items = soup.select(section_selector)
            for item in items:
                if 'tr' in section_selector:
                    th = item.select_one('th')
                    td = item.select_one('td')
                    if th and td:
                        key = self.clean_text(th.get_text(strip=True))
                        value = self.clean_text(td.get_text(strip=True))
                        if key and value and key not in features:
                            features[key] = value
                else:
                    spans = item.select('span span')
                    if len(spans) >= 2:
                        key = self.clean_text(spans[0].get_text(strip=True).rstrip(':'))
                        value = self.clean_text(spans[1].get_text(strip=True))
                        if key and value and key not in ['', ' '] and key not in features:
                            features[key] = value

        # Información adicional del producto
        info_rows = soup.select('#productDetails_db_sections tr')
        for row in info_rows:
            th = row.select_one('th')
            td = row.select_one('td')
            if th and td:
                key = self.clean_text(th.get_text(strip=True))
                value = self.clean_text(td.get_text(strip=True))
                if key and value and key not in features:
                    features[key] = value

        return features if features else None

    def extract_rating(self, soup):
        """Extrae la puntuación en estrellas"""
        rating_selectors = [
            '#acrPopover',
            'span.a-icon-alt',
            'i.a-icon-star span.a-icon-alt',
            '#averageCustomerReviews span.a-icon-alt',
            'div[data-hook="rating-out-of-text"]',
        ]

        for selector in rating_selectors:
            element = soup.select_one(selector)
            if element:
                text = self.clean_text(element.get('title') or element.get_text(strip=True))
                if text and ('de 5' in text or 'out of' in text or re.search(r'\d[,.]?\d?\s*(de|out)', text)):
                    return text
        return None

    def extract_review_count(self, soup):
        """Extrae el número total de reviews"""
        count_selectors = [
            '#acrCustomerReviewText',
            'span[data-hook="total-review-count"]',
            '#acrCustomerReviewLink span',
        ]

        for selector in count_selectors:
            element = soup.select_one(selector)
            if element:
                text = self.clean_text(element.get_text(strip=True))
                if text and re.search(r'\d', text):
                    return text
        return None

    def extract_reviews(self, soup):
        """Extrae los reviews más positivos"""
        reviews = []

        # Reviews en la página del producto
        review_elements = soup.select('[data-hook="review"], div.review')

        for review_el in review_elements[:10]:
            review = {}

            # Título del review
            title_selectors = [
                '[data-hook="review-title"] span:not(.a-icon-alt)',
                'a[data-hook="review-title"] span',
                '.review-title span'
            ]
            for sel in title_selectors:
                title_el = review_el.select_one(sel)
                if title_el:
                    review['titulo'] = self.clean_text(title_el.get_text(strip=True))
                    break

            # Puntuación del review
            rating_selectors = [
                '[data-hook="review-star-rating"] span.a-icon-alt',
                '[data-hook="cmps-review-star-rating"] span.a-icon-alt',
                'i.review-rating span.a-icon-alt'
            ]
            for sel in rating_selectors:
                rating_el = review_el.select_one(sel)
                if rating_el:
                    review['estrellas'] = self.clean_text(rating_el.get_text(strip=True))
                    break

            # Texto del review
            body_selectors = [
                '[data-hook="review-body"] span',
                '.review-text span',
                '.review-text-content span'
            ]
            for sel in body_selectors:
                body_el = review_el.select_one(sel)
                if body_el:
                    review['contenido'] = self.clean_text(body_el.get_text(strip=True))
                    break

            # Autor
            author_el = review_el.select_one('.a-profile-name')
            if author_el:
                review['autor'] = self.clean_text(author_el.get_text(strip=True))

            # Fecha
            date_el = review_el.select_one('[data-hook="review-date"]')
            if date_el:
                review['fecha'] = self.clean_text(date_el.get_text(strip=True))

            if review.get('contenido'):
                reviews.append(review)

        # Ordenar por estrellas (más positivos primero)
        def get_stars(r):
            stars_text = r.get('estrellas', '0')
            match = re.search(r'(\d+[,.]?\d*)', stars_text)
            if match:
                return float(match.group(1).replace(',', '.'))
            return 0

        reviews.sort(key=get_stars, reverse=True)
        return reviews[:3]

    def extract_images(self, soup):
        """Extrae solo las URLs de las imágenes principales del producto (galería)"""
        images = []

        # Buscar en todos los scripts
        scripts = soup.find_all('script')
        for script in scripts:
            if not script.string:
                continue

            script_text = script.string

            # Método 1: Buscar colorImages con initial
            if 'colorImages' in script_text:
                # Buscar todas las URLs hiRes dentro de colorImages
                # Primero encontrar el bloque colorImages
                color_match = re.search(r'colorImages["\']?\s*:\s*\{[^}]*["\']?initial["\']?\s*:\s*\[([^\]]+)\]', script_text, re.DOTALL)
                if color_match:
                    block = color_match.group(1)
                    hi_res_urls = re.findall(r'["\']hiRes["\']\s*:\s*["\']([^"\']+)["\']', block)
                    for url in hi_res_urls:
                        if url and url.startswith('http') and url not in images:
                            images.append(url)

            # Método 2: Buscar imageGalleryData
            if 'imageGalleryData' in script_text:
                hi_res_urls = re.findall(r'["\']mainUrl["\']\s*:\s*["\']([^"\']+)["\']', script_text)
                for url in hi_res_urls:
                    if url and url.startswith('http') and url not in images:
                        images.append(url)

        # Método 3: Extraer del atributo data-a-dynamic-image de la imagen principal
        main_img = soup.select_one('#landingImage, #imgBlkFront')
        if main_img:
            dynamic_data = main_img.get('data-a-dynamic-image')
            if dynamic_data:
                try:
                    img_dict = json.loads(dynamic_data)
                    # Ordenar por resolución (mayor primero) y tomar las mejores
                    sorted_imgs = sorted(img_dict.items(), key=lambda x: x[1][0] * x[1][1] if isinstance(x[1], list) else 0, reverse=True)
                    for url, _ in sorted_imgs[:1]:  # Solo la imagen principal en alta res
                        if url and url not in images:
                            images.insert(0, url)
                except (json.JSONDecodeError, TypeError):
                    pass

            # Fallback a data-old-hires o src
            if not images:
                src = main_img.get('data-old-hires') or main_img.get('src')
                if src and 'amazon' in src:
                    high_res = re.sub(r'\._[A-Z]+\d+_\.', '.', src)
                    if high_res not in images:
                        images.append(high_res)

        # Método 4: Buscar en los thumbnails de la galería
        if not images:
            thumbs = soup.select('#altImages li.item img, #imageBlock li img')
            for thumb in thumbs:
                src = thumb.get('src', '')
                if src and 'amazon' in src and '.jpg' in src.lower():
                    # Convertir thumbnail a imagen grande
                    high_res = re.sub(r'\._[A-Z]+\d+_\.', '._SL1500_.', src)
                    high_res = re.sub(r'\._[A-Z]+\d+,\d+_\.', '._SL1500_.', high_res)
                    if 'sprite' not in high_res and 'icon' not in high_res and high_res not in images:
                        images.append(high_res)

        # Filtrar: solo imágenes válidas del producto
        valid_images = []
        seen = set()
        for img in images:
            if not img or img in seen:
                continue
            # Debe ser de Amazon y no ser contenido de marketing
            if 'images-amazon' in img or 'images-eu' in img or 'm.media-amazon' in img:
                if '/aplus/' not in img and '/editorial/' not in img and 'sprite' not in img:
                    valid_images.append(img)
                    seen.add(img)

        return valid_images

    def download_images(self, image_urls, output_folder):
        """Descarga las imágenes a la carpeta especificada"""
        os.makedirs(output_folder, exist_ok=True)
        downloaded = []

        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://www.amazon.es/'
        }

        for i, url in enumerate(image_urls, 1):
            try:
                response = requests.get(url, headers=headers, timeout=30)
                response.raise_for_status()

                # Determinar extensión
                ext = '.jpg'
                if '.png' in url.lower():
                    ext = '.png'

                filename = f"imagen_{i:02d}{ext}"
                filepath = os.path.join(output_folder, filename)

                with open(filepath, 'wb') as f:
                    f.write(response.content)

                downloaded.append(filename)
                print(f"  Descargada: {filename} ({len(response.content) / 1024:.1f} KB)")
                time.sleep(0.5)

            except Exception as e:
                print(f"  Error descargando imagen {i}: {e}")

        return downloaded

    def scrape_product(self, url):
        """Función principal que extrae toda la información del producto"""
        print(f"\nObteniendo información del producto...")
        print(f"URL: {url}\n")

        # Asegurar que la URL tiene el protocolo
        if not url.startswith('http'):
            url = 'https://' + url

        soup = self.get_page(url)
        if not soup:
            print("No se pudo obtener la página.")
            return None

        product_id = self.extract_product_id(url)
        print(f"ID del producto: {product_id}")

        # Extraer toda la información
        data = {
            'id_producto': product_id,
            'url': url,
            'titulo': self.extract_title(soup),
            'precio': self.extract_price(soup),
            'descripcion': self.extract_description(soup),
            'caracteristicas': self.extract_features(soup),
            'puntuacion': self.extract_rating(soup),
            'numero_reviews': self.extract_review_count(soup),
            'reviews_positivos': self.extract_reviews(soup),
        }

        print(f"Título: {data['titulo']}")
        print(f"Precio: {data['precio']}")
        print(f"Puntuación: {data['puntuacion']}")
        print(f"Número de reviews: {data['numero_reviews']}")

        # Extraer y descargar imágenes
        print("\nExtrayendo imágenes...")
        image_urls = self.extract_images(soup)
        print(f"Encontradas {len(image_urls)} imágenes")

        if image_urls:
            folder_name = f"producto_{product_id}" if product_id else "producto_imagenes"
            output_folder = os.path.join(os.getcwd(), folder_name)

            print(f"\nDescargando imágenes en: {output_folder}")
            downloaded = self.download_images(image_urls, output_folder)
            data['imagenes_descargadas'] = downloaded
            data['carpeta_imagenes'] = output_folder
        else:
            data['imagenes_descargadas'] = []
            data['carpeta_imagenes'] = None

        # Guardar en JSON
        json_filename = f"producto_{product_id}.json" if product_id else "producto_info.json"
        with open(json_filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        print(f"\nInformación guardada en: {json_filename}")

        return data


def process_txt_file(txt_path: str, scraper: AmazonScraper, output_base: str = None):
    """Lee URLs de un archivo .txt y ejecuta el scraper para cada URL.
    Luego organiza los resultados moviendo JSONs e imágenes a una carpeta por archivo .txt.
    """
    txt_name = os.path.splitext(os.path.basename(txt_path))[0]
    target_folder = os.path.join(output_base or os.getcwd(), txt_name)
    os.makedirs(target_folder, exist_ok=True)

    with open(txt_path, 'r', encoding='utf-8') as f:
        lines = [l.strip() for l in f.readlines() if l.strip()]

    if not lines:
        print(f"Archivo {txt_path} no contiene URLs.")
        return

    for i, url in enumerate(lines, start=1):
        print('\n' + '=' * 60)
        print(f"Procesando URL #{i} del archivo {txt_path}: {url}")
        try:
            result = scraper.scrape_product(url)
        except Exception as e:
            print(f"Error scraping {url}: {e}")
            continue

        # Mover archivos resultantes (JSON y carpeta de imágenes) a la carpeta del txt
        # JSON esperado: producto_{id}.json o producto_info.json
        prod_id = result.get('id_producto') if result else None
        possible_jsons = []
        if prod_id:
            possible_jsons.append(os.path.join(os.getcwd(), f"producto_{prod_id}.json"))
        possible_jsons.append(os.path.join(os.getcwd(), "producto_info.json"))

        for json_path in possible_jsons:
            if os.path.exists(json_path):
                try:
                    shutil.move(json_path, os.path.join(target_folder, os.path.basename(json_path)))
                except Exception as e:
                    print(f"No se pudo mover {json_path} -> {target_folder}: {e}")

        # Mover carpeta de imágenes si existe
        carpeta_imgs = result.get('carpeta_imagenes') if result else None
        if carpeta_imgs and os.path.exists(carpeta_imgs):
            try:
                dest = os.path.join(target_folder, os.path.basename(carpeta_imgs))
                # Si ya existe, generar sufijo
                if os.path.exists(dest):
                    dest = dest + f"_{int(time.time())}"
                shutil.move(carpeta_imgs, dest)
            except Exception as e:
                print(f"No se pudo mover la carpeta de imágenes {carpeta_imgs} -> {target_folder}: {e}")

    print(f"\nProcesado archivo: {txt_path}. Resultados en: {target_folder}")


def process_folder(folder_path: str, scraper: AmazonScraper, output_base: str = None):
    """Busca todos los .txt en la carpeta y los procesa uno por uno."""
    txt_files = [os.path.join(folder_path, f) for f in os.listdir(folder_path) if f.lower().endswith('.txt')]
    if not txt_files:
        print(f"No se han encontrado archivos .txt en {folder_path}")
        return

    for txt in sorted(txt_files):
        process_txt_file(txt, scraper, output_base=output_base)


def main(url: str = None):
    if url is None:
        if len(sys.argv) < 2:
            print("Uso: python main.py <url_amazon|archivo.txt|carpeta_con_txt>")
            print("\nEjemplos:")
            print('python main.py "https://www.amazon.es/dp/B09L5LDMW2"')
            print('python main.py "mis_productos.txt"')
            print('python main.py "carpeta_con_txt"')

            url = input("\nO introduce la URL / archivo / carpeta: ").strip()
            if not url:
                print("No se proporcionó entrada. Saliendo.")
                return None
        else:
            url = sys.argv[1]

    scraper = AmazonScraper(headless=True)
    try:
        # Si es carpeta, procesar todos los .txt dentro
        if os.path.isdir(url):
            process_folder(url, scraper)
            return None

        # Si es archivo .txt, procesar las URLs dentro
        if os.path.isfile(url) and url.lower().endswith('.txt'):
            process_txt_file(url, scraper)
            return None

        # En otro caso, asumir que es una URL y scrape sola
        result = scraper.scrape_product(url)

        if result:
            print("\n" + "=" * 50)
            print("RESUMEN DEL PRODUCTO")
            print("=" * 50)
            print(f"Título: {result.get('titulo', 'N/A')}")
            print(f"Precio: {result.get('precio', 'N/A')}")
            print(f"Puntuación: {result.get('puntuacion', 'N/A')}")
            print(f"Total reviews: {result.get('numero_reviews', 'N/A')}")
            print(f"Imágenes descargadas: {len(result.get('imagenes_descargadas', []))}")

            if result.get('caracteristicas'):
                print(f"\nCaracterísticas encontradas: {len(result['caracteristicas'])}")

            if result.get('reviews_positivos'):
                print(f"\nTop {len(result['reviews_positivos'])} reviews más positivos:")
                for i, review in enumerate(result['reviews_positivos'], 1):
                    print(f"\n  {i}. {review.get('titulo', 'Sin título')}")
                    print(f"     Estrellas: {review.get('estrellas', 'N/A')}")
                    print(f"     Autor: {review.get('autor', 'Anónimo')}")
                    contenido = review.get('contenido', '')[:200]
                    if len(review.get('contenido', '')) > 200:
                        contenido += '...'
                    print(f"     {contenido}")

        return result
    finally:
        scraper.close()


if __name__ == "__main__":
    main()

# python
import re
import time
import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
import random

CONSTANTS_FILE = "constants.ts"

def get_random_user_agent():
    try:
        ua = UserAgent()
        return ua.random
    except:
        return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

def get_amazon_price(url):
    print(f"Scraping {url}...")
    headers = {
        "User-Agent": get_random_user_agent(),
        "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Referer": "https://www.google.com/"
    }

    try:
        session = requests.Session()
        response = session.get(url, headers=headers, timeout=10)

        if response.status_code != 200:
            print(f"Failed to fetch {url}: Status {response.status_code}")
            return None

        soup = BeautifulSoup(response.content, 'html.parser')

        price_whole = soup.find(class_="a-price-whole")
        price_fraction = soup.find(class_="a-price-fraction")

        if price_whole:
            whole = price_whole.get_text(strip=True).replace('.', '').replace(',', '')
            fraction = "00"
            if price_fraction:
                fraction = price_fraction.get_text(strip=True).replace('.', '').replace(',', '')
            try:
                final_price = float(f"{whole}.{fraction}")
                print(f"Found price: {final_price}")
                return final_price
            except Exception:
                pass

        price_span = soup.find("span", class_="a-offscreen")
        if price_span:
            price_text = price_span.get_text(strip=True)
            clean_price = price_text.replace('€', '').replace('$', '').strip()
            # Normalize thousand/decimal separators
            if ',' in clean_price and '.' in clean_price:
                if clean_price.find(',') > clean_price.find('.'):
                    clean_price = clean_price.replace('.', '').replace(',', '.')
                else:
                    clean_price = clean_price.replace(',', '')
            elif ',' in clean_price:
                clean_price = clean_price.replace(',', '.')
            try:
                final_price = float(clean_price)
                print(f"Found price (fallback): {final_price}")
                return final_price
            except ValueError:
                pass

        print("Could not find price on page.")
        return None

    except Exception as e:
        print(f"Error scraping {url}: {e}")
        return None

def _find_matching_brace(content, open_pos):
    depth = 0
    for i in range(open_pos, len(content)):
        c = content[i]
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0:
                return i
    return -1

def _normalize_price_str(s):
    s = s.strip().replace(' ', '').replace("'", "")
    if ',' in s and '.' in s:
        if s.find(',') > s.find('.'):
            s = s.replace('.', '').replace(',', '.')
        else:
            s = s.replace(',', '')
    elif ',' in s:
        s = s.replace(',', '.')
    return s

def update_single_price(url, new_price):
    try:
        with open(CONSTANTS_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        return False

    escaped_url = re.escape(url)
    match = re.search(r'url:\s*"' + escaped_url + r'"', content)

    if not match:
        print(f"URL {url} not found in file during update phase.")
        return False

    start_index = match.start()
    obj_start = content.rfind('{', 0, start_index)
    if obj_start == -1:
        return False

    obj_end = _find_matching_brace(content, obj_start)
    if obj_end == -1:
        return False

    object_text = content[obj_start:obj_end+1]

    price_pattern = r'(\bprice:\s*)([\d\.,]+)'
    price_match = re.search(price_pattern, object_text)

    if price_match:
        old_price_str = price_match.group(2)
        norm_old = _normalize_price_str(old_price_str)
        try:
            old_price = float(norm_old)
        except:
            old_price = None

        # Consider change only if difference is significant
        if old_price is not None and abs(old_price - new_price) < 0.005:
            return False  # No change needed

        new_price_str = f"{new_price:.2f}"
        new_object_text = re.sub(r'\bprice:\s*[\d\.,]+', f'price: {new_price_str}', object_text, count=1)

        new_content = content[:obj_start] + new_object_text + content[obj_end+1:]

        with open(CONSTANTS_FILE, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully updated file for {url}")
        return True

    return False

def update_prices():
    try:
        with open(CONSTANTS_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"File {CONSTANTS_FILE} not found.")
        return

    url_matches = list(re.finditer(r'url:\s*"(https?://[^"]+)"', content))
    found_urls = [m.group(1) for m in url_matches if "amzn.to" in m.group(1) or "amazon." in m.group(1)]

    print(f"Found {len(found_urls)} Amazon URLs.")

    for url in found_urls:
        new_price = get_amazon_price(url)
        if new_price is not None:
            update_single_price(url, new_price)
            time.sleep(random.uniform(1, 2))

if __name__ == "__main__":
    update_prices()

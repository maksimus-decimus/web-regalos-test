import re
import os

def parse_padres(content):
    products = []
    lines = content.splitlines()
    i = 0
    id_counter = 201
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        
        # Match "1. Title"
        match = re.match(r'^\d+\.\s+(.+)', line)
        if match:
            title = match.group(1)
            # Next non-empty line is URL
            i += 1
            while i < len(lines) and not lines[i].strip():
                i += 1
            url = lines[i].strip() if i < len(lines) else ""
            
            products.append({
                "id": id_counter,
                "categoryId": 2,
                "title": title,
                "price": 0,
                "category": "Varios",
                "image": "https://placehold.co/600x400",
                "url": url,
                "description": title
            })
            id_counter += 1
        i += 1
    return products

def parse_madres(content):
    products = []
    lines = content.splitlines()
    i = 0
    id_counter = 301
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
            
        # Title usually has " – " separator
        if " – " in line:
            parts = line.split(" – ", 1)
            title = parts[0]
            desc = parts[1]
        else:
            title = line
            desc = line
            
        # Next line is URL
        i += 1
        while i < len(lines) and not lines[i].strip():
            i += 1
        url = lines[i].strip() if i < len(lines) else ""
        
        products.append({
            "id": id_counter,
            "categoryId": 3,
            "title": title,
            "price": 0,
            "category": "Varios",
            "image": "https://placehold.co/600x400",
            "url": url,
            "description": desc
        })
        id_counter += 1
        i += 1
    return products

def parse_ninos(content):
    products = []
    lines = content.splitlines()
    i = 0
    id_counter = 401
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
            
        # Match "1: Title"
        match = re.match(r'^\d+:\s+(.+)', line)
        if match:
            title = match.group(1)
            i += 1
            category = lines[i].strip() if i < len(lines) else "Varios"
            
            # Skip empty lines to URL
            i += 1
            while i < len(lines) and not lines[i].strip():
                i += 1
            url = lines[i].strip() if i < len(lines) else ""
            
            products.append({
                "id": id_counter,
                "categoryId": 4,
                "title": title,
                "price": 0,
                "category": category,
                "image": "https://placehold.co/600x400",
                "url": url,
                "description": f"{title} - {category}"
            })
            id_counter += 1
        i += 1
    return products

def parse_ninas(content):
    products = []
    lines = content.splitlines()
    i = 0
    id_counter = 501
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
            
        # Match "1. Title"
        if line.startswith("Para niñas:"):
            i += 1
            continue

        match = re.match(r'^\d+\.\s+(.+)', line)
        if match:
            title = match.group(1)
            i += 1
            category = lines[i].strip() if i < len(lines) else "Varios"
             # Skip empty lines to URL
            i += 1
            while i < len(lines) and not lines[i].strip():
                i += 1
            url = lines[i].strip() if i < len(lines) else ""
            
            products.append({
                "id": id_counter,
                "categoryId": 5,
                "title": title,
                "price": 0,
                "category": category,
                "image": "https://placehold.co/600x400",
                "url": url,
                "description": f"{title} - {category}"
            })
            id_counter += 1
        i += 1
    return products

def to_ts(products):
    res = ""
    for p in products:
        res += "    {\n"
        res += f"        id: {p['id']},\n"
        res += f"        categoryId: {p['categoryId']},\n"
        res += f"        title: \"{p['title']}\",\n"
        res += f"        price: {p['price']},\n"
        res += f"        category: \"{p['category']}\",\n"
        res += f"        image: \"{p['image']}\",\n"
        res += f"        url: \"{p['url']}\",\n"
        res += f"        description: \"{p['description']}\"\n"
        res += "    },\n"
    return res

base_path = r"c:\Users\maxyf\Desktop\Cole\practicas\web-regalos-test\productos_afiliados"

with open(os.path.join(base_path, "afiliados_padres.txt"), "r", encoding="utf-8") as f:
    print("// PADRES")
    print(to_ts(parse_padres(f.read())))

with open(os.path.join(base_path, "afiliados_madres.txt"), "r", encoding="utf-8") as f:
    print("// MADRES")
    print(to_ts(parse_madres(f.read())))

with open(os.path.join(base_path, "afiliados_niños.txt"), "r", encoding="utf-8") as f:
    print("// NIÑOS")
    print(to_ts(parse_ninos(f.read())))

with open(os.path.join(base_path, "afiliados_niñas.txt"), "r", encoding="utf-8") as f:
    print("// NIÑAS")
    print(to_ts(parse_ninas(f.read())))

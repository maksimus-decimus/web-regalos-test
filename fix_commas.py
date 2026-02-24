
import re

file_path = 'constants.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Check if line contains "price:" and a number, but no comma at the end
    # We look for lines that look like: "        price: 95.28" or "        price: 249"
    # and strictly do NOT end with a comma (ignoring whitespace)
    
    # Regex explanation:
    # ^\s*          : Start with optional whitespace
    # price:        : Literal "price:"
    # \s*           : Optional whitespace
    # \d+(\.\d+)?   : A number (integer or float)
    # \s*           : Optional trailing whitespace (but NO comma)
    # $             : End of string (ignoring the newline character which strip() handles or we handle manually)
    
    # Check using strip to remove newline and indentation for easier checking
    stripped = line.strip()
    
    if stripped.startswith('price:') and not stripped.endswith(','):
        # Verify it looks like a number
        # split by ':'
        parts = stripped.split(':')
        if len(parts) == 2:
            val = parts[1].strip()
            # check if val is a number
            try:
                float(val)
                # It is a number, and missing comma
                line = line.rstrip() + ',\n'
            except ValueError:
                pass # not a simple number, maybe expression? leave it.

    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Fixed commas in constants.ts")

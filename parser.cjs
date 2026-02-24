const fs = require('fs');
const path = require('path');

const basePath = "c:\\Users\\maxyf\\Desktop\\Cole\\practicas\\web-regalos-test\\productos_afiliados";

function parsePadres(content) {
    const products = [];
    const lines = content.split(/\r?\n/);
    let i = 0;
    let idCounter = 201;

    while (i < lines.length) {
        let line = lines[i].trim();
        if (!line) {
            i++;
            continue;
        }

        const match = line.match(/^\d+\.\s+(.+)/);
        if (match) {
            const title = match[1];
            i++;
            while (i < lines.length && !lines[i].trim()) i++;
            const url = i < lines.length ? lines[i].trim() : "";

            products.push({
                id: idCounter++,
                categoryId: 2,
                title: title,
                price: 0,
                category: "Varios",
                image: "https://placehold.co/600x400",
                url: url,
                description: title
            });
        }
        i++;
    }
    return products;
}

function parseMadres(content) {
    const products = [];
    const lines = content.split(/\r?\n/);
    let i = 0;
    let idCounter = 301;

    while (i < lines.length) {
        let line = lines[i].trim();
        if (!line) {
            i++;
            continue;
        }

        let title, desc;
        if (line.includes(" – ")) {
            const parts = line.split(" – ");
            title = parts[0];
            desc = parts[1];
        } else {
            title = line;
            desc = line;
        }

        i++;
        while (i < lines.length && !lines[i].trim()) i++;
        const url = i < lines.length ? lines[i].trim() : "";

        products.push({
            id: idCounter++,
            categoryId: 3,
            title: title,
            price: 0,
            category: "Varios",
            image: "https://placehold.co/600x400",
            url: url,
            description: desc
        });
        i++;
    }
    return products;
}

function parseNinos(content) {
    const products = [];
    const lines = content.split(/\r?\n/);
    let i = 0;
    let idCounter = 401;

    while (i < lines.length) {
        let line = lines[i].trim();
        if (!line) {
            i++;
            continue;
        }

        const match = line.match(/^\d+:\s+(.+)/);
        if (match) {
            const title = match[1];
            i++;
            const category = i < lines.length ? lines[i].trim() : "Varios";

            i++;
            while (i < lines.length && !lines[i].trim()) i++;
            const url = i < lines.length ? lines[i].trim() : "";

            products.push({
                id: idCounter++,
                categoryId: 4,
                title: title,
                price: 0,
                category: category || "Varios",
                image: "https://placehold.co/600x400",
                url: url,
                description: `${title} - ${category}`
            });
        }
        i++;
    }
    return products;
}

function parseNinas(content) {
    const products = [];
    const lines = content.split(/\r?\n/);
    let i = 0;
    let idCounter = 501;

    while (i < lines.length) {
        let line = lines[i].trim();
        if (!line) {
            i++;
            continue;
        }

        if (line.startsWith("Para niñas:")) {
            i++;
            continue;
        }

        const match = line.match(/^\d+\.\s+(.+)/);
        if (match) {
            const title = match[1];
            i++;
            const category = i < lines.length ? lines[i].trim() : "Varios";

            i++;
            while (i < lines.length && !lines[i].trim()) i++;
            const url = i < lines.length ? lines[i].trim() : "";

            products.push({
                id: idCounter++,
                categoryId: 5,
                title: title,
                price: 0,
                category: category || "Varios",
                image: "https://placehold.co/600x400",
                url: url,
                description: `${title} - ${category}`
            });
        }
        i++;
    }
    return products;
}

function toTS(products, label) {
    let res = "";
    res += `    // ------------------------------------------------------------------------\n`;
    res += `    // CATEGORÍA: ${label}\n`;
    res += `    // ------------------------------------------------------------------------\n\n`;

    for (const p of products) {
        res += "    {\n";
        res += `        id: ${p.id},\n`;
        res += `        categoryId: ${p.categoryId},\n`;
        res += `        title: ${JSON.stringify(p.title)},\n`;
        res += `        price: ${p.price},\n`;
        res += `        category: ${JSON.stringify(p.category)},\n`;
        res += `        image: ${JSON.stringify(p.image)},\n`;
        res += `        url: ${JSON.stringify(p.url)},\n`;
        res += `        description: ${JSON.stringify(p.description)}\n`;
        res += "    },\n";
    }
    return res;
}

try {
    const padres = parsePadres(fs.readFileSync(path.join(basePath, "afiliados_padres.txt"), 'utf8'));
    const madres = parseMadres(fs.readFileSync(path.join(basePath, "afiliados_madres.txt"), 'utf8'));
    const ninos = parseNinos(fs.readFileSync(path.join(basePath, "afiliados_niños.txt"), 'utf8'));
    const ninas = parseNinas(fs.readFileSync(path.join(basePath, "afiliados_niñas.txt"), 'utf8'));

    const output =
        toTS(padres, "REGALOS PARA PADRES (categoryId: 2)") +
        toTS(madres, "REGALOS PARA MADRES (categoryId: 3)") +
        toTS(ninos, "REGALOS PARA NIÑOS (categoryId: 4)") +
        toTS(ninas, "REGALOS PARA NIÑAS (categoryId: 5)");

    fs.writeFileSync(path.join(basePath, "..", "products_output.txt"), output);

} catch (e) {
    console.error(e);
}

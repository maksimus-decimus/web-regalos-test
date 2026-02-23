import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
    {
        id: 2,
        title: "Regalos para Padres",
        subtitle: "Especiales",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDeZpMvuR6vGOQhU9J3RX1p81f7U6R0DP9UHIrJxoXqMbc6ymv5No2rpt23eMg1pB-o9ibVg5Eg0ONPtCg0LIZa36NoX1Nz5SIakmSTCylwk45hYcqKvsbOPcPq7H7HTRHuqg5uRyJt7kYhkpbwKXXRF9a29F16JgfHjwq5_dz3BjPJfVweZnJENCWWJbkGYTTgHqEH__X6sVSEdy7zBTeQp29C0Z1Y7qYEgVt0pLt_Tnt8ElcFgagV_SnrJK567xD9cO7t4oaoXSM",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC5J0Nu7h6ujGQsDGMuJfH702zCH4-Pwz5GkztTwB3QvmCGbxEgIN2CROXe2jVqH1Ake11LT30B8yoxgZCopiZZX_ywHOr4JDyGiezZXXSu3It01PfjVDA-SM65edKo-2VRNAc_wBXAOY6GNOKHhrODZzKj-LxHLSlJtFhZqBb5PdxsAJwfw0fDNYrNmEax3TZuhsaVX7IoyoBgb59mOXym9YdIGsNTlel5GZa4ZEeacFnY_6cSuzrtUfCsS1Q-DKT_L57jZiX6ebg",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDMp8AByd85FzeDI86epdTFOM94bDjYmcBSoM81UNP7D3mqMUOI7vUMTXKCh_aeumOa2_drjOM437FZ-xwtnNR5eN3Irqw9fQ80txfwpCnl--gFJ4GxayVWDQnkmBhsucL_OxQlhDoqsr84IDFcNrAqoDCxilXrb2sT9FI4hJO0-F6gxMxaUGlJ4Mzr1sfn0Nj6smqFTOUPtQ1YI93qInebnlXGKYEKlsEJRsoWiMKBcnGnf8VixhSI-olUnDuMfl-OTZD-Zyt0ZWQ"
        ]
    },
    {
        id: 3,
        title: "Regalos para Madres",
        subtitle: "Para Ella",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD6XynrWSAW6YzOBDFzI_WG06wlAVkbyD0f1XGDhaFlJkReH--TUWDBpIHnF4bCxqOA5aFnf-RByUM4BDeknkxio0IxhJG0hI0ye0aTgF2XBP-uueGK7UcNoX1u49aKMNL9bYSI6Tw1aCkqqa35Nz0QCAXzFfiS2-quToR9gfAipqIqOc18rvJfTXmuIPgNfuo7779fmeywW7EQKFFK95FANrYitH4lOpG4_es6lE3dOXzrCmIqZ-1VTaIIlmMT_8r1kWYzXyqLSVI",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDZTU2PPZXKEiWjeScFnUu4M80ybGM5Ob7wkfTw2DUzGTD5q_04rhqEnDuv9F-j-81vKEMwPZnXYiV-1RqMFeEL4naK6mA9kywCCeWW4C4ORK3BHW6Wpa7d0mK9D81ZQ9XI2Vs1dUunNnEwPOElQYvNGBtvKG2AfB2aw79epP2bOviitKtmJ491UMm8D5erCxLUbdSLg1dmDIyYYRGUzDxymZNNDTmIwyJ2i71HvRGKqS3gFoA8wxtI0Wn6fmzm3YBpTw1wFRrijMc",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAAR68Kr6HPNAl6Z4L_AwNrStiur7jmjc0xGM6wIDQEh8aUU7O_DvK8ktCjwC_SkyU3Jwu_2UiM6T-j0Zh0RU7QB1NNPpIVY004xLBrATKA1OMJoVgVEp5KIHOJT0w_2grr5FzN_nRtoccIWyEELul0ffib6JIpnQEwGsDLaDBh54Kf4qATQ5n3kgqT3Q5-mfiv3CzvoarT1txt1bLv9RmGUtM_shul_m6Xv3-tgPlDPlPTuFtqjrfDRlkek4NKNIPo9L3B11YOe1Q"
        ]
    },
    {
        id: 4,
        title: "Regalos para Niños",
        subtitle: "Aventuras",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA7vwjQS3xo75FXODFG97dxwgq8GzUrOVRKj1K3CRKFG5Had7Ml5TQDCBCVoFy74_dTzmY5vIAU-rAK3mQ9H92JpEPB9jp2CI-UcBGgd9E9FTdoHkVSMpH0syUvHeFFm1xXE_EuK5hdQqvtBYsZ68lG_FQciJNJbI0lINjG_MFjcqN8Fd_Gu2RcmsPSn2d7P048qQpwo74ew9fUR9o0olivEu2pavfNMxVVHlyCa1yNru_yQV0K9ECaDnf2NECffSj9pWwZRS9U8SM",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCyzcBJllL2YpRO2Ee2CiOlet8Vc3is8TZ3ov6XIb3u1Biln-bUVgWwakpuMZ_C7CBpftWWwJFdi2NHUavjHeS8h0k6EAghL6TzVKyP_DK7xSeGPhLCmeZCtcvkv6jZSIIlqLSxAN3pSTaF79SidufVa7IyTQOyHNkh0LN6dfqv808Ya11XnXDm6JBf7qPkvsrn_r_j6TscAYDapyK81REZ0ynpxGlOgCjVGdcd7GhdqqBa3HhETqBHyu_3rtSAgQ7OpktqIlEzvaY",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDR7j3wIHo2MbTE1JQ0U4P4BT3gr4dgMaVhAcaKM2nZypUKymi7GVOFcEeZ_vAP_PqX41ZOPTdEvl_ia488cSUuIJKYS0aOU_2TI2zpiCIpDZCTtFLLZhYsj_qK--VoUrErkCi5xsO0oXNlqedthXqghvxeKggsBruwT2jewHta2EacF4EpJVNiMWWM84rZp8NaQcRQNi3yZEm21TulW2Vxj1vd3ozgXUB1mZfxlhRNtebrTTn5iiuOsNyGEAECVeoRNbqVT_RIGU8"
        ]
    },
    {
        id: 5,
        title: "Regalos para Niñas",
        subtitle: "Imaginación",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDr010zdWNBFi_Gfr76vUna1x-tcNqpVYrN9t0-OMTSpIGpBOVb3BeJvC5WEtAecFMSOJCa-bj5H0J7YQSVAKCJQSJfGDG9nC-OcoiKPL2Vl8LHbFflzztxtQnJNiXao2nFeDa2Zxp7gPzE_YOuHCWvRDAs7Yi2QJDktJJ_imbmZHJiZr8ytCkxqRaRdduZDIz0W-rhwRYYfiqBojDCt-XsZAiswAMqEo3-BmZAs4boB8F6z9n-2OcLhidtpqp8WSnFmCYda_qUPdg",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDtJbDgBMRbSuRfuli5reM5fNU3FqdqoljoYIX0auaH8JT8YOTYufGPAEr1GWurFXuUID6Xx9EkSGvB_KCY6TA2pEwkjPS0-I0vFCy_DeggrRIKWnG_qb_8fha-X1iO86dvsWihwAmfy_z4uOSoI-hakcq4w3s8FFsgNiThZlxSvW4e-atxIuIT9x9Hct8002vwuldlSrItBU4den1dfv9d_5Q9w_C2bcUBhPmYE242CaaSFvcZ3bIA3KW4cWSiU1_43NjgJZCk5vc",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBcnEtjkqNu8wh_qzpesuqkhPLhQ-HQLD030OHtxJT__fey35w84ZmbxPuRWGT2aVrSbpi0CfBsxs_IhOeXUHwRy4oVMNUtDs74VTRGvyOPayX8HGY5fkGqsC_7Fo2pzdd4YWYheqhBrOSdKsF9RQzRW4p1UqRqcw9h_qDd-b8j50GKHQyxYbtVe9Jujru-Vk-WqzyM0ETSPz47m79C2KECIZ1ZY8mYNWfbyDCsq4W423I8sQmG_E6t4B9as7kwhpIIPNYPAHhP6t0"
        ]
    },
    {
        id: 6,
        title: "Tecnología 2025",
        subtitle: "Futuro",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCygOsmWJjMJPfHGfuZP64fV3PnkcvaotFyxYX2iEuarAQpCqyRiLRNCbRMMgGlhIWXDK3xVqvDllaBYGySnIIHAh9Mo6IXiKH-UaEgGT8Wcq9EG48eyOEB1oolyVZXU50mdSifW_IEBQzwAbnHNrtJ9s8O6WPDRlYlb7hsf04FcuLatr5Ie-5-ra2tZeGruLMCSbHZV51RoNdzs_Dcqfeuu3Y6cpXZt0QIp9jjN03wHYja3jNYi9uZLBW3OsW75vWF7oeZWp_DNjk",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB95I5g5kwB3RgzfM4qkw9zxxhlinYH9uNt2YAGm4cdC-z_NY4A_9POPmzFA5c17TI6TcKKwqJ5n8h8rQM-UYRyjbFL_R38l_gT97zLGpckwlFYNNvtO6y2FfjeL3MHUkNv7LAv3Dl5r3TvZY4MZDZ0Q3VdQ3av0cJwsAeIeCF07W9ahIRYs8E7Z6XjvVZo00WHXgJiAYniwL31tqUiJ7pYT5QcLtr-cyE-hCmbVkN8TM5-RQq9NhGACmQaHv143UI7i_mD3fNPvWw",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCTSNpW5tL-bx7Owz63idZNyxr-sirOvFnK7PO6jFEqxdjdbQnEa1IFB1Ji6R_C0uxeNcH9SY2l7h6shf6_KFWy8km1HYopgxcwkBaU0nNr6dnhDvLLSvXImOLCzYqNTlJHb38MwTWkHTco3D4u_w_ycKnvyT2XorxkqW-NpZhahbmZ73p66bHpNUwhzsLFTTv1CY5QsiXRZbR0_m43WmuthXOamC4HTpNiRG9FO3CXBOuE7F3Tg0qSbehoN94a9FXZ_J0CRTcK6zk"
        ]
    }
];

export const PRODUCTS: Product[] = [
    {
        id: 101,
        title: "Sony Noise Cancelling",
        price: 249,
        category: "Audio de alta fidelidad",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXldBulLBereMiPOpQAnLu-OAj6olyCFvVM7jcotBgwvXFS-HNRMSwEI8J6fEn-mIxwyWLe15AO64x1PLkI-HGOPAevvo5pMWwyg_EoRb5s8wLGoF9GfWO5cBInONlNIcblbEgxRk1usl550uQ_e8CNu_cS2rm3IKRkftX4qnKr4HJguPgwxPXsGUHS8F4K5UBmMk9FxtjvOubl5qFk6w9lfcG9zRGRpo0vdnSNMREOEd_fpWT4SxmlN4uGh-6Fg9cezH-DSsIjXo",
        tag: "Nuevo"
    },
    {
        id: 102,
        title: "Oculus Pro 2025",
        price: 499,
        category: "Realidad Virtual",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXCtUm34EVzf--NdEeWtXWM2Qx1X8jleHWZ_BwD0xj_9FCqt0mSdZEZGTZ6vJJnrKV49_br_O10P4F4ZvWSNZ5iFKAE_pE4QDiJoyxMpqxF1FPGiMxzTptrJaci1jJHlx2Xs249lFsYGzHr3VEX1RvdIqDgphAMmirg1sSQvMElW9vj2cBVQV9tMHDILnlnljm48VcQn8tZHyG0nYkqrGIElSqAioh7A2BXbn3jSBT5AWOp_gzDBzWP3XOoDW3OdOPm4R6KzBm7uU"
    },
    // ... Fathers and Mothers products remain ...
    {
        id: 201,
        categoryId: 2,
<<<<<<< Updated upstream
        title: "GUGGIARI Cartera de Hombre con Monedero y Tarjetero",
        subcategory: "Gadgets",
        price: 289.99,
        oldPrice: 349.00,
        category: "Accesorios",
        image: "/images/cartera.jpg",
        url: "https://amzn.to/4rYJsJM",
        description: "Cartera compacta con monedero y múltiples ranuras para tarjetas; diseño pensado para el día a día.",
        tag: "Más Vendido"
=======
        subcategory: "Estilo",
        seoCategory: "mejores-regalos",
        title: "TEMPUR Original Almohada cervical",
        price: 95.28,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B00UVQPD28/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B00UVQPD28?tag=sitio200181",
        description: "TEMPUR Original Almohada cervical"
>>>>>>> Stashed changes
    },
    {
        id: 202,
        categoryId: 2,
        title: "Tommy Hilfiger Reloj Analógico de Acero Inoxidable",
        subcategory: "Gadgets",
<<<<<<< Updated upstream
        price: 319.99,
        category: "Relojes",
        image: "/images/hombre2.jpg",
        url: "https://amzn.to/3YpHaGa",
        description: "Reloj clásico de acero con estilo atemporal y esfera analógica; ideal para uso diario o regalo."
=======
        seoCategory: "padres-deportistas",
        title: "Pistola de masaje muscular",
        price: 84.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B09QPGTLG8/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B09QPGTLG8?tag=sitio200181",
        description: "Pistola de masaje muscular",
        featured: true
>>>>>>> Stashed changes
    },
    {
        id: 203,
        categoryId: 2,
        subcategory: "Gadgets",
<<<<<<< Updated upstream
        title: "HP Prelude Mochila 15,6'' de Carga Superior",
        price: 129.99,
        oldPrice: 180.00,
        category: "Mochilas",
        image: "/images/hombre3.jpg",
        url: "https://amzn.to/3L1ZWjN",
        description: "Mochila ligera con compartimento para portátil de 15,6'' y organización práctica para trabajo o estudio.",
        discount: "-20%"
=======
        seoCategory: "padres-cocinitas",
        title: "Cecotec Freidora de Aire",
        price: 49.90,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0BPYVNW3L/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0BPYVNW3L?tag=sitio200181",
        description: "Cecotec Freidora de Aire",
        featured: true
>>>>>>> Stashed changes
    },
    {
        id: 204,
        categoryId: 2,
<<<<<<< Updated upstream
        title: "SkyRunner Drone 4K",
        price: 499.00,
        category: "Drones",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP-Om7UBSg7non487iB4gUIziD3Dbhz696herDB65xIr198dnC-sRX0fNkcCHPSxpZrECuGijuA33yOLGgvFG6oP5C33_GjkcbxksU-p5JSuXRvw89IGxnQhNJr7EQMG28F-JTrz0dwtn933GPVN2sU_8KuF_DRkI0wypO-8pXbe_8hSGYTpK4-pVYZMau266C8_HadgZ3c55IFd1HDftsmALPdSJWLGN8wbvUL8uxPXFLBkc-MtF2kMj0AJVWEJZfJm405R2H0yY"
=======
        subcategory: "Gadgets",
        seoCategory: "padres-deportistas",
        title: "Garmin Vívoactive 5",
        price: 185.50,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0CY2QBKNS/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0CY2QBKNS?tag=sitio200181",
        description: "Garmin Vívoactive 5",
        featured: true
    },
    {
        id: 205,
        categoryId: 2,
        subcategory: "Gadgets",
        seoCategory: "padres-frikis",
        title: "Kindle",
        price: 169.00,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0CFPXBJ9Y/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0CFPXBJ9Y?tag=sitio200181",
        description: "Kindle",
        featured: true
    },
    {
        id: 206,
        categoryId: 2,
        subcategory: "Gadgets",
        seoCategory: "gadgets",
        title: "OPPO Reno13",
        price: 367.26,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0DVH12PT3/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0DVH12PT3?tag=sitio200181",
        description: "OPPO Reno13",
        featured: true
    },
    {
        id: 207,
        categoryId: 2,
        subcategory: "Gadgets",
        seoCategory: "gadgets",
        title: "Cámara instantánea",
        price: 27.50,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B08H887HNJ/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B08H887HNJ?tag=sitio200181",
        description: "Cámara instantánea",
        featured: true
>>>>>>> Stashed changes
    },
    {
        id: 208,
        categoryId: 2,
<<<<<<< Updated upstream
        subcategory: "Experiencias",
        title: "Cata de Vinos Premium",
        price: 90.00,
        category: "Gourmet",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOKHq8Lu7uUc9YY0ha9qbMrNpc5u6JX2FDJ5s7dd1sf_PgMkNdCgoGZFDlWUFgA3bYGaE3jLBJO41lkcyt_J7DY-k3za96HPUUOWw5CKd2yRU9Tn5kqxFZs9WEUhi7091Xd6pAtdaFdwPqd3ZO9mZ1M3jjJIpnLUqMQ9KAHiWae9JE0rY1HXLPkXwb7sHK0Wi10kylzDCV8TyOwPHY6_8hK9pdu4jFGyJ8ePZFAsL0OM6Gn3Q7F3-FLwZG2AY9uWvI4NfgsdtjoUk"
=======
        subcategory: "Gadgets",
        seoCategory: "gadgets",
        title: "Xiaomi Redmi Pad Pro",
        price: 314.94,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0D31XB4ST/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0D31XB4ST?tag=sitio200181",
        description: "Xiaomi Redmi Pad Pro",
        featured: true
>>>>>>> Stashed changes
    },
    {
        id: 209,
        categoryId: 2,
<<<<<<< Updated upstream
        subcategory: "Experiencias",
        title: "Salto en Paracaídas",
        price: 250.00,
        category: "Aventura",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmg0HIW_-l-KBlM2Y3VxH_m_J32-EyK8E90lYashGgWaHeaIpLOO4nNMoM3W6rJNkSZUeR3HZd6f8g2p1bxxaARhZZzX8tE3Abru6ust8b507xi_UH65Am8o7euZZ7LQ8tRXnaUVwJZJ4fuJrEggB_-8v5NPidqd7lcqPzynXf8ZVMD3VHfOITUgD_Q3acBBCkxYLlE_Z_4tFjPIEWv4Kj8T956Zsr_sT8pelA3MM-C6AhBjfeGTHH0HWxc4ihTTCGrJrp0rpdF6Q"
=======
        subcategory: "Estilo",
        seoCategory: "regalos-baratos",
        title: "Taza",
        price: 8.95,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0DJPFRWPF/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0DJPFRWPF?tag=sitio200181",
        description: "Taza"
>>>>>>> Stashed changes
    },
    {
        id: 210,
        categoryId: 2,
<<<<<<< Updated upstream
        subcategory: "Experiencias",
        title: "Masterclass de Asado",
        price: 120.00,
        category: "Cocina",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUWOVHK6RvYeD0ktNmbkQy-CrjXviuy8mlwGNb3CXWLJKq8Cc_pGJvQ2SDSygZqPDXfGhf7goyemTOrs2i5fYWkYaeaOHAzG8S2F1RW9xbBXhW-8URbvCjoJBVr7lImJwo50R5LiRFP8Q0srJfTlHHlIy4FV78MBeSVqpTRzW1wCtv8wbmndTSso2a4aM0qjx-G8FJaKlPZ8UAmb8kMkSqh8CqcxCGR8tN6CyMHgLePBIHBsgUYzEo2g3YeU-OwCBILTd1cfkkq70"
=======
        subcategory: "Estilo",
        seoCategory: "kits-regalo-hombres",
        title: "Kit barba",
        price: 24.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B08GYDSD72/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B08GYDSD72?tag=sitio200181",
        description: "Kit barba"
>>>>>>> Stashed changes
    },
    {
        id: 211,
        categoryId: 2,
        subcategory: "Estilo",
<<<<<<< Updated upstream
        title: "Billetera de Cuero",
        price: 45.00,
        category: "Accesorios",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYpAi2XWZyTV6-1-MqVA_zKqjUBJYwogccxRqTsb_boLBN2bN8typEbFYFhCk8jghtvJb97RSli4Vs_0D5tlb1Gm23l5wYGgYnUY-QYL4cXSpDQKaA040T93A4LDuandVrrMKp43PebdpKziKWHXiPWGa8xDbawKzIMTr7WCKSen2JL_JKK9oGofAHzvvmnfmSYQlIfiWMwwmS3uA4LcU-OZYsKxRyFrngw-udzmXExc4iVYvUVka6LjIxqYwJ0TgIwYRNRKzPhLs"
=======
        seoCategory: "padres-elegantes",
        title: "Maquinilla Gillette",
        price: 18.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0DTTNGTP7/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0DTTNGTP7?tag=sitio200181",
        description: "Maquinilla Gillette"
>>>>>>> Stashed changes
    },
    {
        id: 212,
        categoryId: 2,
<<<<<<< Updated upstream
        subcategory: "Estilo",
        title: "Gafas Aviador",
        price: 120.00,
        category: "Accesorios",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRnTQlHpKUL74mLUzfUNcclifmI9nxdHvWCX5DmXZgOWMAIXRiNpiIey1ldTmQgec_jH6dHnEHu5IVP26PlGLj2J1573m2u_bRhXp5BS_ydhVZ6bTrBMlxQJe7AtAreQTTPc9AShXKiU40MgGsKIhuFm8iCoLsTYh9iqZm1qAnr-NQ8duh_IOnN7UdzZ4m0pqUQw54sVFifIcYQfAbKGy-fOvBesIyARWx1_O79mHlqLIvBvPXjTWjP69Fi-95e3RvmfeqHp6uwSA"
=======
        subcategory: "Experiencias",
        seoCategory: "experiencias",
        title: "Smartbox – 2 días con encanto",
        price: 69.90,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B07Z5LKRMF/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B07Z5LKRMF?tag=sitio200181",
        featured: true,
        description: "Smartbox – 2 días con encanto"
>>>>>>> Stashed changes
    },
    {
        id: 213,
        categoryId: 2,
        subcategory: "Estilo",
<<<<<<< Updated upstream
        title: "Corbata de Seda",
        price: 35.00,
        category: "Ropa",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2X2fUwxjJBDB48NK9i_daIoEA8bY0shqVHm0a1PhvcbRu8uCALC14cQQn9m4MYUdqYAyGlm38XkZZ5ATvZTyf1jTCFGib0cGg8Cp0IfRgZFCA3D_DqzMf0Kmi0Q0IDLvuASNYeLFmTTy4w8Bp8KU0VfsHhjTrlphIUur-6O9EpF2ljT_d50Kxasm7B9T5ol2V2iuYTb2HCPU3nhofE34DcuICg-DFxEWY08RBWmdxtSjOy-vAYgutrX0vfXcYWpt7UTpX507Z6Q8"
=======
        seoCategory: "regalos-personalizados",
        title: "Taza personalizada",
        price: 4.90,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B089GY91MH/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B089GY91MH?tag=sitio200181",
        description: "Taza personalizada"
>>>>>>> Stashed changes
    },
    {
        id: 214,
        categoryId: 2,
        subcategory: "Estilo",
<<<<<<< Updated upstream
        title: "Sneakers Urbanos",
        price: 89.00,
        category: "Calzado",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA833RtCR_iqzL-Akdw9IVhG27SIbwMrkvwvDTrGPGdgnZnJKsCgCUDrMjlsTBXF6lpNpebYMlUsXvYqyzFafju9myRPbrIUcCum_8y9m7TfzipOMZRdzuRLeVA7mJFRUtS7MRiuvJr3fQaQ1FGH3m3fgfDzSFeVuFyELIvEgGD8H4iy-CxDtABRY_sjraJmRFW67_YoX7WDcLstitjfEm4LEAhwt_aHGSS7vVnUoCEMt9YLKWVLgZHEL5f7QcK34WO0Ph9uUicR7I"
=======
        seoCategory: "regalos-personalizados",
        title: "Libro biografía papá",
        price: 15.10,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_8401022509/imagen_01.jpg",
        url: "https://www.amazon.es/dp/8401022509?tag=sitio200181",
        description: "Libro biografía papá"
>>>>>>> Stashed changes
    },
    {
        id: 215,
        categoryId: 2,
<<<<<<< Updated upstream
        subcategory: "Interes",
        title: "Historia del Mundo",
        price: 24.99,
        category: "Libros",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5kRs7GplRVxSl-0tSOS-8FRCT38hDK9QaH-f6qhQ2NuaZ8dpXtKvGhURhQNEfewfLPTzpGpVSWtSZL4C5U8Zzw6lJrpcIBCTQpTqZxqjm-j2fO-ZXA1iMs3gIMsRbY8L8Kl8IbGTYz1fFMkRhLqfQJn_yhU0yULfe6V4Gjb7wZsDziro5sa70QalUMwDtbObV04l3fY28t-UMoJKUbE4W7mIEWB2gmIJdFmyjJPsgKcfA0SjOgtt86uZx129XDQ8MIY3xWjV-dMY"
=======
        subcategory: "Estilo",
        seoCategory: "regalos-baratos",
        title: "Manta Día del Padre",
        price: 16.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0F14RWPT3/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0F14RWPT3?tag=sitio200181",
        description: "Manta Día del Padre"
>>>>>>> Stashed changes
    },
    {
        id: 216,
        categoryId: 2,
<<<<<<< Updated upstream
        subcategory: "Interes",
        title: "Kit Cerveza Artesanal",
        price: 59.99,
        category: "DIY",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq0yiAdz0oLMI2gfpk2-8sciJO9MPZt5jrxMpSIAu9hmR7GBGDhzp3_5cDfVGSU6GV9fSrm7TdhFFPvSQHT5UVcdcoekgSk8itGmz_q70pOnUoyPZuWHSJwydfnNiL10zgUi9pyDe1HgXtglmU5D6_l_fEbXtXaodS-2vELmhpeor3VeGF_nHIBgv-si9zn1mlhNhjbrEoOFeJUODXq1tXPB2seN7Imrj_JInMxhyliZ5EEtOxrOD9i-adZZ6UfW-7mQKPbs6rP70"
=======
        subcategory: "Gadgets",
        seoCategory: "gadgets",
        title: "Destornillador multipuntas",
        price: 25.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0D2HGJFL2/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0D2HGJFL2?tag=sitio200181",
        description: "Destornillador multipuntas"
>>>>>>> Stashed changes
    },
    {
        id: 217,
        categoryId: 2,
<<<<<<< Updated upstream
        subcategory: "Interes",
        title: "Cafetera Italiana",
        price: 40.00,
        category: "Cocina",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChn-wSNct87QKoOlZoXFuqmOu8uHJJVZugQhIHXN6Er3cD_oFsctkpCpEPzb_VS6gIwX9pQ4eah_gyIWzgsPMpQYK8IqMyvfPhkgnS9-AaoRDVisfixCUpUPfBrxxu3m1qfXXUsWLBYUpPnBnusMjoWL8QgqWDm2qqRbo-7jcxtoe6BozA_jVuRBy31qiL0wkFA3qZz7_ss5Dg3TWEDhlBArgrlKFTP415X3HlX2rysTKHhwtlbiuKxKkUwVYAHtxbvcca3YTzd9Y"
=======
        subcategory: "Gadgets",
        seoCategory: "gadgets",
        title: "Navaja multiusos",
        price: 19.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0BYRN75WT/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0BYRN75WT?tag=sitio200181",
        description: "Navaja multiusos"
>>>>>>> Stashed changes
    },
    {
        id: 218,
        categoryId: 2,
<<<<<<< Updated upstream
        subcategory: "Interes",
        title: "Set de Golf Básico",
        price: 299.00,
        category: "Deportes",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7Hu8AlkAHVmozV1FP3qS4R5a3NN5gLlt2DRoFPwcf_b87QU2S6lJbQu1aL_rAv1hBQ3nTewhODj00Q9zOV_bVRRGcvg1aJD2__njK9NrfBLvU2wivUnVniZkfsiArTQ38cDg0RmKuYXCyqEzEuxmYdZoMGs39guilS8tWm1LTBIiueL7tGw13Q0QxJvOk7H-NlnWRRm6tLN2-RNbh_G6BnKkCuHtNr0sspLXGOW8rJ2UpBQYJQLpsoG6d0zGB6rEom04vKZHY8uc"
=======
        subcategory: "Gadgets",
        seoCategory: "padres-frikis",
        title: "Tocadiscos",
        price: 139.00,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0BHT39Q3J/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0BHT39Q3J?tag=sitio200181",
        description: "Tocadiscos",
        featured: true
>>>>>>> Stashed changes
    },
    {
        id: 219,
        categoryId: 2,
<<<<<<< Updated upstream
        subcategory: "Interes",
        title: "Tocadiscos Vintage",
        price: 129.99,
        category: "Música",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUquggzKJBFWsPAyPdCBQ70BPnE6Kc_Ipug1o1M_QjmVHcD_OIKoTId2oYHSyCiL0BmMTjlG3zwdg1gS2Vg5cZg0KP7_EbmC4ioOzzo8gAOtvNnhHl4HoQ4VaSTqb36kEcoyuVVWWK779rflmje8G8Tm6SIFqHC6Th9-fQD10LRdG1hISTnpO_XflAp0iz1K65DEGjaCyda2l2mwaIlBx7kTjZ5VpU5Xy41XgTKmSYV_fzP1zu_194DkPJn-b-F5FeJb2xBAcjNlo"
=======
        subcategory: "Experiencias",
        seoCategory: "padres-cerveceros",
        title: "Set de whisky",
        price: 29.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0FL2GS63J/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0FL2GS63J?tag=sitio200181",
        description: "Set de whisky"
>>>>>>> Stashed changes
    },
    {
        id: 220,
        categoryId: 2,
<<<<<<< Updated upstream
        subcategory: "Interes",
        title: "Kit de Afeitado Lujo",
        price: 75.00,
        category: "Cuidado Personal",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsD2pbZDVsD6ydEdsqO2YyO5lVTE5suBhgFE8sdSMjoeRJLBYS0G6RBQac-TdXuERW5PAzXfaUDNCgBBaTM1Y5vReIZ2063BBUJ-tY4M6-peuNDPRpheeurvW7zKzSJPhsjxKicNUwm-FPgsXbNyKPBv3QLLGGeXw71h-TdGUrL92YunxDmk4tKy-bsAVZAM2Se3NGDJxcprtkAM5Ic7FqfNyojy8jwJzB3BcIID3LJDqxAs5NbQGu5WXRo4sDr09WG5C3lPjaEak"
=======
        subcategory: "Gadgets",
        seoCategory: "gadgets",
        title: "Altavoz Bluetooth portátil",
        price: 115.00,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0DXKNBQS6/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0DXKNBQS6?tag=sitio200181",
        description: "Altavoz Bluetooth portátil"
>>>>>>> Stashed changes
    },
    {
        id: 301,
        categoryId: 3,
        subcategory: "Belleza",
<<<<<<< Updated upstream
        title: "Skechers Keepsakes Pantuflas para Mujer",
        price: 79.99,
        category: "Calzado",
        image: "/images/mujer2.jpg",
        url: "https://amzn.to/48EyWA7",
        description: "Pantuflas acolchadas de estilo botín, cálidas y cómodas para el hogar."
=======
        title: "Set de Cuidado Facial QUIYUM",
        price: 29.79,
        category: "Varios",
        image: "/images/productos/B0DK5GFXPF.jpg",
        url: "https://www.amazon.es/QUIYUM-Cuidado-Regalo-Skincare-Limpiadora/dp/B0DK5GFXPF/?tag=sitio200181-21",
        description: "Kit completo de skincare con limpiadora y productos de cuidado personal.",
        featured: true
>>>>>>> Stashed changes
    },
    {
        id: 302,
        categoryId: 3,
<<<<<<< Updated upstream
        subcategory: "Belleza",
        title: "Loop Quiet Tapones para Oídos",
        price: 39.99,
        category: "Cuidado Personal",
        image: "/images/mujer3.jpg",
        url: "https://amzn.to/4iZ0VxU",
        description: "Tapones reutilizables y ultracómodos para reducir ruido y mejorar concentración y descanso."
=======
        subcategory: "Hogar",
        title: "Taza divertida para madres MUGFFINS",
        price: 12.95,
        category: "Varios",
        image: "/images/productos/B0FW28HGD7.jpg",
        url: "https://www.amazon.es/-/en/MUGFFINS-Siempre-Español-divertido-cumpleaños/dp/B0FW28HGD7/?tag=sitio200181-21",
        description: "Taza con mensaje en español, perfecta para sacar una sonrisa."
>>>>>>> Stashed changes
    },
    {
        id: 303,
        categoryId: 3,
<<<<<<< Updated upstream
        subcategory: "Belleza",
        title: "L'Occitane Aceite de Ducha de Almendra (250 ml)",
        price: 109.99,
        category: "Belleza",
        image: "/images/mujer1.jpg",
        url: "https://amzn.to/4q7Sbrx",
        description: "Aceite de ducha que limpia suavemente y deja la piel suave y con aroma a almendra."
=======
        subcategory: "Experiencias",
        title: "Caja Regalo Smartbox Relax & Wellness",
        price: 37.90,
        category: "Varios",
        image: "/images/productos/B07Z5LKT1Q.jpg",
        url: "https://www.amazon.es/Smartbox-relaxation-parents-wellness-activity/dp/B07Z5LKT1Q/?tag=sitio200181-21",
        description: "Experiencia de spa y bienestar para desconectar.",
        featured: true
>>>>>>> Stashed changes
    },
    {
        id: 304,
        categoryId: 3,
        subcategory: "Hogar",
<<<<<<< Updated upstream
        title: "Lámpara de Diseño",
        price: 95.00,
        category: "Decoración",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSi1ss1TgBj6Y0G15ecLXQMvlLOyk3V9bT1CoHENorCw8iIYnfBiniqAcg_DT6ojmQOIIw6bHmxCrfn-3NAlHJ902YyfjPkr0tL3Ew1Ka2sRiucqYR9bJKz-Y0bpLSR1r2_3qCQMSQw6Ynka8EXoIx0dcMXJ2sUm8T302z6NAlhuxfxkPPhfn9oFDEU-y42GLashChOO9Diqv5zcDJGCLoR7J6ecdfwslZHRu8L6R06lmYGrf1tNISySos0M6m4R2vsV4_nUPLChA",
        tag: "Más vendido"
=======
        title: "Bombones de Chocolate Amatller",
        price: 13.47,
        category: "Varios",
        image: "/images/productos/B0756HHDKT.jpg",
        url: "https://www.amazon.es/-/en/Chocolate-Amatller-Original-Chocolates-Assorted/dp/B0756HHDKT/?tag=sitio200181-21",
        description: "Surtido gourmet de chocolates tradicionales.",
        featured: true
>>>>>>> Stashed changes
    },
    {
        id: 305,
        categoryId: 3,
<<<<<<< Updated upstream
        subcategory: "Hogar",
        title: "Manta Tejida Suave",
        price: 60.00,
        category: "Hogar",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPcF4JAZc5mgkBC2dY6cLi27dUnNljxOBdGAxrvI0D6IlyndBJQwzgQyLT8MycPlR7S3drijLdPZuUm17xACArz6Tu85h697wu52OsPLzrejLo1M5jOaagn0Z8zUl-X8_23oI5iui_97xBhLMbxjGc8tVQENFifGuQ2gpd3kcr2MvFRt7nNBX3SsV8K_WKPou1sHpvgkG_EjYcC4jjdVL8RBfAk9uVRHYqDqpjXRpvDwB1p0J7p_s9oaqR_L3ZaEMXWPY6lqd4rt0"
=======
        subcategory: "Moda",
        title: "Mochila femenina multifuncional Leathario",
        price: 21.99,
        category: "Varios",
        image: "/images/productos/B0CH8KFBK5.jpg",
        url: "https://www.amazon.es/-/en/Leathario-Backpack-Multi-Pockets-Multifunctional-University/dp/B0CH8KFBK5/?tag=sitio200181-21",
        description: "Mochila práctica y elegante para el día a día."
>>>>>>> Stashed changes
    },
    {
        id: 306,
        categoryId: 3,
<<<<<<< Updated upstream
        subcategory: "Hogar",
        title: "Jarrón de Cerámica",
        price: 75.00,
        category: "Decoración",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfdvgwng1m6V3_FLVEOk6FSqErMURpvee3ZivfFm9zViSUi9JprOrISpCnE17EXdk8T9Kc1XLANVz0gHCXMnrbB-ZTL7Jl7RdU0YaAE7kmkXD9XTe1FtlTt-cYX45_VDbaFA9AD2z-0J6A07SqORN7N6f_wVCkTIoMmyKbEG8JP1ph5Ufq0nncT_6zJKL0SrALSPq1FlaSFyqYCYGGSP4a5q7lYCskL-1TuVQjQbYpuV5SxHdT45wt9lP-6PG-j-Gau2Mcu5CzilE"
=======
        subcategory: "Moda",
        title: "Smartwatch Popglory para mujer",
        price: 31.40,
        category: "Varios",
        image: "/images/productos/B0CGJ8P6VC.jpg",
        url: "https://www.amazon.es/Popglory-Pressure-Smartwatch-Respiratory-Android/dp/B0CGJ8P6VC/?tag=sitio200181-21",
        description: "Reloj inteligente con funciones de salud y notificaciones.",
        featured: true
>>>>>>> Stashed changes
    },
    {
        id: 307,
        categoryId: 3,
        subcategory: "Moda",
<<<<<<< Updated upstream
        title: "Bolso de Cuero",
        price: 180.00,
        category: "Accesorios",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKpAnsk7J27MB7u3HDr7dYcw-ITgM9my-J597PmxzEz2r-D1Cqxl1V8f1hkxGrFCPNFxyLezyZPE3A6HvObgXX7vn4SfjqmItXRJQKPdWkBmUaLQUXIkv0gsH7f0Oz2Oel680D8tswF587Pmxdsd35CU0H4U6TwQ8Q6aVuyrrFvaaROxztsshsPU25g813dfLEQVh-VtNM9GUX_fp5abTYZcy2iRViGb6Cwm2NGwh9lVsxWTXreKm3rRBd2VIPhnjUFvcPfOVOLA4"
=======
        title: "Camiseta térmica sin costuras CLOSEMATE",
        price: 14.99,
        category: "Varios",
        image: "/images/productos/B0DDQ4FBDX.jpg",
        url: "https://www.amazon.es/-/en/CLOSEMATE-Thermal-Seamless-Extreme-Earthtones-Brown/dp/B0DDQ4FBDX/?tag=sitio200181-21",
        description: "Prenda cómoda para el frío."
>>>>>>> Stashed changes
    },
    {
        id: 308,
        categoryId: 3,
        subcategory: "Moda",
<<<<<<< Updated upstream
        title: "Bufanda de Seda",
        price: 55.00,
        category: "Accesorios",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVQbRJvmHsCoNkk-7adiRVfh9yxA1MCDP4t8_vii8FgCsaBKWKSH1F1K94KKOwwNp9i_R8XJ_7exJknsAl7ChjopRPxH2LtSbu0JXkjAGEp_9TV3xw48OhzhQBtlGtujw7ZZXjBzrtddi_Bc5fjsbuQFvMihTQyYGe9Kn20U_cpxh5L7RAJ_57wWSR31sVKkk259ve-JNMEc5kH7JSc_Idjj4Q2qdENXudIG35ou3kTaOVCBvqPQ_a05JtGjB43k5Ftm9skf8txjw"
=======
        title: "Set de invierno WEASIC (bufanda, guantes, orejeras)",
        price: 21.99,
        category: "Varios",
        image: "/images/productos/B0B2JKN53B.jpg",
        url: "https://www.amazon.es/-/en/WEASIC-Scarf-Earmuffs-Touch-Gloves/dp/B0B2JKN53B/?tag=sitio200181-21",
        description: "Conjunto cálido para protegerse del frío."
>>>>>>> Stashed changes
    },
    {
        id: 309,
        categoryId: 3,
<<<<<<< Updated upstream
        subcategory: "Moda",
        title: "Joyería Minimalista",
        price: 89.00,
        category: "Joyería",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb80cJS6B7Ihxp8RLISdrPsugVqHqnR70DXkBpdHNofIJ9OMYMVwMEGM0DKPHUl2UISzH3Di4dVuY7RiE-spQFRFETjCsa9PzfNDuceZfxXLgqlwL8tpyzQ9K_IF0quLq5KZntzFKc3CLNdVajA8ZVbT0Mvr1ofhyvZd2Nazi-EI36GSCcdqVl3_DZHu7w48bwLRcOSsXmeHGRwPreWqw9PZAWFGwkCCUgUydTXYLp3qI_ZNLRU-4Znauc41OdsAhcJlUXgSZJwTg"
    },
    // New Kids (Boy) Products (ID 4)
=======
        subcategory: "Hogar",
        title: "Rosa preservada decorativa Yamonic",
        price: 15.99,
        category: "Varios",
        image: "/images/productos/B0D129W8B5.jpg",
        url: "https://www.amazon.es/-/en/Yamonic-Preserved-Birthday-Christmas-Valentines/dp/B0D129W8B5/?tag=sitio200181-21",
        description: "Rosa eterna en caja elegante."
    },
    {
        id: 310,
        categoryId: 3,
        subcategory: "Moda",
        title: "Pulsera bohemia de acero inoxidable",
        price: 17.99,
        category: "Varios",
        image: "/images/productos/B0CNYTHC5V.jpg",
        url: "https://www.amazon.es/-/en/Bracelet-Bohemian-Stainless-Birthday-Gemstone/dp/B0CNYTHC5V/?tag=sitio200181-21",
        description: "Pulsera con diseño boho para uso diario."
    },
    {
        id: 311,
        categoryId: 3,
        subcategory: "Moda",
        title: "Sudadera oversize Disney Stitch",
        price: 33.19,
        category: "Varios",
        image: "/images/productos/B09D55GFR2.jpg",
        url: "https://www.amazon.es/-/en/Disney-Stitch-Womens-Sweatshirt-Oversize/dp/B09D55GFR2/?tag=sitio200181-21",
        description: "Sudadera cómoda con personaje Disney.",
        featured: true
    },
    {
        id: 312,
        categoryId: 3,
        subcategory: "Belleza",
        title: "Perfume femenino gourmand Eau de Toilette",
        price: 15.80,
        category: "Varios",
        image: "/images/productos/B09GKJ77WD.jpg",
        url: "https://www.amazon.es/-/en/Seductive-Toilette-Gourmand-Cologne-Fragrance/dp/B09GKJ77WD/?tag=sitio200181-21",
        description: "Fragancia dulce y envolvente."
    },
    {
        id: 313,
        categoryId: 3,
        subcategory: "Hogar",
        title: "Cuaderno vintage de piel LEATHER Journal",
        price: 19.99,
        category: "Varios",
        image: "/images/productos/B0CS6XB4D9.jpg",
        url: "https://www.amazon.es/LEATHER-Vintage-Leather-Journal-Notebook/dp/B0CS6XB4D9/?tag=sitio200181-21",
        description: "Libreta artesanal para notas y planes."
    },
    {
        id: 314,
        categoryId: 3,
        subcategory: "Hogar",
        title: "Vela aromática decorativa",
        price: 18.99,
        category: "Varios",
        image: "/images/productos/B092VP2KQX.jpg",
        url: "https://www.amazon.es/-/en/Scented-Decorative-Aromatherapy-Birthdays-Christmas/dp/B092VP2KQX/?tag=sitio200181-21",
        description: "Vela perfumada para un ambiente acogedor."
    },
    {
        id: 315,
        categoryId: 3,
        subcategory: "Belleza",
        title: "Espejo de aumento con luz GRIFEMA",
        price: 16.00,
        category: "Varios",
        image: "/productos_afiliados/afiliados_madres/producto_B09QLVRZPC/imagen_01.jpg",
        url: "https://www.amazon.es/-/en/GRIFEMA-GF1001W-Magnification-Adjustable-Rotation/dp/B09QLVRZPC/?tag=sitio200181-21",
        description: "Espejo LED triple con aumento 1X/2X/3X, rotación ajustable 180°, interruptor táctil.",
        featured: true
    },
    {
        id: 316,
        categoryId: 3,
        subcategory: "Moda",
        title: "Tous Tibora Lindsay Bolsa para portátil",
        price: 105.00,
        category: "Varios",
        image: "/productos_afiliados/afiliados_madres/producto_B071VK7CT8/imagen_01.jpg",
        url: "https://www.amazon.es/-/en/Tibora-Lindsay-Laptop-Woman-195890153/dp/B071VK7CT8/?tag=sitio200181-21",
        description: "Maletín de vinilo hidrófugo con acabado charol, elegante y práctico.",
        featured: true
    },
    {
        id: 317,
        categoryId: 3,
        subcategory: "Belleza",
        title: "Braun Silk-épil 7 Depiladora Eléctrica",
        price: 85.89,
        category: "Varios",
        image: "/productos_afiliados/afiliados_madres/producto_B0CQRTB5J2/imagen_01.jpg",
        url: "https://www.amazon.es/-/en/Silk-épil-Electric-Epilator-Removal-Flamingo/dp/B0CQRTB5J2/?tag=sitio200181-21",
        description: "Depilación suave en seco y mojado con cabezal de rasuradora incluido.",
        featured: true
    },
    {
        id: 318,
        categoryId: 3,
        subcategory: "Hogar",
        title: "Lámpara Personalizada Polaroid con Fotos",
        price: 12.00,
        category: "Varios",
        image: "/productos_afiliados/afiliados_madres/producto_B0DW4CJ9FR/imagen_01.jpg",
        url: "https://www.amazon.es/-/en/Transparent-Personalised-Anniversary-Personalized-Valentines/dp/B0DW4CJ9FR/?tag=sitio200181-21",
        description: "Lámpara LED personalizable con fotos estilo Polaroid, regalo romántico perfecto."
    },
    {
        id: 319,
        categoryId: 3,
        subcategory: "Bienestar",
        title: "Comfytemp Almohadilla Térmica Ponderada",
        price: 49.00,
        category: "Varios",
        image: "/productos_afiliados/afiliados_madres/producto_B0FB2XQLFV/imagen_01.jpg",
        url: "https://www.amazon.es/-/en/Comfytemp-Weighted-Thermal-Shoulders-Levels/dp/B0FB2XQLFV/?tag=sitio200181-21",
        description: "Manta térmica para espalda, hombros y cuello con 9 niveles de calor y apagado automático.",
        featured: true
    },
    // ------------------------------------------------------------------------
    // CATEGORÍA: REGALOS PARA NIÑOS (categoryId: 4)
    // ------------------------------------------------------------------------

>>>>>>> Stashed changes
    {
        id: 401,
        categoryId: 4,
        subcategory: "Acción",
        title: "Peluche Simba Licencia Oficial",
        price: 41.99,
        category: "Juguetes",
        image: "/images/nino2.jpg",
        url: "https://amzn.to/3XVbMze",
        description: "Peluche suave y ligero, perfecto para acompañar el juego y el descanso."
    },
    {
        id: 402,
        categoryId: 4,
        subcategory: "Acción",
        title: "Marvel Spiderman Mochila Infantil",
        price: 31.99,
        category: "Accesorios",
        image: "/images/nino3.jpg",
        url: "https://amzn.to/44tcreU",
        description: "Mochila con compartimentos y tirantes ajustables para el cole y actividades."
    },
    {
        id: 403,
        categoryId: 4,
        subcategory: "Acción",
        title: "Bluey Botella de Plástico",
        price: 26.99,
        category: "Hidratación",
        image: "/images/nino1.jpg",
        url: "https://amzn.to/3YtBDhO",
        description: "Botella resistente y reutilizable con diseño de Bluey; práctica para el día a día."
    },
    {
        id: 404,
        categoryId: 4,
        subcategory: "Construcción",
        title: "Bloques Espaciales",
        price: 65.00,
        category: "Lego",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyzcBJllL2YpRO2Ee2CiOlet8Vc3is8TZ3ov6XIb3u1Biln-bUVgWwakpuMZ_C7CBpftWWwJFdi2NHUavjHeS8h0k6EAghL6TzVKyP_DK7xSeGPhLCmeZCtcvkv6jZSIIlqLSxAN3pSTaF79SidufVa7IyTQOyHNkh0LN6dfqv808Ya11XnXDm6JBf7qPkvsrn_r_j6TscAYDapyK81REZ0ynpxGlOgCjVGdcd7GhdqqBa3HhETqBHyu_3rtSAgQ7OpktqIlEzvaY"
    },
    {
        id: 405,
        categoryId: 4,
        subcategory: "Construcción",
        title: "Circuito de Canicas",
        price: 45.00,
        category: "Ingeniería",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyzcBJllL2YpRO2Ee2CiOlet8Vc3is8TZ3ov6XIb3u1Biln-bUVgWwakpuMZ_C7CBpftWWwJFdi2NHUavjHeS8h0k6EAghL6TzVKyP_DK7xSeGPhLCmeZCtcvkv6jZSIIlqLSxAN3pSTaF79SidufVa7IyTQOyHNkh0LN6dfqv808Ya11XnXDm6JBf7qPkvsrn_r_j6TscAYDapyK81REZ0ynpxGlOgCjVGdcd7GhdqqBa3HhETqBHyu_3rtSAgQ7OpktqIlEzvaY"
    },
    {
        id: 406,
        categoryId: 4,
        subcategory: "Vehículos",
        title: "Carro Control Remoto",
        price: 55.00,
        category: "RC",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR7j3wIHo2MbTE1JQ0U4P4BT3gr4dgMaVhAcaKM2nZypUKymi7GVOFcEeZ_vAP_PqX41ZOPTdEvl_ia488cSUuIJKYS0aOU_2TI2zpiCIpDZCTtFLLZhYsj_qK--VoUrErkCi5xsO0oXNlqedthXqghvxeKggsBruwT2jewHta2EacF4EpJVNiMWWM84rZp8NaQcRQNi3yZEm21TulW2Vxj1vd3ozgXUB1mZfxlhRNtebrTTn5iiuOsNyGEAECVeoRNbqVT_RIGU8"
    },
    // Nuevos productos "Interes" para Niños (ID 4)
    {
        id: 410,
        categoryId: 4,
        subcategory: "Interes",
        title: "Microscopio Junior",
        price: 39.99,
        category: "Ciencia",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW_k_rCqC3MhDqO6pYnZqF2tG1wK5vE8x7jL0yI9h4mB3oA2dF1nE6sJ5rT8uV9iW4qO3lP7zX0mC2kG1yH5bN8vF6dJ9gR3tL1wE4xK7zO2mP5nB8qI1vF0yH6jG9wL3sK5nE7rT9xZ1yU4oM2pQ6wV8tN3kR1jS5hB7vG0xL9yF4wM1pE2zH8qI5nJ6oK9rT3wE4xL7zO1mP2nC5kH8vG3xJ4yF6dI9gR1tL0wE3xK6zO0mP4nB7qI1vF0yH5bN8vF6dJ9gR3tL1w"
    },
    {
        id: 411,
        categoryId: 4,
        subcategory: "Interes",
        title: "Balón Espacial",
        price: 24.50,
        category: "Deportes",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyzcBJllL2YpRO2Ee2CiOlet8Vc3is8TZ3ov6XIb3u1Biln-bUVgWwakpuMZ_C7CBpftWWwJFdi2NHUavjHeS8h0k6EAghL6TzVKyP_DK7xSeGPhLCmeZCtcvkv6jZSIIlqLSxAN3pSTaF79SidufVa7IyTQOyHNkh0LN6dfqv808Ya11XnXDm6JBf7qPkvsrn_r_j6TscAYDapyK81REZ0ynpxGlOgCjVGdcd7GhdqqBa3HhETqBHyu_3rtSAgQ7OpktqIlEzvaY"
    },
    {
        id: 412,
        categoryId: 4,
        subcategory: "Interes",
        title: "Reloj Aventurero",
        price: 34.00,
        category: "Accesorios",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR7j3wIHo2MbTE1JQ0U4P4BT3gr4dgMaVhAcaKM2nZypUKymi7GVOFcEeZ_vAP_PqX41ZOPTdEvl_ia488cSUuIJKYS0aOU_2TI2zpiCIpDZCTtFLLZhYsj_qK--VoUrErkCi5xsO0oXNlqedthXqghvxeKggsBruwT2jewHta2EacF4EpJVNiMWWM84rZp8NaQcRQNi3yZEm21TulW2Vxj1vd3ozgXUB1mZfxlhRNtebrTTn5iiuOsNyGEAECVeoRNbqVT_RIGU8"
    },
    // New Kids (Girl) Products (ID 5)
    {
        id: 501,
        categoryId: 5,
        subcategory: "Creatividad",
<<<<<<< Updated upstream
        title: "Muñeca con Funciones y Accesorios",
        price: 32.99,
        category: "Juguetes",
        image: "/images/nina1.jpg",
        url: "https://amzn.to/4rYtK1r",
        description: "Muñeca interactiva con accesorios para fomentar el juego imaginativo."
=======
        title: "Estudio de arte de uñas",
        price: 14.52,
        category: "Moda y maquillaje",
        image: "/images/productos/B0B4BRLFF9.jpg",
        url: "https://www.amazon.com/dp/B0B4BRLFF9?tag=sitio200181-21",
        description: "Estudio de arte de uñas - Moda y maquillaje",
        featured: true
>>>>>>> Stashed changes
    },
    {
        id: 502,
        categoryId: 5,
        subcategory: "Creatividad",
        title: "Play-Doh Camión de Helados",
        price: 22.99,
        category: "Creatividad",
        image: "/images/nina2.jpg",
        url: "https://amzn.to/4pWM0Hj",
        description: "Set Play-Doh con camión y moldes para crear helados y figuras divertidas."
    },
    {
        id: 503,
        categoryId: 5,
        subcategory: "Fantasía",
        title: "Amazon Essentials Chaqueta con Cremallera",
        price: 36.99,
        category: "Ropa",
        image: "/images/nina3.jpg",
        url: "https://amzn.to/44tQc8z",
        description: "Chaqueta ligera con cierre completo, cómoda para uso diario."
    },
    {
        id: 504,
        categoryId: 5,
        subcategory: "Muñecas",
        title: "Casa de Muñecas XL",
        price: 120.00,
        category: "Juguetes",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcnEtjkqNu8wh_qzpesuqkhPLhQ-HQLD030OHtxJT__fey35w84ZmbxPuRWGT2aVrSbpi0CfBsxs_IhOeXUHwRy4oVMNUtDs74VTRGvyOPayX8HGY5fkGqsC_7Fo2pzdd4YWYheqhBrOSdKsF9RQzRW4p1UqRqcw9h_qDd-b8j50GKHQyxYbtVe9Jujru-Vk-WqzyM0ETSPz47m79C2KECIZ1ZY8mYNWfbyDCsq4W423I8sQmG_E6t4B9as7kwhpIIPNYPAHhP6t0"
    },
    {
        id: 505,
        categoryId: 5,
<<<<<<< Updated upstream
        subcategory: "Muñecas",
        title: "Muñeca Interactiva",
        price: 55.00,
        category: "Juguetes",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcnEtjkqNu8wh_qzpesuqkhPLhQ-HQLD030OHtxJT__fey35w84ZmbxPuRWGT2aVrSbpi0CfBsxs_IhOeXUHwRy4oVMNUtDs74VTRGvyOPayX8HGY5fkGqsC_7Fo2pzdd4YWYheqhBrOSdKsF9RQzRW4p1UqRqcw9h_qDd-b8j50GKHQyxYbtVe9Jujru-Vk-WqzyM0ETSPz47m79C2KECIZ1ZY8mYNWfbyDCsq4W423I8sQmG_E6t4B9as7kwhpIIPNYPAHhP6t0"
=======
        subcategory: "Creatividad",
        title: "Kit de fabricación de pulseras",
        price: 17.08,
        category: "Manualidades",
        image: "/images/productos/B0B4BX6SY2.jpg",
        url: "https://www.amazon.com/dp/B0B4BX6SY2?tag=sitio200181-21",
        description: "Kit de fabricación de pulseras - Manualidades",
        featured: true
    },
    {
        id: 506,
        categoryId: 5,
        subcategory: "Creatividad",
        title: "Rueda de cerámica",
        price: 25.63,
        category: "Cerámica",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0FLDJ3WJS?tag=sitio200181-21",
        description: "Rueda de cerámica - Cerámica"
    },
    {
        id: 507,
        categoryId: 5,
        subcategory: "Muñecas",
        title: "Walkie Talkies",
        price: 25.63,
        category: "Electrónico",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0FZGRNPLM?tag=sitio200181-21",
        description: "Walkie Talkies - Electrónico"
    },
    {
        id: 508,
        categoryId: 5,
        subcategory: "Fantasía",
        title: "Juguetes de Unicornio",
        price: 29.04,
        category: "Peluches",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0DF7PRCQ6?tag=sitio200181-21",
        description: "Juguetes de Unicornio - Peluches"
    },
    {
        id: 509,
        categoryId: 5,
        subcategory: "Muñecas",
        title: "Patinete Infantil",
        price: 32.47,
        category: "Patinete",
        image: "/images/productos/B0CCYMV1T1.jpg",
        url: "https://www.amazon.com/dp/B0CCYMV1T1?tag=sitio200181-21",
        description: "Patinete Infantil - Patinete"
>>>>>>> Stashed changes
    },
    // Nuevos productos "Interes" para Niñas (ID 5)
    {
        id: 510,
        categoryId: 5,
<<<<<<< Updated upstream
        subcategory: "Interes",
        title: "Patines Retro",
        price: 55.00,
        category: "Deportes",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr010zdWNBFi_Gfr76vUna1x-tcNqpVYrN9t0-OMTSpIGpBOVb3BeJvC5WEtAecFMSOJCa-bj5H0J7YQSVAKCJQSJfGDG9nC-OcoiKPL2Vl8LHbFflzztxtQnJNiXao2nFeDa2Zxp7gPzE_YOuHCWvRDAs7Yi2QJDktJJ_imbmZHJiZr8ytCkxqRaRdduZDIz0W-rhwRYYfiqBojDCt-XsZAiswAMqEo3-BmZAs4boB8F6z9n-2OcLhidtpqp8WSnFmCYda_qUPdg"
=======
        subcategory: "Creatividad",
        title: "Kit de fabricación de diademas",
        price: 12.97,
        category: "Moda y maquillaje",
        image: "/images/productos/B0B3WTSVSV.jpg",
        url: "https://www.amazon.com/dp/B0B3WTSVSV?tag=sitio200181-21",
        description: "Kit de fabricación de diademas - Moda y maquillaje"
>>>>>>> Stashed changes
    },
    {
        id: 511,
        categoryId: 5,
        subcategory: "Interes",
        title: "Cámara Instantánea",
        price: 79.00,
        category: "Fotografía",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtJbDgBMRbSuRfuli5reM5fNU3FqdqoljoYIX0auaH8JT8YOTYufGPAEr1GWurFXuUID6Xx9EkSGvB_KCY6TA2pEwkjPS0-I0vFCy_DeggrRIKWnG_qb_8fha-X1iO86dvsWihwAmfy_z4uOSoI-hakcq4w3s8FFsgNiThZlxSvW4e-atxIuIT9x9Hct8002vwuldlSrItBU4den1dfv9d_5Q9w_C2bcUBhPmYE242CaaSFvcZ3bIA3KW4cWSiU1_43NjgJZCk5vc"
    },
    {
        id: 512,
        categoryId: 5,
<<<<<<< Updated upstream
        subcategory: "Interes",
        title: "Libro de Cuentos",
        price: 19.99,
        category: "Lectura",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcnEtjkqNu8wh_qzpesuqkhPLhQ-HQLD030OHtxJT__fey35w84ZmbxPuRWGT2aVrSbpi0CfBsxs_IhOeXUHwRy4oVMNUtDs74VTRGvyOPayX8HGY5fkGqsC_7Fo2pzdd4YWYheqhBrOSdKsF9RQzRW4p1UqRqcw9h_qDd-b8j50GKHQyxYbtVe9Jujru-Vk-WqzyM0ETSPz47m79C2KECIZ1ZY8mYNWfbyDCsq4W423I8sQmG_E6t4B9as7kwhpIIPNYPAHhP6t0"
    },
    // New Tech 2025 Products (ID 6)
=======
        subcategory: "Creatividad",
        title: "Crayola Color Wonder",
        price: 23.22,
        category: "Arte y manualidades",
        image: "/images/productos/B084Y3DLFJ.jpg",
        url: "https://www.amazon.com/dp/B084Y3DLFJ?tag=sitio200181-21",
        description: "Crayola Color Wonder - Arte y manualidades",
        featured: true
    },
    {
        id: 513,
        categoryId: 5,
        subcategory: "Muñecas",
        title: "Kit médico de juguete",
        price: 24.18,
        category: "Juego de imitación médicos",
        image: "/images/productos/B09PD6YWF1.jpg",
        url: "https://www.amazon.com/dp/B09PD6YWF1?tag=sitio200181-21",
        description: "Kit médico de juguete - Juego de imitación médicos"
    },
    {
        id: 514,
        categoryId: 5,
        subcategory: "Creatividad",
        title: "6 Pack de Slimes",
        price: 11.61,
        category: "Masa viscosa para jugar",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0CYT6D2ZS?tag=sitio200181-21",
        description: "6 Pack de Slimes - Masa viscosa para jugar"
    },
    {
        id: 515,
        categoryId: 5,
        subcategory: "Creatividad",
        title: "Tiza para Cabello",
        price: 13.66,
        category: "Tintes para cabello",
        image: "/images/productos/B07FTGLWDR.jpg",
        url: "https://www.amazon.com/dp/B07FTGLWDR?tag=sitio200181-21",
        description: "Tiza para Cabello - Tintes para cabello"
    },
    {
        id: 516,
        categoryId: 5,
        subcategory: "Fantasía",
        title: "Joyero musical",
        price: 14.52,
        category: "Caja de joyería para niños",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0CHKLZ7PJ?tag=sitio200181-21",
        description: "Joyero musical - Caja de joyería para niños"
    },
    {
        id: 517,
        categoryId: 5,
        subcategory: "Creatividad",
        title: "Kit de maquillaje",
        price: 18.36,
        category: "Maquillaje",
        image: "/images/productos/B095LT69HN.jpg",
        url: "https://www.amazon.com/dp/B095LT69HN?tag=sitio200181-21",
        description: "Kit de maquillaje - Maquillaje",
        featured: true
    },
    {
        id: 518,
        categoryId: 5,
        subcategory: "Fantasía",
        title: "Kit de terrario de sirena",
        price: 8.54,
        category: "Manualidades",
        image: "/images/productos/B083Z3JMGP.jpg",
        url: "https://www.amazon.com/dp/B083Z3JMGP?tag=sitio200181-21",
        description: "Kit de terrario de sirena - Manualidades"
    },
    {
        id: 519,
        categoryId: 5,
        subcategory: "Creatividad",
        title: "Lego Disney Princess",
        price: 16.94,
        category: "Juguetes de construcción",
        image: "/images/productos/B0BRBMNN93.jpg",
        url: "https://www.amazon.com/dp/B0BRBMNN93?tag=sitio200181-21",
        description: "Lego - Juguetes de construcción"
    },
    {
        id: 520,
        categoryId: 5,
        subcategory: "Fantasía",
        title: "Tapete de baile de unicornio",
        price: 34.17,
        category: "Electrónico",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0BJPFZ6MV?tag=sitio200181-21",
        description: "Tapete de baile de unicornio - Electrónico"
    },

    // ------------------------------------------------------------------------
    // CATEGORÍA: TECNOLOGÍA 2025 (categoryId: 6)
    // ------------------------------------------------------------------------

    // Subcategoría: Smart Home
>>>>>>> Stashed changes
    {
        id: 601,
        categoryId: 6,
        subcategory: "Smart Home",
        title: "Luces Solares de Navidad para Exterior (Yorezcop)",
        price: 469.99,
        category: "Iluminación",
        image: "/images/tecnologia2.jpg",
        url: "https://amzn.to/4pDBnZz",
        description: "Guirnaldas solares impermeables para decoración exterior, fáciles de instalar."
    },
    {
        id: 602,
        categoryId: 6,
        subcategory: "Smart Home",
        title: "Echo Pop | Altavoz Inteligente con Alexa",
        price: 179.99,
        category: "Smart Home",
        image: "/images/tecnologia3.jpg",
        url: "https://amzn.to/48SFUQN",
        description: "Altavoz compacto con Alexa para música, control por voz y hogar conectado."
    },
    {
        id: 603,
        categoryId: 6,
        subcategory: "Gaming",
        title: "Auriculares Inalámbricos Impermeables",
        price: 329.99,
        category: "Audio",
        image: "/images/tecnologia1.jpg",
        url: "https://amzn.to/4aWxLx8",
        description: "Auriculares Bluetooth con diseño resistente al agua y estuche de carga."
    },
    {
        id: 604,
        categoryId: 6,
        subcategory: "Gaming",
        title: "Teclado Mecánico RGB",
        price: 120.00,
        category: "Periféricos",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB95I5g5kwB3RgzfM4qkw9zxxhlinYH9uNt2YAGm4cdC-z_NY4A_9POPmzFA5c17TI6TcKKwqJ5n8h8rQM-UYRyjbFL_R38l_gT97zLGpckwlFYNNvtO6y2FfjeL3MHUkNv7LAv3Dl5r3TvZY4MZDZ0Q3VdQ3av0cJwsAeIeCF07W9ahIRYs8E7Z6XjvVZo00WHXgJiAYniwL31tqUiJ7pYT5QcLtr-cyE-hCmbVkN8TM5-RQq9NhGACmQaHv143UI7i_mD3fNPvWw"
    },
    {
        id: 605,
        categoryId: 6,
        subcategory: "Movilidad",
        title: "Scooter Eléctrico Pro",
        price: 450.00,
        category: "Transporte",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTSNpW5tL-bx7Owz63idZNyxr-sirOvFnK7PO6jFEqxdjdbQnEa1IFB1Ji6R_C0uxeNcH9SY2l7h6shf6_KFWy8km1HYopgxcwkBaU0nNr6dnhDvLLSvXImOLCzYqNTlJHb38MwTWkHTco3D4u_w_ycKnvyT2XorxkqW-NpZhahbmZ73p66bHpNUwhzsLFTTv1CY5QsiXRZbR0_m43WmuthXOamC4HTpNiRG9FO3CXBOuE7F3Tg0qSbehoN94a9FXZ_J0CRTcK6zk"
    },
    {
        id: 606,
        categoryId: 6,
        subcategory: "Movilidad",
        title: "Casco Inteligente",
        price: 89.00,
        category: "Seguridad",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTSNpW5tL-bx7Owz63idZNyxr-sirOvFnK7PO6jFEqxdjdbQnEa1IFB1Ji6R_C0uxeNcH9SY2l7h6shf6_KFWy8km1HYopgxcwkBaU0nNr6dnhDvLLSvXImOLCzYqNTlJHb38MwTWkHTco3D4u_w_ycKnvyT2XorxkqW-NpZhahbmZ73p66bHpNUwhzsLFTTv1CY5QsiXRZbR0_m43WmuthXOamC4HTpNiRG9FO3CXBOuE7F3Tg0qSbehoN94a9FXZ_J0CRTcK6zk"
    }
];
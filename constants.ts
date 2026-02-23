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
        subcategory: "Estilo",
        seoCategory: "mejores-regalos",
        title: "TEMPUR Original Almohada cervical",
        price: 95.28,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B00UVQPD28/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B00UVQPD28?tag=sitio200181",
        description: "TEMPUR Original Almohada cervical"
    },
    {
        id: 202,
        categoryId: 2,
        title: "Tommy Hilfiger Reloj Analógico de Acero Inoxidable",
        subcategory: "Gadgets",
        seoCategory: "padres-deportistas",
        title: "Pistola de masaje muscular",
        price: 84.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B09QPGTLG8/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B09QPGTLG8?tag=sitio200181",
        description: "Pistola de masaje muscular",
        featured: true
    },
    {
        id: 203,
        categoryId: 2,
        subcategory: "Gadgets",
        seoCategory: "padres-cocinitas",
        title: "Cecotec Freidora de Aire",
        price: 49.90,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0BPYVNW3L/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0BPYVNW3L?tag=sitio200181",
        description: "Cecotec Freidora de Aire",
        featured: true
    },
    {
        id: 204,
        categoryId: 2,
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
    },
    {
        id: 208,
        categoryId: 2,
        subcategory: "Gadgets",
        seoCategory: "gadgets",
        title: "Xiaomi Redmi Pad Pro",
        price: 314.94,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0D31XB4ST/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0D31XB4ST?tag=sitio200181",
        description: "Xiaomi Redmi Pad Pro",
        featured: true
    },
    {
        id: 209,
        categoryId: 2,
        subcategory: "Estilo",
        seoCategory: "regalos-baratos",
        title: "Taza",
        price: 8.95,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0DJPFRWPF/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0DJPFRWPF?tag=sitio200181",
        description: "Taza"
    },
    {
        id: 210,
        categoryId: 2,
        subcategory: "Estilo",
        seoCategory: "kits-regalo-hombres",
        title: "Kit barba",
        price: 24.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B08GYDSD72/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B08GYDSD72?tag=sitio200181",
        description: "Kit barba"
    },
    {
        id: 211,
        categoryId: 2,
        subcategory: "Estilo",
        seoCategory: "padres-elegantes",
        title: "Maquinilla Gillette",
        price: 18.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0DTTNGTP7/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0DTTNGTP7?tag=sitio200181",
        description: "Maquinilla Gillette"
    },
    {
        id: 212,
        categoryId: 2,
        subcategory: "Experiencias",
        seoCategory: "experiencias",
        title: "Smartbox – 2 días con encanto",
        price: 69.90,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B07Z5LKRMF/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B07Z5LKRMF?tag=sitio200181",
        featured: true,
        description: "Smartbox – 2 días con encanto"
    },
    {
        id: 213,
        categoryId: 2,
        subcategory: "Estilo",
        seoCategory: "regalos-personalizados",
        title: "Taza personalizada",
        price: 4.90,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B089GY91MH/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B089GY91MH?tag=sitio200181",
        description: "Taza personalizada"
    },
    {
        id: 214,
        categoryId: 2,
        subcategory: "Estilo",
        seoCategory: "regalos-personalizados",
        title: "Libro biografía papá",
        price: 15.10,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_8401022509/imagen_01.jpg",
        url: "https://www.amazon.es/dp/8401022509?tag=sitio200181",
        description: "Libro biografía papá"
    },
    {
        id: 215,
        categoryId: 2,
        subcategory: "Estilo",
        seoCategory: "regalos-baratos",
        title: "Manta Día del Padre",
        price: 16.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0F14RWPT3/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0F14RWPT3?tag=sitio200181",
        description: "Manta Día del Padre"
    },
    {
        id: 216,
        categoryId: 2,
        subcategory: "Gadgets",
        seoCategory: "gadgets",
        title: "Destornillador multipuntas",
        price: 25.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0D2HGJFL2/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0D2HGJFL2?tag=sitio200181",
        description: "Destornillador multipuntas"
    },
    {
        id: 217,
        categoryId: 2,
        subcategory: "Gadgets",
        seoCategory: "gadgets",
        title: "Navaja multiusos",
        price: 19.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0BYRN75WT/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0BYRN75WT?tag=sitio200181",
        description: "Navaja multiusos"
    },
    {
        id: 218,
        categoryId: 2,
        subcategory: "Gadgets",
        seoCategory: "padres-frikis",
        title: "Tocadiscos",
        price: 139.00,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0BHT39Q3J/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0BHT39Q3J?tag=sitio200181",
        description: "Tocadiscos",
        featured: true
    },
    {
        id: 219,
        categoryId: 2,
        subcategory: "Experiencias",
        seoCategory: "padres-cerveceros",
        title: "Set de whisky",
        price: 29.99,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0FL2GS63J/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0FL2GS63J?tag=sitio200181",
        description: "Set de whisky"
    },
    {
        id: 220,
        categoryId: 2,
        subcategory: "Gadgets",
        seoCategory: "gadgets",
        title: "Altavoz Bluetooth portátil",
        price: 115.00,
        category: "Varios",
        image: "/productos_afiliados/afiliados_padres/producto_B0DXKNBQS6/imagen_01.jpg",
        url: "https://www.amazon.es/dp/B0DXKNBQS6?tag=sitio200181",
        description: "Altavoz Bluetooth portátil"
    },
    {
        id: 301,
        categoryId: 3,
        subcategory: "Belleza",
        title: "Set de Cuidado Facial QUIYUM",
        price: 29.79,
        category: "Varios",
        image: "/images/productos/B0DK5GFXPF.jpg",
        url: "https://www.amazon.es/QUIYUM-Cuidado-Regalo-Skincare-Limpiadora/dp/B0DK5GFXPF/?tag=sitio200181-21",
        description: "Kit completo de skincare con limpiadora y productos de cuidado personal.",
        featured: true
    },
    {
        id: 302,
        categoryId: 3,
        subcategory: "Hogar",
        title: "Taza divertida para madres MUGFFINS",
        price: 12.95,
        category: "Varios",
        image: "/images/productos/B0FW28HGD7.jpg",
        url: "https://www.amazon.es/-/en/MUGFFINS-Siempre-Español-divertido-cumpleaños/dp/B0FW28HGD7/?tag=sitio200181-21",
        description: "Taza con mensaje en español, perfecta para sacar una sonrisa."
    },
    {
        id: 303,
        categoryId: 3,
        subcategory: "Experiencias",
        title: "Caja Regalo Smartbox Relax & Wellness",
        price: 37.90,
        category: "Varios",
        image: "/images/productos/B07Z5LKT1Q.jpg",
        url: "https://www.amazon.es/Smartbox-relaxation-parents-wellness-activity/dp/B07Z5LKT1Q/?tag=sitio200181-21",
        description: "Experiencia de spa y bienestar para desconectar.",
        featured: true
    },
    {
        id: 304,
        categoryId: 3,
        subcategory: "Hogar",
        title: "Bombones de Chocolate Amatller",
        price: 13.47,
        category: "Varios",
        image: "/images/productos/B0756HHDKT.jpg",
        url: "https://www.amazon.es/-/en/Chocolate-Amatller-Original-Chocolates-Assorted/dp/B0756HHDKT/?tag=sitio200181-21",
        description: "Surtido gourmet de chocolates tradicionales.",
        featured: true
    },
    {
        id: 305,
        categoryId: 3,
        subcategory: "Moda",
        title: "Mochila femenina multifuncional Leathario",
        price: 21.99,
        category: "Varios",
        image: "/images/productos/B0CH8KFBK5.jpg",
        url: "https://www.amazon.es/-/en/Leathario-Backpack-Multi-Pockets-Multifunctional-University/dp/B0CH8KFBK5/?tag=sitio200181-21",
        description: "Mochila práctica y elegante para el día a día."
    },
    {
        id: 306,
        categoryId: 3,
        subcategory: "Moda",
        title: "Smartwatch Popglory para mujer",
        price: 31.40,
        category: "Varios",
        image: "/images/productos/B0CGJ8P6VC.jpg",
        url: "https://www.amazon.es/Popglory-Pressure-Smartwatch-Respiratory-Android/dp/B0CGJ8P6VC/?tag=sitio200181-21",
        description: "Reloj inteligente con funciones de salud y notificaciones.",
        featured: true
    },
    {
        id: 307,
        categoryId: 3,
        subcategory: "Moda",
        title: "Camiseta térmica sin costuras CLOSEMATE",
        price: 14.99,
        category: "Varios",
        image: "/images/productos/B0DDQ4FBDX.jpg",
        url: "https://www.amazon.es/-/en/CLOSEMATE-Thermal-Seamless-Extreme-Earthtones-Brown/dp/B0DDQ4FBDX/?tag=sitio200181-21",
        description: "Prenda cómoda para el frío."
    },
    {
        id: 308,
        categoryId: 3,
        subcategory: "Moda",
        title: "Set de invierno WEASIC (bufanda, guantes, orejeras)",
        price: 21.99,
        category: "Varios",
        image: "/images/productos/B0B2JKN53B.jpg",
        url: "https://www.amazon.es/-/en/WEASIC-Scarf-Earmuffs-Touch-Gloves/dp/B0B2JKN53B/?tag=sitio200181-21",
        description: "Conjunto cálido para protegerse del frío."
    },
    {
        id: 309,
        categoryId: 3,
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
        title: "Estudio de arte de uñas",
        price: 14.52,
        category: "Moda y maquillaje",
        image: "/images/productos/B0B4BRLFF9.jpg",
        url: "https://www.amazon.com/dp/B0B4BRLFF9?tag=sitio200181-21",
        description: "Estudio de arte de uñas - Moda y maquillaje",
        featured: true
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
    },
    // Nuevos productos "Interes" para Niñas (ID 5)
    {
        id: 510,
        categoryId: 5,
        subcategory: "Creatividad",
        title: "Kit de fabricación de diademas",
        price: 12.97,
        category: "Moda y maquillaje",
        image: "/images/productos/B0B3WTSVSV.jpg",
        url: "https://www.amazon.com/dp/B0B3WTSVSV?tag=sitio200181-21",
        description: "Kit de fabricación de diademas - Moda y maquillaje"
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
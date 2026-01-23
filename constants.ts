import { Category, Product } from './types';

// ============================================================================
// CATEGORÍAS PRINCIPALES
// ============================================================================

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

// ============================================================================
// PRODUCTOS
// ============================================================================

export const PRODUCTS: Product[] = [

    // ------------------------------------------------------------------------
    // PRODUCTOS GENERALES (Sin categoryId específico)
    // ------------------------------------------------------------------------
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

    // ------------------------------------------------------------------------
    // CATEGORÍA: REGALOS PARA PADRES (categoryId: 2)
    // ------------------------------------------------------------------------

    {
        id: 201,
        categoryId: 2,
        title: "TEMPUR Original Almohada cervical",
        price: 95.28,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B00UVQPD28?tag=sitio200181",
        description: "TEMPUR Original Almohada cervical"
    },
    {
        id: 202,
        categoryId: 2,
        title: "Pistola de masaje muscular",
        price: 84.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B09QPGTLG8?tag=sitio200181",
        description: "Pistola de masaje muscular"
    },
    {
        id: 203,
        categoryId: 2,
        title: "Cecotec Freidora de Aire",
        price: 49.90,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0BPYVNW3L?tag=sitio200181",
        description: "Cecotec Freidora de Aire"
    },
    {
        id: 204,
        categoryId: 2,
        title: "Garmin Vívoactive 5",
        price: 185.50,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0CY2QBKNS?tag=sitio200181",
        description: "Garmin Vívoactive 5"
    },
    {
        id: 205,
        categoryId: 2,
        title: "Kindle",
        price: 169.00,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0CFPXBJ9Y?tag=sitio200181",
        description: "Kindle"
    },
    {
        id: 206,
        categoryId: 2,
        title: "OPPO Reno13",
        price: 367.26,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0DVH12PT3?tag=sitio200181",
        description: "OPPO Reno13"
    },
    {
        id: 207,
        categoryId: 2,
        title: "Cámara instantánea",
        price: 27.50,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B08H887HNJ?tag=sitio200181",
        description: "Cámara instantánea"
    },
    {
        id: 208,
        categoryId: 2,
        title: "Xiaomi Redmi Pad Pro",
        price: 314.94,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0D31XB4ST?tag=sitio200181",
        description: "Xiaomi Redmi Pad Pro"
    },
    {
        id: 209,
        categoryId: 2,
        title: "Taza",
        price: 8.95,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0DJPFRWPF?tag=sitio200181",
        description: "Taza"
    },
    {
        id: 210,
        categoryId: 2,
        title: "Kit barba",
        price: 24.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B08GYDSD72?tag=sitio200181",
        description: "Kit barba"
    },
    {
        id: 211,
        categoryId: 2,
        title: "Maquinilla Gillette",
        price: 18.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0DTTNGTP7?tag=sitio200181",
        description: "Maquinilla Gillette"
    },
    {
        id: 212,
        categoryId: 2,
        title: "Smartbox – 2 días con encanto",
        price: 69.90,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B07Z5LKRMF?tag=sitio200181",
        description: "Smartbox – 2 días con encanto"
    },
    {
        id: 213,
        categoryId: 2,
        title: "Taza personalizada",
        price: 4.90,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B089GY91MH?tag=sitio200181",
        description: "Taza personalizada"
    },
    {
        id: 214,
        categoryId: 2,
        title: "Libro biografía papá",
        price: 15.10,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/8401022509?tag=sitio200181",
        description: "Libro biografía papá"
    },
    {
        id: 215,
        categoryId: 2,
        title: "Manta Día del Padre",
        price: 16.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0F14RWPT3?tag=sitio200181",
        description: "Manta Día del Padre"
    },
    {
        id: 216,
        categoryId: 2,
        title: "Destornillador multipuntas",
        price: 25.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0D2HGJFL2?tag=sitio200181",
        description: "Destornillador multipuntas"
    },
    {
        id: 217,
        categoryId: 2,
        title: "Navaja multiusos",
        price: 19.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0BYRN75WT?tag=sitio200181",
        description: "Navaja multiusos"
    },
    {
        id: 218,
        categoryId: 2,
        title: "Tocadiscos",
        price: 139.00,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0BHT39Q3J?tag=sitio200181",
        description: "Tocadiscos"
    },
    {
        id: 219,
        categoryId: 2,
        title: "Set de whisky",
        price: 29.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0FL2GS63J?tag=sitio200181",
        description: "Set de whisky"
    },
    {
        id: 220,
        categoryId: 2,
        title: "Altavoz Bluetooth portátil",
        price: 115.00,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/dp/B0DXKNBQS6?tag=sitio200181",
        description: "Altavoz Bluetooth portátil"
    },
    // ------------------------------------------------------------------------
    // CATEGORÍA: REGALOS PARA MADRES (categoryId: 3)
    // ------------------------------------------------------------------------

    {
        id: 301,
        categoryId: 3,
        title: "Set de Cuidado Facial QUIYUM",
        price: 29.79,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/QUIYUM-Cuidado-Regalo-Skincare-Limpiadora/dp/B0DK5GFXPF/?tag=sitio200181-21",
        description: "Kit completo de skincare con limpiadora y productos de cuidado personal."
    },
    {
        id: 302,
        categoryId: 3,
        title: "Taza divertida para madres MUGFFINS",
        price: 12.95,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/MUGFFINS-Siempre-Español-divertido-cumpleaños/dp/B0FW28HGD7/?tag=sitio200181-21",
        description: "Taza con mensaje en español, perfecta para sacar una sonrisa."
    },
    {
        id: 303,
        categoryId: 3,
        title: "Caja Regalo Smartbox Relax & Wellness",
        price: 37.90,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/Smartbox-relaxation-parents-wellness-activity/dp/B07Z5LKT1Q/?tag=sitio200181-21",
        description: "Experiencia de spa y bienestar para desconectar."
    },
    {
        id: 304,
        categoryId: 3,
        title: "Bombones de Chocolate Amatller",
        price: 13.47,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/Chocolate-Amatller-Original-Chocolates-Assorted/dp/B0756HHDKT/?tag=sitio200181-21",
        description: "Surtido gourmet de chocolates tradicionales."
    },
    {
        id: 305,
        categoryId: 3,
        title: "Mochila femenina multifuncional Leathario",
        price: 21.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/Leathario-Backpack-Multi-Pockets-Multifunctional-University/dp/B0CH8KFBK5/?tag=sitio200181-21",
        description: "Mochila práctica y elegante para el día a día."
    },
    {
        id: 306,
        categoryId: 3,
        title: "Smartwatch Popglory para mujer",
        price: 31.40,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/Popglory-Pressure-Smartwatch-Respiratory-Android/dp/B0CGJ8P6VC/?tag=sitio200181-21",
        description: "Reloj inteligente con funciones de salud y notificaciones."
    },
    {
        id: 307,
        categoryId: 3,
        title: "Camiseta térmica sin costuras CLOSEMATE",
        price: 14.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/CLOSEMATE-Thermal-Seamless-Extreme-Earthtones-Brown/dp/B0DDQ4FBDX/?tag=sitio200181-21",
        description: "Prenda cómoda para el frío."
    },
    {
        id: 308,
        categoryId: 3,
        title: "Set de invierno WEASIC (bufanda, guantes, orejeras)",
        price: 21.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/WEASIC-Scarf-Earmuffs-Touch-Gloves/dp/B0B2JKN53B/?tag=sitio200181-21",
        description: "Conjunto cálido para protegerse del frío."
    },
    {
        id: 309,
        categoryId: 3,
        title: "Rosa preservada decorativa Yamonic",
        price: 15.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/Yamonic-Preserved-Birthday-Christmas-Valentines/dp/B0D129W8B5/?tag=sitio200181-21",
        description: "Rosa eterna en caja elegante."
    },
    {
        id: 310,
        categoryId: 3,
        title: "Pulsera bohemia de acero inoxidable",
        price: 17.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/Bracelet-Bohemian-Stainless-Birthday-Gemstone/dp/B0CNYTHC5V/?tag=sitio200181-21",
        description: "Pulsera con diseño boho para uso diario."
    },
    {
        id: 311,
        categoryId: 3,
        title: "Sudadera oversize Disney Stitch",
        price: 33.19,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/Disney-Stitch-Womens-Sweatshirt-Oversize/dp/B09D55GFR2/?tag=sitio200181-21",
        description: "Sudadera cómoda con personaje Disney."
    },
    {
        id: 312,
        categoryId: 3,
        title: "Perfume femenino gourmand Eau de Toilette",
        price: 15.80,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/Seductive-Toilette-Gourmand-Cologne-Fragrance/dp/B09GKJ77WD/?tag=sitio200181-21",
        description: "Fragancia dulce y envolvente."
    },
    {
        id: 313,
        categoryId: 3,
        title: "Cuaderno vintage de piel LEATHER Journal",
        price: 19.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/LEATHER-Vintage-Leather-Journal-Notebook/dp/B0CS6XB4D9/?tag=sitio200181-21",
        description: "Libreta artesanal para notas y planes."
    },
    {
        id: 314,
        categoryId: 3,
        title: "Vela aromática decorativa",
        price: 18.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/Scented-Decorative-Aromatherapy-Birthdays-Christmas/dp/B092VP2KQX/?tag=sitio200181-21",
        description: "Vela perfumada para un ambiente acogedor."
    },
    {
        id: 315,
        categoryId: 3,
        title: "Espejo de aumento con luz GRIFEMA",
        price: 15.15,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/GRIFEMA-GF1001W-Magnification-Adjustable-Rotation/dp/B09QLVRZPC/?tag=sitio200181-21",
        description: "Espejo giratorio para maquillaje y cuidado."
    },
    {
        id: 316,
        categoryId: 3,
        title: "Bolso para portátil Tibora Lindsay",
        price: 105.00,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/Tibora-Lindsay-Laptop-Woman-195890153/dp/B071VK7CT8/?tag=sitio200181-21",
        description: "Bolso elegante y funcional para llevar portátil."
    },
    {
        id: 317,
        categoryId: 3,
        title: "Manta térmica con peso para hombros Comfytemp",
        price: 49.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/Comfytemp-Weighted-Thermal-Shoulders-Levels/dp/B0FB2XQLFV/?tag=sitio200181-21",
        description: "Alivia tensiones con calor relajante."
    },
    {
        id: 318,
        categoryId: 3,
        title: "Depiladora eléctrica Silk-épil",
        price: 85.89,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/Silk-épil-Electric-Epilator-Removal-Flamingo/dp/B0CQRTB5J2/?tag=sitio200181-21",
        description: "Depilación eficaz para piel suave."
    },
    {
        id: 319,
        categoryId: 3,
        title: "Set de regalo de belleza y autocuidado para mujer",
        price: 53.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/gp/aw/d/B098QTS954/?tag=sitio200181-21",
        description: "Pack completo para momentos de relax."
    },
    {
        id: 320,
        categoryId: 3,
        title: "Regalo personalizado de metacrilato transparente",
        price: 14.99,
        category: "Varios",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.es/-/en/Transparent-Personalised-Anniversary-Personalized-Valentines/dp/B0DW4CJ9FR/?tag=sitio200181-21",
        description: "Detalle personalizable para aniversarios o San Valentín."
    },

    // ------------------------------------------------------------------------
    // CATEGORÍA: REGALOS PARA NIÑOS (categoryId: 4)
    // ------------------------------------------------------------------------

    {
        id: 401,
        categoryId: 4,
        title: "LEGO Classic Caja de Ladrillos Creativos Mediana",
        price: 39.99,
        category: "Construcción",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/49IWd2X",
        description: "LEGO Classic Caja de Ladrillos Creativos Mediana - Construcción"
    },
    {
        id: 402,
        categoryId: 4,
        title: "GKTZ Cámara Infantil Impermeable 1080P",
        price: 24.99,
        category: "Cámara infantil",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/4b98EHI",
        description: "GKTZ Cámara Infantil Impermeable 1080P - Cámara infantil"
    },
    {
        id: 403,
        categoryId: 4,
        title: "Ushining Cámara Subacuática para Niños 1080P",
        price: 37.99,
        category: "Fotografía subacuática",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/4qVS2b0",
        description: "Ushining Cámara Subacuática para Niños 1080P - Fotografía subacuática"
    },
    {
        id: 404,
        categoryId: 4,
        title: "Olvy Bloques de Construcción Magnéticos Montessori",
        price: 29.99,
        category: "Magnéticos Montessori",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/4jOQmh3",
        description: "Olvy Bloques de Construcción Magnéticos Montessori - Magnéticos Montessori"
    },
    {
        id: 405,
        categoryId: 4,
        title: "KRAFUN Mi primer animal de costura",
        price: 19.99,
        category: "Costura fieltro",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/45jnw2u",
        description: "KRAFUN Mi primer animal de costura - Costura fieltro"
    },
    {
        id: 406,
        categoryId: 4,
        title: "WSNDM Kit de Costura de Animales",
        price: 8.99,
        category: "Costura animales",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/4b4I6rb",
        description: "WSNDM Kit de Costura de Animales - Costura animales"
    },
    {
        id: 407,
        categoryId: 4,
        title: "DeFieltro Kit Costura Niños",
        price: 16.99,
        category: "Maletín costura",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/49wUJtX",
        description: "DeFieltro Kit Costura Niños - Maletín costura"
    },
    {
        id: 408,
        categoryId: 4,
        title: "Juguete de Tarjetas Flash Parlantes",
        price: 19.99,
        category: "Tarjetas parlantes",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/4be9KCd",
        description: "Juguete de Tarjetas Flash Parlantes - Tarjetas parlantes"
    },
    {
        id: 409,
        categoryId: 4,
        title: "AHJ Tarjetas Flash Parlantes Español",
        price: 19.99,
        category: "Tarjetas español",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/4jSKMdN",
        description: "AHJ Tarjetas Flash Parlantes Español - Tarjetas español"
    },
    {
        id: 410,
        categoryId: 4,
        title: "Almaxi Busy Board Montessori",
        price: 21.99,
        category: "Tablero sensorial",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/49GJkX5",
        description: "Almaxi Busy Board Montessori - Tablero sensorial"
    },
    {
        id: 411,
        categoryId: 4,
        title: "HILAND Bicicleta Infantil",
        price: 159.99,
        category: "Bicicleta infantil",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/4jMdoFn",
        description: "HILAND Bicicleta Infantil - Bicicleta infantil"
    },
    {
        id: 412,
        categoryId: 4,
        title: "Olvy Bloques Magnéticos Montessori (95 piezas)",
        price: 29.99,
        category: "Bloques magnéticos",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/3LIrsmI",
        description: "Olvy Bloques Magnéticos Montessori (95 piezas) - Bloques magnéticos"
    },
    {
        id: 413,
        categoryId: 4,
        title: "Wootoyz Cubos Magnéticos (100 piezas)",
        price: 21.99,
        category: "Cubos magnéticos",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/4r2vBRA",
        description: "Wootoyz Cubos Magnéticos (100 piezas) - Cubos magnéticos"
    },
    {
        id: 414,
        categoryId: 4,
        title: "FMKLDENA Guantes Lanzatelarañas (juego de 3)",
        price: 13.99,
        category: "Accesorios superhéroe",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/49JRE8F",
        description: "FMKLDENA Guantes Lanzatelarañas (juego de 3) - Accesorios superhéroe"
    },
    {
        id: 415,
        categoryId: 4,
        title: "Lansay Blopens Centro de Actividades",
        price: 10.99,
        category: "Aerografía infantil",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/45kGx4N",
        description: "Lansay Blopens Centro de Actividades - Aerografía infantil"
    },
    {
        id: 416,
        categoryId: 4,
        title: "Ravensburger Memory Mini Peppa Pig",
        price: 9.99,
        category: "Memoria imágenes",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/3LIKVUv",
        description: "Ravensburger Memory Mini Peppa Pig - Memoria imágenes"
    },
    {
        id: 417,
        categoryId: 4,
        title: "Melissa & Doug Set de Comida de Juguete de Madera",
        price: 0,
        category: "Juego cocina",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/49IWd2X",
        description: "Melissa & Doug Set de Comida de Juguete de Madera - Juego cocina"
    },
    {
        id: 418,
        categoryId: 4,
        title: "BONNYCO Puzle XXL Animales de la Jungla (48 piezas)",
        price: 13.99,
        category: "Puzle XXL",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/3LWvzf7",
        description: "BONNYCO Puzle XXL Animales de la Jungla (48 piezas) - Puzle XXL"
    },
    {
        id: 419,
        categoryId: 4,
        title: "Hahaland Kit de Manualidades de Costura para Niños",
        price: 20.99,
        category: "Costura guiada",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/4beb6Nj",
        description: "Hahaland Kit de Manualidades de Costura para Niños - Costura guiada"
    },
    {
        id: 420,
        categoryId: 4,
        title: "DeFieltro Maletín de Costura Infantil",
        price: 19.99,
        category: "Maletín infantil",
        image: "https://placehold.co/600x400",
        url: "https://amzn.to/4jLQYUM",
        description: "DeFieltro Maletín de Costura Infantil - Maletín infantil"
    },

    // ------------------------------------------------------------------------
    // CATEGORÍA: REGALOS PARA NIÑAS (categoryId: 5)
    // ------------------------------------------------------------------------

    {
        id: 501,
        categoryId: 5,
        title: "Estudio de arte de uñas",
        price: 14.52,
        category: "Moda y maquillaje",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0B4BRLFF9?tag=sitio200181-21",
        description: "Estudio de arte de uñas - Moda y maquillaje"
    },
    {
        id: 502,
        categoryId: 5,
        title: "Jackinthebox Poke Poke Art",
        price: 18.79,
        category: "Manualidades, prensador de flores",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0D839DLTL?tag=sitio200181-21",
        description: "Jackinthebox Poke Poke Art - Manualidades, prensador de flores"
    },
    {
        id: 503,
        categoryId: 5,
        title: "Mini máquina de karaoke",
        price: 23.06,
        category: "Electrónico",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0CHS2VNHC?tag=sitio200181-21",
        description: "Mini máquina de karaoke - Electrónico"
    },
    {
        id: 504,
        categoryId: 5,
        title: "Kit de sellos de gemas para el cabello",
        price: 17.06,
        category: "Moda y maquillaje",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0CDH69RMR?tag=sitio200181-21",
        description: "Kit de sellos de gemas para el cabello - Moda y maquillaje"
    },
    {
        id: 505,
        categoryId: 5,
        title: "Kit de fabricación de pulseras",
        price: 17.08,
        category: "Manualidades",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0B4BX6SY2?tag=sitio200181-21",
        description: "Kit de fabricación de pulseras - Manualidades"
    },
    {
        id: 506,
        categoryId: 5,
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
        title: "Patinete Infantil",
        price: 32.47,
        category: "Patinete",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0CCYMV1T1?tag=sitio200181-21",
        description: "Patinete Infantil - Patinete"
    },
    {
        id: 510,
        categoryId: 5,
        title: "Kit de fabricación de diademas",
        price: 12.97,
        category: "Moda y maquillaje",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0B3WTSVSV?tag=sitio200181-21",
        description: "Kit de fabricación de diademas - Moda y maquillaje"
    },
    {
        id: 511,
        categoryId: 5,
        title: "Coche de Control Remoto",
        price: 25.63,
        category: "Autos trepadores",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0CTTYRJJY?tag=sitio200181-21",
        description: "Coche de Control Remoto - Autos trepadores"
    },
    {
        id: 512,
        categoryId: 5,
        title: "Crayola Color Wonder",
        price: 23.22,
        category: "Arte y manualidades",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B084Y3DLFJ?tag=sitio200181-21",
        description: "Crayola Color Wonder - Arte y manualidades"
    },
    {
        id: 513,
        categoryId: 5,
        title: "Kit médico de juguete",
        price: 24.18,
        category: "Juego de imitación médicos",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B09PD6YWF1?tag=sitio200181-21",
        description: "Kit médico de juguete - Juego de imitación médicos"
    },
    {
        id: 514,
        categoryId: 5,
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
        title: "Tiza para Cabello",
        price: 13.66,
        category: "Tintes para cabello",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B07FTGLWDR?tag=sitio200181-21",
        description: "Tiza para Cabello - Tintes para cabello"
    },
    {
        id: 516,
        categoryId: 5,
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
        title: "Kit de maquillaje",
        price: 18.36,
        category: "Maquillaje",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B095LT69HN?tag=sitio200181-21",
        description: "Kit de maquillaje - Maquillaje"
    },
    {
        id: 518,
        categoryId: 5,
        title: "Kit de terrario de sirena",
        price: 8.54,
        category: "Manualidades",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B083Z3JMGP?tag=sitio200181-21",
        description: "Kit de terrario de sirena - Manualidades"
    },
    {
        id: 519,
        categoryId: 5,
        title: "Lego",
        price: 16.94,
        category: "Juguetes de construcción",
        image: "https://placehold.co/600x400",
        url: "https://www.amazon.com/dp/B0BRBMNN93?tag=sitio200181-21",
        description: "Lego - Juguetes de construcción"
    },
    {
        id: 520,
        categoryId: 5,
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
        price: 18.69,
        category: "Iluminación",
        image: "/images/tecnologia1.jpg",
        url: "https://amzn.to/4pDBnZz",
        description: "Guirnaldas solares impermeables para decoración exterior, fáciles de instalar."
    },
    {
        id: 602,
        categoryId: 6,
        subcategory: "Smart Home",
        title: "Echo Pop | Altavoz Inteligente con Alexa",
        price: 54.99,
        category: "Smart Home",
        image: "/images/tecnologia2.jpg",
        url: "https://amzn.to/48SFUQN",
        description: "Altavoz compacto con Alexa para música, control por voz y hogar conectado."
    },

    // Subcategoría: Gaming
    {
        id: 603,
        categoryId: 6,
        subcategory: "Gaming",
        title: "Auriculares Inalámbricos Impermeables",
        price: 23.99,
        category: "Audio",
        image: "/images/tecnologia3.jpg",
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

    // Subcategoría: Movilidad
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
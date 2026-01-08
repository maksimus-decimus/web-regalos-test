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
        title: "GUGGIARI Cartera de Hombre con Monedero y Tarjetero",
        subcategory: "Gadgets",
        price: 289.99,
        oldPrice: 349.00,
        category: "Accesorios",
        image: "/images/cartera.jpg",
        url: "https://amzn.to/4rYJsJM",
        description: "Cartera compacta con monedero y múltiples ranuras para tarjetas; diseño pensado para el día a día.",
        tag: "Más Vendido"
    },
    {
        id: 202,
        categoryId: 2,
        title: "Tommy Hilfiger Reloj Analógico de Acero Inoxidable",
        subcategory: "Gadgets",
        price: 319.99,
        category: "Relojes",
        image: "/images/hombre2.jpg",
        url: "https://amzn.to/3YpHaGa",
        description: "Reloj clásico de acero con estilo atemporal y esfera analógica; ideal para uso diario o regalo."
    },
    {
        id: 203,
        categoryId: 2,
        subcategory: "Gadgets",
        title: "HP Prelude Mochila 15,6'' de Carga Superior",
        price: 129.99,
        oldPrice: 180.00,
        category: "Mochilas",
        image: "/images/hombre3.jpg",
        url: "https://amzn.to/3L1ZWjN",
        description: "Mochila ligera con compartimento para portátil de 15,6'' y organización práctica para trabajo o estudio.",
        discount: "-20%"
    },
    {
        id: 204,
        categoryId: 2,
        title: "SkyRunner Drone 4K",
        price: 499.00,
        category: "Drones",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP-Om7UBSg7non487iB4gUIziD3Dbhz696herDB65xIr198dnC-sRX0fNkcCHPSxpZrECuGijuA33yOLGgvFG6oP5C33_GjkcbxksU-p5JSuXRvw89IGxnQhNJr7EQMG28F-JTrz0dwtn933GPVN2sU_8KuF_DRkI0wypO-8pXbe_8hSGYTpK4-pVYZMau266C8_HadgZ3c55IFd1HDftsmALPdSJWLGN8wbvUL8uxPXFLBkc-MtF2kMj0AJVWEJZfJm405R2H0yY"
    },
    {
        id: 208,
        categoryId: 2,
        subcategory: "Experiencias",
        title: "Cata de Vinos Premium",
        price: 90.00,
        category: "Gourmet",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOKHq8Lu7uUc9YY0ha9qbMrNpc5u6JX2FDJ5s7dd1sf_PgMkNdCgoGZFDlWUFgA3bYGaE3jLBJO41lkcyt_J7DY-k3za96HPUUOWw5CKd2yRU9Tn5kqxFZs9WEUhi7091Xd6pAtdaFdwPqd3ZO9mZ1M3jjJIpnLUqMQ9KAHiWae9JE0rY1HXLPkXwb7sHK0Wi10kylzDCV8TyOwPHY6_8hK9pdu4jFGyJ8ePZFAsL0OM6Gn3Q7F3-FLwZG2AY9uWvI4NfgsdtjoUk"
    },
    {
        id: 209,
        categoryId: 2,
        subcategory: "Experiencias",
        title: "Salto en Paracaídas",
        price: 250.00,
        category: "Aventura",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmg0HIW_-l-KBlM2Y3VxH_m_J32-EyK8E90lYashGgWaHeaIpLOO4nNMoM3W6rJNkSZUeR3HZd6f8g2p1bxxaARhZZzX8tE3Abru6ust8b507xi_UH65Am8o7euZZ7LQ8tRXnaUVwJZJ4fuJrEggB_-8v5NPidqd7lcqPzynXf8ZVMD3VHfOITUgD_Q3acBBCkxYLlE_Z_4tFjPIEWv4Kj8T956Zsr_sT8pelA3MM-C6AhBjfeGTHH0HWxc4ihTTCGrJrp0rpdF6Q"
    },
    {
        id: 210,
        categoryId: 2,
        subcategory: "Experiencias",
        title: "Masterclass de Asado",
        price: 120.00,
        category: "Cocina",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUWOVHK6RvYeD0ktNmbkQy-CrjXviuy8mlwGNb3CXWLJKq8Cc_pGJvQ2SDSygZqPDXfGhf7goyemTOrs2i5fYWkYaeaOHAzG8S2F1RW9xbBXhW-8URbvCjoJBVr7lImJwo50R5LiRFP8Q0srJfTlHHlIy4FV78MBeSVqpTRzW1wCtv8wbmndTSso2a4aM0qjx-G8FJaKlPZ8UAmb8kMkSqh8CqcxCGR8tN6CyMHgLePBIHBsgUYzEo2g3YeU-OwCBILTd1cfkkq70"
    },
    {
        id: 211,
        categoryId: 2,
        subcategory: "Estilo",
        title: "Billetera de Cuero",
        price: 45.00,
        category: "Accesorios",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYpAi2XWZyTV6-1-MqVA_zKqjUBJYwogccxRqTsb_boLBN2bN8typEbFYFhCk8jghtvJb97RSli4Vs_0D5tlb1Gm23l5wYGgYnUY-QYL4cXSpDQKaA040T93A4LDuandVrrMKp43PebdpKziKWHXiPWGa8xDbawKzIMTr7WCKSen2JL_JKK9oGofAHzvvmnfmSYQlIfiWMwwmS3uA4LcU-OZYsKxRyFrngw-udzmXExc4iVYvUVka6LjIxqYwJ0TgIwYRNRKzPhLs"
    },
    {
        id: 212,
        categoryId: 2,
        subcategory: "Estilo",
        title: "Gafas Aviador",
        price: 120.00,
        category: "Accesorios",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRnTQlHpKUL74mLUzfUNcclifmI9nxdHvWCX5DmXZgOWMAIXRiNpiIey1ldTmQgec_jH6dHnEHu5IVP26PlGLj2J1573m2u_bRhXp5BS_ydhVZ6bTrBMlxQJe7AtAreQTTPc9AShXKiU40MgGsKIhuFm8iCoLsTYh9iqZm1qAnr-NQ8duh_IOnN7UdzZ4m0pqUQw54sVFifIcYQfAbKGy-fOvBesIyARWx1_O79mHlqLIvBvPXjTWjP69Fi-95e3RvmfeqHp6uwSA"
    },
    {
        id: 213,
        categoryId: 2,
        subcategory: "Estilo",
        title: "Corbata de Seda",
        price: 35.00,
        category: "Ropa",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2X2fUwxjJBDB48NK9i_daIoEA8bY0shqVHm0a1PhvcbRu8uCALC14cQQn9m4MYUdqYAyGlm38XkZZ5ATvZTyf1jTCFGib0cGg8Cp0IfRgZFCA3D_DqzMf0Kmi0Q0IDLvuASNYeLFmTTy4w8Bp8KU0VfsHhjTrlphIUur-6O9EpF2ljT_d50Kxasm7B9T5ol2V2iuYTb2HCPU3nhofE34DcuICg-DFxEWY08RBWmdxtSjOy-vAYgutrX0vfXcYWpt7UTpX507Z6Q8"
    },
    {
        id: 214,
        categoryId: 2,
        subcategory: "Estilo",
        title: "Sneakers Urbanos",
        price: 89.00,
        category: "Calzado",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA833RtCR_iqzL-Akdw9IVhG27SIbwMrkvwvDTrGPGdgnZnJKsCgCUDrMjlsTBXF6lpNpebYMlUsXvYqyzFafju9myRPbrIUcCum_8y9m7TfzipOMZRdzuRLeVA7mJFRUtS7MRiuvJr3fQaQ1FGH3m3fgfDzSFeVuFyELIvEgGD8H4iy-CxDtABRY_sjraJmRFW67_YoX7WDcLstitjfEm4LEAhwt_aHGSS7vVnUoCEMt9YLKWVLgZHEL5f7QcK34WO0Ph9uUicR7I"
    },
    {
        id: 215,
        categoryId: 2,
        subcategory: "Interes",
        title: "Historia del Mundo",
        price: 24.99,
        category: "Libros",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5kRs7GplRVxSl-0tSOS-8FRCT38hDK9QaH-f6qhQ2NuaZ8dpXtKvGhURhQNEfewfLPTzpGpVSWtSZL4C5U8Zzw6lJrpcIBCTQpTqZxqjm-j2fO-ZXA1iMs3gIMsRbY8L8Kl8IbGTYz1fFMkRhLqfQJn_yhU0yULfe6V4Gjb7wZsDziro5sa70QalUMwDtbObV04l3fY28t-UMoJKUbE4W7mIEWB2gmIJdFmyjJPsgKcfA0SjOgtt86uZx129XDQ8MIY3xWjV-dMY"
    },
    {
        id: 216,
        categoryId: 2,
        subcategory: "Interes",
        title: "Kit Cerveza Artesanal",
        price: 59.99,
        category: "DIY",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq0yiAdz0oLMI2gfpk2-8sciJO9MPZt5jrxMpSIAu9hmR7GBGDhzp3_5cDfVGSU6GV9fSrm7TdhFFPvSQHT5UVcdcoekgSk8itGmz_q70pOnUoyPZuWHSJwydfnNiL10zgUi9pyDe1HgXtglmU5D6_l_fEbXtXaodS-2vELmhpeor3VeGF_nHIBgv-si9zn1mlhNhjbrEoOFeJUODXq1tXPB2seN7Imrj_JInMxhyliZ5EEtOxrOD9i-adZZ6UfW-7mQKPbs6rP70"
    },
    {
        id: 217,
        categoryId: 2,
        subcategory: "Interes",
        title: "Cafetera Italiana",
        price: 40.00,
        category: "Cocina",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChn-wSNct87QKoOlZoXFuqmOu8uHJJVZugQhIHXN6Er3cD_oFsctkpCpEPzb_VS6gIwX9pQ4eah_gyIWzgsPMpQYK8IqMyvfPhkgnS9-AaoRDVisfixCUpUPfBrxxu3m1qfXXUsWLBYUpPnBnusMjoWL8QgqWDm2qqRbo-7jcxtoe6BozA_jVuRBy31qiL0wkFA3qZz7_ss5Dg3TWEDhlBArgrlKFTP415X3HlX2rysTKHhwtlbiuKxKkUwVYAHtxbvcca3YTzd9Y"
    },
    {
        id: 218,
        categoryId: 2,
        subcategory: "Interes",
        title: "Set de Golf Básico",
        price: 299.00,
        category: "Deportes",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7Hu8AlkAHVmozV1FP3qS4R5a3NN5gLlt2DRoFPwcf_b87QU2S6lJbQu1aL_rAv1hBQ3nTewhODj00Q9zOV_bVRRGcvg1aJD2__njK9NrfBLvU2wivUnVniZkfsiArTQ38cDg0RmKuYXCyqEzEuxmYdZoMGs39guilS8tWm1LTBIiueL7tGw13Q0QxJvOk7H-NlnWRRm6tLN2-RNbh_G6BnKkCuHtNr0sspLXGOW8rJ2UpBQYJQLpsoG6d0zGB6rEom04vKZHY8uc"
    },
    {
        id: 219,
        categoryId: 2,
        subcategory: "Interes",
        title: "Tocadiscos Vintage",
        price: 129.99,
        category: "Música",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUquggzKJBFWsPAyPdCBQ70BPnE6Kc_Ipug1o1M_QjmVHcD_OIKoTId2oYHSyCiL0BmMTjlG3zwdg1gS2Vg5cZg0KP7_EbmC4ioOzzo8gAOtvNnhHl4HoQ4VaSTqb36kEcoyuVVWWK779rflmje8G8Tm6SIFqHC6Th9-fQD10LRdG1hISTnpO_XflAp0iz1K65DEGjaCyda2l2mwaIlBx7kTjZ5VpU5Xy41XgTKmSYV_fzP1zu_194DkPJn-b-F5FeJb2xBAcjNlo"
    },
    {
        id: 220,
        categoryId: 2,
        subcategory: "Interes",
        title: "Kit de Afeitado Lujo",
        price: 75.00,
        category: "Cuidado Personal",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsD2pbZDVsD6ydEdsqO2YyO5lVTE5suBhgFE8sdSMjoeRJLBYS0G6RBQac-TdXuERW5PAzXfaUDNCgBBaTM1Y5vReIZ2063BBUJ-tY4M6-peuNDPRpheeurvW7zKzSJPhsjxKicNUwm-FPgsXbNyKPBv3QLLGGeXw71h-TdGUrL92YunxDmk4tKy-bsAVZAM2Se3NGDJxcprtkAM5Ic7FqfNyojy8jwJzB3BcIID3LJDqxAs5NbQGu5WXRo4sDr09WG5C3lPjaEak"
    },
    {
        id: 301,
        categoryId: 3,
        subcategory: "Belleza",
        title: "Skechers Keepsakes Pantuflas para Mujer",
        price: 79.99,
        category: "Calzado",
        image: "/images/mujer2.jpg",
        url: "https://amzn.to/48EyWA7",
        description: "Pantuflas acolchadas de estilo botín, cálidas y cómodas para el hogar."
    },
    {
        id: 302,
        categoryId: 3,
        subcategory: "Belleza",
        title: "Loop Quiet Tapones para Oídos",
        price: 39.99,
        category: "Cuidado Personal",
        image: "/images/mujer3.jpg",
        url: "https://amzn.to/4iZ0VxU",
        description: "Tapones reutilizables y ultracómodos para reducir ruido y mejorar concentración y descanso."
    },
    {
        id: 303,
        categoryId: 3,
        subcategory: "Belleza",
        title: "L'Occitane Aceite de Ducha de Almendra (250 ml)",
        price: 109.99,
        category: "Belleza",
        image: "/images/mujer1.jpg",
        url: "https://amzn.to/4q7Sbrx",
        description: "Aceite de ducha que limpia suavemente y deja la piel suave y con aroma a almendra."
    },
    {
        id: 304,
        categoryId: 3,
        subcategory: "Hogar",
        title: "Lámpara de Diseño",
        price: 95.00,
        category: "Decoración",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSi1ss1TgBj6Y0G15ecLXQMvlLOyk3V9bT1CoHENorCw8iIYnfBiniqAcg_DT6ojmQOIIw6bHmxCrfn-3NAlHJ902YyfjPkr0tL3Ew1Ka2sRiucqYR9bJKz-Y0bpLSR1r2_3qCQMSQw6Ynka8EXoIx0dcMXJ2sUm8T302z6NAlhuxfxkPPhfn9oFDEU-y42GLashChOO9Diqv5zcDJGCLoR7J6ecdfwslZHRu8L6R06lmYGrf1tNISySos0M6m4R2vsV4_nUPLChA",
        tag: "Más vendido"
    },
    {
        id: 305,
        categoryId: 3,
        subcategory: "Hogar",
        title: "Manta Tejida Suave",
        price: 60.00,
        category: "Hogar",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPcF4JAZc5mgkBC2dY6cLi27dUnNljxOBdGAxrvI0D6IlyndBJQwzgQyLT8MycPlR7S3drijLdPZuUm17xACArz6Tu85h697wu52OsPLzrejLo1M5jOaagn0Z8zUl-X8_23oI5iui_97xBhLMbxjGc8tVQENFifGuQ2gpd3kcr2MvFRt7nNBX3SsV8K_WKPou1sHpvgkG_EjYcC4jjdVL8RBfAk9uVRHYqDqpjXRpvDwB1p0J7p_s9oaqR_L3ZaEMXWPY6lqd4rt0"
    },
    {
        id: 306,
        categoryId: 3,
        subcategory: "Hogar",
        title: "Jarrón de Cerámica",
        price: 75.00,
        category: "Decoración",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfdvgwng1m6V3_FLVEOk6FSqErMURpvee3ZivfFm9zViSUi9JprOrISpCnE17EXdk8T9Kc1XLANVz0gHCXMnrbB-ZTL7Jl7RdU0YaAE7kmkXD9XTe1FtlTt-cYX45_VDbaFA9AD2z-0J6A07SqORN7N6f_wVCkTIoMmyKbEG8JP1ph5Ufq0nncT_6zJKL0SrALSPq1FlaSFyqYCYGGSP4a5q7lYCskL-1TuVQjQbYpuV5SxHdT45wt9lP-6PG-j-Gau2Mcu5CzilE"
    },
    {
        id: 307,
        categoryId: 3,
        subcategory: "Moda",
        title: "Bolso de Cuero",
        price: 180.00,
        category: "Accesorios",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKpAnsk7J27MB7u3HDr7dYcw-ITgM9my-J597PmxzEz2r-D1Cqxl1V8f1hkxGrFCPNFxyLezyZPE3A6HvObgXX7vn4SfjqmItXRJQKPdWkBmUaLQUXIkv0gsH7f0Oz2Oel680D8tswF587Pmxdsd35CU0H4U6TwQ8Q6aVuyrrFvaaROxztsshsPU25g813dfLEQVh-VtNM9GUX_fp5abTYZcy2iRViGb6Cwm2NGwh9lVsxWTXreKm3rRBd2VIPhnjUFvcPfOVOLA4"
    },
    {
        id: 308,
        categoryId: 3,
        subcategory: "Moda",
        title: "Bufanda de Seda",
        price: 55.00,
        category: "Accesorios",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVQbRJvmHsCoNkk-7adiRVfh9yxA1MCDP4t8_vii8FgCsaBKWKSH1F1K94KKOwwNp9i_R8XJ_7exJknsAl7ChjopRPxH2LtSbu0JXkjAGEp_9TV3xw48OhzhQBtlGtujw7ZZXjBzrtddi_Bc5fjsbuQFvMihTQyYGe9Kn20U_cpxh5L7RAJ_57wWSR31sVKkk259ve-JNMEc5kH7JSc_Idjj4Q2qdENXudIG35ou3kTaOVCBvqPQ_a05JtGjB43k5Ftm9skf8txjw"
    },
    {
        id: 309,
        categoryId: 3,
        subcategory: "Moda",
        title: "Joyería Minimalista",
        price: 89.00,
        category: "Joyería",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb80cJS6B7Ihxp8RLISdrPsugVqHqnR70DXkBpdHNofIJ9OMYMVwMEGM0DKPHUl2UISzH3Di4dVuY7RiE-spQFRFETjCsa9PzfNDuceZfxXLgqlwL8tpyzQ9K_IF0quLq5KZntzFKc3CLNdVajA8ZVbT0Mvr1ofhyvZd2Nazi-EI36GSCcdqVl3_DZHu7w48bwLRcOSsXmeHGRwPreWqw9PZAWFGwkCCUgUydTXYLp3qI_ZNLRU-4Znauc41OdsAhcJlUXgSZJwTg"
    },
    // New Kids (Boy) Products (ID 4)
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
        title: "Muñeca con Funciones y Accesorios",
        price: 32.99,
        category: "Juguetes",
        image: "/images/nina1.jpg",
        url: "https://amzn.to/4rYtK1r",
        description: "Muñeca interactiva con accesorios para fomentar el juego imaginativo."
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
        subcategory: "Muñecas",
        title: "Muñeca Interactiva",
        price: 55.00,
        category: "Juguetes",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcnEtjkqNu8wh_qzpesuqkhPLhQ-HQLD030OHtxJT__fey35w84ZmbxPuRWGT2aVrSbpi0CfBsxs_IhOeXUHwRy4oVMNUtDs74VTRGvyOPayX8HGY5fkGqsC_7Fo2pzdd4YWYheqhBrOSdKsF9RQzRW4p1UqRqcw9h_qDd-b8j50GKHQyxYbtVe9Jujru-Vk-WqzyM0ETSPz47m79C2KECIZ1ZY8mYNWfbyDCsq4W423I8sQmG_E6t4B9as7kwhpIIPNYPAHhP6t0"
    },
    // Nuevos productos "Interes" para Niñas (ID 5)
    {
        id: 510,
        categoryId: 5,
        subcategory: "Interes",
        title: "Patines Retro",
        price: 55.00,
        category: "Deportes",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr010zdWNBFi_Gfr76vUna1x-tcNqpVYrN9t0-OMTSpIGpBOVb3BeJvC5WEtAecFMSOJCa-bj5H0J7YQSVAKCJQSJfGDG9nC-OcoiKPL2Vl8LHbFflzztxtQnJNiXao2nFeDa2Zxp7gPzE_YOuHCWvRDAs7Yi2QJDktJJ_imbmZHJiZr8ytCkxqRaRdduZDIz0W-rhwRYYfiqBojDCt-XsZAiswAMqEo3-BmZAs4boB8F6z9n-2OcLhidtpqp8WSnFmCYda_qUPdg"
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
        subcategory: "Interes",
        title: "Libro de Cuentos",
        price: 19.99,
        category: "Lectura",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcnEtjkqNu8wh_qzpesuqkhPLhQ-HQLD030OHtxJT__fey35w84ZmbxPuRWGT2aVrSbpi0CfBsxs_IhOeXUHwRy4oVMNUtDs74VTRGvyOPayX8HGY5fkGqsC_7Fo2pzdd4YWYheqhBrOSdKsF9RQzRW4p1UqRqcw9h_qDd-b8j50GKHQyxYbtVe9Jujru-Vk-WqzyM0ETSPz47m79C2KECIZ1ZY8mYNWfbyDCsq4W423I8sQmG_E6t4B9as7kwhpIIPNYPAHhP6t0"
    },
    // New Tech 2025 Products (ID 6)
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
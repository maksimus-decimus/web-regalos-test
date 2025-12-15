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
    {
        id: 103,
        title: "Apple Watch Series X",
        price: 399,
        category: "Wearables",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAeMsjYk2UAZ17SiCSr2YlLBqOxNuUqZoT7Vhh7em_zAM4sF9zC97rxXVeTUchEGzVAhOfSw4zXIf8NXjYa_Z_jQg4w86DNBWW1_QeKaRFLtvOzQBSi1dL2C2Qt8om21jj5YrM7znhPD0rNJObQmB6INA6R-YdmuHh8HebLeOfxcUC4EO1fpDrtU8TMX1xEA_VSyP3ASLeHib8iK-UvspjOuNgWjvJaRmK0gxEA-rcp8fcet4UP3iNON30jumn5mQ0Q23mdLu7sms"
    },
    {
        id: 104,
        title: "Google Nest Audio",
        price: 79,
        category: "Hogar Inteligente",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC441lD7ahExAoWYqgXKVvGap75jNgW62OV9M5E2SFnkAyXzbDiaqMKKetk75Mkcilg-JP7hyifM__q8Wtpd3bTqd-Kx2KAzgMgsbzlYdsP8Y-EQyR4znlfbADzZfpWr2WOm7Cisok4VVfeHkJV_6kSRlElKdiWzvMqgCe1toF3e-lOkuD8__kjKBJeOjqsHKUmM8EagOb9A7DqE7fKhMW3InNY2BRKNnNDNnH7LMYv0-kotCLL5oHHuJzJ9S5L1Nd0IBISoVLQ3Kk",
        discount: "-20%"
    },
    {
        id: 105,
        title: "Polaroid Now+",
        price: 149,
        category: "Fotografía",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_FKhR0cZ3xIvU7rWM9N-QWo6g1abXZMy4r3aTK6c6nKsgRCMuf1RWXwt7zsIALlK3iJXWQcoCHg16vIQMMfpOIeo10OL7_w6eP1UN6Y590tWYPEBk2DhbW5fE5GSYxEIer2aueLzLezpAzc4mw590E8hFZSFFnIpR0aelDgIsvjb8gI8lm61YrBbISvhsbMaDXNT4U7DKRsRQoPJhEnYSKqT04aaaq95KbP6QYJitEpz3RkIPgz3GnAzZcspswi7lKqimr21jhSs"
    },
    // Products for Fathers (id 2)
    {
        id: 201,
        categoryId: 2,
        title: "Titan Smartwatch Pro",
        price: 299.00,
        oldPrice: 349.00,
        category: "Wearables",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0CvV4MF4ZgCyG32yhghOzAQSgPN05wp3w_mKTBuWEjXDa-ZcfbzCZiwJPx3GKwvVExK_Bb65_e2ktD-EL4snaH7csYp8k5RuswttJNB7wRSKfbreVZxGgpKsH97msD19KswBNPUAu_OZI5FysBBkRg_bgkiqv04-FeL5XWzcXhVvrp_MNgPgpi0F4SqDVxvuDsj0atOQR1kR5ISSjfLdNc4T4uYtlwY3vCbm8ZfMPRBRelarZn4TI52siFXcs79oNI_t5bZrm43g",
        tag: "Más Vendido"
    },
    {
        id: 202,
        categoryId: 2,
        title: "SonicPure Headphones",
        price: 199.00,
        category: "Audio",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmeARDRqeiNFqqw2mGeGb5L9Bx1NFAEeRbYimNM2qCqN_PF9szIXgrYQF34pyy023IRLoOF5I5anxEbXTY0p1O2ytUfb7n3MGwNIBJq5k5UBo7EbwsXlhKE3pdOpjvBhiotRLBh-6iC8k2NbbFYRu8YfscQlx1UYe1M0Gu74YolaTycNEVoTQBJtqYOyg5iZ6-dtw7iBvVGSIB67TSSrOnByPs2sAPkWTQ60bTN5jUanGg52jzskRXmkyt8QDSWUX0Z5e_xgdfxIA"
    },
    {
        id: 203,
        categoryId: 2,
        title: "Taladro Smart X2",
        price: 144.00,
        oldPrice: 180.00,
        category: "Herramientas",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvmJCjnUbIAOIQtS9963oPtM_nRhxjiOdfBUUeW_Eup1ZVR2lYMssISUW5iZ0Ei1e3NsWPp8sr-rdIX5FaQ05ZNZdG2rQRtDmFpopWGRAs0qYuEXkS6tyhTsyuJuiLaKob02v3mwW_4dw97v-x4GFLq4SZOS0yzJVZEYytdkZ4YzTR5DY9fFhniwIJTgGcxrIaXHmaQuvOtT-r45Jpc0QbdygGL_5EqeADTBHimunKuVpJ1HDEHKRKsPjHt8x4K_8rDlpf-S9OyVQ",
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
        id: 205,
        categoryId: 2,
        title: "Barista Express",
        price: 550.00,
        category: "Hogar",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFEV1qNQbaEjL5vP1ZezoxUJ85rqE5-YfJFt6em7zqKlMvoZPuFhPJMjg2etWieTawTLVckQ2lqoMLBMADooXb7ivJcHcAJ3rMYONIAgaTGA8ZEj3bWWi3gXFfyhGJXUqt6BEqCbooJY1T2qsdo_ZlvE_Dbzv4HHfs49e7bvY8lR63NkcOYKlnMd3Kd1fmfCoUzNYf_oDPm-R3q1n2T25Iz03vDnA47TgH_kTXj94FI3Hc_ttILgHZ1KqfVFKp680sL0QRXy2pUsg"
    },
    {
        id: 206,
        categoryId: 2,
        title: "RetroConsole 64-bit",
        price: 89.99,
        category: "Gaming",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRJD8LO78wdPCEDVIXLueMmkHq_SljkeQ7L7XaYWMrLfVcpCpLbSgAzfC6RxIipp76DfRSJPw0ciJjLXNR6cQvZUdWplz3LLjfw2GMPjM2_h-FUqicSps1HM8Jd7dgpga4BTMsew1TRCe275bkm70_dn268ZgfgYYjRtZ30vuzUHeyPRqAARIzVQy3bi55KFj6v-snUcyMmq_oJFkr-parinnfnaGqNlWg-yNnVeMxiPbJupMN53gQSEx69TyrhzLUfitFqqOoYXw"
    },
    // Products for Mothers (id 3)
    {
        id: 301,
        categoryId: 3,
        subcategory: "Belleza",
        title: "Set de Skincare Premium",
        price: 85.00,
        category: "Cuidado Personal",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpo_vm6ZwEG8BNJ5hsx7va_N6vwPAXCrDtRHwqHKu36oDQ4Tr3PjMlnoMgF6rgfxqQB4GF7nqPzWsW86MvTjYMlIqO88AtC_R_kVe-5vS76IwlwBT8fFzAO2NnDbrQaDSQm61yxRFFtlgQFRZMb0HTdDwOIwMvFFNJM5336ktnvGCAp5rZ_EdMdZnys5RVseMT9J3zfQ9CVBsbjnx_fz3DUzaa3dCJALXVYzxt9ePmIEwQCC6iOMVmi5uyM981cpJHExFviVOS07I"
    },
    {
        id: 302,
        categoryId: 3,
        subcategory: "Belleza",
        title: "Masajeador Facial de Jade",
        price: 45.00,
        category: "Belleza",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAWR1ltb7HoJN8Hgd5MfSEnCeh-GAYFyTqZ3vL_UWNtWr3kfh0tz0SjjcvukNoefN5OQb6ALMyAGCCy2l7Q8JNgARM6XGRKTQCEGKtOxz5sinwg3AWFMBKIttcnNPqpZRGfOQQjzD5QIJFfwDLxKNAlBSPhDePqVPE2yOzIdD9oJhfS-_a9t6flutCXyGfvIV9HW68F5FrHi1KnGJ8Q61loszUFnbxJMcArI0CEJHGKdDU9t1V7uiJVkF8NERuNhrIg5XYL-RGMYg"
    },
    {
        id: 303,
        categoryId: 3,
        subcategory: "Belleza",
        title: "Eau de Parfum Floral",
        price: 120.00,
        category: "Fragancias",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAElcARZxX1ec7dGnfm7OXMjAkb_bApi-2nGqQZludMpMS-r3gnN1q3-c4HMbQOdKGe3VAopae2wFt2OqExTLaEGkzpgEIVE_l_KYbc5kP_fo2PILOUomC6gzRPAanzx4ucL2gSnLU9h5S_eeQvxN6vwToC8tzi0xLzvQ48Za38liBKBXissIyTIcZXUOAbpKV9j4aR6JpNc8jeOgYpqdWVUmP8OHfWcfhvmGJMICKKAIRjsf7iqFkMgerlnXndihtUNCs-j8fChjY"
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
    {
        id: 310,
        categoryId: 3,
        subcategory: "Experiencias",
        title: "Día de Spa Completo",
        price: 150.00,
        category: "Relax",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNuIjt2mrF0St_DJYFR0HwgsECZprR-WqrFP7dzrprklV0Er6mWFKLOn99C1iq47U3_TH0jb2JxC-pzn192q3nUKzqK4TEHjJaIvdUaorW3rpCARG33tLtUq1mBq-zzc9jR0WSjkWHFerhMnrY0S9nkGz-6bde4gkvtkXd3gPVET05oLnMwe4Hf-ogrHDrotHH586k3BV93xI9qZ3-GM6PQ824hx26UnBzpgK_Xq3m5J-DfrBQvicwm-waJNp0ego3fzhNne4cAM8"
    },
    {
        id: 311,
        categoryId: 3,
        subcategory: "Experiencias",
        title: "Cata de Vinos",
        price: 90.00,
        category: "Gourmet",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCV9o3ij3WSCtr4WyaOhJl1zkGfh261tNFXdHauOAMI9aS8sTEN7nM18mYhCqmpz8kjosPEeyaraA1W0Z1oWXm4MLgl3tC3d2GrozP34g1g1e6eUKTENyzQ9JtuIMhI28TFzH0WEFV2eyIrDj5XnSQh1cW21mZynJi2sQYtRVB93822Rx9S5ybiOo8f_WaHySaWxY4l4fI_BdrRTsdm0ilLv_ek9Fa0rbFfB-mrMZUNC1bYIUn-zMY0a0b338JC7giAqmiLO4WQBQU"
    },
    {
        id: 312,
        categoryId: 3,
        subcategory: "Experiencias",
        title: "Taller de Cerámica",
        price: 65.00,
        category: "Arte",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdmMOO8TPQqreXT1YW8Rzwy2OvBMtQNYhnQSehNm8MEC8P_kEMq_3cVhWfhGgm-13QCCNARFwC7l81ZE2anJWFjmjLKBry7hAIJwc7Kd_7eMIEqeybHcNpImZTclVq85zsWHebu27B95fhav_hmd6cBIV-z287IxaVLwYcHP0KlyN8hq2zpGxjdLFuGRoE_ozkUcQaD0gEaBT_p-rZYRZGpqkC5ucBmSQYjOZlOwTxtUYZUNhaK2Un6Y9ZR973oCZ5VrLY7Ch1AhM"
    }
];
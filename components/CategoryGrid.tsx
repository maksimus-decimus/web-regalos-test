import React from 'react';
import { Category } from '../types';

const categories: Category[] = [
  {
    id: 'men',
    title: 'Regalos para Hombre',
    subtitle: 'Para Él',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGoWKgaP41pazxTEiffNYJJ2zabbrKXTsWkwxJbP9RjG_2k_7Ar88seCYcvSBI0rZIer0aJWZYha9qbdY74aqzjXnUvotnxm_avJ92dTtOv8Yc2-YAMDzAyJ_mjBMmHiFcgEoGSElnzXTbK08alQvHXkISgVJHQFO_11KDScWE0CmZTI7xLhbRQp0iVlAgUDg5dxQ9LnFVcY8KJPcRyDpTbiD_8ZuMNg-Wxzeb9nWIDA0tsX-LyLwhpTjVQCTBJ_BNVMe-4X_rCHA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIamB4gKwsuIu3MykK5AzmM4C8KvYNF1i7HCWEZSiDhwyQr9Q20OZHZUGVOnv-R0CiwEyp--VL_ELCpqgORU7yldhb9HUrOsOcqaxU5lxQnvR-rNdUns7CHDVr1plkuIOLxDCIwgsXm0FscXH4OrLFT-4zuo48BR71hC-E7pK-cm-1C_jGyBboN5UKH_W94EtzgRlo9ex_F2vewbbgk3ANTh_b-wrgg-YwyGh9aO_vZZmZUA-knkmkDOxBLC1M3eHoixueC2oG7mE',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmwELOimnLT5MYqpFksWilser2D4Au1OE-08P7R7xUnYE4zmP9MVwtXagqnegnsMjUUzUka28CWdZFaCP0xEze14CEvwcw4v6-02DhJuJaqBaVeq8pfskgezVyqNayOBRxCU5vc9rUzV1w30EVplMBWCRsvnGbIjZxCFyVIxQ01EC_CR9sGbL90QbIKBrStp3FFCSoqKB5_ipd9--r_0bZeb3IAq1T_TDlZNpHdMNDxoo3mnKHjrYKZWSPCAhq9y6RIMEoAQX6j-A'
    ]
  },
  {
    id: 'parents',
    title: 'Regalos para Padres',
    subtitle: 'Especiales',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDeZpMvuR6vGOQhU9J3RX1p81f7U6R0DP9UHIrJxoXqMbc6ymv5No2rpt23eMg1pB-o9ibVg5Eg0ONPtCg0LIZa36NoX1Nz5SIakmSTCylwk45hYcqKvsbOPcPq7H7HTRHuqg5uRyJt7kYhkpbwKXXRF9a29F16JgfHjwq5_dz3BjPJfVweZnJENCWWJbkGYTTgHqEH__X6sVSEdy7zBTeQp29C0Z1Y7qYEgVt0pLt_Tnt8ElcFgagV_SnrJK567xD9cO7t4oaoXSM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC5J0Nu7h6ujGQsDGMuJfH702zCH4-Pwz5GkztTwB3QvmCGbxEgIN2CROXe2jVqH1Ake11LT30B8yoxgZCopiZZX_ywHOr4JDyGiezZXXSu3It01PfjVDA-SM65edKo-2VRNAc_wBXAOY6GNOKHhrODZzKj-LxHLSlJtFhZqBb5PdxsAJwfw0fDNYrNmEax3TZuhsaVX7IoyoBgb59mOXym9YdIGsNTlel5GZa4ZEeacFnY_6cSuzrtUfCsS1Q-DKT_L57jZiX6ebg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMp8AByd85FzeDI86epdTFOM94bDjYmcBSoM81UNP7D3mqMUOI7vUMTXKCh_aeumOa2_drjOM437FZ-xwtnNR5eN3Irqw9fQ80txfwpCnl--gFJ4GxayVWDQnkmBhsucL_OxQlhDoqsr84IDFcNrAqoDCxilXrb2sT9FI4hJO0-F6gxMxaUGlJ4Mzr1sfn0Nj6smqFTOUPtQ1YI93qInebnlXGKYEKlsEJRsoWiMKBcnGnf8VixhSI-olUnDuMfl-OTZD-Zyt0ZWQ'
    ]
  },
  {
    id: 'women',
    title: 'Regalos para Madres',
    subtitle: 'Para Ella',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6XynrWSAW6YzOBDFzI_WG06wlAVkbyD0f1XGDhaFlJkReH--TUWDBpIHnF4bCxqOA5aFnf-RByUM4BDeknkxio0IxhJG0hI0ye0aTgF2XBP-uueGK7UcNoX1u49aKMNL9bYSI6Tw1aCkqqa35Nz0QCAXzFfiS2-quToR9gfAipqIqOc18rvJfTXmuIPgNfuo7779fmeywW7EQKFFK95FANrYitH4lOpG4_es6lE3dOXzrCmIqZ-1VTaIIlmMT_8r1kWYzXyqLSVI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZTU2PPZXKEiWjeScFnUu4M80ybGM5Ob7wkfTw2DUzGTD5q_04rhqEnDuv9F-j-81vKEMwPZnXYiV-1RqMFeEL4naK6mA9kywCCeWW4C4ORK3BHW6Wpa7d0mK9D81ZQ9XI2Vs1dUunNnEwPOElQYvNGBtvKG2AfB2aw79epP2bOviitKtmJ491UMm8D5erCxLUbdSLg1dmDIyYYRGUzDxymZNNDTmIwyJ2i71HvRGKqS3gFoA8wxtI0Wn6fmzm3YBpTw1wFRrijMc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAR68Kr6HPNAl6Z4L_AwNrStiur7jmjc0xGM6wIDQEh8aUU7O_DvK8ktCjwC_SkyU3Jwu_2UiM6T-j0Zh0RU7QB1NNPpIVY004xLBrATKA1OMJoVgVEp5KIHOJT0w_2grr5FzN_nRtoccIWyEELul0ffib6JIpnQEwGsDLaDBh54Kf4qATQ5n3kgqT3Q5-mfiv3CzvoarT1txt1bLv9RmGUtM_shul_m6Xv3-tgPlDPlPTuFtqjrfDRlkek4NKNIPo9L3B11YOe1Q'
    ]
  },
  {
    id: 'kids',
    title: 'Regalos para Niños',
    subtitle: 'Aventuras',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7vwjQS3xo75FXODFG97dxwgq8GzUrOVRKj1K3CRKFG5Had7Ml5TQDCBCVoFy74_dTzmY5vIAU-rAK3mQ9H92JpEPB9jp2CI-UcBGgd9E9FTdoHkVSMpH0syUvHeFFm1xXE_EuK5hdQqvtBYsZ68lG_FQciJNJbI0lINjG_MFjcqN8Fd_Gu2RcmsPSn2d7P048qQpwo74ew9fUR9o0olivEu2pavfNMxVVHlyCa1yNru_yQV0K9ECaDnf2NECffSj9pWwZRS9U8SM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyzcBJllL2YpRO2Ee2CiOlet8Vc3is8TZ3ov6XIb3u1Biln-bUVgWwakpuMZ_C7CBpftWWwJFdi2NHUavjHeS8h0k6EAghL6TzVKyP_DK7xSeGPhLCmeZCtcvkv6jZSIIlqLSxAN3pSTaF79SidufVa7IyTQOyHNkh0LN6dfqv808Ya11XnXDm6JBf7qPkvsrn_r_j6TscAYDapyK81REZ0ynpxGlOgCjVGdcd7GhdqqBa3HhETqBHyu_3rtSAgQ7OpktqIlEzvaY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDR7j3wIHo2MbTE1JQ0U4P4BT3gr4dgMaVhAcaKM2nZypUKymi7GVOFcEeZ_vAP_PqX41ZOPTdEvl_ia488cSUuIJKYS0aOU_2TI2zpiCIpDZCTtFLLZhYsj_qK--VoUrErkCi5xsO0oXNlqedthXqghvxeKggsBruwT2jewHta2EacF4EpJVNiMWWM84rZp8NaQcRQNi3yZEm21TulW2Vxj1vd3ozgXUB1mZfxlhRNtebrTTn5iiuOsNyGEAECVeoRNbqVT_RIGU8'
    ]
  },
  {
    id: 'girls',
    title: 'Regalos para Niñas',
    subtitle: 'Imaginación',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDr010zdWNBFi_Gfr76vUna1x-tcNqpVYrN9t0-OMTSpIGpBOVb3BeJvC5WEtAecFMSOJCa-bj5H0J7YQSVAKCJQSJfGDG9nC-OcoiKPL2Vl8LHbFflzztxtQnJNiXao2nFeDa2Zxp7gPzE_YOuHCWvRDAs7Yi2QJDktJJ_imbmZHJiZr8ytCkxqRaRdduZDIz0W-rhwRYYfiqBojDCt-XsZAiswAMqEo3-BmZAs4boB8F6z9n-2OcLhidtpqp8WSnFmCYda_qUPdg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJbDgBMRbSuRfuli5reM5fNU3FqdqoljoYIX0auaH8JT8YOTYufGPAEr1GWurFXuUID6Xx9EkSGvB_KCY6TA2pEwkjPS0-I0vFCy_DeggrRIKWnG_qb_8fha-X1iO86dvsWihwAmfy_z4uOSoI-hakcq4w3s8FFsgNiThZlxSvW4e-atxIuIT9x9Hct8002vwuldlSrItBU4den1dfv9d_5Q9w_C2bcUBhPmYE242CaaSFvcZ3bIA3KW4cWSiU1_43NjgJZCk5vc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBcnEtjkqNu8wh_qzpesuqkhPLhQ-HQLD030OHtxJT__fey35w84ZmbxPuRWGT2aVrSbpi0CfBsxs_IhOeXUHwRy4oVMNUtDs74VTRGvyOPayX8HGY5fkGqsC_7Fo2pzdd4YWYheqhBrOSdKsF9RQzRW4p1UqRqcw9h_qDd-b8j50GKHQyxYbtVe9Jujru-Vk-WqzyM0ETSPz47m79C2KECIZ1ZY8mYNWfbyDCsq4W423I8sQmG_E6t4B9as7kwhpIIPNYPAHhP6t0'
    ]
  },
  {
    id: 'tech',
    title: 'Tecnología 2025',
    subtitle: 'Futuro',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCygOsmWJjMJPfHGfuZP64fV3PnkcvaotFyxYX2iEuarAQpCqyRiLRNCbRMMgGlhIWXDK3xVqvDllaBYGySnIIHAh9Mo6IXiKH-UaEgGT8Wcq9EG48eyOEB1oolyVZXU50mdSifW_IEBQzwAbnHNrtJ9s8O6WPDRlYlb7hsf04FcuLatr5Ie-5-ra2tZeGruLMCSbHZV51RoNdzs_Dcqfeuu3Y6cpXZt0QIp9jjN03wHYja3jNYi9uZLBW3OsW75vWF7oeZWp_DNjk',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB95I5g5kwB3RgzfM4qkw9zxxhlinYH9uNt2YAGm4cdC-z_NY4A_9POPmzFA5c17TI6TcKKwqJ5n8h8rQM-UYRyjbFL_R38l_gT97zLGpckwlFYNNvtO6y2FfjeL3MHUkNv7LAv3Dl5r3TvZY4MZDZ0Q3VdQ3av0cJwsAeIeCF07W9ahIRYs8E7Z6XjvVZo00WHXgJiAYniwL31tqUiJ7pYT5QcLtr-cyE-hCmbVkN8TM5-RQq9NhGACmQaHv143UI7i_mD3fNPvWw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTSNpW5tL-bx7Owz63idZNyxr-sirOvFnK7PO6jFEqxdjdbQnEa1IFB1Ji6R_C0uxeNcH9SY2l7h6shf6_KFWy8km1HYopgxcwkBaU0nNr6dnhDvLLSvXImOLCzYqNTlJHb38MwTWkHTco3D4u_w_ycKnvyT2XorxkqW-NpZhahbmZ73p66bHpNUwhzsLFTTv1CY5QsiXRZbR0_m43WmuthXOamC4HTpNiRG9FO3CXBOuE7F3Tg0qSbehoN94a9FXZ_J0CRTcK6zk'
    ]
  }
];

export const CategoryGrid: React.FC = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Explora Categorías</h2>
        <a className="text-sm font-medium text-primary hover:text-white transition-colors flex items-center gap-1 group" href="#all-categories">
          Ver todas
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-0.5">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-surface-dark transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="absolute inset-0 grid grid-cols-3 h-full gap-[2px]">
              {/* Main Left Image */}
              <div
                className="col-span-2 h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${category.images[0]}')` }}
              />
              {/* Right Column Images */}
              <div className="col-span-1 flex flex-col h-full gap-[2px]">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${category.images[1]}')` }}
                />
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${category.images[2]}')` }}
                />
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-1 translate-y-1 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {category.subtitle}
              </p>
              <h3 className="text-2xl font-bold text-white translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                {category.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
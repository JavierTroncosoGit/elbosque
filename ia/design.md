# Design System: Centro Médico El Bosque

> **Generado por la IA** desde `contexto-procesado.md`. No editar manualmente.

## Colores

- `primary`: `#0ea5e9` (Azul cielo — confianza médica, headers, links, iconos principales)
- `primaryDark`: `#0284c7` (Azul profundo — hover de elementos primarios, acentos fuertes)
- `accent`: `#10b981` (Verde esmeralda — CTAs, botones de acción, badges de disponibilidad)
- `accentHover`: `#0d9488` (Teal — hover de CTAs y botones de acción)
- `bgPrimary`: `#ffffff` (Blanco — fondo principal, limpieza clínica)
- `bgSecondary`: `#f0f9ff` (Azul hielo — secciones alternas, cards de servicios)
- `bgTertiary`: `#f8fafc` (Gris nube — footer, secciones neutras)
- `textPrimary`: `#1e293b` (Gris carbón — texto principal, máxima legibilidad)
- `textSecondary`: `#64748b` (Gris medio — subtítulos, descripciones)
- `textMuted`: `#94a3b8` (Gris suave — metadata, labels)
- `border`: `#e2e8f0` (Borde sutil — cards, separadores)
- `success`: `#10b981` (Verde — estados positivos, "disponible")
- `warning`: `#f59e0b` (Ámbar — "consultar agenda")
- `whatsapp`: `#25d366` (Verde WhatsApp — botones de contacto WA)

## Tipografía

- **Heading**: Plus Jakarta Sans, sans-serif (moderna, limpia, profesional — transmite innovación médica)
- **Body**: Inter, sans-serif (excelente legibilidad en pantalla, ideal para texto informativo médico)

### Escala Tipográfica
| Elemento | Tamaño Desktop | Tamaño Mobile | Peso |
|---|---|---|---|
| H1 (Hero) | 3.5rem | 2.25rem | 800 |
| H2 (Secciones) | 2.25rem | 1.75rem | 700 |
| H3 (Cards) | 1.25rem | 1.125rem | 600 |
| Body | 1rem | 0.9375rem | 400 |
| Small / Label | 0.875rem | 0.8125rem | 500 |

## Componentes UI

### Botones
- **Primario (CTA)**: Background `accent`, texto blanco, border-radius 12px, padding 14px 28px, sombra suave, hover con `accentHover` + elevación
- **Secundario**: Background transparente, borde `primary`, texto `primary`, hover con bg `bgSecondary`
- **WhatsApp**: Background `whatsapp`, ícono de WA, texto blanco, border-radius 12px

### Cards
- Background blanco, border-radius 16px, borde `border` sutil, sombra `0 1px 3px rgba(0,0,0,0.06)`
- Hover: elevación con sombra `0 10px 25px rgba(14,165,233,0.1)`, transición 300ms
- Ícono de servicio en círculo con fondo `bgSecondary` y color `primary`

### Badges / Pills
- Border-radius 9999px, padding 6px 16px, font-size 0.75rem, font-weight 600
- Variantes: primary (bg azul claro, texto azul), accent (bg verde claro, texto verde), warning (bg ámbar claro, texto ámbar)

### Iconografía
- Librería: Lucide Icons (línea limpia, estilo médico moderno)
- Tamaño estándar: 24px en cards, 20px en botones, 48px en features
- Color: Heredado del contexto (`primary`, `accent`, o `textSecondary`)

### Espaciado
- Secciones: padding-y 96px (desktop) / 64px (mobile)
- Entre cards: gap 24px
- Container max-width: 1200px, padding-x 24px

### Animaciones (Nivel 2)
- Fade-in + slide-up al hacer scroll (IntersectionObserver)
- Hover de cards: translateY(-4px) + sombra expandida
- Transiciones: 300ms ease en todos los interactivos
- Botón CTA: scale(1.02) on hover

# Plan de Animaciones (M2)

Este documento registra las decisiones tomadas en el Taller de Animaciones para la Landing Page.

| Sección | Entrada | Stagger/Layout | Hover | Notas Especiales |
|---------|---------|----------------|-------|------------------|
| **Hero** | Fade in + Scale up suave | N/A | N/A | Sensación moderna y de profundidad. |
| **Servicios** | Fade in suave | **Carousel: Coverflow** | Glow sutil (borde color primario) | El usuario solicitó explícitamente un carrusel tipo coverflow para navegar los servicios en lugar de una grilla estática. |
| **Equipo** | Fade in suave | **Carousel: Coverflow** | Glow sutil (borde color primario) | Se aplicará el mismo carrusel coverflow o similar para el directorio médico. |
| **Banners (Lab/Convenios)** | Slide lateral + Fade | N/A | N/A | Rompe la simetría visual dinámicamente. |
| **FAQ / Contacto** | Fade In + Slide Up | Sí (secuencial 100ms) | Glow sutil en inputs/cards | — |

## Componentes a usar
- `framer-motion` para las entradas (Fade In, Scale Up, Slide).
- `embla-carousel` (shadcn Carousel modificado) + `framer-motion` para el efecto Coverflow.
- Tailwind CSS `hover:shadow-[0_0_15px_rgba(var(--color-primary))]` para el efecto Glow sutil.

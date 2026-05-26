# M3 — Responsive

Deps: M1, M2

## Checkpoint: M3 — Responsive
- **Lee:** `ia/responsive-mandamientos.md` (LOS 10 MANDAMIENTOS)
- **Audita:** todos los componentes en `src/components/`
- **Modifica:** correcciones de layout, tamaños de fuente, touch targets
- **No crea:** componentes nuevos

## Checklist

### Auditoría del Menú Sandwich Mobile (PRIORIDAD ALTA)

> El menú mobile es lo primero que un usuario toca en celular.
> Debe ser impecable.

- [ ] **Estructura en cards**: Cada link es una card independiente, NO una lista plana
- [ ] **Texto centrado**: Todos los textos centrados horizontal y verticalmente dentro de cada card
- [ ] **Texto resaltado**: font-weight ≥ 600, font-size ≥ 1rem, color `textPrimary`
- [ ] **Separación visual**: gap de 12px entre cards, sin que se peguen
- [ ] **Área táctil**: Cada card tiene mínimo 44×44px de área clickeable
- [ ] **CTA diferenciado**: El botón principal (ej: "Agenda tu hora") tiene color `accent` y es full-width
- [ ] **Botón cerrar (X)**: Visible, área táctil ≥ 44px, posición consistente (esquina superior derecha)
- [ ] **Animaciones**: Slide desde la derecha al abrir, slide de vuelta al cerrar
- [ ] **Auto-cierre**: Al tocar un link → el menú se cierra + scroll suave a la sección
- [ ] **Overlay**: Fondo oscuro semitransparente detrás del menú
- [ ] **No scroll del body**: Al abrir el menú, el body no debe hacer scroll
- [ ] **Verificar en 375px**: El menú no tiene overflow, todos los links son legibles

### Auditoría por Secciones
- [ ] **Navbar Desktop**: Links visibles, CTA alineado, sticky funcional
- [ ] **Hero**: Título legible en 375px (usar `clamp()`), imagen no se corta
- [ ] **Grids (Services/Team)**: Colapsar a 1 columna en mobile
- [ ] **FAQ Accordion**: Taps funcionan, texto legible al expandir
- [ ] **Contact Multi**: Botones de llamar/WhatsApp con área táctil correcta
- [ ] **Map**: Se redimensiona correctamente
- [ ] **Footer**: Padding adecuado, sin overflow horizontal, firma Darw visible

### Los 10 Mandamientos
- [ ] **I. Mobile-First**: ¿Clase base = mobile?
- [ ] **II. Sin Scroll Horizontal**: Verificar en 375px
- [ ] **III. Touch Targets**: Botones >= 44x44px
- [ ] **IV. iOS Zoom**: Inputs >= 16px (si hay formularios)
- [ ] **V. Imágenes**: `next/image` con `sizes` correcto
- [ ] **VI. Tipografía Fluida**: Usar `clamp()` para H1/H2
- [ ] **VII. Grids**: Colapso a 1col
- [ ] **VIII. Navbar Mobile**: Menú sandwich con cards centradas y resaltadas ✅
- [ ] **IX. Espaciado**: `py-12 lg:py-20`
- [ ] **X. Viewports**: Verificar 375px y 768px

## Done

- Auditoría completada, menú sandwich perfecto, 10 mandamientos cumplidos
- → state.md: M3 🟢, M4 🟡

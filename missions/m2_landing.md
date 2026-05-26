# M2 — Landing Page (Secciones)

Deps: M1

## Checkpoint: M2 — Landing
- **Lee:** `site.config.json` (sections[])
- **Crea:** Navbar, Hero, Secciones, Footer, WhatsApp button
- **No toca:** lib/config.ts, layout.tsx (excepto para importar componentes)

**Fuente de verdad: `site.config.json` para todo el contenido y estructura.**

## Checklist

### Paso 0 — Taller de Animaciones (ANTES de codear)

> **La IA debe presentar opciones de animación al humano antes de construir cada sección.**
> Este paso es interactivo: la IA propone, el humano elige.

- [ ] Por cada sección del `site.config.json`, la IA presenta un menú de opciones:

```
🎬 TALLER DE ANIMACIONES — Sección: [nombre]

¿Qué efecto de entrada quieres para esta sección?

  A) Fade in + Slide Up (clásico, elegante)
  B) Fade in + Scale (aparece creciendo, moderno)
  C) Slide desde un lado (izquierda o derecha)
  D) Reveal con máscara (se descubre de arriba a abajo)
  E) Sin animación (contenido estático)

¿Quieres efecto stagger en los elementos hijos? (las cards aparecen una por una)
  → Sí / No / Sutil (50ms entre cada una)

¿Efecto especial en hover?
  A) Elevación (sube + sombra) — recomendado para cards
  B) Glow (brillo suave en el borde)
  C) Scale (crece un 2-3%)
  D) Sin efecto hover
```

- [ ] Guardar las decisiones en `ia/animation-plan.md`:

```markdown
| Sección | Entrada | Stagger | Hover | Notas |
|---------|---------|---------|-------|-------|
| Hero | Fade in + Scale | No | — | Título con typewriter opcional |
| Services | Fade in + Slide Up | Sí (100ms) | Elevación | — |
| Team | Slide desde abajo | Sí (80ms) | Scale | — |
| ... | ... | ... | ... | ... |
```

- [ ] **PAUSA** → Esperar aprobación del plan de animaciones antes de continuar

---

### Navbar
- [ ] Logo (placeholder si no hay) + links de ancla (#seccion)
- [ ] CTA button (si existe en config)
- [ ] Sticky/transparent sobre Hero
- [ ] Animación de navbar: transparente → sólido al hacer scroll

#### Menú Sandwich Mobile (OBLIGATORIO)
- [ ] Usar Sheet de shadcn como panel lateral o overlay
- [ ] Cada link de navegación debe ser una **card independiente** con:
  - Padding generoso (mínimo 16px vertical)
  - Texto **centrado** horizontal y verticalmente
  - Fondo con contraste sutil (`bgSecondary` o glassmorphism)
  - Border-radius consistente con el design system
  - Área táctil ≥ 44×44px
- [ ] Texto de cada link **resaltado**: font-weight 600, font-size ≥ 1rem
- [ ] Separación entre cards: gap de 12px
- [ ] Botón CTA diferenciado (color `accent`, full-width)
- [ ] Botón de cerrar (X) visible y con área táctil ≥ 44px
- [ ] Animación de entrada: slide desde la derecha + fade del overlay
- [ ] Animación de salida: slide hacia la derecha
- [ ] Al hacer clic en un link → cerrar el menú automáticamente + scroll suave a la sección

### Secciones (Iterar sobre `site.config.json.sections`)
- [ ] Por cada sección en el array → crear componente en `src/components/sections/`
- [ ] Usar el `id` como HTML `id` para permitir navegación por anclas
- [ ] Implementar diseño según `ia/stack.md` (Layout Base de 1200px)
- [ ] **Aplicar animaciones según `ia/animation-plan.md`** (Framer Motion)

### Tipos de sección a implementar
- [ ] **hero**: Headline (H1), Subheadline, CTAs, Imagen/Video de fondo
- [ ] **faq**: Accordion de shadcn con preguntas frecuentes
- [ ] **footer**: Tagline, contacto por pisos, redes sociales, copyright
  - **OBLIGATORIO**: Incluir firma de agencia → "Hecho por [Darw](https://www.darw.cl/)" al final del footer
  - La palabra "Darw" debe ser un link clickeable a `https://www.darw.cl/`
  - Estilo sutil: texto `textMuted`, font-size small, hover con color `primary`
- [ ] **team-directory**: Directorio de profesionales con filtro por piso/especialidad
- [ ] **services-detail**: Servicios expandibles con modal o accordion por categoría
- [ ] **contact-multi**: Contacto con teléfonos por piso + WhatsApps por especialidad
- [ ] **convenios**: Grid visual de badges (Fonasa, Isapre, tarjetas débito/crédito)
- [ ] **map-embed**: Google Maps integrado con la ubicación del centro
- [ ] **highlight-banner**: Banner destacado para el laboratorio ("Resultados en 1 hora")

### WhatsApp Floating Button
- [ ] Si `siteConfig.contact.whatsapp` existe → botón flotante en la esquina inferior derecha
- [ ] Usar `env(safe-area-inset-bottom)` para compatibilidad con iPhone
- [ ] Animación de entrada: bounce suave al cargar la página

### Verificar
- [ ] La navegación por anclas desde el Navbar funciona
- [ ] Los textos coinciden exactamente con el config
- [ ] Las animaciones del `animation-plan.md` están implementadas correctamente
- [ ] Las imágenes usan placeholders de `placeholders.ts` (M0)
- [ ] Las imágenes cargan correctamente (usar `next/image`)

## Done

- Todas las secciones construidas, animaciones aprobadas e implementadas, navegación funcional, WhatsApp integrado
- → state.md: M2 🟢, M2.5 🟡

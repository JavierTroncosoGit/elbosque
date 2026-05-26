# M0 — Preparación de Assets

Deps: CONTEXTO.md completado

> **Prerrequisito:** `usuario/CONTEXTO.md` y `ia/contexto-procesado.md` listos.
> M0 NO genera imágenes. Solo prepara la estructura de placeholders para inyectar imágenes reales después.

## Checkpoint: M0 — Assets
- **Crea:** estructura de carpetas, placeholders con dimensiones, manifest de assets
- **No toca:** componentes, estilos, ni código funcional

## Checklist

### Estructura de Carpetas

- [ ] `/public/images/hero/` — imagen principal del hero
- [ ] `/public/images/team/` — fotos de los 14 profesionales
- [ ] `/public/images/services/` — íconos o imágenes por cada una de las 14 categorías de servicio
- [ ] `/public/images/brand/` — logo, favicon, og-image
- [ ] `/public/images/misc/` — imágenes auxiliares (medicina complementaria, laboratorio, óptica)

### Manifest de Assets

- [ ] Crear `assets-manifest.md` en `/ia/` con la lista completa de imágenes requeridas:

```markdown
| Archivo | Carpeta | Dimensiones | Uso | Estado |
|---------|---------|-------------|-----|--------|
| hero-main.webp | hero/ | 1920×1080 | Fondo del Hero | ⬜ Pendiente |
| logo.svg | brand/ | 200×60 | Navbar + Footer | ⬜ Pendiente |
| favicon.ico | brand/ | 32×32 | Pestaña del navegador | ⬜ Pendiente |
| og-image.jpg | brand/ | 1200×630 | Redes sociales | ⬜ Pendiente |
| dr-roberto-oliver.webp | team/ | 400×400 | Card profesional | ⬜ Pendiente |
| dr-miguel-cantos.webp | team/ | 400×400 | Card profesional | ⬜ Pendiente |
| ... (14 profesionales) | ... | ... | ... | ... |
| srv-medicina-general.webp | services/ | 600×400 | Card servicio | ⬜ Pendiente |
| ... (14 servicios) | ... | ... | ... | ... |
```

### Placeholders en Código

- [ ] Crear archivo `src/lib/placeholders.ts` con constantes:
  - Rutas de cada imagen con fallback a placeholder genérico
  - Dimensiones esperadas por tipo (hero, team, services, brand)
  - Alt text descriptivo pre-escrito para cada imagen
  - Función helper `getImageOrPlaceholder(key)`

### Placeholder Visual

- [ ] Usar `div` con background color + ícono Lucide + texto del nombre como placeholder visual
- [ ] Cada placeholder debe mostrar: dimensiones esperadas + nombre del archivo que se necesita
- [ ] Estilo consistente: fondo `bg-secondary` con ícono centrado y texto del nombre

### Verificar

- [ ] Todas las carpetas existen en `/public/images/`
- [ ] El manifest lista TODAS las imágenes necesarias (hero, 14 profesionales, 14 servicios, brand)
- [ ] `placeholders.ts` tiene una entrada por cada imagen del manifest
- [ ] Los placeholders son fáciles de reemplazar: cambiar solo la ruta en `placeholders.ts`

## Done

- Estructura de assets lista, manifest completo, placeholders tipados
- Para inyectar imágenes reales: colocar archivos en `/public/images/` y actualizar `placeholders.ts`
- → state.md: M0 🟢, M1 🟡

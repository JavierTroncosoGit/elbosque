# M4 — Optimización + Deploy

Deps: todas las anteriores

## Checkpoint: M4 — Optimización
- **Lee:** `site.config.json` (seo, analytics)
- **Verifica:** SEO, imágenes, Lighthouse, Deploy en Vercel

## Checklist

### SEO
- [ ] Metadata API con `siteConfig.seo`
- [ ] Open Graph (og:title, og:description, og:image)
- [ ] Canonical URL
- [ ] Un solo `<h1>` en toda la página (Hero)

### Sitemap y Robots (OBLIGATORIO)

#### robots.txt
- [ ] Crear `/public/robots.txt` con:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://[dominio]/sitemap.xml
  ```
- [ ] Bloquear rutas internas si existen (ej: `/api/`, `/_next/`)
- [ ] Verificar que el archivo es accesible en `[dominio]/robots.txt`

#### sitemap.xml
- [ ] Generar `sitemap.xml` usando la Metadata API de Next.js (`app/sitemap.ts`):
  ```typescript
  import { MetadataRoute } from 'next'

  export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
        url: 'https://[dominio]',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
    ]
  }
  ```
- [ ] Si hay secciones con anclas importantes, considerar listarlas como URLs separadas
- [ ] Verificar que el sitemap es accesible en `[dominio]/sitemap.xml`
- [ ] Actualizar la URL del dominio real tras el deploy

### Imágenes
- [ ] `next/image` en todas partes
- [ ] Alt descriptivo
- [ ] `priority` en la imagen del Hero (LCP)

### Performance
- [ ] `npm run build` sin errores
- [ ] Lighthouse > 90 en Perf, A11y, SEO
- [ ] Eliminar "use client" innecesarios
- [ ] Sin console.log

### Deploy
- [ ] Conectar GitHub con Vercel
- [ ] Verificar que carga correctamente en la URL de producción
- [ ] Verificar `robots.txt` y `sitemap.xml` accesibles en producción
- [ ] Actualizar URL del dominio en sitemap y canonical

## Done

- Lighthouse en verde, SEO configurado, sitemap y robots activos, sitio en producción
- → state.md: M4 🟢, M5 ⚪ (Opcional)

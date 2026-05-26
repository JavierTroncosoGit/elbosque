# M6 — Experiencia del Paciente (OPCIONAL)

Deps: M2.5

## Checkpoint: M6 — Experiencia
- **Lee:** componentes existentes en `src/components/sections/`
- **Modifica:** agrega microinteracciones y funcionalidades de UX avanzadas
- **No crea:** secciones nuevas — solo mejora las existentes

## Checklist

### Buscador Rápido de Servicios

- [ ] Input de búsqueda "¿Qué servicio necesitas?" en la sección de servicios
- [ ] Filtrado en tiempo real mientras el usuario escribe
- [ ] Búsqueda por: nombre de servicio, nombre de profesional, tratamiento específico
- [ ] Highlight del texto que coincide con la búsqueda
- [ ] Si no hay resultados: "No encontramos ese servicio. Llámanos al 652 638 550"
- [ ] Animación: las cards que no coinciden se desvanecen, las que sí se mantienen

### Botón "Copiar Teléfono"

- [ ] En cada número de teléfono del sitio: botón de copiar al portapapeles
- [ ] Feedback visual: ícono cambia de "copiar" a "check" por 2 segundos
- [ ] Usar `navigator.clipboard.writeText()`
- [ ] Fallback para navegadores sin soporte

### Links WhatsApp Inteligentes

- [ ] Todos los botones de WhatsApp generan link `wa.me/` con mensaje pre-armado
- [ ] El mensaje se personaliza según el contexto:
  - Desde card de profesional: "Hola, quisiera agendar con [Dr. Nombre] en [Especialidad]"
  - Desde card de servicio: "Hola, quisiera consultar sobre [Servicio]"
  - Desde el botón flotante: "Hola, quisiera información sobre el Centro Médico El Bosque"

### Indicador de Horario (si es factible)

- [ ] Basado en la hora local del dispositivo (Zona horaria Chile/Santiago)
- [ ] Badge en el navbar o hero:
  - 🟢 "Atendiendo ahora" (Lunes a Viernes 9:00-18:00, Sábado 9:00-13:00)
  - 🔴 "Cerrado — Abrimos mañana a las 9:00"
- [ ] Lógica simple con `new Date()` y día de la semana
- [ ] **Nota:** Horarios pueden requerir confirmación del cliente

### Scroll-Reveal Avanzado en Cards

- [ ] Stagger animation en grids: las cards aparecen una por una con delay
- [ ] Intersección configurable: las cards se animan al entrar al viewport
- [ ] Variantes de entrada según `animation-plan.md`
- [ ] Performance: usar `will-change` y `transform` (evitar animar `width`/`height`)

### Modo Oscuro (Toggle)

- [ ] Toggle en el navbar (ícono sol/luna)
- [ ] Guardar preferencia en `localStorage`
- [ ] Respetar `prefers-color-scheme` del sistema como default
- [ ] Mapear todos los tokens de color a versiones dark:
  - `bgPrimary` → `#0f172a` (slate-900)
  - `bgSecondary` → `#1e293b` (slate-800)
  - `textPrimary` → `#f1f5f9` (slate-100)
  - `textSecondary` → `#94a3b8` (slate-400)
  - `border` → `#334155` (slate-700)
  - `primary` y `accent` → mantener (se ven bien en dark)
- [ ] Transición suave al cambiar de modo (300ms en background-color y color)

### Verificar

- [ ] El buscador filtra correctamente entre 14 servicios y 14 profesionales
- [ ] Copiar teléfono funciona en Chrome, Firefox, Safari (desktop y mobile)
- [ ] Los links wa.me/ abren WhatsApp con el mensaje correcto
- [ ] El indicador de horario muestra el estado correcto según la hora real
- [ ] Las animaciones stagger no causan jank (60fps)
- [ ] El modo oscuro se ve profesional y todos los textos son legibles
- [ ] La preferencia de modo oscuro persiste entre recargas

## Done

- UX mejorada: buscador, copiar teléfono, WA inteligente, indicador horario, dark mode
- → state.md: M6 🟢, Estado Final: 🟢 Completado

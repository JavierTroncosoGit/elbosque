# M5 — Formularios + Contacto Multi-Canal

Deps: M2

## Checkpoint: M5 — Formularios
- **Crea:** Server Actions para envío de email, selector inteligente de contacto
- **Modifica:** `src/components/sections/ContactMulti.tsx` para manejar estado de envío y routing de contacto

## Checklist

### Formulario de Contacto (Client Component)

- [ ] `react-hook-form` + `zod` para validación
- [ ] Campos del formulario:
  - Nombre completo (requerido)
  - Teléfono (requerido)
  - Email (opcional)
  - Selector de especialidad/motivo de consulta (dropdown con las 14 especialidades)
  - Mensaje o motivo de la consulta (textarea)
- [ ] Manejo de estados: Cargando, Éxito, Error
- [ ] Feedback visual al usuario (Toast o mensaje en pantalla)

### Selector Inteligente de Contacto

- [ ] Widget interactivo "¿A quién necesitas contactar?"
- [ ] Al seleccionar una especialidad desde el dropdown:
  - Mostrar automáticamente el **WhatsApp directo** del especialista (si tiene)
  - Mostrar el **teléfono del piso** donde atiende
  - Mostrar el **horario** de atención
  - Mostrar el **profesional** a cargo
- [ ] Mapeo de especialidades a contactos:

```
Medicina General     → 1er Piso: 652 638 555
Traumatología        → 1er Piso: 652 638 555
Oftalmología         → 1er Piso: 652 638 555
Pediatría            → 1er Piso: 652 638 555 / 2do Piso: 652 630 608
Neurocirugía         → 2do Piso: 652 630 608
Dermatología         → WA: +56 9 5523 8408
Psicología           → WA: +56 9 9880 8692
Matronería           → 2do Piso: 652 630 608
Ortodoncia           → WA: +56 9 5607 3189
Estética             → WA: +56 9 9659 3292
Kinesiología         → WA: +56 9 6653 6246
Óptica Austral       → WA: +56 9 4272 8154
Laboratorio Clínico  → 1er Piso: 652 638 555
Podología            → Teléfono Central: 652 638 550
Med. Complementaria  → Teléfono Central: 652 638 550
```

### Links WhatsApp Pre-armados

- [ ] Generar links `wa.me/` con mensaje pre-armado por especialidad:
  ```
  https://wa.me/56955238408?text=Hola,%20quisiera%20agendar%20una%20hora%20con%20Dermatología%20en%20el%20Centro%20Médico%20El%20Bosque.
  ```
- [ ] El mensaje incluye: saludo + especialidad seleccionada + "Centro Médico El Bosque"
- [ ] Botón visual con ícono de WhatsApp + texto "Agendar por WhatsApp"

### Directorio de Teléfonos por Piso

- [ ] Componente visual con los 3 pisos:
  - 1er Piso: 652 638 555 — con botón "Copiar" y botón "Llamar" (tel:)
  - 2do Piso: 652 630 608 — con botón "Copiar" y botón "Llamar" (tel:)
  - 3er Piso: 652 638 500 — con botón "Copiar" y botón "Llamar" (tel:)
  - Central: 652 638 550 — con botón "Copiar" y botón "Llamar" (tel:)
- [ ] Cada piso lista brevemente qué especialidades tiene

### Envío de Datos

- [ ] Configurar API key de Resend (o similar) en `.env.local`
- [ ] Crear Server Action en `src/lib/actions/forms.ts`
- [ ] Formatear el email que recibe el centro con:
  - Nombre del paciente
  - Teléfono
  - Especialidad solicitada
  - Mensaje
  - Fecha y hora del envío
- [ ] Email debe llegar con formato profesional (HTML template)

### Verificar

- [ ] El formulario valida campos requeridos
- [ ] Al seleccionar especialidad, aparece el contacto correcto (WhatsApp o teléfono)
- [ ] Los links wa.me/ abren WhatsApp con el mensaje correcto
- [ ] Los botones tel: inician llamada en móvil
- [ ] Los botones "Copiar" copian el número al portapapeles
- [ ] El email llega correctamente con todos los datos
- [ ] No hay fugas de API keys en el frontend

## Done

- Formulario de contacto funcional, selector inteligente de contacto, WhatsApp multi-canal, directorio de teléfonos
- → state.md: M5 🟢

# Fases de implementación — HealthDash

Derivadas de las specs v0.1 y los prototipos. Plugin TUI ligero de OpenCode; API V2 (`sidebar.content`, `router.register`, `session.cost/status`, `location.skill.list`, `keymap.layer`, `storage.memory`).

## Fase 0 — Decisiones previas (bloqueante)

- Resueltas: métricas tokens+coste, granularidad de sesión actual, Solid/OpenTUI + `format.ts`, y `router.register` sin overlay.
- **Salida:** specs v0.2.

## Fase 1 — Esqueleto del plugin

- `package.json` con `@opencode/plugin/tui` como dependencia de desarrollo y archivo de entrada `src/tui.tsx`.
- Registro mínimo del plugin sin contenido visible.
- **Salida:** el plugin carga en OpenCode sin errores.

## Fase 2 — Fuente de datos

- Leer sesiones activas, estado y coste desde la API (`session.cost/status`).
- Leer skills en uso (`location.skill.list`).
- **Salida:** datos en memoria del plugin, sin persistencia propia.

## Fase 3 — Sidebar

- Widget compacto con agentes/progreso/skills/consumo, según `docs/prototipo-sidebar.md`.
- Actualización por evento de la API, sin polling.
- **Salida:** sidebar visible y ligera.

## Fase 4 — Pantalla dedicada

- Registro de ruta con `router.register`, según `docs/prototipo-panel.md`.
- Detalle de agentes, skills y consumo.
- **Salida:** panel dedicado navegable.

## Fase 5 — Atajos y persistencia

- `keymap.layer` para abrir/cerrar el panel.
- `storage.memory` solo para preferencias mínimas (si aplica).
- **Salida:** atajo funcional sin recarga.

## Fase 6 — Verificación

- Cargar el plugin con `cli.json` en un OpenCode real.
- Comprobar: sin servidor, sin BD, sin dependencias nuevas fuera del entorno, consumo de RAM aceptable.
- **Salida:** plugin usable y ligero.

## Fuera de alcance

- Dashboard web, backend, PostgreSQL, autenticación, sincronización entre máquinas.

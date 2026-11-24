# Spec técnica — HealthDash (v0.2)

## Stack

- Plugin de OpenCode V2 con parte TUI: TypeScript/TSX, `@opencode/plugin/tui`, Solid y OpenTUI; sin Angular, Java ni base de datos.
- Paquete con `exports: { ".": "./src/index.ts", "./tui": "./src/tui.tsx" }` y `peerDependencies` de OpenTUI/Solid según la guía oficial.
- Sin parte servidor funcional: `src/index.ts` es un plugin vacío; HealthDash solo lee datos expuestos por el cliente.

## Fuentes de datos (API V2 verificada)

- Sesiones y estado: `context.data.session.list()`, `context.data.session.get(id)`, `context.data.session.status(id)`, `context.data.session.cost(id)`.
- Agentes y skills del location: `context.data.location.agent.list(location)`, `context.data.location.skill.sync/list(location)`.
- Eventos en vivo: `context.data.on(...)` / `context.data.listen(...)`.
- Cliente: `context.client` para consultas puntuales al servidor conectado.

## UI

- Sidebar: slot `sidebar.content` con `context.ui.slot({ append: ..., render: ... })`.
- Pantalla dedicada: `context.ui.router.register({ name: "healthdash", render })` y navegación con `context.ui.router.navigate({ type: "plugin", name: "healthdash" })` (T2 resuelto).
- Comandos: `context.keymap.layer(...)` con `healthdash.open` y `healthdash.close`, `palette: true` y `slash: { name: "healthdash" }`, sin `bind` (A1-atajo resuelto).
- Estado efímero: `context.storage.memory(...)`; se descarta al salir de la TUI.
- Formateo de métricas en `src/format.ts`, módulo puro y testeable (T1 resuelto).

## Restricciones

- Ligero: sin dependencias nuevas más allá de los peers requeridos por la TUI; sin build step propio para la parte TUI.
- Sin secretos ni rutas absolutas en la UI; usar `context.ui.format.path` para rutas.
- Solo API V2: no usar documentación de V1.

## Verificación

- `npm run typecheck` (`tsc --noEmit`) sobre `src/`.
- Carga local del plugin en `cli.json` y comprobación manual de sidebar + ruta con datos ficticios.
- Sin pruebas unitarias en v1: `src/format.ts` son funciones puras de una línea (YAGNI).

## Decisiones cerradas (v0.2, 2026-11-25)

| ID | Decisión |
|----|----------|
| A1-métricas | Tokens entrada/salida y coste, con formato defensivo de `unknown`. |
| A2-granularidad | Sesión actual; por agente solo en la ruta dedicada. |
| T1-UI | Solid/OpenTUI oficial + `src/format.ts`; no se sustituye por otra librería. |
| T2-pantalla | `router.register`; sin overlay ni slot `home.footer.status`. |

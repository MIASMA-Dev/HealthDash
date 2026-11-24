# Spec técnica — HealthDash (v0.1)

## Stack

- Plugin de OpenCode V2 con parte TUI: TypeScript/TSX, `@opencode/plugin/tui`, Solid y OpenTUI; sin Angular, Java ni base de datos.
- Paquete con `exports: { "./tui": "./src/tui.tsx" }` y `peerDependencies` de OpenTUI/Solid según la guía oficial.
- Sin parte servidor: el plugin solo lee datos expuestos por el cliente de OpenCode.

## Fuentes de datos (API V2 verificada)

- Sesiones y estado: `context.data.session.list()`, `context.data.session.status(id)`, `context.data.session.cost(id)`.
- Agentes y skills del location: `context.data.location.agent.list(location)`, `context.data.location.skill.sync/list(location)`.
- Eventos en vivo: `context.data.on(...)` / `context.data.listen(...)`.
- Cliente: `context.client` para consultas puntuales al servidor conectado.

## UI

- Sidebar: slot `sidebar.content` con `context.ui.slot({ append: ..., render: ... })`.
- Pantalla dedicada: `context.ui.router.register({ name, render })` y navegación con `context.ui.router.navigate({ type: "plugin", ... })`.
- Atajo: `context.keymap.layer(...)` con comando `palette: true` y `slash` (nombre pendiente, A1).
- Estado efímero: `context.storage.memory(...)`; se descarta al salir de la TUI.

## Restricciones

- Ligero: sin dependencias nuevas más allá de los peers requeridos por la TUI; sin build step propio para la parte TUI.
- Sin secretos ni rutas absolutas en la UI; usar `context.ui.format.path` para rutas.
- Solo API V2: no usar documentación de V1.

## Verificación

- `npm run typecheck` (o `tsc --noEmit`) sobre `src/tui.tsx`.
- Carga local del plugin en `cli.json` y comprobación manual de sidebar + ruta con datos ficticios.
- Las pruebas unitarias se añadirán cuando exista lógica de formateo de datos (T1).

## Supuestos pendientes

- T1: si el formateo de consumo se extrae a un módulo testeable o se deja inline en el componente.
- T2: si se registra también un slot `home.footer.status` con un indicador compacto.

# Spec funcional — HealthDash (v0.2)

## Propósito y público

Plugin ligero de OpenCode que muestra en tiempo real los agentes activos, su progreso, las skills que usan y su consumo, en el sidebar y en una pantalla dedicada, pensado para desarrolladores que trabajan con varios agentes a la vez.

## Funciones

1. **Sidebar**: resumen de la sesión activa (estado y antigüedad), skill activa cuando la haya y consumo agregado — tokens de entrada/salida y coste (A1 resuelto).
2. **Pantalla dedicada**: ruta `healthdash` con detalle por agente — estado, progreso, skill y consumo — y totales de la sesión (A2 resuelto: agregado en sidebar, por agente en el panel).
3. **Actualización en tiempo real**: los datos se refrescan con los eventos de OpenCode sin recargar la TUI.
4. **Apertura y cierre**: comandos `healthdash.open` y `healthdash.close`, disponibles en palette y slash, sin atajo global asignado para no colisionar con OpenCode (A1-atijo resuelto).

## No incluido

- Servidor propio, base de datos, autenticación ni configuración remota.
- Edición del comportamiento de los agentes: HealthDash solo observa y muestra.
- Histórico persistente entre sesiones en esta versión (estado efímero de la TUI).
- Overlay propio ni indicador adicional en `home.footer.status`.

## Criterios de aceptación

- El sidebar muestra datos ficticios de prueba y reacciona a cambios de estado.
- La pantalla dedicada se abre y cierra desde los comandos del plugin.
- El plugin no añade dependencias de interfaz fuera de las que ya trae OpenCode.

## Decisiones cerradas (v0.2, 2026-11-25)

| ID | Decisión |
|----|----------|
| A1-métricas | Mostrar tokens de entrada/salida **y** coste; en sidebar agregado, en panel por agente. |
| A1-atajo | Comandos `healthdash.open` / `healthdash.close`, `palette: true` y `slash: { name: "healthdash" }`, sin `bind`. |
| A2-granularidad | v1 cubre solo la sesión actual; sin histórico entre sesiones. |
| T1-UI | Solid/OpenTUI es la UI oficial; no hay alternativa más ligera segura. El formateo se extrae a `src/format.ts`. |
| T2-pantalla | `context.ui.router.register` sin overlay; fuera de alcance el slot `home.footer.status`. |

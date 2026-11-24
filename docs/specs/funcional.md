# Spec funcional — HealthDash (v0.1)

## Propósito y público

Plugin ligero de OpenCode que muestra en tiempo real los agentes activos, su progreso, las skills que usan y su consumo, en el sidebar y en una pantalla dedicada, pensado para desarrolladores que trabajan con varios agentes a la vez.

## Funciones

1. **Sidebar**: resumen de agentes de la sesión (estado y antigüedad), skill activa cuando la haya y consumo agregado (tokens de entrada/salida y coste).
2. **Pantalla dedicada**: ruta con detalle por agente — estado, progreso, skill y consumo — y totales de la sesión.
3. **Actualización en tiempo real**: los datos se refrescan con los eventos de OpenCode sin recargar la TUI.

## No incluido

- Servidor propio, base de datos, autenticación ni configuración remota.
- Edición del comportamiento de los agentes: HealthDash solo observa y muestra.
- Histórico persistente entre sesiones en esta versión (estado efímero).

## Criterios de aceptación

- El sidebar muestra datos ficticios de prueba y reacciona a cambios de estado.
- La pantalla dedicada se abre y cierra desde un atajo del plugin.
- El plugin no añade dependencias de interfaz fuera de las que ya trae OpenCode.

## Supuestos pendientes

- A1: el atajo concreto para abrir/cerrar el panel y el nombre del comando.
- A2: si el consumo se muestra por agente o solo agregado en el sidebar (el prototipo muestra agregado; el panel, por agente).

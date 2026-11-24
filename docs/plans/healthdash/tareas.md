# Tareas de implementación — HealthDash

## Fase 0 — Decisiones previas

- [x] **0.1** A1-métricas: tokens entrada/salida y coste, agregado en sidebar y por agente en el panel.
- [x] **0.2** A2-granularidad: sesión actual, sin histórico entre sesiones.
- [x] **0.3** T1: Solid/OpenTUI oficial + `src/format.ts` para el formateo.
- [x] **0.4** T2: `router.register`, sin overlay ni `home.footer.status`.
- [x] **0.5** Specs actualizadas a v0.2 (funcional y técnica), con atajo resuelto como comandos sin `bind`.

## Fase 1 — Esqueleto (diferida por petición del usuario)

- [x] **1.1** Creado `package.json` con `@opencode/plugin/tui`, peers y `npm run typecheck`.
- [x] **1.2** Creado `src/tui.tsx` con registro mínimo, sidebar, ruta y comandos; `src/index.ts` vacío y `src/format.ts`.
- [ ] **1.3** Verificar carga en OpenCode sin errores (typecheck verde; falta prueba manual en TUI con `cli.json`).

## Fase 2 — Fuente de datos

- [ ] **2.1** Leer sesiones/estado/coste con `session.cost/status`.
- [ ] **2.2** Leer skills en uso con `location.skill.list`.
- [ ] **2.3** Verificar datos en memoria del plugin, sin persistencia.

## Fase 3 — Sidebar

- [ ] **3.1** Widget compacto de agentes/progreso/skills/consumo (`docs/prototipo-sidebar.md`).
- [ ] **3.2** Actualización por eventos, sin polling.
- [ ] **3.3** Verificar ligereza visual y funcional.

## Fase 4 — Pantalla dedicada

- [ ] **4.1** Registrar pantalla según T2 (`router.register` o overlay).
- [ ] **4.2** Detalle de agentes, skills y consumo (`docs/prototipo-panel.md`).
- [ ] **4.3** Verificar navegación ida/vuelta.

## Fase 5 — Atajos y persistencia

- [ ] **5.1** `keymap.layer` para abrir/cerrar panel.
- [ ] **5.2** `storage.memory` para preferencias mínimas si aplica.
- [ ] **5.3** Verificar atajo sin recarga.

## Fase 6 — Verificación final

- [ ] **6.1** Cargar con `cli.json` en OpenCode real.
- [ ] **6.2** Confirmar: sin servidor, sin BD, sin dependencias nuevas fuera del entorno.
- [ ] **6.3** Medir consumo de RAM del plugin y comparar con el prototipo.

## Fuera de alcance

- Dashboard web, backend, PostgreSQL, autenticación y sincronización entre máquinas.

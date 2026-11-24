---
proyecto: healthdash
tipo: plan
actualizado: 2026-11-24
artefactos:
  tareas: COMPLETO
  fases: COMPLETO
  roadmap: COMPLETO
  cambios: COMPLETO
---

# Estado del plan — HealthDash

## Artefactos generados

| Artefacto | Estado | Archivo |
|-----------|--------|---------|
| fases | COMPLETO | `docs/plans/healthdash/fases.md` |
| tareas | COMPLETO | `docs/plans/healthdash/tareas.md` |
| roadmap | COMPLETO | `docs/plans/healthdash/roadmap.md` |
| cambios | COMPLETO | `docs/plans/healthdash/cambios.md` |
| índice | COMPLETO | `docs/plans/healthdash/README.md` |

## Fuentes

- `docs/specs/funcional.md` (v0.1, propósito + A1–A2).
- `docs/specs/tecnica.md` (v0.1, stack + T1–T2).
- `docs/prototipo-sidebar.md`, `docs/prototipo-panel.md`, `docs/prototipo-interactivo.html`.
- API V2 de plugins de OpenCode verificada 2026-11-24.

## Preguntas pendientes

- **A1**: ¿qué métricas de consumo se muestran en la sidebar (tokens, coste, ambos)?
- **A2**: ¿qué granularidad de progreso por agente/sesión se considera suficiente para la v1?
- **T1**: ¿Solid/OpenTUI como UI del plugin o alternativa más ligera?
- **T2**: ¿la pantalla dedicada se registra con `router.register` o se abre como overlay?

## Notas para reanudar

- Es un plugin TUI, no una app web: sin servidor, sin Java, sin BD.
- Código de aplicación diferido por petición del usuario («prototipos y spec antes de nada»); Fase 1 no ejecutada.
- Verificar ligereza: sin dependencias que no estén ya en el entorno del plugin.

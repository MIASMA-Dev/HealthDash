# Estado — HealthDash

- **Estado:** IDEA/DISEÑO → arranque iniciado 2026-11-24.
- **Fase:** Fase 0 — prototipos y specs; sin código aún.
- **Specs:** funcional v0.1 y técnica v0.1 creadas, pendientes de revisión.
- **Impl:** 0 %. **Testing:** no ejecutado (sin código).
- **Próximo paso:** revisar specs y prototipos; luego crear `package.json` y `src/tui.tsx` con el esqueleto del plugin.
- **Evidencia:** `README.md`, `docs/prototipo-sidebar.md`, `docs/prototipo-panel.md`, `docs/prototipo-interactivo.html` (prototipo HTML autocontenido, sin dependencias), `docs/specs/funcional.md`, `docs/specs/tecnica.md`.
- **Decisiones (2026-11-24):**
  - Es un plugin ligero de OpenCode (especie de dashboard TUI), no una app web.
  - Stack: TypeScript/TSX con `@opencode/plugin/tui` + Solid/OpenTUI; sin Angular, Java ni base de datos.
  - Repo público `MIASMA-Dev/HealthDash` (antes `health-dashboard`); solo se corrige el `origin` local.
  - Orden de trabajo: primero prototipos y specs, después código.
- **Contradicciones:** la ficha 11 del ALBARAN global lo describe como «repo sin commits y sin specs»; queda desactualizada hasta la fase de cierre del plan de arranque.

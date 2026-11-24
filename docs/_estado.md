# Estado — HealthDash

- **Estado:** ACTIVA (arranque iniciado 2026-11-24).
- **Fase:** Fase 1 (esqueleto) en curso; Fase 0 cerrada.
- **Specs:** funcional v0.2 y técnica v0.2, decisiones A1/A2/T1/T2 cerradas.
- **Impl:** esqueleto inicial (`package.json`, `tsconfig.json`, `src/index.ts`, `src/tui.tsx`, `src/format.ts`).
- **Testing:** `npm run typecheck` verde; carga manual en TUI pendiente.
- **Próximo paso:** verificar carga real en OpenCode con `cli.json` (tarea 1.3), luego Fase 2 (fuentes de datos).
- **Evidencia:** `README.md`, `docs/prototipo-sidebar.md`, `docs/prototipo-panel.md`, `docs/prototipo-interactivo.html`, `docs/specs/funcional.md`, `docs/specs/tecnica.md`, `docs/plans/healthdash/`.
- **Decisiones (2026-11-25):**
  - Plugin TUI ligero de OpenCode, no una app web; tipo `./tui` y comandos en palette/slash.
  - Stack: TypeScript/TSX con `@opencode/plugin/tui`, Solid y OpenTUI; sin Angular, Java ni base de datos.
  - Métricas: tokens entrada/salida y coste; agregado en sidebar, por agente en panel.
  - Pantalla dedicada con `router.register`; sin overlay ni `home.footer.status`.
  - Repo público `MIASMA-Dev/HealthDash` (antes `health-dashboard`); solo se corrigió el `origin` local.
- **Contradicciones:** ninguna conocida tras la actualización de specs y docs 2026-11-25.

# HealthDash

HealthDash es un plugin ligero de OpenCode que muestra en tiempo real los agentes activos, su progreso, las skills que usan y su consumo, en el sidebar y en una pantalla dedicada, pensado para desarrolladores que trabajan con varios agentes a la vez.

## Estado

Plugin TUI de OpenCode V2, sin servidor propio, sin base de datos y sin dashboard web. Fase 0 cerrada (specs v0.2) y esqueleto implementado en Fase 1.

## Cargar el plugin

Siendo un paquete solo TUI, se registra en `cli.json`:

```json
{
  "plugins": ["./ruta/a/HealthDash"]
}
```

También se puede publicar como paquete npm y usar su nombre en `plugins`.

## Comandos

- `healthdash.open` — abre la pantalla dedicada (palette y slash `/healthdash`).
- `healthdash.close` — vuelve a la pantalla de inicio (palette).

No hay `bind` global para no colisionar con OpenCode.

## Desarrollo

```bash
npm install
npm run typecheck
```

## Fuentes y decisiones

- `docs/specs/funcional.md` y `docs/specs/tecnica.md` (v0.2).
- `docs/prototipo-sidebar.md`, `docs/prototipo-panel.md` y `docs/prototipo-interactivo.html`.
- `docs/plans/healthdash/` — plan de implantación y estado.

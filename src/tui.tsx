import { Plugin, usePlugin } from "@opencode/plugin/tui"
import { For, Show, createMemo } from "solid-js"
import { formatCost, formatTokens, readMetrics } from "./format.js"

function display(value: unknown): string {
  if (typeof value === "string") return value
  if (typeof value === "number" && Number.isFinite(value)) return String(value)
  return "—"
}

function Sidebar(props: { sessionID?: string }) {
  const context = usePlugin()
  const sessionID = () => props.sessionID ?? context.data.session.list()[0]?.id
  const session = createMemo(() => (sessionID() ? context.data.session.get(sessionID()!) : undefined))
  const status = createMemo(() => (sessionID() ? context.data.session.status(sessionID()!) : undefined))
  const metrics = createMemo(() => readMetrics(sessionID() ? context.data.session.cost(sessionID()!) : undefined))

  return (
    <box flexDirection="column" gap={1}>
      <text fg={context.theme.text.base}>HealthDash</text>
      <Show when={sessionID()} fallback={<text fg={context.theme.text.base}>Sin sesión activa</text>}>
        <text fg={context.theme.text.base}>{display(session()?.title ?? sessionID())}</text>
        <text fg={context.theme.text.base}>{display(status())}</text>
        <text fg={context.theme.text.base}>
          IN {formatTokens(metrics().input)} · OUT {formatTokens(metrics().output)} · {formatCost(metrics().cost)}
        </text>
      </Show>
    </box>
  )
}

function Dashboard() {
  const context = usePlugin()
  const sessions = createMemo(() => context.data.session.list())
  const location = context.location ?? context.data.location.default()
  const agents = createMemo(() => context.data.location.agent.list(location) ?? [])
  const skills = createMemo(() => context.data.location.skill.list(location) ?? [])

  return (
    <box flexDirection="column" gap={1}>
      <text fg={context.theme.text.base}>HealthDash — sesión actual</text>
      <text fg={context.theme.text.base}>Sesiones: {sessions().length} · Agentes: {agents().length} · Skills: {skills().length}</text>
      <For each={sessions()}>
        {(session) => {
          const metrics = readMetrics(context.data.session.cost(session.id))
          return (
            <box flexDirection="column">
              <text fg={context.theme.text.base}>{display(session.title ?? session.id)}</text>
              <text fg={context.theme.text.base}>
                IN {formatTokens(metrics.input)} · OUT {formatTokens(metrics.output)} · {formatCost(metrics.cost)}
              </text>
            </box>
          )
        }}
      </For>
    </box>
  )
}

export default Plugin.define({
  id: "healthdash.tui",
  setup(context) {
    const unregisterRoute = context.ui.router.register({
      name: "healthdash",
      render: () => <Dashboard />,
    })

    const unregisterSlot = context.ui.slot({
      append: "sidebar.content",
      render: ({ sessionID }) => <Sidebar sessionID={sessionID} />,
    })

    context.keymap.layer(() => ({
      mode: "global",
      commands: [
        {
          id: "healthdash.open",
          title: "Abrir HealthDash",
          group: "HealthDash",
          palette: true,
          slash: { name: "healthdash" },
          run: () => context.ui.router.navigate({ type: "plugin", name: "healthdash" }),
        },
        {
          id: "healthdash.close",
          title: "Cerrar HealthDash",
          group: "HealthDash",
          palette: true,
          run: () => context.ui.router.navigate({ type: "home" }),
        },
      ],
    }))

    return () => {
      unregisterRoute()
      unregisterSlot()
    }
  },
})

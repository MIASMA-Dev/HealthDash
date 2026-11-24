type CostLike = {
  input?: number
  output?: number
  cost?: number
  totalCost?: number
}

export type Metrics = {
  input?: number
  output?: number
  cost?: number
}

export function readMetrics(source: unknown): Metrics {
  const value = (source ?? {}) as CostLike
  return {
    input: typeof value.input === "number" ? value.input : undefined,
    output: typeof value.output === "number" ? value.output : undefined,
    cost: typeof value.cost === "number" ? value.cost : typeof value.totalCost === "number" ? value.totalCost : undefined,
  }
}

export function formatTokens(value?: number): string {
  return typeof value === "number" && Number.isFinite(value) ? value.toLocaleString("es-ES") : "—"
}

export function formatCost(value?: number): string {
  return typeof value === "number" && Number.isFinite(value)
    ? value.toLocaleString("es-ES", { style: "currency", currency: "USD" })
    : "—"
}

export interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

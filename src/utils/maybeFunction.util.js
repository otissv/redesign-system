export function maybeFunction(value, context) {
  return component =>
    typeof value === 'function' ? value(context) : component || value
}

export function menuTheme({
  appearance,
  theme: { animation, border, color, font, unit },
}) {
  return {
    position: 'relative',
  }
}

export function menuContainerTheme({
  appearance,
  theme: { animation, border, color, font, unit },
}) {
  return {
    position: 'relative',
  }
}

export function menuContentTheme({
  appearance,
  theme: { animation, border, color, font, unit },
}) {
  return {
    position: 'absolute',
    zIndex: 8,
  }
}

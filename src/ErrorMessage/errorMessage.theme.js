export function errorMessageTheme({
  show,
  theme: { animation, border, color, unit },
}) {
  return {
    color: color.danger,
    transition: animation.easeMedium(),
    margin: `0 0 ${unit[3]} 3px`,
    fontSize: '0.9rem',
    padding: unit[2],
  }
}

export function errorMessageAppearanceTheme({
  appearance,
  theme: { animation, border, color, unit },
}) {
  return (
    {
      primary: {
        color: color.foreground,
        backgroundColor: color.danger,
      },
      secondary: {
        border: border.thinDanger,
      },
    }[appearance] || ''
  )
}

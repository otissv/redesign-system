export function cardHeaderTheme({ collapse, theme: { border, radius } }) {
  return {}
}

export function cardHeaderContextTheme({
  context,
  hover,
  theme: { color, border, elevate, unit },
}) {
  const hoverTheme = hover ? {} : {}

  return (
    {
      accent: {
        borderBottom: `1px solid ${color['pink-300']}`,
      },
      danger: {
        borderBottom: `1px solid ${color['red-300']}`,
      },
      action: {
        borderBottom: `1px solid ${color['light-blue-300']}`,
      },
      success: {
        borderBottom: `1px solid ${color['green-300']}`,
      },
      warning: {
        borderBottom: `1px solid ${color['yellow-300']}`,
      },
    }[context] || ''
  )
}

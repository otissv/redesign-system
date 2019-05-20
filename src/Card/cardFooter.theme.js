export function cardFooterTheme({ collapse, theme: { border, unit, radius } }) {
  return {}
}

export function cardFooterContextTheme({
  context,
  hover,
  theme: { color, border, elevate, unit },
}) {
  const hoverTheme = hover ? {} : {}

  return (
    {
      accent: {
        borderTop: `1px solid ${color['pink-300']}`,
      },
      danger: {
        borderTop: `1px solid ${color['red-300']}`,
      },
      action: {
        borderTop: `1px solid ${color['light-blue-300']}`,
      },
      success: {
        borderTop: `1px solid ${color['green-300']}`,
      },
      warning: {
        borderTop: `1px solid ${color['yellow-300']}`,
      },
    }[context] || ''
  )
}

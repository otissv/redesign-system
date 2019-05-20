export function cardTheme({
  theme: { animation, border, color, elevate, unit, radius },
  ...props
}) {
  const hoverTheme = props.hover
    ? {
        '&:hover': {
          boxShadow: elevate[3],
          transform: `translateY(-${unit[3]})`,
        },
      }
    : {}

  return {
    backgroundColor: color.background,
    border: border.thin,
    boxShadow: props.elevate ? elevate[3] : elevate[0],
    padding: unit[5],
    borderRadius: radius.rounded,
    transition: animation.easeMedium(),
    ...hoverTheme,
  }
}

export function cardContextTheme({
  context,
  hover,
  theme: { color, border, elevate, unit },
}) {
  const hoverTheme = hover
    ? {
        '&:hover': {
          backgroundColor: color[`${context}2`],
          boxShadow: elevate[2],
          transform: `translateY(-${unit[3]})`,
        },
      }
    : {}

  return (
    {
      accent: {
        backgroundColor: color.accent,
        border: `1px solid ${color['pink-300']}`,
        color: color.foreground,
        '&:active': {
          ...hoverTheme,
        },
        '&:focus': {
          ...hoverTheme,
        },
        '&:hover': {
          ...hoverTheme,
        },
      },
      danger: {
        backgroundColor: color.danger,
        border: `1px solid ${color['red-300']}`,
        color: color.foreground,

        '&:active': {
          ...hoverTheme,
        },
        '&:focus': {
          ...hoverTheme,
        },
        '&:hover': {
          ...hoverTheme,
        },
      },
      action: {
        backgroundColor: color.action,
        border: `1px solid ${color['light-blue-300']}`,
        color: color.foreground,
        '&:active': {
          ...hoverTheme,
        },
        '&:focus': {
          ...hoverTheme,
        },
        '&:hover': {
          ...hoverTheme,
        },
      },
      success: {
        backgroundColor: color.success,
        border: `1px solid ${color['green-300']}`,
        color: color.foreground,

        '&:active': {
          ...hoverTheme,
        },
        '&:focus': {
          ...hoverTheme,
        },
        '&:hover': {
          ...hoverTheme,
        },
      },
      warning: {
        backgroundColor: color.warning,
        border: `1px solid ${color['yellow-300']}`,
        color: color.foreground,

        '&:active': {
          ...hoverTheme,
        },
        '&:focus': {
          ...hoverTheme,
        },
        '&:hover': {
          ...hoverTheme,
        },
        context,
      },
    }[context] || ''
  )
}

export function cardSizeTheme({ size, theme: { unit } }) {
  return (
    {
      collapse: {
        padding: 0,
      },
      large: {
        padding: unit[7],
      },
      small: {
        padding: unit[3],
      },
    }[size] || ''
  )
}

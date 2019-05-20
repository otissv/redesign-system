export function iconTheme({ theme: { animation, color }, hoverColor }) {
  return {
    display: 'inline-block',
    color: 'inherit',
    fill: 'currentcolor',
    height: 'auto',

    ...(hoverColor && { '&:hover': { color: hoverColor } }),
  }
}

export function iconAppearanceTheme({ appearance, theme: { color } }) {
  return (
    {
      accent: {
        color: color.accent,
        '&:hover': {
          color: color.accent2,
        },
      },
      action: {
        color: color.action,
        '&:hover': {
          color: color.action2,
        },
      },
      danger: {
        color: color.danger,
        '&:hover': {
          color: color.danger2,
        },
      },
      success: {
        color: color.success,
        '&:hover': {
          color: color.success2,
        },
      },
      warning: {
        color: color.warning,
        '&:hover': {
          color: color.warning2,
        },
      },
      disabled: {
        color: color.disabled,
        '&:hover': {
          color: color.disabled2,
        },
      },
    }[appearance] || ''
  )
}

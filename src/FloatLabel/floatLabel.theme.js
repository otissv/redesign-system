export function floatLabelTheme({ theme: { animation, font } }) {
  return {
    marginTop: '10px',
    position: 'relative',
    minHeight: '40px',
    lineHeight: `${35 + parseInt(font.small, 10)}px`,
    transition: animation.easeMedium(),
    // marginBottom: '30px'
  }
}

export function floatLabelLabelTheme({ theme: { animation, font } }) {
  return {
    position: 'absolute',
    pointerEvents: 'none',
    top: '0',
    left: 0,
    height: 'inherit',
    margin: '3px',
    transition: animation.easeMedium('transform'),
    fontSize: font.default,
  }
}

export function floatLabelLabelFloatingTheme({
  element,
  floating,
  theme: { color },
}) {
  return floating
    ? {
        backgroundColor: color.background,
        transformOrigin: 'left',
        pointerEvents: 'none',
        transform: `translateY(-70%) scale(0.8)`,
      }
    : null
}

export function floatLabelLabelActiveTheme({ active, theme: { color } }) {
  return active ? { color: color.active } : null
}

export function floatLabelLabelContextTheme({ context, theme: { color } }) {
  return (
    {
      accent: {
        color: color.accent,
      },
      danger: {
        color: color.danger,
      },
      disabled: {
        color: color.disabled,
      },
      action: {
        color: color.action,
      },
      success: {
        color: color.success,
      },
      warning: {
        color: color.warning,
      },
    }[context] || ''
  )
}

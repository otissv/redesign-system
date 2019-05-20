export function badgeTheme({ theme: { border, color } }) {
  return {
    display: 'inline-block',
    fontWeight: 700,
    padding: '0.25em 0.4em',
    fontSize: '90%',
    lineHeight: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: '2px',
    color: color.foregroundInvert,
    background: color.backgroundInvert,
    border: border.thinTransparent,
  }
}

export function badgeContextTheme({ appearance, theme: { color, border } }) {
  return (
    {
      secondary: {
        color: color['grey-600'],
        background: color['grey-200'],
        border: border.thinTransparent,
      },
      tertiary: {
        background: 'none',
        border: border.thin,
        color: color.foreground,
      },

      accent: {
        color: '#fff',
        background: color.accent,
        border: border.thinTransparent,
      },
      'primary-accent': {
        color: '#fff',
        background: color.accent,
        border: border.thinTransparent,
      },
      'secondary-accent': {
        color: color['accent-600'],
        background: color['accent-200'],
        border: border.thinTransparent,
      },
      'tertiary-accent': {
        background: 'none',
        border: `1px solid ${color['accent-400']}`,
        color: color['accent-400'],
      },

      action: {
        color: color['action-500'],
        background: color['action-200'],
        border: border.thinTransparent,
      },
      'primary-action': {
        color: color['action-500'],
        background: color['action-200'],
        border: border.thinTransparent,
      },
      'secondary-action': {
        color: color['action-600'],
        background: color['action-200'],
        border: border.thinTransparent,
      },
      'tertiary-action': {
        background: 'none',
        border: `1px solid ${color['action-400']}`,
        color: color['action-400'],
      },

      danger: {
        color: '#fff',
        background: color.danger,
        border: border.thinTransparent,
      },
      'primary-danger': {
        color: '#fff',
        background: color.danger,
        border: border.thinTransparent,
      },
      'secondary-danger': {
        color: color['danger-600'],
        background: color['danger-200'],
        border: border.thinTransparent,
      },
      'tertiary-danger': {
        background: 'none',
        border: `1px solid ${color['danger-400']}`,
        color: color['danger-400'],
      },

      success: {
        color: '#fff',
        background: color.success,
        border: border.thinTransparent,
      },
      'primary-success': {
        color: '#fff',
        background: color.success,
        border: border.thinTransparent,
      },
      'secondary-success': {
        color: color['success-600'],
        background: color['success-200'],
        border: border.thinTransparent,
      },
      'tertiary-success': {
        background: 'none',
        border: `1px solid ${color['success-400']}`,
        color: color['success-400'],
      },

      warning: {
        color: '#fff',
        background: color.warning,
        border: border.thinTransparent,
      },
      'primary-warning': {
        color: '#fff',
        background: color.warning,
        border: border.thinTransparent,
      },
      'secondary-warning': {
        color: color['warning-600'],
        background: color['warning-200'],
        border: border.thinTransparent,
      },
      'tertiary-warning': {
        background: 'none',
        border: `1px solid ${color['warning-400']}`,
        color: color['warning-400'],
      },
    }[appearance] || ''
  )
}

export function badgePillTheme({ pill, theme: { color } }) {
  return pill
    ? {
        paddingRight: ' 0.6em',
        paddingLeft: '0.6em',
        borderRadius: '10rem',
      }
    : ''
}
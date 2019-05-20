export function alertTheme({ theme: { unit, color } }) {
  return {
    position: 'relative',
    padding: `${unit[4]}`,
  }
}

export function alertAppearanceTheme({
  appearance,
  context,
  theme: { border, color },
  theme,
}) {
  const _appearance = appearance || ''
  const _context =
    appearance && context ? `-${context}` : context ? context : ''

  const key = `${_appearance}${_context}`

  return (
    {
      primary: {
        color: color.foregroundInvert,
        backgroundColor: color.backgroundInvert,
        border: border.thinTransparent,
      },
      secondary: {
        backgroundColor: 'none',
        border: border.thin,
      },

      accent: {
        color: color['accent-800'],
        backgroundColor: color['accent-100'],
        border: `1px solid ${color['accent-100']}`,
      },
      'primary-accent': {
        color: color['accent-050'],
        backgroundColor: color['accent-500'],
        border: `1px solid ${color['accent-500']}`,
      },
      'secondary-accent': {
        color: color['accent-300'],
        backgroundColor: 'none',
        border: `1px solid ${color['accent-300']}`,
      },

      action: {
        color: color['action-800'],
        backgroundColor: color['action-100'],
        border: `1px solid ${color['action-100']}`,
      },
      'primary-action': {
        color: color['action-050'],
        backgroundColor: color['action-500'],
        border: `1px solid ${color['action-500']}`,
      },
      'secondary-action': {
        color: color['action-300'],
        backgroundColor: 'none',
        border: `1px solid ${color['action-300']}`,
      },

      danger: {
        color: color['danger-800'],
        backgroundColor: color['danger-300'],
        border: `1px solid ${color['danger-300']}`,
      },
      'primary-danger': {
        color: color['danger-050'],
        backgroundColor: color['danger-500'],
        border: `1px solid ${color['danger-500']}`,
      },
      'secondary-danger': {
        color: color['danger-300'],
        backgroundColor: 'none',
        border: `1px solid ${color['danger-300']}`,
      },

      success: {
        color: color['success-800'],
        backgroundColor: color['success-300'],
        border: `1px solid ${color['success-300']}`,
      },
      'primary-success': {
        color: color['success-050'],
        backgroundColor: color['success-500'],
        border: `1px solid ${color['success-500']}`,
      },
      'secondary-success': {
        color: color['success-300'],
        backgroundColor: 'none',
        border: `1px solid ${color['success-300']}`,
      },

      warning: {
        color: color['warning-800'],
        backgroundColor: color['warning-300'],
        border: `1px solid ${color['warning-300']}`,
      },
      'primary-warning': {
        color: color['warning-050'],
        backgroundColor: color['warning-500'],
        border: `1px solid ${color['warning-500']}`,
      },
      'secondary-warning': {
        color: color['warning-300'],
        backgroundColor: 'none',
        border: `1px solid ${color['warning-300']}`,
      },
    }[key] || ''
  )
}

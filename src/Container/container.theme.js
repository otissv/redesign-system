export function containerContextTheme({ context, theme: { color } }) {
  return (
    {
      accent: {
        background: color.accent,
        color: '#ffffff',
      },
      action: {
        backgroundColor: color.action,
        color: '#ffffff',
      },
      danger: {
        backgroundColor: color.danger,
        color: '#ffffff',
      },

      success: {
        backgroundColor: color.success,
        color: '#ffffff',
      },
      warning: {
        backgroundColor: color.warning,
        color: '#ffffff',
      },
    }[context] || ''
  )
}

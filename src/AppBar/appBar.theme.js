const input = (color, radius) => ({
  background: 'hsla(0,0%,0%,0.1)',
  border: '1px solid #0000',
  borderRadius: radius.rounded,
  '&::placeholder': {
    color: color['grey-900'],
  },

  '&:hover': {
    background: 'hsla(0,0%,0%,0.2)',
  },
  '&:focus': {
    background: 'hsla(0,0%,0%,0.2)',
  },
  '&:active': {
    background: 'hsla(0,0%, 0%,0.2)',
  },
})

export function appBarTheme({ theme: { color, radius, unit } }) {
  return {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    display: 'flex',
    flexShrink: 0,
    minHeight: '56px',
    position: 'relative',
    width: '100%',
    zIndex: '1100',
    backgroundColor: color.backgroundInvert,
    color: color.foregroundInvert,

    '>button.Button': {
      minHeight: 'inherit',
      border: '1px solid #0000',
      borderRadius: 0,
      '>svg.Icon': {
        paddingRight: 0,
      },
    },

    'input.Input': {
      ...input(color, radius),
      color: color.foregroundInvert,
    },
  }
}

export function appBarAppearanceTheme({
  appearance,
  theme: { color, radius },
}) {
  const appearanceInput = {
    'input.Input': {
      ...input(color, radius),
      color: color.foreground,
    },
  }
  return (
    {
      action: {
        backgroundColor: color.action,
        color: '#ffffff',
        ...appearanceInput,
      },
      accent: {
        background: color.accent,
        color: '#ffffff',
        ...appearanceInput,
      },
      danger: {
        backgroundColor: color.danger,
        color: '#ffffff',
        ...appearanceInput,
      },
      success: {
        backgroundColor: color.success,
        color: '#ffffff',
        ...appearanceInput,
      },
      warning: {
        backgroundColor: color.warning,
        color: '#ffffff',
        ...appearanceInput,
      },
    }[appearance] || ''
  )
}

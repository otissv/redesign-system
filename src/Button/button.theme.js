export function buttonTheme({
  theme: { animation, color, border, font, unit, radius },
}) {
  return {
    color: color['grey-900'],
    background: color['grey-050'],
    border: border.thinGrey050,
    borderRadius: radius.rounded,
    boxShadow: 'none',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-block',
    font: 'inherit',
    lineHeight: font.lineHeight[4],
    margin: 0,
    overflow: 'visible',
    padding: `0 ${unit[3]}`,
    textAlign: 'center',
    transition: animation.easeMedium(),
    verticalAlign: 'middle',
    outline: 0,

    '&:hover': {
      background: color['grey-200'],
      border: border.thinGrey200,
    },
    '&:focus': {
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color['grey-300'],
      border: border.thinGrey300,
    },
  }
}

export function buttonAppearanceTheme({
  appearance,
  context,
  theme: { color, border, radius },
  theme,
  ...rest
}) {
  return {
    secondary: {
      background: 'none',
      color: color.foreground,
      '&:hover': {
        background: color['grey-200'],
        border: border.thinGrey200,
        color: color.foregroundInvert,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        background: color['grey-300'],
        border: border.thinGrey300,
        color: color.foregroundInvert,
      },
    },
    tertiary: {
      background: 'none',
      border: `1px solid ${color.transparent}`,
      color: color.foreground,
      borderRadius: 0,
      '&:hover': {
        borderBottom: border.thinGrey200,
        borderRadius: 'inherit',
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        borderBottom: border.thinGrey300,
        borderRadius: radius.rounded,
        background: color['grey-300'],
      },
    },

    accent: {
      background: color.accent,
      border: border.thinAccent,
      color: color.foreground,
      '&:hover': {
        background: color.accent2,
        borderBottom: border.thinAccent2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        background: color['pink-500'],
        borderBottom: `1px solid ${color['pink-500']}`,
      },
    },
    'primary-accent': {
      background: color.accent,
      border: border.thinAccent,
      color: color.foreground,
      '&:hover': {
        background: color.accent2,
        borderBottom: border.thinAccent2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        background: color['pink-500'],
        borderBottom: `1px solid ${color['pink-500']}`,
      },
    },
    'secondary-accent': {
      background: 'none',
      border: border.thinAccent,
      color: color.foreground,
      '&:hover': {
        background: color.accent2,
        border: border.thinAccent2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        background: color.accent,
        border: `1px solid ${color.accent}`,
      },
    },
    'tertiary-accent': {
      background: 'none',
      border: `1px solid ${color.transparent}`,
      color: color.accent,
      borderRadius: 0,
      '&:hover': {
        borderBottom: border.thinAccent,
      },
      '&:active': {
        background: color.accent2,
        borderBottom: border.thinAccent,
        borderRadius: radius.rounded,
        color: color.white,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },

    action: {
      background: color.action,
      border: border.thinAction,
      color: color.foreground,
      '&:hover': {
        background: color.action2,
        border: border.thinAction2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        background: color.action,
        border: border.thinAction2,
      },
    },

    'primary-action': {
      background: color.action,
      border: border.thinAction,
      color: color.foreground,
      '&:hover': {
        background: color.action2,
        border: border.thinAction2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        background: color.action,
        border: border.thinAction2,
      },
    },
    'secondary-action': {
      background: 'none',
      border: border.thinAction,
      color: color.foreground,
      '&:hover': {
        background: color.action2,
        border: border.thinAction2,
      },
      '&:active': {
        background: color.action2,
        border: border.thinAction2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },
    'tertiary-action': {
      background: 'none',
      border: `1px solid ${color.transparent}`,
      color: color.action,
      borderRadius: 0,
      '&:hover': {
        borderBottom: border.thinAction,
      },
      '&:active': {
        background: color.action2,
        borderBottom: border.thinAction,
        borderRadius: radius.rounded,
        color: color.white,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },

    danger: {
      background: color.danger,
      border: border.thinDanger,
      color: color.foreground,
      '&:hover': {
        background: color.danger2,
        border: border.thinDanger2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        background: color.danger,
        border: border.thinDanger,
      },
    },
    'primary-danger': {
      background: color.danger,
      border: border.thinDanger,
      color: color.foreground,
      '&:hover': {
        background: color.danger2,
        border: border.thinDanger2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        background: color.danger,
        border: border.thinDanger,
      },
    },
    'secondary-danger': {
      background: 'none',
      border: border.thinDanger,
      color: color.foreground,
      '&:hover': {
        background: color.danger2,
        border: border.thinDanger2,
      },
      '&:active': {
        background: color.danger2,
        border: border.thinDanger2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },
    'tertiary-danger': {
      background: 'none',
      border: `1px solid ${color.transparent}`,
      color: color.danger,
      borderRadius: 0,
      '&:hover': {
        borderBottom: border.thinDanger,
      },
      '&:active': {
        background: color.danger2,
        borderBottom: border.thinDanger,
        borderRadius: radius.rounded,
        color: color.white,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },

    success: {
      background: color.success,
      border: border.thinSuccess,
      color: color.foreground,
      '&:hover': {
        background: color.success2,
        border: border.thinSuccess2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        background: color.success,
        border: border.thinSuccess,
      },
    },
    'primary-success': {
      background: color.success,
      border: border.thinSuccess,
      color: color.foreground,
      '&:hover': {
        background: color.success2,
        border: border.thinSuccess2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        background: color.success,
        border: border.thinSuccess,
      },
    },
    'secondary-success': {
      background: 'none',
      border: border.thinSuccess,
      color: color.foreground,
      '&:hover': {
        background: color.success2,
        border: border.thinSuccess2,
      },
      '&:active': {
        background: color.success2,
        border: border.thinSuccess2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },
    'tertiary-success': {
      background: 'none',
      border: `1px solid ${color.transparent}`,
      color: color.success,
      borderRadius: 0,
      '&:hover': {
        borderBottom: border.thinSuccess,
      },
      '&:active': {
        background: color.success2,
        borderBottom: border.thinSuccess,
        borderRadius: radius.rounded,
        color: color.white,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },

    warning: {
      background: color.warning,
      border: border.thinWarning,
      color: color.foreground,
      '&:hover': {
        background: color.warning2,
        border: border.thinWarning2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        background: color.warning,
        border: border.thinWarning,
      },
    },
    'primary-warning': {
      background: color.warning,
      border: border.thinWarning,
      color: color.foreground,
      '&:hover': {
        background: color.warning2,
        border: border.thinWarning2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
      '&:active': {
        background: color.warning,
        border: border.thinWarning,
      },
    },
    'secondary-warning': {
      background: 'none',
      border: border.thinWarning,
      color: color.foreground,
      '&:hover': {
        background: color.warning2,
        border: border.thinWarning2,
      },
      '&:active': {
        background: color.warning2,
        border: border.thinWarning2,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },
    'tertiary-warning': {
      background: 'none',
      border: `1px solid ${color.transparent}`,
      color: color.warning,
      borderRadius: 0,
      '&:hover': {
        borderBottom: border.thinWarning,
      },
      '&:active': {
        background: color.warning2,
        borderBottom: border.thinWarning,
        borderRadius: radius.rounded,
        color: color.white,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },

    disabled: {
      background: color.disabled,
      border: border.thinDisabled,
      color: color['grey-900'],
      cursor: 'default',
      '&:hover': {
        background: color.disabled,
        border: border.thinDisabled,
        color: color['grey-900'],
      },
      '&:active': {
        background: color.disabled,
        border: border.thinDisabled,
        color: color['grey-900'],
      },
      '&:focus': {
        background: color.disabled,
        border: border.thinDisabled,
        color: color['grey-900'],
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },
    'primary-disabled': {
      background: color.disabled,
      border: border.thinDisabled,
      color: color['grey-900'],
      cursor: 'default',
      '&:hover': {
        background: color.disabled,
        border: border.thinDisabled,
        color: color['grey-900'],
      },
      '&:active': {
        background: color.disabled,
        border: border.thinDisabled,
        color: color['grey-900'],
      },
      '&:focus': {
        background: color.disabled,
        border: border.thinDisabled,
        color: color['grey-900'],
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },
    'secondary-disabled': {
      background: 'none',
      border: border.thinDisabled,
      color: color['grey-500'],
      cursor: 'default',
      '&:hover': {
        color: color['grey-500'],
      },
      '&:active': {
        color: color['grey-500'],
      },
      '&:focus': {
        color: color['grey-500'],
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },
    'tertiary-disabled': {
      background: 'none',
      border: `1px solid ${color.transparent}`,
      color: color.disabled,
      cursor: 'default',
      '&:hover': {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.disabled,
      },
      '&:active': {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.disabled,
      },
      '&:focus': {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.disabled,
        boxShadow: `0 0 0 0.2em ${color.outline}`,
        zIndex: 2,
      },
    },
  }[appearance]
}

export function buttonSizeTheme({ size, theme: { font } }) {
  return (
    {
      large: {
        padding: '0 40px',
        lineHeight: '4',
      },
      small: {
        padding: '0 15px',
        lineHeight: font.lineHeight[1],
      },
    }[size] || ''
  )
}

export function buttonStretchTheme({ stretch }) {
  return stretch ? { width: '100%' } : ''
}

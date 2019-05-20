export function notifyTheme({
  theme: { animation, border, color, font, unit },
}) {
  return {
    position: 'fixed',
    top: unit[3],
    left: unit[3],

    lineHeight: font.lineHeight.default,
    cursor: 'pointer',
    borderRadius: border.radius,
    zIndex: 1040,
    width: '350px',
    transition: animation.easeMedium(),
  }
}

export function notifyPositionTheme({
  position,
  theme: { border, color, font, unit },
}) {
  return (
    {
      'top-center': {
        left: '50%',
        right: 'auto',
      },
      'top-left': {
        left: unit[3],
        right: 'auto',
      },
      'top-right': {
        right: unit[3],
        left: 'auto',
      },
      'bottom-center': {
        left: '50%',
        right: 'auto',
      },
      'bottom-left': {
        top: unit[3],
        left: unit[3],
        right: 'auto',
      },
      'bottom-right': {
        top: 0,
        right: unit[3],
        left: 'auto',
      },
    }[position] || ''
  )
}
// element.style {
//   display: block;
//   opacity: 1;
//   transform: translateY(0px);
// }
// .uk-notify-message {
//   position: relative;
//   margin-bottom: 10px;
//   padding: 15px;
//   background: #444;
//   color: #fff;
//   font-size: 16px;
//   line-height: 22px;
//   cursor: pointer;
//   border: 1px solid #444;
//   border-radius: 4px;
// }

export function notifyNotificationTheme({ theme: { color, elevate, unit } }) {
  return {
    position: 'relative',
    background: color.background,
    width: '300px',
    minHeight: '50px',
    marginTop: '5px',
    zIndex: '100',
    boxShadow: elevate[5],
    padding: unit[5],
  }
}

export function notifyNotificationCloseButtonTheme({
  theme: { animation, border, color, font, unit },
}) {
  return {
    position: 'absolute',
    top: 0,
    right: 0,
    background: 'none',
    borderColor: '#0000',
    color: color['grey-300'],
    padding: 0,
    margin: '5px 5px 0 0',

    '&:hover': {
      background: 'inherit',
      borderColor: '#0000',
      color: color.foreground,
    },

    '&:active': {
      background: 'inherit',
      borderColor: '#0000',
      color: color['grey-500'],
    },
  }
}

export function notifyNotificationAppearanceTheme({
  appearance,
  context,
  theme: { color, border, radius },
  theme,
  ...rest
}) {
  return {
    secondary: {
      border: `${border.thinWidth} solid ${color.foreground}`,
      color: color.foreground,
    },
    tertiary: {
      borderLeft: `${border.thickWidth} solid ${color.foreground}`,
      color: color.foreground,
    },

    accent: {
      background: color.accent,
      border: border.thinAccent,
    },
    'primary-accent': {
      background: color.accent,
      border: border.thinAccent,
    },
    'secondary-accent': {
      border: border.thinAccent,
    },
    'tertiary-accent': {
      borderLeft: border.thickAccent,
    },

    action: {
      background: color.action,
      border: border.thinAction,
    },
    'primary-action': {
      background: color.action,
      border: border.thinAction,
    },
    'secondary-action': {
      border: border.thinAction,
    },
    'tertiary-action': {
      borderLeft: border.thickAction,
    },

    danger: {
      background: color.danger,
      border: border.thinDanger,
    },
    'primary-danger': {
      background: color.danger,
      border: border.thinDanger,
    },
    'secondary-danger': {
      border: border.thinDanger,
    },
    'tertiary-danger': {
      borderLeft: border.thickDanger,
    },

    success: {
      background: color.success,
      border: border.thinSuccess,
    },
    'primary-success': {
      background: color.success,
      border: border.thinSuccess,
    },
    'secondary-success': {
      border: border.thinSuccess,
    },
    'tertiary-success': {
      borderLeft: border.thickSuccess,
    },

    warning: {
      background: color.warning,
      border: border.thinWarning,
    },
    'primary-warning': {
      background: color.warning,
      border: border.thinWarning,
    },
    'secondary-warning': {
      border: border.thinWarning,
    },
    'tertiary-warning': {
      borderLeft: border.thickWarning,
    },
  }[appearance]
}

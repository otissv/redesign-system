import { ToastInterface } from './toast.types'

export function toastTheme({
  theme: { animation, border, font, unit },
}: ToastInterface) {
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

export function toastPositionTheme({
  position,
  theme: { unit },
}: ToastInterface) {
  switch (position) {
    case 'top-center':
      return {
        left: '50%',
        right: 'auto',
      }
    case 'top-left':
      return {
        left: unit[3],
        right: 'auto',
      }
    case 'top-right':
      return {
        right: unit[3],
        left: 'auto',
      }
    case 'bottom-center':
      return {
        left: '50%',
        right: 'auto',
      }
    case 'bottom-left':
      return {
        top: unit[3],
        left: unit[3],
        right: 'auto',
      }
    case 'bottom-right':
      return {
        top: 0,
        right: unit[3],
        left: 'auto',
      }

    default:
      return {}
  }
}

export function toastNotificationTheme({
  theme: { color, elevate, unit },
}: ToastInterface) {
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

export function toastNotificationCloseButtonTheme({
  theme: { color },
}: ToastInterface) {
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

export function toastNotificationAppearanceTheme({
  appearance,
  theme: { color, border },
}: ToastInterface) {
  switch (appearance) {
    case 'secondary':
      return {
        border: `${border.thinWidth} solid ${color.foreground}`,
        color: color.foreground,
      }
    case 'tertiary':
      return {
        borderLeft: `4px solid ${color.foreground}`,
        color: color.foreground,
      }

    case 'accent':
      return {
        background: color.accent,
        border: border.thinAccent,
      }
    case 'primary-accent':
      return {
        background: color.accent,
        border: border.thinAccent,
      }
    case 'secondary-accent':
      return {
        border: border.thinAccent,
      }
    case 'tertiary-accent':
      return {
        borderLeft: `4px solid ${color.accent}`,
      }

    case 'action':
      return {
        background: color.action,
        border: border.thinAction,
      }
    case 'primary-action':
      return {
        background: color.action,
        border: border.thinAction,
      }
    case 'secondary-action':
      return {
        border: border.thinAction,
      }
    case 'tertiary-action':
      return {
        borderLeft: `4px solid ${color.action}`,
      }

    case 'danger':
      return {
        background: color.danger,
        border: border.thinDanger,
      }
    case 'primary-danger':
      return {
        background: color.danger,
        border: border.thinDanger,
      }
    case 'secondary-danger':
      return {
        border: border.thinDanger,
      }
    case 'tertiary-danger':
      return {
        borderLeft: `4px solid ${color.danger}`,
      }

    case 'success':
      return {
        background: color.success,
        border: border.thinSuccess,
      }
    case 'primary-success':
      return {
        background: color.success,
        border: border.thinSuccess,
      }
    case 'secondary-success':
      return {
        border: border.thinSuccess,
      }
    case 'tertiary-success':
      return {
        borderLeft: `4px solid ${color.success}`,
      }

    case 'warning':
      return {
        background: color.warning,
        border: border.thinWarning,
      }
    case 'primary-warning':
      return {
        background: color.warning,
        border: border.thinWarning,
      }
    case 'secondary-warning':
      return {
        border: border.thinWarning,
      }
    case 'tertiary-warning':
      return {
        borderLeft: `4px solid ${color.warning}`,
      }

    default:
      return {}
  }
}

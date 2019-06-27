import { BadgeInterface } from './badge.types';

export function badgeTheme({ theme: { border, color } }: BadgeInterface) {
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
  };
}

export function badgeAppearanceTheme({
  appearance,
  theme: { color, border },
}: BadgeInterface) {
  switch (appearance) {
    case 'secondary':
      return {
        color: color['grey-600'],
        background: color['grey-200'],
        border: border.thinTransparent,
      };
    case 'tertiary':
      return {
        background: 'none',
        border: border.thin,
        color: color.foreground,
      };

    case 'accent':
      return {
        color: '#fff',
        background: color.accent,
        border: border.thinTransparent,
      };
    case 'primary-accent':
      return {
        color: '#fff',
        background: color.accent,
        border: border.thinTransparent,
      };
    case 'secondary-accent':
      return {
        color: color['accent-600'],
        background: color['accent-200'],
        border: border.thinTransparent,
      };
    case 'tertiary-accent':
      return {
        background: 'none',
        border: `1px solid ${color['accent-400']}`,
        color: color['accent-400'],
      };

    case 'action':
      return {
        color: color['action-500'],
        background: color['action-200'],
        border: border.thinTransparent,
      };
    case 'primary-action':
      return {
        color: color['action-500'],
        background: color['action-200'],
        border: border.thinTransparent,
      };
    case 'secondary-action':
      return {
        color: color['action-600'],
        background: color['action-200'],
        border: border.thinTransparent,
      };
    case 'tertiary-action':
      return {
        background: 'none',
        border: `1px solid ${color['action-400']}`,
        color: color['action-400'],
      };

    case 'danger':
      return {
        color: '#fff',
        background: color.danger,
        border: border.thinTransparent,
      };
    case 'primary-danger':
      return {
        color: '#fff',
        background: color.danger,
        border: border.thinTransparent,
      };
    case 'secondary-danger':
      return {
        color: color['danger-600'],
        background: color['danger-200'],
        border: border.thinTransparent,
      };
    case 'tertiary-danger':
      return {
        background: 'none',
        border: `1px solid ${color['danger-400']}`,
        color: color['danger-400'],
      };

    case 'success':
      return {
        color: '#fff',
        background: color.success,
        border: border.thinTransparent,
      };
    case 'primary-success':
      return {
        color: '#fff',
        background: color.success,
        border: border.thinTransparent,
      };
    case 'secondary-success':
      return {
        color: color['success-600'],
        background: color['success-200'],
        border: border.thinTransparent,
      };
    case 'tertiary-success':
      return {
        background: 'none',
        border: `1px solid ${color['success-400']}`,
        color: color['success-400'],
      };

    case 'warning':
      return {
        color: '#fff',
        background: color.warning,
        border: border.thinTransparent,
      };
    case 'primary-warning':
      return {
        color: '#fff',
        background: color.warning,
        border: border.thinTransparent,
      };
    case 'secondary-warning':
      return {
        color: color['warning-600'],
        background: color['warning-200'],
        border: border.thinTransparent,
      };
    case 'tertiary-warning':
      return {
        background: 'none',
        border: `1px solid ${color['warning-400']}`,
        color: color['warning-400'],
      };
    default:
      return {};
  }
}

export function badgePillTheme({ pill }: BadgeInterface) {
  return pill
    ? {
        paddingRight: ' 0.6em',
        paddingLeft: '0.6em',
        borderRadius: '10rem',
      }
    : {};
}

import { AlertInterface } from './alert.types';

export function alertTheme({ theme: { unit } }: AlertInterface) {
  return {
    position: 'relative',
    padding: `${unit[4]}`,
  };
}

export function alertAppearanceTheme({
  appearance,
  theme: { border, color },
}: AlertInterface) {
  const accent = {
    color: color['accent-050'],
    backgroundColor: color['accent-500'],
    border: `1px solid ${color['accent-500']}`,
  };

  const active = {
    color: color['active-050'],
    backgroundColor: color['active-500'],
    border: `1px solid ${color['active-500']}`,
  };

  const action = {
    color: color['action-050'],
    backgroundColor: color['action-500'],
    border: `1px solid ${color['action-500']}`,
  };

  const danger = {
    color: color['danger-050'],
    backgroundColor: color['danger-500'],
    border: `1px solid ${color['danger-500']}`,
  };

  const success = {
    color: color['success-050'],
    backgroundColor: color['success-500'],
    border: `1px solid ${color['success-500']}`,
  };

  const warning = {
    color: color['warning-050'],
    backgroundColor: color['warning-500'],
    border: `1px solid ${color['warning-500']}`,
  };

  switch (appearance) {
    case 'primary':
      return {
        color: color.white,
        backgroundColor: color.default,
        border: border.thinDefault,
      };
    case 'secondary':
      return {
        color: color['default-800'],
        backgroundColor: color['default-100'],
        border: `1px solid ${color['default-100']}`,
      };
    case 'tertiary':
      return {
        backgroundColor: 'none',
        border: border.thin,
      };

    case 'accent':
    case 'primary-accent':
      return accent;
    case 'secondary-accent':
      return {
        color: color['accent-800'],
        backgroundColor: color['accent-100'],
        border: `1px solid ${color['accent-100']}`,
      };
    case 'tertiary-accent':
      return {
        color: color['accent-300'],
        backgroundColor: 'none',
        border: `1px solid ${color['accent-300']}`,
      };

    case 'active':
    case 'primary-active':
      return active;
    case 'secondary-active':
      return {
        color: color['active-800'],
        backgroundColor: color['active-100'],
        border: `1px solid ${color['active-100']}`,
      };
    case 'tertiary-active':
      return {
        color: color['active-300'],
        backgroundColor: 'none',
        border: `1px solid ${color['active-300']}`,
      };

    case 'action':
    case 'primary-action':
      return action;
    case 'secondary-action':
      return {
        color: color['action-800'],
        backgroundColor: color['action-100'],
        border: `1px solid ${color['action-100']}`,
      };
    case 'tertiary-action':
      return {
        color: color['action-300'],
        backgroundColor: 'none',
        border: `1px solid ${color['action-300']}`,
      };

    case 'danger':
    case 'primary-danger':
      return danger;
    case 'secondary-danger':
      return {
        color: color['danger-800'],
        backgroundColor: color['danger-300'],
        border: `1px solid ${color['danger-300']}`,
      };
    case 'tertiary-danger':
      return {
        color: color['danger-300'],
        backgroundColor: 'none',
        border: `1px solid ${color['danger-300']}`,
      };

    case 'success':
    case 'primary-success':
      return success;
    case 'secondary-success':
      return {
        color: color['success-800'],
        backgroundColor: color['success-300'],
        border: `1px solid ${color['success-300']}`,
      };
    case 'tertiary-success':
      return {
        color: color['success-300'],
        backgroundColor: 'none',
        border: `1px solid ${color['success-300']}`,
      };

    case 'warning':
    case 'primary-warning':
      return warning;
    case 'secondary-warning':
      return {
        color: color['warning-800'],
        backgroundColor: color['warning-300'],
        border: `1px solid ${color['warning-300']}`,
      };
    case 'tertiary-warning':
      return {
        color: color['warning-300'],
        backgroundColor: 'none',
        border: `1px solid ${color['warning-300']}`,
      };
    default:
      return {};
  }
}

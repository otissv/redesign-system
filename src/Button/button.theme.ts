import { ButtonInterface } from './button.types';

export function buttonTheme({
  theme: { animation, color, border, font, unit },
}: ButtonInterface) {
  const activeState = {
    background: color.default,
    borderBottom: border.thinDefault,
  };

  return {
    color: color.white,
    background: color.default,
    border: border.thinDefault,
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
    position: 'relative',

    '&:hover': {
      background: color.default2,
      borderBottom: border.thinDefault2,
    },
    '&:focus': {
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:active': activeState,
  };
}

export function buttonAppearanceTheme({
  appearance,
  theme: { color, border },
}: ButtonInterface) {
  const accent = {
    background: color.accent,
    border: border.thinAccent,
    color: color.white,
    '&:hover': {
      background: color.accent2,
      borderBottom: border.thinAccent2,
    },
    '&:focus': {
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.accent,
      border: border.thinAccent,
    },
  };

  const active = {
    background: color.active,
    border: border.thinActive,
    color: color.white,
    '&:hover': {
      background: color.active2,
      border: border.thinActive2,
    },
    '&:focus': {
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color.active,
      border: border.thinActive,
    },
  };

  const action = {
    background: color.action,
    border: border.thinAction,
    color: color.white,
    '&:hover': {
      background: color.action2,
      border: border.thinAction2,
    },
    '&:focus': {
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:action': {
      background: color.action,
      border: border.thinAction,
    },
  };

  const danger = {
    background: color.danger,
    border: border.thinDanger,
    color: color.white,
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
  };

  const success = {
    background: color.success,
    border: border.thinSuccess,
    color: color.white,
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
  };

  const warning = {
    background: color.warning,
    border: border.thinWarning,
    color: color.white,
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
  };

  const disabled = {
    background: color.disabled,
    border: border.thinDisabled,
    color: color['grey-900'],
    cursor: 'default',
    pointerEvents: 'none',

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
  };

  switch (appearance) {
    case 'secondary':
      return {
        background: 'none',
        border: border.thinDefault,
        color: color.white,
        '&:hover': {
          background: color.default2,
          border: border.thinDefault2,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color.default2,
          border: border.thinDefault2,
          color: color.white,
        },
      };
    case 'tertiary':
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.foreground,
        '&:hover': {
          borderBottom: border.thinDefault200,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          borderBottom: border.thinDefault300,
          background: color['default-300'],
        },
      };

    case 'accent':
    case 'primary-accent':
      return accent;
    case 'secondary-accent':
      return {
        background: 'none',
        border: border.thinAccent,
        color: color.accent,
        '&:hover': {
          background: color.accent2,
          border: border.thinAccent2,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color.accent,
          border: `1px solid ${color.accent}`,
          color: color.white,
        },
      };
    case 'tertiary-accent':
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.accent,
        '&:hover': {
          borderBottom: border.thinAccent,
        },
        '&:active': {
          background: color.accent2,
          borderBottom: border.thinAccent,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
      };

    case 'active':
    case 'primary-active':
      return active;
    case 'secondary-active':
      return {
        background: color.active,
        border: border.thinActive,
        color: color.white,
        '&:hover': {
          background: color.active2,
          border: border.thinActive2,
          color: color.white,
        },
        '&:active': {
          background: color.active,
          border: border.thinActive,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
      };
    case 'tertiary-active':
      return {
        background: color.active,
        border: `1px solid ${color.transparent}`,
        borderBottom: border.thinActive,
        color: color.white,
        '&:hover': {
          background: color.active2,
          borderBottom: border.thinActive2,
          color: color.white,
        },
        '&:active': {
          background: color.active,
          borderBottom: border.thinActive,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
      };

    case 'action':
    case 'primary-action':
      return action;
    case 'secondary-action':
      return {
        background: 'none',
        border: border.thinAction,
        color: color.action,
        '&:hover': {
          background: color.action2,
          border: border.thinAction2,
          color: color.white,
        },
        '&:active': {
          background: color.action2,
          border: border.thinAction2,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
      };
    case 'tertiary-action':
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.action,
        '&:hover': {
          borderBottom: border.thinAction,
        },
        '&:active': {
          background: color.action2,
          borderBottom: border.thinAction,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
      };

    case 'danger':
    case 'primary-danger':
      return danger;
    case 'secondary-danger':
      return {
        background: 'none',
        border: border.thinDanger,
        color: color.danger,
        '&:hover': {
          background: color.danger2,
          border: border.thinDanger2,
          color: color.white,
        },
        '&:active': {
          background: color.danger2,
          border: border.thinDanger2,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
      };
    case 'tertiary-danger':
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.danger,
        '&:hover': {
          borderBottom: border.thinDanger,
        },
        '&:active': {
          background: color.danger2,
          borderBottom: border.thinDanger,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
      };

    case 'success':
    case 'primary-success':
      return success;
    case 'secondary-success':
      return {
        background: 'none',
        border: border.thinSuccess,
        color: color.success,
        '&:hover': {
          background: color.success2,
          border: border.thinSuccess2,
          color: color.white,
        },
        '&:active': {
          background: color.success2,
          border: border.thinSuccess2,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
      };
    case 'tertiary-success':
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.success,
        '&:hover': {
          borderBottom: border.thinSuccess,
        },
        '&:active': {
          background: color.success2,
          borderBottom: border.thinSuccess,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
      };

    case 'warning':
    case 'primary-warning':
      return warning;
    case 'secondary-warning':
      return {
        background: 'none',
        border: border.thinWarning,
        color: color.warning,
        '&:hover': {
          background: color.warning2,
          border: border.thinWarning2,
          color: color.white,
        },
        '&:active': {
          background: color.warning2,
          border: border.thinWarning2,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
      };
    case 'tertiary-warning':
      return {
        background: 'none',
        border: `1px solid ${color.transparent}`,
        color: color.warning,
        '&:hover': {
          borderBottom: border.thinWarning,
        },
        '&:active': {
          background: color.warning2,
          borderBottom: border.thinWarning,
          color: color.white,
        },
        '&:focus': {
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
      };

    case 'disabled':
    case 'primary-disabled':
      return disabled;
    case 'secondary-disabled':
      return {
        background: 'none',
        border: border.thinDisabled,
        color: color.disabled,
        cursor: 'default',
        '&:hover': {
          color: color.disabled,
        },
        '&:active': {
          color: color.disabled,
        },
        '&:focus': {
          color: color.disabled,
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
      };
    case 'tertiary-disabled':
      return {
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
      };
    default:
      return {};
  }
}

export function buttonSizeTheme({
  size,
  theme: { font, unit },
}: ButtonInterface) {
  switch (size) {
    case 1:
      return {
        padding: `0 ${unit[1]}`,
        fontSize: font.size[2],
        // lineHeight: font.lineHeight[1],
      };
    case 2:
      return {
        padding: `0 ${unit[2]}`,
        fontSize: font.size[3],
        // lineHeight: font.lineHeight[1],
      };
    case 3:
      return {
        padding: `0 ${unit[3]}`,
        fontSize: font.size[4],
      };
    case 4:
      return {
        padding: `0 ${unit[4]}`,
        fontSize: font.size[5],
      };
    case 5:
      return {
        padding: `0 ${unit[5]}`,
        fontSize: font.size[6],
      };
    case 6:
      return {
        padding: `0 ${unit[6]}`,
        fontSize: font.size[7],
      };
    case 7:
      return {
        padding: `0 ${unit[7]}`,
        fontSize: font.size[8],
      };
    case 8:
      return {
        padding: `0 ${unit[8]}`,
        fontSize: font.size[9],
      };
    case 9:
      return {
        padding: `0 ${unit[9]}`,
        fontSize: font.size[10],
      };
    case 10:
      return {
        padding: `0 ${unit[10]}`,
        fontSize: font.size[11],
      };
    default:
      return {};
  }
}

export function buttonStretchTheme({ stretch }: ButtonInterface) {
  return stretch ? { width: '100%' } : {};
}

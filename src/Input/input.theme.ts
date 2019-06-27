import { InputInterface } from './input.types';

export function inputTheme({
  theme: { animation, border, color, font, unit },
}: InputInterface) {
  return {
    '-webkitAppearance': 'none',
    background: color['grey-600'],
    border: border.transparent,
    borderBottom: border.thinForeground,
    color: color.foreground,
    display: 'inline-block',
    fontSize: font.size.default,
    lineHeight: font.lineHeight.default,
    outline: 0,
    overflow: 'visible',
    padding: `${unit[1]} ${unit[2]}`,
    verticalAlign: 'bottom',
    transition: animation.easeMedium(),
    width: '100%',

    '&:hover': {
      background: color['grey-500'],
    },
    '&:focus': {
      background: color['grey-700'],
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color['grey-700'],
    },

    '&::placeholder': {
      color: color['grey-200'],
    },
  };
}

export function inputAppearanceTheme({
  appearance,
  theme: { color, border },
}: InputInterface) {
  const accent = {
    background: color['accent-600'],
    borderBottom: border.thinForeground,
    '&:hover': {
      background: color['accent-500'],
    },
    '&:focus': {
      background: color['accent-700'],
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color['accent-700'],
    },
  };

  const active = {
    background: color['active-600'],
    borderBottom: border.thinForeground,
    '&:hover': {
      background: color['active-500'],
    },
    '&:focus': {
      background: color['active-700'],
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color['active-600'],
    },
  };

  const action = {
    background: color['action-600'],
    borderBottom: border.thinForeground,
    '&:hover': {
      background: color['action-500'],
    },
    '&:focus': {
      background: color['action-700'],
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color['action-700'],
    },
  };

  const danger = {
    background: color['danger-600'],
    borderBottom: border.thinForeground,
    '&:hover': {
      background: color['danger-500'],
    },
    '&:focus': {
      background: color['danger-700'],
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color['danger-700'],
    },
  };
  const secondaryDanger = {
    border: border.thinDanger,
    borderBottom: border.thinDanger,
    background: border.transparent,
    '&:hover': {
      background: color['grey-500'],
    },
    '&:focus': {
      background: color['grey-700'],
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color['grey-700'],
    },
  };
  const tertiaryDanger = {
    background: 'none',
    border: border.transparent,
    borderBottom: border.thinDanger,
    '&:active': {
      borderBottom: border.thinDanger,
    },
    '&:focus': {
      borderBottom: border.thinDanger,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:hover': {
      borderBottom: border.thinDanger,
      background: color['grey-500'],
    },
  };

  const success = {
    background: color['success-600'],
    borderBottom: border.thinForeground,
    '&:hover': {
      background: color['success-500'],
    },
    '&:focus': {
      background: color['success-700'],
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color['success-700'],
    },
  };

  const warning = {
    background: color['yellow-600'],
    borderBottom: border.thinForeground,
    '&:hover': {
      background: color['yellow-500'],
    },
    '&:focus': {
      background: color['yellow-700'],
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:active': {
      background: color['yellow-700'],
    },
  };

  const disabled = {
    color: color['grey-900'],
    background: color.disabled,
    border: border.disabled,
    borderBottom: border.disabled,
    '&::placeholder': {
      color: color['grey-900'],
    },
    '&:active': {
      background: color.disabled,
      border: border.disabled,
    },
    '&:focus': {
      background: color.disabled,
      border: border.disabled,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
    '&:hover': {
      background: color.disabled,
      border: border.disabled,
    },
  };

  switch (appearance) {
    case 'secondary':
      return {
        background: border.transparent,
        border: border.thinForeground,

        '&:hover': {
          background: color['grey-500'],
        },
        '&:focus': {
          background: color['grey-700'],
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color['grey-700'],
        },
      };
    case 'tertiary':
      return {
        background: 'none',
        border: border.transparent,
        borderBottom: border.thinForeground,
        '&:hover': {
          background: color['grey-500'],
        },
        '&:focus': {
          background: color['grey-700'],
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color['grey-700'],
        },
      };

    case 'accent':
    case 'primary-accent':
      return accent;
    case 'secondary-accent':
      return {
        border: border.thinAccent,
        borderBottom: border.thinAccent,
        background: border.transparent,
        '&:hover': {
          background: color['grey-500'],
        },
        '&:focus': {
          background: color['grey-700'],
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color['grey-700'],
        },
      };
    case 'tertiary-accent':
      return {
        background: 'none',
        border: border.transparent,
        borderBottom: border.thinAccent,
        '&:hover': {
          borderBottom: border.thinAccent,
          background: color['grey-500'],
        },
        '&:focus': {
          borderBottom: border.thinAccent,
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          borderBottom: border.thinAccent,
        },
      };

    case 'active':
    case 'primary-active':
      return active;
    case 'secondary-active':
      return {
        border: border.thinActive,
        borderBottom: border.thinActive,
        background: color['grey-700'],
        '&:hover': {
          background: color['grey-500'],
        },
        '&:focus': {
          background: color['grey-700'],
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color['grey-700'],
        },
      };
    case 'tertiary-active':
      return {
        background: color['grey-700'],
        border: border.transparent,
        borderBottom: border.thinActive,
        '&:active': {
          background: color['grey-700'],
          borderBottom: border.thinActive,
        },
        '&:focus': {
          borderBottom: border.thinActive,
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:hover': {
          borderBottom: border.thinActive,
          background: color['grey-500'],
        },
      };

    case 'action':
    case 'primary-action':
      return action;
    case 'secondary-action':
      return {
        border: border.thinAction,
        borderBottom: border.thinAction,
        background: border.transparent,
        '&:hover': {
          background: color['grey-500'],
        },
        '&:focus': {
          background: color['grey-700'],
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color['grey-700'],
        },
      };
    case 'tertiary-action':
      return {
        background: 'none',
        border: border.transparent,
        borderBottom: border.thinAction,
        '&:active': {
          borderBottom: border.thinAction,
        },
        '&:focus': {
          borderBottom: border.thinAction,
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:hover': {
          borderBottom: border.thinAction,
          background: color['grey-500'],
        },
      };

    case 'error':
      return danger;
    case 'primary-error':
      return danger;
    case 'secondary-error':
      return secondaryDanger;
    case 'tertiary-error':
      return tertiaryDanger;

    case 'danger':
    case 'primary-danger':
      return danger;
    case 'secondary-danger':
      return secondaryDanger;
    case 'tertiary-danger':
      return tertiaryDanger;

    case 'success':
    case 'primary-success':
      return success;
    case 'secondary-success':
      return {
        border: border.thinSuccess,
        borderBottom: border.thinSuccess,
        background: border.transparent,
        '&:hover': {
          background: color['grey-500'],
        },
        '&:focus': {
          background: color['grey-700'],
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color['grey-700'],
        },
      };
    case 'tertiary-success':
      return {
        background: 'none',
        border: border.transparent,
        borderBottom: border.thinSuccess,
        '&:active': {
          borderBottom: border.thinSuccess,
        },
        '&:focus': {
          borderBottom: border.thinSuccess,
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:hover': {
          borderBottom: border.thinSuccess,
          background: color['grey-500'],
        },
      };

    case 'warning':
    case 'primary-warning':
      return warning;
    case 'secondary-warning':
      return {
        border: border.thinWarning,
        borderBottom: border.thinWarning,
        background: border.transparent,
        '&:hover': {
          background: color['grey-500'],
        },
        '&:focus': {
          background: color['grey-700'],
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:active': {
          background: color['grey-700'],
        },
      };
    case 'tertiary-warning':
      return {
        background: 'none',
        border: border.transparent,
        borderBottom: border.thinWarning,
        '&:active': {
          borderBottom: border.thinWarning,
        },
        '&:focus': {
          borderBottom: border.thinWarning,
          boxShadow: `0 0 0 0.2em ${color.outline}`,
          zIndex: 2,
        },
        '&:hover': {
          borderBottom: border.thinWarning,
          background: color['grey-500'],
        },
      };

    case 'disabled':
    case 'primary-disabled':
      return disabled;
    case 'secondary-disabled':
      return disabled;
    case 'tertiary-disabled':
      return disabled;
    default:
      return {};
  }
}

export function inputSizeTheme({ size, theme: { font } }: InputInterface) {
  switch (size) {
    case 1:
      return { fontSize: font.size[1] };
    case 2:
      return { fontSize: font.size[2] };
    case 3:
      return { fontSize: font.size[3] };
    case 4:
      return { fontSize: font.size[4] };
    case 5:
      return { fontSize: font.size[5] };
    case 6:
      return { fontSize: font.size[6] };
    case 7:
      return { fontSize: font.size[7] };
    case 8:
      return { fontSize: font.size[8] };
    case 9:
      return { fontSize: font.size[9] };
    case 10:
      return { fontSize: font.size[10] };
    case 11:
      return { fontSize: font.size[11] };
    case 12:
      return { fontSize: font.size[12] };
    default:
      return {};
  }
}

export function inputWidthsTheme({ widths }: InputInterface) {
  switch (widths) {
    case 1:
      return { width: '100px' };
    case 2:
      return { width: '200px' };
    case 3:
      return { width: '300px' };
    case 4:
      return { width: '400px' };
    case 5:
      return { width: '500px' };
    case 6:
      return { width: '600px' };
    case 7:
      return { width: '700px' };
    case 8:
      return { width: '800px' };
    case 9:
      return { width: '900px' };
    case 10:
      return { width: '1000px' };
    default:
      return {};
  }
}

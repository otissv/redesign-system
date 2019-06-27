import { TextAreaInterface } from './textarea.types';

export function textareaTheme({
  theme: { animation, border, color, font, unit },
}: TextAreaInterface) {
  return {
    border: border.thinSecondary,
    background: color['grey-600'],
    borderRadius: 0,
    color: color.foreground,
    lineHeight: font.lineHeight.default,
    maxWidth: `calc(100% - 6px )`,
    minHeight: `calc(${font.size.default} * 3.5)`,
    outline: 0,
    padding: unit[2],
    verticalAlign: 'top',
    webkitAppearance: 'none',
    width: `calc(100% - 6px )`,
    transition: animation.easeMedium(),

    '&::placeholder': {
      color: color['grey-200'],
    },

    '&:hover': {
      background: color['grey-500'],
      border: border.thinSecondary,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinSecondary,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinSecondary,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };
}

export function textareaAppearanceTheme({
  appearance,
  theme: { border, color },
}: TextAreaInterface) {
  const secondary = {
    background: 'none',
    border: border.thinSecondary,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinSecondary,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinSecondary,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinSecondary,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };

  const accent = {
    border: border.thinGrey500,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinAccent2,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinAccent2,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinAccent2,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };
  const secondaryAccent = {
    background: 'none',
    border: border.thinAccent,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinAccent2,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinAccent2,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinAccent2,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };

  const active = {
    background: color['grey-700'],
    border: border.thinActive2,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinAction2,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinActive2,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinAction2,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };
  const secondaryActive = {
    background: color['grey-700'],
    border: border.thinActive2,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinActive2,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinActive2,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinActive2,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };

  const action = {
    border: border.thinGrey500,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinAction2,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinAction2,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinAction2,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };
  const secondaryAction = {
    background: 'none',
    border: border.thinAction,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinAction2,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinAction2,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinAction2,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };

  const danger = {
    border: border.thinGrey500,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinDanger2,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinDanger2,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinDanger2,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };
  const secondaryDanger = {
    background: 'none',
    border: border.thinDanger,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinDanger2,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinDanger2,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinDanger2,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };

  const success = {
    border: border.thinGrey500,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinSuccess2,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinSuccess2,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinSuccess2,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };
  const secondarySuccess = {
    background: 'none',
    border: border.thinSuccess,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinSuccess2,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinSuccess2,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinSuccess2,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };

  const warning = {
    border: border.thinGrey500,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinWarning2,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinWarning2,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinWarning2,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };
  const secondaryWarning = {
    background: 'none',
    border: border.thinWarning,
    '&:hover': {
      background: color['grey-500'],
      border: border.thinWarning2,
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinWarning2,
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinWarning2,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };

  const disabled = {
    color: color.disabled,
    border: border.thinDisabled,
    backgroundColor: color.disabled,
    '&::placeholder': {
      color: color['grey-900'],
    },
    '&:hover': {
      backgroundColor: color.disabled,
      border: border.thinDisabled,
    },
    '&:active': {
      backgroundColor: color.disabled,
      border: border.thinDisabled,
    },
    '&:focus': {
      backgroundColor: color.disabled,
      border: border.thinDisabled,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };
  const secondaryDisabled = {
    color: color.disabled,
    border: border.thinDisabled,
    backgroundColor: color.disabled,
    '&::placeholder': {
      color: color['grey-900'],
    },
    '&:hover': {
      backgroundColor: color.disabled,
      border: border.thinDisabled,
    },
    '&:active': {
      backgroundColor: color.disabled,
      border: border.thinDisabled,
    },
    '&:focus': {
      backgroundColor: color.disabled,
      border: border.thinDisabled,
      boxShadow: `0 0 0 0.2em ${color.outline}`,
      zIndex: 2,
    },
  };
  switch (appearance) {
    case 'secondary':
    case 'tertiary':
      return secondary;

    case 'accent':
    case 'primary-accent':
      return accent;
    case 'secondary-accent':
      return secondaryAccent;

    case 'active':
    case 'primary-active':
      return active;
    case 'secondary-active':
      return secondaryActive;

    case 'action':
    case 'primary-action':
      return action;
    case 'secondary-action':
      return secondaryAction;

    case 'danger':
    case 'primary-danger':
      return danger;
    case 'secondary-danger':
      return secondaryDanger;

    case 'error':
    case 'primary-error':
      return danger;
    case 'secondary-error':
      return secondaryDanger;

    case 'success':
    case 'primary-success':
      return success;
    case 'secondary-success':
      return secondarySuccess;

    case 'warning':
    case 'primary-warning':
      return warning;
    case 'secondary-warning':
      return secondaryWarning;

    case 'disabled':
    case 'primary-disabled':
      return disabled;
    case 'secondary-disabled':
      return secondaryDisabled;
    default:
      return {};
  }
}

export function textareaWidthsTheme({ widths }: TextAreaInterface) {
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

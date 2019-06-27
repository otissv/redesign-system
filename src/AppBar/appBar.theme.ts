import { AppBarInterface } from './appBar.types';

import { ColorsInterface } from '../theme';

const input = (color: ColorsInterface) => ({
  background: 'hsla(0,0%,0%,0.1)',
  border: '1px solid #0000',
  flex: 0,

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
});

export function appBarTheme({ theme: { color } }: AppBarInterface) {
  return {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexShrink: 0,
    minHeight: '56px',
    position: 'relative',
    width: '100%',
    zIndex: '1100',
    backgroundColor: color.default,
    color: color.white,

    '>button.Button': {
      minHeight: 'inherit',
      border: '1px solid #0000',
      borderRadius: 0,
      '>svg.Icon': {
        paddingRight: 0,
      },
    },

    'input.Input': {
      ...input(color),
      color: color.foregroundInvert,
    },
  };
}

export function appBarAppearanceTheme({
  appearance,
  theme: { color },
}: AppBarInterface) {
  const appearanceInput = {
    'input.Input': {
      ...input(color),
      color: color.wite,
    },
  };
  switch (appearance) {
    case 'action':
      return {
        backgroundColor: color.action,
        color: '#ffffff',
        ...appearanceInput,
      };
    case 'accent':
      return {
        background: color.accent,
        color: '#ffffff',
        ...appearanceInput,
      };
    case 'danger':
      return {
        backgroundColor: color.danger,
        color: '#ffffff',
        ...appearanceInput,
      };
    case 'success':
      return {
        backgroundColor: color.success,
        color: '#ffffff',
        ...appearanceInput,
      };
    case 'warning':
      return {
        backgroundColor: color.warning,
        color: '#ffffff',
        ...appearanceInput,
      };
    default:
      return {};
  }
}

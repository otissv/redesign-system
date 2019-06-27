import { CardInterface } from './card.types';

export function cardTheme({
  collapse,
  theme: { animation, border, color, elevate, unit },
  ...props
}: CardInterface) {
  const hoverTheme = props.hover
    ? {
        '&:hover': {
          boxShadow: elevate[3],
          transform: `translateY(-${unit[3]})`,
        },
      }
    : {};

  return {
    backgroundColor: color.background,
    border: border.thin,
    boxShadow: props.elevate ? elevate[3] : elevate[0],
    padding: collapse ? 0 : unit[5],
    transition: animation.easeMedium(),
    ...hoverTheme,
  };
}

export function cardAppearanceTheme({
  appearance,
  hover,
  theme: { color, elevate, unit },
}: CardInterface) {
  const hoverTheme = hover
    ? {
        '&:hover': {
          backgroundColor: color[`${appearance}2`],
          boxShadow: elevate[2],
          transform: `translateY(-${unit[3]})`,
        },
      }
    : {};

  switch (appearance) {
    case 'accent':
      return {
        backgroundColor: color.accent,
        border: `1px solid ${color['accent-300']}`,
        color: color.foreground,
        '&:active': {
          ...hoverTheme,
        },
        '&:focus': {
          ...hoverTheme,
        },
        '&:hover': {
          ...hoverTheme,
        },
      };
    case 'action':
      return {
        backgroundColor: color.action,
        border: `1px solid ${color['action-300']}`,
        color: color.foreground,
        '&:active': {
          ...hoverTheme,
        },
        '&:focus': {
          ...hoverTheme,
        },
        '&:hover': {
          ...hoverTheme,
        },
      };
    case 'danger':
      return {
        backgroundColor: color.danger,
        border: `1px solid ${color['danger-300']}`,
        color: color.foreground,

        '&:active': {
          ...hoverTheme,
        },
        '&:focus': {
          ...hoverTheme,
        },
        '&:hover': {
          ...hoverTheme,
        },
      };
    case 'success':
      return {
        backgroundColor: color.success,
        border: `1px solid ${color['success-300']}`,
        color: color.foreground,

        '&:active': {
          ...hoverTheme,
        },
        '&:focus': {
          ...hoverTheme,
        },
        '&:hover': {
          ...hoverTheme,
        },
      };
    case 'warning':
      return {
        backgroundColor: color.warning,
        border: `1px solid ${color['warning-300']}`,
        color: color.foreground,

        '&:active': {
          ...hoverTheme,
        },
        '&:focus': {
          ...hoverTheme,
        },
        '&:hover': {
          ...hoverTheme,
        },
      };
    default:
      return {};
  }
}

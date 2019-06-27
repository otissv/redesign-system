import { ErrorMessageInterface } from './errorMessage.types';

export function errorMessageTheme({
  theme: { animation, color, unit },
}: ErrorMessageInterface) {
  return {
    color: color.danger,
    transition: animation.easeMedium(),
    margin: `0 0 ${unit[3]} 3px`,
    paddingTop: unit[1],
    paddingBottom: unit[1],
  };
}

export function errorMessageAppearanceTheme({
  appearance,
  theme: { border, color, unit },
}: ErrorMessageInterface) {
  switch (appearance) {
    case 'primary':
      return {
        color: color.foreground,
        backgroundColor: color.danger,
        paddingLeft: unit[2],
        paddingRight: unit[2],
      };
    case 'secondary':
      return {
        border: border.thinDanger,
        paddingLeft: unit[2],
        paddingRight: unit[2],
      };
    default:
      return {};
  }
}

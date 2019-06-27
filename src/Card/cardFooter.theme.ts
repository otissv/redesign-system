import { CardFooterInterface } from './card.types';

export function cardFooterTheme({  }: CardFooterInterface) {
  return {};
}

export function cardFooterContextTheme({
  appearance,
  theme: { color },
}: CardFooterInterface) {
  switch (appearance) {
    case 'accent':
      return {
        borderBottom: `1px solid ${color['accent-300']}`,
      };
    case 'danger':
      return {
        borderBottom: `1px solid ${color['danger-300']}`,
      };
    case 'action':
      return {
        borderBottom: `1px solid ${color['action-300']}`,
      };
    case 'success':
      return {
        borderBottom: `1px solid ${color['success-300']}`,
      };
    case 'warning':
      return {
        borderBottom: `1px solid ${color['warning-300']}`,
      };
    default:
      return {};
  }
}

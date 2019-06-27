import { ButtonGroupInterface } from './buttonGroup.types';

export function buttonGroupTheme({
  stacked,
  theme: { animation },
}: ButtonGroupInterface) {
  return {
    display: 'inline-flex',
    position: 'relative',
    transition: animation.easeMedium(),
    verticalAlign: 'middle',
    flexDirection: stacked ? 'column' : 'row',
  };
}

export function buttonStretchGroupTheme({ stretch }: ButtonGroupInterface) {
  return stretch ? { width: '100%' } : {};
}

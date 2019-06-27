import { ButtonIconInterface } from './buttonIcon.types';

export function buttonIconTheme({
  dimension,
  theme: { animation, unit },
}: ButtonIconInterface) {
  return {
    position: 'relative',
    whiteSpace: 'nowrap',
    transition: animation.easeFast(),
    lineHeight: 'inherit',
    ...(dimension ? { height: dimension, width: dimension, padding: 0 } : {}),

    '>svg.Icon': {
      ...(dimension
        ? { height: dimension, width: dimension }
        : { transform: 'translateY(4px)' }),
    },

    '>span.ButtonIconContent': {
      display: 'inline-block',
      paddingLeft: unit[2],
    },
  };
}

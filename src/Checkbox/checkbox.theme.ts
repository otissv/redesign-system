import upperFirst from 'lodash/fp/upperFirst'

import { CheckboxInterface } from './checkbox.types'
import { ColorsInterface, AppearanceColorsType } from '../theme'

function getAppearance({
  appearance,
  color,
}): {
  appearance: AppearanceColorsType
  colors: ColorsInterface
} {
  return color[appearance] || color.default
}

export function checkboxTheme({
  appearance,
  theme: { color, animation, border, unit },
}: CheckboxInterface) {
  return {
    position: 'relative',
    height: unit[5],
    width: unit[5],
    border: border[`thick${upperFirst(appearance)}`] || border.thin,
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    top: '5px',

    input: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      opacity: 0,
      cursor: 'inherit',
    },

    '.CheckboxBackground': {
      width: 'inherit',
      height: 'inherit',
      pointerEvents: 'none',
      position: 'relative',
      top: '-2px',
      left: '-2px',
    },

    '.CheckboxCheckmark': {
      strokeWidth: '3.12px',
      strokeDasharray: 29.7833385,
      opacity: 0,
      transform: 'scale(0)',
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: 'center center',
      transition: animation.easeFast(),
    },

    '.CheckboxBackground, .CheckboxCheckmark': {
      transition: animation.easeFast(),
    },

    'input:checked+.CheckboxBackground, input:indeterminate+.CheckboxBackground': {
      background: getAppearance({ appearance, color }),

      '.CheckboxCheckmark': {
        opacity: 1,
        transform: 'scale(0.7)',
      },
    },
  }
}

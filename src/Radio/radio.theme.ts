import upperFirst from 'lodash/fp/upperFirst'

import { RadioInterface } from './radio.types'
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

export function radioTheme() {
  return {
    display: 'inline-block',
  }
}

export function radioContainerTheme({
  appearance,
  theme: { color, animation, border, unit },
}: RadioInterface) {
  const positionAbsolute = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }

  return {
    position: 'relative',
    height: unit[5],
    width: unit[5],
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    top: '5px',

    label: {
      marginRight: unit[3],
    },

    input: {
      ...positionAbsolute,
      margin: 0,
      padding: 0,
      opacity: 0,
      cursor: 'inherit',
    },

    '.RadioBackground': {
      width: 'inherit',
      height: 'inherit',
      pointerEvents: 'none',
    },

    '.RadioInnerCircle': {
      ...positionAbsolute,
      borderRadius: '50%',
      border: border[`thick${upperFirst(appearance)}`] || border.thin,
    },

    '.RadioOuterCircle': {
      ...positionAbsolute,
      borderRadius: '50%',
      opacity: 0,
      background: getAppearance({ appearance, color }),
      transform: 'scale(0)',
      transformOrigin: 'center center',
      transition: animation.easeFast(),
    },

    'input:checked+.RadioBackground': {
      '.RadioOuterCircle': {
        background: getAppearance({ appearance, color }),

        opacity: 1,
        transform: 'scale(0.5)',
      },
    },
  }
}

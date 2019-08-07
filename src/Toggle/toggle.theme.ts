import {
  ToggleInterface,
  ToggleInputInterface,
  ToggleLabelInterface,
  ToggleContentInterface,
} from './toggle.types'

export function toggleTheme({  }: ToggleInterface) {
  return {
    display: 'inline-block',
    position: 'relative',
  }
}

export function toggleAppearanceTheme({
  appearance,
  theme: { border, unit },
}: ToggleInterface) {
  switch (appearance) {
    case 'primary':
      return {
        color: '#fff',
        backgroundColor: 'blue',
        paddingLeft: unit[2],
        paddingRight: unit[2],
      }
    case 'secondary':
      return {
        border: border.thinDanger,
        paddingLeft: unit[2],
        paddingRight: unit[2],
      }
    default:
      return {}
  }
}

export function toggleInputTheme({ theme: { color } }: ToggleInputInterface) {
  return {
    position: 'absolute',
    boxSizing: 'border-box',
    height: 0,
    width: 0,
    visibility: 'hidden',

    '&:checked + label': {
      background: color['grey-100'],
    },

    '&:checked + label:after': {
      left: 'calc(100% - 5px)',
      transform: 'translateX(-100%)',
    },
  }
}

export function toggleLabelTheme({
  theme: { color },
  checked,
  height,
  hideText,
  width,
}: ToggleLabelInterface) {
  return {
    position: 'absolute',
    boxSizing: 'border-box',
    cursor: 'pointer',
    textIndent: hideText ? '-9999px' : 'initial',
    width: width,
    height: height,
    background: color['grey-700'],
    display: 'inline-block',
    borderRadius: '100px',
    fontSize: height,
    lineHeight: height,
    textAlign: checked ? 'left' : 'right',
  }
}

export function toggleContentTheme({
  theme: { color },
  toggle,
  height,
  width,
}: ToggleContentInterface) {
  return {
    display: 'inherit',
    position: 'absolute',
    boxSizing: 'border-box',
    width: width,
    height: height,
    background: toggle ? color['grey-500'] : color['grey-400'],
    borderRadius: '90px',
    transform: toggle ? 'translateX(100%);' : 'translate(0);',
    transition: '0.3s',

    ' &:active': {
      width: '25px',
      // transform: translateX(calc(100%  - 25px),
    },
  }
}

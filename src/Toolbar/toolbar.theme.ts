import { ToolbarInterface } from './toolbar.types'

export function toolbarTheme({ theme: { color } }: ToolbarInterface) {
  return {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: 'auto',
    background: 'none',

    '>button': {
      minHeight: '31px',
    },

    '>a': {
      minHeight: '33px',
    },

    '>button, >a': {
      color: color.foreground,
      background: 'none',
      borderColor: color.transparent,
      borderRadius: 0,

      '&:active': {
        color: color.foreground,
      },

      svg: {
        width: '24px',
        height: '24px',
      },
    },

    '.ToolbarViewsContainer': {
      'button:first-child, a:first-child': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },

      'button:last-child, a:last-child': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
  }
}

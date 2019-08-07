import { ToolbarInterface } from './toolbar.types'

export function toolbarTheme({ theme: { color } }: ToolbarInterface) {
  return {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: 'auto',
    background: 'none',

    '>button, >a': {
      color: color.foreground,
      background: 'none',
      borderColor: color.transparent,
      borderRadius: 0,

      '&:active': {
        color: color.foreground,
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

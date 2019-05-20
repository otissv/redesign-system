export function toolbarTheme({ borders, theme: { border, color, unit } }) {
  return {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: 'auto',
    background: 'none',

    '>button, .ToolbarViewsContainer>button': {
      color: color.foreground,
      background: 'none',
      borderColor: color.transparent,
      borderRadius: 0,

      '&:active': {
        color: color.foreground,
      },
    },
  }
}

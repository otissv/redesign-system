export function inputGroupTheme({
  widths,
  theme: { color, border, font, unit, radius },
}) {
  return {
    position: 'relative',
    paddingLeft: unit[2],
    width: 'auto',

    background: color['grey-600'],
    border: border.transparent,
    borderBottom: border.thinForeground,
    lineHeight: font.lineHeight.default,
    borderTopLeftRadius: radius.rounded,
    borderTopRightRadius: radius.rounded,

    input: {
      display: 'inline-block',
      width: 'auto',
      margin: 0,
      background: 'none',
      border: border.transparent,

      lineHeight: 'inherit',
      '&:hover, &:active, &:focus': {
        background: 'none',
        border: 'none',
      },
    },

    button: {
      float: 'right',
      borderBottom: 'inherit',
      height: '41px',
      // padding: `${unit[2]} ${unit[3]}`,

      '&:hover, &:active, &:focus': {
        borderBottom: 'inherit',
      },
    },

    'input+button': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },

    'button+input': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
  }
}

export function inputGroupButtonTheme({ theme: { color, border } }) {
  return {
    background: color['grey-600'],
    border: border.transparent,
    borderBottom: border.thinForeground,
  }
}

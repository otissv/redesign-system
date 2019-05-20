export function navTheme({
  theme: {
    animation,
    border,
    color,
    font,
    unit: { px },
  },
}) {
  return {
    listStyle: 'none',
    margin: 0,
    padding: 0,

    item: {
      padding: `6px ${px.small} 0`,
      lineHeight: '2.5',
    },

    label: {
      fontWeight: '700',
      lineHeight: '1.5',
    },

    link: {
      boxSizing: 'border-box',
      color: '#999',
      cursor: 'pointer',
      display: 'inline-block',
      fontSize: font.default,
      textDecoration: 'none',
      width: '100%',
      fontWeight: 'normal',
      lineHeight: '1.5',

      active: {
        background: color.active,
      },

      '&:hover': {
        // background: color.secondary,
        color: '#333',
      },
    },
  }
}

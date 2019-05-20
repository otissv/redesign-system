export function buttonGroupTheme({
  radius,
  theme: { animation, radius: radiusTheme },
}) {
  return {
    display: 'inline-flex',
    position: 'relative',
    transition: animation.easeMedium(),
    verticalAlign: 'middle',

    button: {
      borderRadius: 0,
    },
    'button:first-child': {
      borderTopLeftRadius: radius || radiusTheme.rounded,
      borderBottomLeftRadius: radius || radiusTheme.rounded,
    },
    'button:last-child': {
      borderTopRightRadius: radius || radiusTheme.rounded,
      borderBottomRightRadius: radius || radiusTheme.rounded,
    },
  }
}

export function buttonStretchGroupTheme({ stretch }) {
  return stretch ? { width: '100%' } : ''
}

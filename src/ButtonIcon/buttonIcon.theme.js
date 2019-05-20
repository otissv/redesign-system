export function buttonIconTheme({
  size,
  theme: { animation, border, color, unit },
}) {
  return {
    position: 'relative',
    whiteSpace: 'nowrap',
    transition: animation.easeFast(),
    lineHeight: 'inherit',
    // '&:hover': {
    //   color: color.action,
    // },
    ...(size ? { height: size, width: size, padding: 0 } : {}),

    '>svg.Icon': {
      ...(size
        ? { height: size, width: size }
        : { transform: 'translateY(4px)' }),
    },
  }
}

// background: 'none',
// border: 'none',
// borderBottom: border.thickTransparent,

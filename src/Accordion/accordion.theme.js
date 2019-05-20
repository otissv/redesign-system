export function accordionTheme({
  theme: { animation, border, color, font, spacing, widths },
}) {
  return {
    flex: 1,
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    transition: animation.easeMedium(),
  }
}

export function accordionButtonTheme({ theme: { animation, color, font } }) {
  return {
    textAlign: 'left',
    borderRadius: 0,
  }
}

export function accordionButtonIconTheme({
  active,
  theme: { animation, color, unit },
}) {
  return {
    float: 'right',
    padding: unit[2],
    transform: active ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
    transition: animation.easeMedium(),
  }
}

export function accordionContentTheme({
  theme: { animation, border, color, font, spacing, widths },
}) {
  return {
    overflow: 'hidden',
    padding: 0,
    transition: animation.easeMedium(),
  }
}

export function accordionItemTheme({ theme: { animation } }) {
  return {
    cursor: 'pointer',
    display: 'list-item',
    lineHeight: 1.4,
    margin: 0,
    overflow: 'hidden',
    padding: 0,
    textAlign: '-webkit-match-parent',
    transition: animation.easeMedium(),
  }
}

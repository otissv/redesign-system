export function formLabelTheme({ theme: { animation, font, unit } }) {
  return {
    display: 'block',
    // fontSize: font.size[3],
    marginBottom: unit[1],
    transition: animation.easeMedium(),
  }
}

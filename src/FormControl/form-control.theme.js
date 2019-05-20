export function formControlTheme({ theme: { animation, unit } }) {
  return {
    marginBottom: `${unit.default}`,
    transition: animation.easeMedium(),
  }
}

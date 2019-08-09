import upperFirst from 'lodash/fp/upperFirst'
import merge from 'lodash/fp/merge'
import camelCase from 'lodash/camelCase'
import { BorderInterface, ThemeInterface } from '../theme.types'

export function borderTheme({ border, color }: ThemeInterface) {
  const style = 'solid'
  const dash = 'dashed'
  const thickWidth = '2px'
  const thickColor = color['grey-700']
  const thinWidth = '1px'
  const thinColor = color['grey-700']

  const defaults: BorderInterface = {
    none: 'none',
    style,
    dash,
    thickWidth,
    thickColor,
    thinWidth,
    thinColor,

    // thick
    thick: `${thickWidth} ${style} ${thickColor}`,
    thickInvert: `${thickWidth} ${style} ${thickColor}`,
    thickDashed: `${thickWidth} ${dash} ${thickColor}`,
    thickDashedInvert: `${thickWidth} ${dash} ${thickColor}`,
    thickTransparent: `${thickWidth} ${style} rgba(0, 0, 0, 0);`,

    // thin
    thin: `${thinWidth} ${style} ${thinColor}`,
    thinDashed: `${thinWidth} ${dash}  ${thinColor}`,
    thinDashedInvert: `${thinWidth} ${dash}  ${thinColor}`,
    thinInvert: `${thinWidth} ${style} ${thinColor}`,
    thinTransparent: `${thinWidth} ${style} rgba(0, 0, 0, 0);`,

    ...Object.keys(color).reduce(
      (previous, key) => ({
        ...previous,
        [key]: color[key],
        [`${camelCase(
          `thick${upperFirst(key)}`
        )}`]: `${thickWidth} ${style} ${color[key]}`,
        [`${camelCase(
          `thin${upperFirst(key)}`
        )}`]: `${thinWidth} ${style} ${color[key]}`,
        [`${camelCase(
          `thickDashed${upperFirst(key)}`
        )}`]: `${thickWidth} ${dash} ${color[key]}`,
        [`${camelCase(
          `thinDashed${upperFirst(key)}`
        )}`]: `${thinWidth} ${dash} ${color[key]}`,
      }),
      {}
    ),
  }

  return merge(border)(defaults)
}

import { animationTheme } from './animation.theme'
import { borderTheme } from './borders'
import { colorTheme } from './colors'
import { elevateTheme } from './elevate'
import { fontTheme } from './fonts'
import { scrollbarTheme } from './scrollbar.theme'
import { unitTheme } from './units'
import { radiusTheme } from './radius'
import { sharedTheme } from './shared.theme'

export const theme = props => {
  const _color = colorTheme(props)
  const _unit = unitTheme(props)
  const _props = {
    ...props,
    color: _color,
    unit: _unit,
  }

  const base = {
    animation: animationTheme(_props),
    border: borderTheme(_props),
    color: _color,
    elevate: elevateTheme(_props),
    font: fontTheme(_props),
    radius: radiusTheme(_props),
    scrollbar: scrollbarTheme(_props),
    unit: _unit,
  }

  return {
    ...base,
    shared: sharedTheme(base),
  }
}

export default theme()

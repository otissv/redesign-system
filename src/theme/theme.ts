import { ThemeInterface } from './theme.types';
import { animationTheme } from './animation';
import { borderTheme } from './border';
import { colorTheme } from './color';
import { elevateTheme } from './elevate';
import { fontTheme } from './font';
import { scrollbarTheme } from './scrollbar';
import { unitTheme } from './unit';
import { radiusTheme } from './radius';
import { sharedTheme } from './shared';

export function theme(props: ThemeInterface = {}) {
  const _color = colorTheme(props);
  const _unit = unitTheme(props);
  const _props = {
    ...props,
    color: _color,
    unit: _unit,
  };

  const base = {
    animation: animationTheme(_props),
    border: borderTheme(_props),
    color: _color,
    elevate: elevateTheme(_props),
    font: fontTheme(_props),
    radius: radiusTheme(_props),
    scrollbar: scrollbarTheme(_props),
    unit: _unit,
  };

  return {
    ...base,
    shared: sharedTheme(base),
  };
}

export default theme({});

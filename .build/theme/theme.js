import * as tslib_1 from "tslib";
import { animationTheme } from './animation';
import { borderTheme } from './border';
import { colorTheme } from './color';
import { elevateTheme } from './elevate';
import { fontTheme } from './font';
import { scrollbarTheme } from './scrollbar';
import { unitTheme } from './unit';
import { radiusTheme } from './radius';
import { sharedTheme } from './shared';
export function theme(props) {
    if (props === void 0) { props = {}; }
    var _color = colorTheme(props);
    var _unit = unitTheme(props);
    var _props = tslib_1.__assign({}, props, { color: _color, unit: _unit });
    var base = {
        animation: animationTheme(_props),
        border: borderTheme(_props),
        color: _color,
        elevate: elevateTheme(_props),
        font: fontTheme(_props),
        radius: radiusTheme(_props),
        scrollbar: scrollbarTheme(_props),
        unit: _unit,
    };
    return tslib_1.__assign({}, base, { shared: sharedTheme(base) });
}
export default theme({});
//# sourceMappingURL=theme.js.map
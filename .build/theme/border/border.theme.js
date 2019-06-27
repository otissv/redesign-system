import * as tslib_1 from "tslib";
import upperFirst from 'lodash/fp/upperFirst';
import merge from 'lodash/fp/merge';
import camelCase from 'lodash/camelCase';
export function borderTheme(_a) {
    var border = _a.border, color = _a.color;
    var style = 'solid';
    var dash = 'dashed';
    var thickWidth = '4px';
    var thickColor = color['grey-700'];
    var thinWidth = '1px';
    var thinColor = color['grey-700'];
    var defaults = tslib_1.__assign({ none: 'none', style: style,
        dash: dash,
        thickWidth: thickWidth,
        thickColor: thickColor,
        thinWidth: thinWidth,
        thinColor: thinColor, 
        // thick
        thick: thickWidth + " " + style + " " + thickColor, thickInvert: thickWidth + " " + style + " " + thickColor, thickDashed: thickWidth + " " + dash + " " + thickColor, thickDashedInvert: thickWidth + " " + dash + " " + thickColor, thickTransparent: thickWidth + " " + style + " rgba(0, 0, 0, 0);", 
        // thin
        thin: thinWidth + " " + style + " " + thinColor, thinDashed: thinWidth + " " + dash + "  " + thinColor, thinDashedInvert: thinWidth + " " + dash + "  " + thinColor, thinInvert: thinWidth + " " + style + " " + thinColor, thinTransparent: thinWidth + " " + style + " rgba(0, 0, 0, 0);" }, Object.keys(color).reduce(function (previous, key) {
        var _a;
        return (tslib_1.__assign({}, previous, (_a = {}, _a[key] = color[key], _a["" + camelCase("thick" + upperFirst(key))] = thickWidth + " " + style + " " + color[key], _a["" + camelCase("thin" + upperFirst(key))] = thinWidth + " " + style + " " + color[key], _a["" + camelCase("thickDashed" + upperFirst(key))] = thickWidth + " " + dash + " " + color[key], _a["" + camelCase("thinDashed" + upperFirst(key))] = thinWidth + " " + dash + " " + color[key], _a)));
    }, {}));
    return merge(border)(defaults);
}
//# sourceMappingURL=border.theme.js.map
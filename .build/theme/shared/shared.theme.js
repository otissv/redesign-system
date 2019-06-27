import * as tslib_1 from "tslib";
import upperFirst from 'lodash/fp/upperFirst';
import { themeDefaults } from '../defaults.theme';
export function sharedTheme(_a) {
    var _b = _a === void 0 ? themeDefaults : _a, border = _b.border, elevate = _b.elevate, radius = _b.radius, shared = _b.shared, unit = _b.unit;
    var defaults = tslib_1.__assign({}, unitPositions({ unit: unit, style: 'margin' }), unitPositions({ unit: unit, style: 'padding' }), { border: function (value) { return ({ border: border[value] }); }, borderBottom: function (value) { return ({ borderBottom: border[value] }); }, borderLeft: function (value) { return ({ borderLeft: border[value] }); }, borderRight: function (value) { return ({ borderRight: border[value] }); }, borderTop: function (value) { return ({ borderTop: border[value] }); }, radius: function (value) { return ({ borderRadius: radius[value] }); }, elevate: function (value) { return ({
            boxShadow: elevate[value],
        }); }, centered: function () { return ({ margin: '0 auto' }); }, 
        // flex: (value: string) => ({ flex: value }),
        // flexGrow: (value: string) => ({ flexGrow: value }),
        // order: (value: string) => ({ order: value }),
        // display: (value: string) => ({ display: value }),
        widthSize: function (value) { return ({ width: value }); } }, shared);
    return defaults;
}
export function unitPositions(_a) {
    var _b;
    var unit = _a.unit, style = _a.style;
    var isValidStringValue = function (value) {
        return typeof value === 'string' || value.trim() !== '';
    };
    var isValidNumberValue = function (value) {
        return typeof value === 'number' || value < 0;
    };
    var isValidUnitValue = function (value) {
        return value !== 'string' &&
            isValidStringValue(value) &&
            value.match(/%|px|rem|em|auto/);
    };
    function allPositions(value, prop) {
        var _a, _b, _c;
        switch (true) {
            case value === 'default':
                return _a = {}, _a[prop] = unit.default, _a;
            case isValidNumberValue(value):
                return _b = {}, _b[prop] = unit[value], _b;
            case isValidUnitValue(value) || isValidStringValue(value):
                return _c = {}, _c[prop] = value, _c;
            default:
                return undefined;
        }
    }
    var reducer = function (accumulator, key) {
        var _a;
        if (key === 'default')
            return accumulator;
        var prop = "" + style + upperFirst(key);
        return tslib_1.__assign({}, accumulator, (_a = {}, _a[prop] = function (value) {
            if (!isValidStringValue(value))
                return {};
            var positions = value.split(' ');
            return Object.keys(positions).reduce(function (accum, pos) {
                var _a;
                return (tslib_1.__assign({}, accum, (_a = {}, _a[style + "-" + positions[pos]] = unit[key], _a)));
            }, {});
        }, _a));
    };
    var initial = (_b = {},
        _b[style] = function (value) { return allPositions(value, style); },
        _b[style + "Bottom"] = function (value) {
            return allPositions(value, style + "Bottom");
        },
        _b[style + "Left"] = function (value) { return allPositions(value, style + "Left"); },
        _b[style + "Right"] = function (value) { return allPositions(value, style + "Right"); },
        _b[style + "Top"] = function (value) { return allPositions(value, style + "Top"); },
        _b);
    return Object.keys(unit).reduce(reducer, initial);
}
//# sourceMappingURL=shared.theme.js.map
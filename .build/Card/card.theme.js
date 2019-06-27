import * as tslib_1 from "tslib";
export function cardTheme(_a) {
    var collapse = _a.collapse, _b = _a.theme, animation = _b.animation, border = _b.border, color = _b.color, elevate = _b.elevate, unit = _b.unit, props = tslib_1.__rest(_a, ["collapse", "theme"]);
    var hoverTheme = props.hover
        ? {
            '&:hover': {
                boxShadow: elevate[3],
                transform: "translateY(-" + unit[3] + ")",
            },
        }
        : {};
    return tslib_1.__assign({ backgroundColor: color.background, border: border.thin, boxShadow: props.elevate ? elevate[3] : elevate[0], padding: collapse ? 0 : unit[5], transition: animation.easeMedium() }, hoverTheme);
}
export function cardAppearanceTheme(_a) {
    var appearance = _a.appearance, hover = _a.hover, _b = _a.theme, color = _b.color, elevate = _b.elevate, unit = _b.unit;
    var hoverTheme = hover
        ? {
            '&:hover': {
                backgroundColor: color[appearance + "2"],
                boxShadow: elevate[2],
                transform: "translateY(-" + unit[3] + ")",
            },
        }
        : {};
    switch (appearance) {
        case 'accent':
            return {
                backgroundColor: color.accent,
                border: "1px solid " + color['accent-300'],
                color: color.foreground,
                '&:active': tslib_1.__assign({}, hoverTheme),
                '&:focus': tslib_1.__assign({}, hoverTheme),
                '&:hover': tslib_1.__assign({}, hoverTheme),
            };
        case 'action':
            return {
                backgroundColor: color.action,
                border: "1px solid " + color['action-300'],
                color: color.foreground,
                '&:active': tslib_1.__assign({}, hoverTheme),
                '&:focus': tslib_1.__assign({}, hoverTheme),
                '&:hover': tslib_1.__assign({}, hoverTheme),
            };
        case 'danger':
            return {
                backgroundColor: color.danger,
                border: "1px solid " + color['danger-300'],
                color: color.foreground,
                '&:active': tslib_1.__assign({}, hoverTheme),
                '&:focus': tslib_1.__assign({}, hoverTheme),
                '&:hover': tslib_1.__assign({}, hoverTheme),
            };
        case 'success':
            return {
                backgroundColor: color.success,
                border: "1px solid " + color['success-300'],
                color: color.foreground,
                '&:active': tslib_1.__assign({}, hoverTheme),
                '&:focus': tslib_1.__assign({}, hoverTheme),
                '&:hover': tslib_1.__assign({}, hoverTheme),
            };
        case 'warning':
            return {
                backgroundColor: color.warning,
                border: "1px solid " + color['warning-300'],
                color: color.foreground,
                '&:active': tslib_1.__assign({}, hoverTheme),
                '&:focus': tslib_1.__assign({}, hoverTheme),
                '&:hover': tslib_1.__assign({}, hoverTheme),
            };
        default:
            return {};
    }
}
//# sourceMappingURL=card.theme.js.map
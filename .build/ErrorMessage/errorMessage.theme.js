export function errorMessageTheme(_a) {
    var _b = _a.theme, animation = _b.animation, color = _b.color, unit = _b.unit;
    return {
        color: color.danger,
        transition: animation.easeMedium(),
        margin: "0 0 " + unit[3] + " 3px",
        paddingTop: unit[1],
        paddingBottom: unit[1],
    };
}
export function errorMessageAppearanceTheme(_a) {
    var appearance = _a.appearance, _b = _a.theme, border = _b.border, color = _b.color, unit = _b.unit;
    switch (appearance) {
        case 'primary':
            return {
                color: color.foreground,
                backgroundColor: color.danger,
                paddingLeft: unit[2],
                paddingRight: unit[2],
            };
        case 'secondary':
            return {
                border: border.thinDanger,
                paddingLeft: unit[2],
                paddingRight: unit[2],
            };
        default:
            return {};
    }
}
//# sourceMappingURL=errorMessage.theme.js.map
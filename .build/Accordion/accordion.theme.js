export function accordionTheme(_a) {
    var animation = _a.theme.animation;
    return {
        flex: 1,
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        transition: animation.easeMedium(),
    };
}
export function accordionButtonTheme(_a) {
    return {
        textAlign: 'left',
        borderRadius: 0,
    };
}
export function accordionIconTheme(_a) {
    var active = _a.active, _b = _a.theme, animation = _b.animation, unit = _b.unit;
    return {
        float: 'right',
        padding: unit[2],
        transform: active ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
        transition: animation.easeMedium(),
    };
}
export function accordionContentTheme(_a) {
    var animation = _a.theme.animation;
    return {
        overflow: 'hidden',
        padding: 0,
        transition: animation.easeMedium(),
    };
}
export function accordionItemTheme(_a) {
    var animation = _a.theme.animation;
    return {
        cursor: 'pointer',
        display: 'list-item',
        lineHeight: 1.4,
        margin: 0,
        overflow: 'hidden',
        padding: 0,
        textAlign: '-webkit-match-parent',
        transition: animation.easeMedium(),
    };
}
//# sourceMappingURL=accordion.theme.js.map
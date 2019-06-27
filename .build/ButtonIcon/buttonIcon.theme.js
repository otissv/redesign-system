import * as tslib_1 from "tslib";
export function buttonIconTheme(_a) {
    var dimension = _a.dimension, _b = _a.theme, animation = _b.animation, unit = _b.unit;
    return tslib_1.__assign({ position: 'relative', whiteSpace: 'nowrap', transition: animation.easeFast(), lineHeight: 'inherit' }, (dimension ? { height: dimension, width: dimension, padding: 0 } : {}), { '>svg.Icon': tslib_1.__assign({}, (dimension
            ? { height: dimension, width: dimension }
            : { transform: 'translateY(4px)' })), '>span.ButtonIconContent': {
            display: 'inline-block',
            paddingLeft: unit[2],
        } });
}
//# sourceMappingURL=buttonIcon.theme.js.map
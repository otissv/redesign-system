import * as tslib_1 from "tslib";
export function iconTheme(_a) {
    var hoverColor = _a.hoverColor;
    return tslib_1.__assign({ display: 'inline-block', color: 'inherit', fill: 'currentcolor', height: 'auto', position: 'relative' }, (hoverColor && { '&:hover': { color: hoverColor } }));
}
export function iconAppearanceTheme(_a) {
    var appearance = _a.appearance, color = _a.theme.color;
    switch (appearance) {
        case 'accent':
            return {
                color: color.accent,
                '&:hover': {
                    color: color.accent2,
                },
            };
        case 'action':
            return {
                color: color.action,
                '&:hover': {
                    color: color.action2,
                },
            };
        case 'active':
            return {
                color: color.active,
                '&:hover': {
                    color: color.active2,
                },
            };
        case 'danger':
            return {
                color: color.danger,
                '&:hover': {
                    color: color.danger2,
                },
            };
        case 'error':
            return {
                color: color.danger,
                '&:hover': {
                    color: color.danger2,
                },
            };
        case 'success':
            return {
                color: color.success,
                '&:hover': {
                    color: color.success2,
                },
            };
        case 'warning':
            return {
                color: color.warning,
                '&:hover': {
                    color: color.warning2,
                },
            };
        case 'disabled':
            return {
                color: color.disabled,
                '&:hover': {
                    color: color.disabled2,
                },
            };
        default:
            return {};
    }
}
//# sourceMappingURL=icon.theme.js.map
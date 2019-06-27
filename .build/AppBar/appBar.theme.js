import * as tslib_1 from "tslib";
var input = function (color) { return ({
    background: 'hsla(0,0%,0%,0.1)',
    border: '1px solid #0000',
    flex: 0,
    '&::placeholder': {
        color: color['grey-900'],
    },
    '&:hover': {
        background: 'hsla(0,0%,0%,0.2)',
    },
    '&:focus': {
        background: 'hsla(0,0%,0%,0.2)',
    },
    '&:active': {
        background: 'hsla(0,0%, 0%,0.2)',
    },
}); };
export function appBarTheme(_a) {
    var color = _a.theme.color;
    return {
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'flex',
        flexShrink: 0,
        minHeight: '56px',
        position: 'relative',
        width: '100%',
        zIndex: '1100',
        backgroundColor: color.default,
        color: color.white,
        '>button.Button': {
            minHeight: 'inherit',
            border: '1px solid #0000',
            borderRadius: 0,
            '>svg.Icon': {
                paddingRight: 0,
            },
        },
        'input.Input': tslib_1.__assign({}, input(color), { color: color.foregroundInvert }),
    };
}
export function appBarAppearanceTheme(_a) {
    var appearance = _a.appearance, color = _a.theme.color;
    var appearanceInput = {
        'input.Input': tslib_1.__assign({}, input(color), { color: color.wite }),
    };
    switch (appearance) {
        case 'action':
            return tslib_1.__assign({ backgroundColor: color.action, color: '#ffffff' }, appearanceInput);
        case 'accent':
            return tslib_1.__assign({ background: color.accent, color: '#ffffff' }, appearanceInput);
        case 'danger':
            return tslib_1.__assign({ backgroundColor: color.danger, color: '#ffffff' }, appearanceInput);
        case 'success':
            return tslib_1.__assign({ backgroundColor: color.success, color: '#ffffff' }, appearanceInput);
        case 'warning':
            return tslib_1.__assign({ backgroundColor: color.warning, color: '#ffffff' }, appearanceInput);
        default:
            return {};
    }
}
//# sourceMappingURL=appBar.theme.js.map
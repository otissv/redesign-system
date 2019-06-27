export function toggleTheme(_a) {
    return {
        display: 'inline',
    };
}
export function toggleAppearanceTheme(_a) {
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
            return '';
    }
}
export function toggleInputTheme(_a) {
    var color = _a.theme.color;
    return {
        boxSizing: 'border-box',
        height: 0,
        width: 0,
        visibility: 'hidden',
        '&:checked + label': {
            background: color['grey-100'],
        },
        '&:checked + label:after': {
            left: 'calc(100% - 5px)',
            transform: 'translateX(-100%)',
        },
    };
}
export function toggleLabelTheme(_a) {
    var color = _a.theme.color, checked = _a.checked, height = _a.height, hideText = _a.hideText, width = _a.width;
    return {
        position: 'relative',
        boxSizing: 'border-box',
        cursor: 'pointer',
        textIndent: hideText ? '-9999px' : 'initial',
        width: width,
        height: height,
        background: color['grey-700'],
        display: 'inline-block',
        borderRadius: '100px',
        fontSize: height,
        lineHeight: height,
        textAlign: checked ? 'left' : 'right',
    };
}
export function toggleContentTheme(_a) {
    var color = _a.theme.color, toggle = _a.toggle, height = _a.height, width = _a.width;
    return {
        position: 'absolute',
        boxSizing: 'border-box',
        width: width,
        height: height,
        background: toggle ? color['grey-500'] : color['grey-400'],
        borderRadius: '90px',
        transform: toggle ? 'translateX(100%);' : 'translate(0);',
        transition: '0.3s',
        ' &:active': {
            width: '25px',
        },
    };
}
//# sourceMappingURL=toggle.theme.js.map
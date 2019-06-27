export function inputGroupTheme(_a) {
    var _b = _a.theme, color = _b.color, border = _b.border, font = _b.font, unit = _b.unit, radius = _b.radius;
    return {
        position: 'relative',
        width: 'auto',
        height: '41px',
        display: 'flex',
        background: color['grey-600'],
        border: border.transparent,
        borderBottom: border.thinForeground,
        lineHeight: font.lineHeight.default,
        borderTopLeftRadius: radius.rounded,
        borderTopRightRadius: radius.rounded,
        '>svg.Icon': {
            marginLeft: unit[2],
        },
        input: {
            display: 'inline-block',
            width: 'auto',
            margin: 0,
            background: 'none',
            border: border.transparent,
            flex: 1,
            lineHeight: 'inherit',
            '&:hover, &:active, &:focus': {
                background: 'none',
                border: 'none',
            },
        },
        button: {
            float: 'right',
            borderBottom: 'inherit',
            height: 'inherit',
            // padding: `${unit[2]} ${unit[3]}`,
            '&:hover, &:active, &:focus': {
                borderBottom: 'inherit',
            },
        },
        'input+button': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        },
        'button+input': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
        },
    };
}
export function inputGroupButtonTheme(_a) {
    var _b = _a.theme, color = _b.color, border = _b.border;
    return {
        background: color['grey-600'],
        border: border.transparent,
        borderBottom: border.thinForeground,
    };
}
//# sourceMappingURL=inputGroup.theme.js.map
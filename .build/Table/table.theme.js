export function tableTheme(_a) {
    var condensed = _a.condensed, hover = _a.hover, _b = _a.theme, animation = _b.animation, border = _b.border, color = _b.color, unit = _b.unit, elevate = _b.elevate;
    return {
        width: '100%',
        position: 'relative',
        background: color.background,
        borderCollapse: 'collapse',
        transition: animation.easeMedium(),
        th: {
            position: 'sticky',
            top: 0,
            zIndex: 2,
            background: color.background,
            textAlign: 'left',
        },
        'td, th': {
            padding: condensed ? unit[1] + " " + unit[4] : unit[2] + " " + unit[4],
        },
        td: {
            borderTop: border.thin,
            height: '100%',
        },
        'tbody tr:hover': {
            background: hover ? color['grey-800'] : '',
            boxShadow: hover ? elevate[2] : '',
        },
    };
}
export function tableCaptionTheme(_a) {
    var _b = _a.theme;
    return {
        height: 0,
    };
}
export function tableViewsButtonTheme(_a) {
    var _b = _a.theme;
    return {
        display: 'flex',
        marginLeft: 'auto',
    };
}
//# sourceMappingURL=table.theme.js.map
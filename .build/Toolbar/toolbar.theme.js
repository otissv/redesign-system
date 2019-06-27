export function toolbarTheme(_a) {
    var color = _a.theme.color;
    return {
        paddingLeft: 0,
        paddingRight: 0,
        minHeight: 'auto',
        background: 'none',
        '>button': {
            color: color.foreground,
            background: 'none',
            borderColor: color.transparent,
            borderRadius: 0,
            '&:active': {
                color: color.foreground,
            },
        },
        '.ToolbarViewsContainer': {
            'button:first-child': {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
            },
            'button:last-child': {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
            },
        },
    };
}
//# sourceMappingURL=toolbar.theme.js.map
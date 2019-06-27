export function tabsTheme(_a) {
    var stacked = _a.stacked;
    return {
        display: 'flex',
        flexDirection: stacked ? 'row' : 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'stretch',
        alignContent: 'stretch',
    };
}
export function tabsListButtonTheme(_a) {
    var item = _a.item;
    return item
        ? {
            width: 'auto',
            flex: 'none',
        }
        : {};
}
export function tabsListTheme(_a) {
    return {
        overflow: 'auto hidden',
        whiteSpace: 'nowrap',
    };
}
export function tabsPanelTheme(_a) {
    return {
        overflow: 'hidden auto',
        flex: 1,
    };
}
//# sourceMappingURL=tabs.theme.js.map
export function buttonGroupTheme(_a) {
    var stacked = _a.stacked, animation = _a.theme.animation;
    return {
        display: 'inline-flex',
        position: 'relative',
        transition: animation.easeMedium(),
        verticalAlign: 'middle',
        flexDirection: stacked ? 'column' : 'row',
    };
}
export function buttonStretchGroupTheme(_a) {
    var stretch = _a.stretch;
    return stretch ? { width: '100%' } : {};
}
//# sourceMappingURL=buttonGroup.theme.js.map
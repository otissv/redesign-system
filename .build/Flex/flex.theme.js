import kebabCase from 'lodash/kebabCase';
export function flexTheme(_a) {
    var alignItems = _a.alignItems, basis = _a.basis, display = _a.display, grow = _a.grow, justifyContent = _a.justifyContent, shrink = _a.shrink, wrap = _a.wrap;
    return {
        display: display || 'flex',
        basis: basis ? "" + basis : '',
        grow: grow ? "" + grow : '',
        shrink: shrink ? "" + shrink : '',
        justifyContent: (justifyContent && [kebabCase(justifyContent)]) || '',
        alignItems: (alignItems && [kebabCase(alignItems)]) || '',
        flexWrap: (wrap && [kebabCase(wrap)]) || '',
    };
}
export function flexDirectionTheme(_a) {
    var direction = _a.direction;
    switch (direction) {
        case 'row':
            return { flexDirection: 'row' };
        case 'column':
            return { flexDirection: 'column' };
        case 'rowReverse':
            return { flexDirection: 'rowReverse' };
        case 'columnReverse':
            return { flexDirection: 'columnReverse' };
        default:
            return {};
    }
}
//# sourceMappingURL=flex.theme.js.map
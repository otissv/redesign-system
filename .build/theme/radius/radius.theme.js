import merge from 'lodash/fp/merge';
export function radiusTheme(_a) {
    var radius = _a.radius;
    var defaults = {
        rounded: '5px',
        circle: '100%',
        round: '30px',
        none: 'none',
    };
    return merge(radius)(defaults);
}
//# sourceMappingURL=radius.theme.js.map
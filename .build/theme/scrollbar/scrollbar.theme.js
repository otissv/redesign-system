import merge from 'lodash/fp/merge';
export function scrollbarTheme(_a) {
    var color = _a.color, scrollbar = _a.scrollbar, unit = _a.unit;
    var defaults = {
        width: unit[3],
        height: unit[3],
        backgroundColor: color.background,
        corner: {
            backgroundColor: color.background,
        },
        thumb: {
            backgroundColor: '#7d7d7d94',
            outline: 'none',
            transition: 'background-color ease 0.2s',
            hover: {
                backgroundColor: '#7d7d7d',
            },
        },
    };
    return merge(scrollbar)(defaults);
}
//# sourceMappingURL=scrollbar.theme.js.map
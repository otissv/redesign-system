import * as tslib_1 from "tslib";
export var sharedStyles = function () {
    return function (props) {
        return props.theme
            ? Object.keys(props.theme.shared).reduce(function (previous, key) {
                return props[key]
                    ? tslib_1.__assign({}, previous, props.theme.shared[key](props[key])) : previous;
            }, {})
            : {};
    };
};
//# sourceMappingURL=sharedStyles.utils.js.map
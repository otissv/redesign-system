import { isFunction } from './isFunction.util';
export var either = function (left, right) { return function (condition) {
    return condition
        ? isFunction(left)
            ? left()
            : left
        : isFunction(right)
            ? right()
            : right;
}; };
//# sourceMappingURL=either.util.js.map
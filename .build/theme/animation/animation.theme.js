import merge from 'lodash/fp/merge';
export function animationTheme(_a) {
    var animation = _a.animation;
    var xslow = '3s';
    var slow = '0.5s';
    var medium = '0.3s';
    var fast = '0.1s';
    var defaults = {
        xslow: xslow,
        slow: slow,
        medium: medium,
        fast: fast,
        // ease
        easeFast: function (property, delay) {
            if (property === void 0) { property = 'all'; }
            if (delay === void 0) { delay = ''; }
            return property + " " + fast + " ease " + delay;
        },
        easeMedium: function (property, delay) {
            if (property === void 0) { property = 'all'; }
            if (delay === void 0) { delay = ''; }
            return property + " " + medium + " ease " + delay;
        },
        easeSlow: function (property, delay) {
            if (property === void 0) { property = 'all'; }
            if (delay === void 0) { delay = ''; }
            return property + " " + slow + " ease " + delay;
        },
        easeXslow: function (property, delay) {
            if (property === void 0) { property = 'all'; }
            if (delay === void 0) { delay = ''; }
            return property + " " + xslow + " ease " + delay;
        },
        // easIn
        easeInFast: function (property, delay) {
            if (property === void 0) { property = 'all'; }
            if (delay === void 0) { delay = ''; }
            return property + " " + fast + " ease-in-out " + delay;
        },
        easeInMedium: function (property, delay) {
            if (property === void 0) { property = 'all'; }
            if (delay === void 0) { delay = ''; }
            return property + " " + medium + " ease-in-out " + delay;
        },
        easeInSlow: function (property, delay) {
            if (property === void 0) { property = 'all'; }
            if (delay === void 0) { delay = ''; }
            return property + " " + slow + " ease-in-out " + delay;
        },
        easeInXslow: function (property, delay) {
            if (property === void 0) { property = 'all'; }
            if (delay === void 0) { delay = ''; }
            return property + " " + xslow + " ease-in-out " + delay;
        },
        // easeInOut
        easeInOutFast: function (property, delay) {
            if (property === void 0) { property = 'all'; }
            if (delay === void 0) { delay = ''; }
            return property + " " + fast + " ease-in-out " + delay;
        },
        easeInOutMedium: function (property, delay) {
            if (property === void 0) { property = 'all'; }
            if (delay === void 0) { delay = ''; }
            return property + " " + medium + " ease-in-out " + delay;
        },
        easeInOutSlow: function (property, delay) {
            if (property === void 0) { property = 'all'; }
            return property + " " + slow + " ease-in-out " + delay;
        },
        easeInOutXslow: function (property, delay) {
            if (property === void 0) { property = 'all'; }
            if (delay === void 0) { delay = ''; }
            return property + " " + xslow + " ease-in-out " + delay;
        },
    };
    return merge(animation)(defaults);
}
//# sourceMappingURL=animation.theme.js.map
import { either } from './either.util';
export var setTheme = function (propsTheme, theme) {
    return either(propsTheme, theme)(propsTheme);
};
//# sourceMappingURL=setTheme.util.js.map
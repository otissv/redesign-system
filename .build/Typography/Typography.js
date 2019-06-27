import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { Base } from '../Base';
import { typographyAppearanceTheme, typographyTheme, typographyModifyTheme, typographyWrapTheme, typographyTextAlignTheme, typographyTransformTheme, } from './typography.theme';
export function Typography(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var classNames = "Typography " + className;
    var _themed = useMemo(function () { return [
        typographyAppearanceTheme,
        typographyTheme,
        typographyModifyTheme,
        typographyWrapTheme,
        typographyTextAlignTheme,
        typographyTransformTheme
    ].concat(themed); }, [
        typographyAppearanceTheme,
        typographyTheme,
        typographyModifyTheme,
        typographyWrapTheme,
        typographyTextAlignTheme,
        typographyTransformTheme,
        themed,
    ]);
    var attributes = tslib_1.__assign({}, (propsRest.as === 'hr'
        ? {
            role: 'separator',
            'aria-orientation': 'horizontal',
        }
        : {}));
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, attributes, propsRest), children));
}
Typography.defaultProps = {
    as: 'p',
    themed: [],
};
export default Typography;
//# sourceMappingURL=Typography.js.map
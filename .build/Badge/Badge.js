import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import Base from '../Base/Base';
import { badgeTheme, badgeAppearanceTheme, badgePillTheme, } from './badge.theme';
export function Badge(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var classNames = "Badge " + className;
    var _themed = useMemo(function () { return [badgeTheme, badgeAppearanceTheme, badgePillTheme].concat(themed); }, [badgeTheme, badgeAppearanceTheme, badgePillTheme, themed]);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest), children));
}
Badge.defaultProps = {
    className: '',
    themed: [],
};
export default Badge;
//# sourceMappingURL=Badge.js.map
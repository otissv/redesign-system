import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import Base from '../Base/Base';
import { appBarTheme, appBarAppearanceTheme } from './appBar.theme';
export function AppBar(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var classNames = "AppBar " + className;
    var _themed = useMemo(function () { return [appBarTheme, appBarAppearanceTheme].concat(themed); }, [appBarTheme, appBarAppearanceTheme, themed]);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed, "aria-orientation": "horizontal" }, propsRest), children));
}
AppBar.defaultProps = {
    className: '',
    themed: [],
};
export default AppBar;
//# sourceMappingURL=AppBar.js.map
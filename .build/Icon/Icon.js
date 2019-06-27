import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { iconTheme, iconAppearanceTheme } from './icon.theme';
import Base from '../Base/Base';
export function Icon(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, title = _a.title, propsRest = tslib_1.__rest(_a, ["children", "className", "themed", "title"]);
    var classNames = "Icon " + className;
    var _themed = useMemo(function () { return [iconTheme, iconAppearanceTheme].concat(themed); }, [
        iconTheme,
        iconAppearanceTheme,
        themed,
    ]);
    return (React.createElement(Base, tslib_1.__assign({ as: "svg", className: classNames, themed: _themed, xmlns: "http://www.w3.org/2000/svg" }, propsRest),
        title ? React.createElement("title", null, title) : null,
        children));
}
Icon.defaultProps = {
    className: '',
    height: '24px',
    themed: [],
    viewBox: '0 0 24 24',
    width: '24px',
};
export default Icon;
//# sourceMappingURL=Icon.js.map
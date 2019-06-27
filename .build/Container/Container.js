import * as tslib_1 from "tslib";
import React from 'react';
import { Base } from '../Base';
import { containerAppearanceTheme } from './container.theme';
export function Container(_a) {
    var children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "themed"]);
    var classNames = "Container " + className;
    var _themed = React.useMemo(function () { return [containerAppearanceTheme].concat(themed); }, [
        containerAppearanceTheme,
        themed,
    ]);
    return (React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest), children));
}
Container.defaultProps = {
    className: '',
    themed: [],
};
export default Container;
//# sourceMappingURL=Container.js.map
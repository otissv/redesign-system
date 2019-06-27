import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import Base from '../Base/Base';
import { TabProvider } from './TabContext';
import { tabsTheme } from './tabs.theme';
export function Tabs(_a) {
    var className = _a.className, children = _a.children, appearance = _a.appearance, stretch = _a.stretch, size = _a.size, themed = _a.themed, height = _a.height, width = _a.width, stacked = _a.stacked, propsRest = tslib_1.__rest(_a, ["className", "children", "appearance", "stretch", "size", "themed", "height", "width", "stacked"]);
    var classNames = "Tabs " + className;
    var _themed = useMemo(function () { return [tabsTheme].concat(themed); }, [tabsTheme, themed]);
    return (React.createElement(TabProvider, { appearance: appearance, height: height, width: width, stretch: stretch, size: size, stacked: stacked },
        React.createElement(Base, tslib_1.__assign({ className: classNames, themed: _themed, stacked: stacked }, propsRest), children)));
}
Tabs.defaultProps = {
    className: '',
    themed: [],
};
export default Tabs;
//# sourceMappingURL=Tabs.js.map
import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { useTabs } from './TabContext';
import { tabsPanelTheme } from './tabs.theme';
import Base from '../Base/Base';
export function TabPanel(_a) {
    var children = _a.children, className = _a.className, uid = _a.uid, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "uid", "themed"]);
    var classNames = "TabPanel " + className;
    var _themed = useMemo(function () { return [tabsPanelTheme].concat(themed); }, [
        tabsPanelTheme,
        themed,
    ]);
    var _b = useTabs(), active = _b.active, height = _b.height, width = _b.width;
    var getActiveStyle = active === uid ? 'display: block;' : 'display: none;';
    return active === uid ? (React.createElement(Base, tslib_1.__assign({ className: classNames, height: height, width: width, themed: _themed }, propsRest, { css: getActiveStyle + " height: " + height + "; width: " + width + ";", "data-uid": uid }), children)) : null;
}
TabPanel.defaultProps = {
    className: '',
    themed: [],
};
export default TabPanel;
//# sourceMappingURL=TabPanel.js.map
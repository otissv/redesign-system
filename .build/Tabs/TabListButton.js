import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { tabsListButtonTheme } from './tabs.theme';
import ButtonGroupButton from '../ButtonGroup/ButtonGroupButton';
import { useTabs } from './TabContext';
export function TabListButton(_a) {
    var children = _a.children, className = _a.className, uid = _a.uid, onClick = _a.onClick, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "uid", "onClick", "themed"]);
    var classNames = "TabPanel " + className;
    var _themed = useMemo(function () { return [tabsListButtonTheme].concat(themed); }, [
        tabsListButtonTheme,
        themed,
    ]);
    var _b = useTabs(), active = _b.active, appearance = _b.appearance, dispatch = _b.dispatch, stacked = _b.stacked;
    function handleClick(e) {
        e.preventDefault();
        dispatch({
            type: 'SET_ACTIVE',
            active: e.currentTarget.dataset.uid,
        });
        onClick && onClick(e);
    }
    var getActiveAppearance = active === uid ? 'active' : appearance;
    return (React.createElement(ButtonGroupButton, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest, { onClick: handleClick, appearance: getActiveAppearance, stacked: stacked, "data-uid": uid }), children));
}
TabListButton.defaultProps = {
    className: '',
    themed: [],
};
export default TabListButton;
//# sourceMappingURL=TabListButton.js.map
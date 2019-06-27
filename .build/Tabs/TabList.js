import * as tslib_1 from "tslib";
import React, { useEffect, useMemo } from 'react';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import { tabsListTheme } from './tabs.theme';
import { useTabs } from './TabContext';
export function TabList(_a) {
    var active = _a.active, children = _a.children, className = _a.className, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["active", "children", "className", "themed"]);
    var classNames = "TabList " + className;
    var _themed = useMemo(function () { return [tabsListTheme].concat(themed); }, [
        tabsListTheme,
        themed,
    ]);
    var _b = useTabs(), dispatch = _b.dispatch, appearance = _b.appearance, stacked = _b.stacked, stretch = _b.stretch, size = _b.size;
    function handleOnWheel(e) {
        e.preventDefault();
        var tabList = e.currentTarget;
        //TODO: not working
        tabList.scrollLeft = -e.nativeEvent.wheelDelta || -e.nativeEvent.detail;
    }
    useEffect(function () {
        dispatch({
            type: 'SET_ACTIVE',
            active: active,
        });
    }, [active]);
    return (React.createElement(ButtonGroup, tslib_1.__assign({ className: classNames, onWheel: handleOnWheel, styled: "overflow:hidden;", appearance: appearance, stretch: stretch, size: size, stacked: stacked }, propsRest, { themed: _themed }), children));
}
TabList.defaultProps = {
    className: '',
    themed: [],
};
export default TabList;
//# sourceMappingURL=TabList.js.map
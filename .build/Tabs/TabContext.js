import * as tslib_1 from "tslib";
import React, { useContext, useMemo } from 'react';
import { useCollectionHashReducer } from '../reusable/collectionHash';
export var TabContext = React.createContext({});
export function useTabs() {
    return useContext(TabContext);
}
export function TabProvider(_a) {
    var active = _a.active, _b = _a.selected, selected = _b === void 0 ? {} : _b, children = _a.children, stacked = _a.stacked, propsRest = tslib_1.__rest(_a, ["active", "selected", "children", "stacked"]);
    var initialState = {
        active: active,
        items: [],
        selected: [],
        stacked: stacked,
    };
    var _c = useCollectionHashReducer(null, initialState), collection = _c[0], dispatch = _c[1];
    var context = useMemo(function () { return (tslib_1.__assign({}, collection, { dispatch: dispatch }, propsRest)); }, [
        collection,
        dispatch,
        propsRest,
    ]);
    return React.createElement(TabContext.Provider, { value: context }, children);
}
export default TabContext;
//# sourceMappingURL=TabContext.js.map
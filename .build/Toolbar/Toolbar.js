import * as tslib_1 from "tslib";
import React, { useMemo } from 'react';
import { AppBar } from '../AppBar';
import { toolbarTheme } from './toolbar.theme';
export function Toolbar(_a) {
    var children = _a.children, className = _a.className, _b = _a.items, items = _b === void 0 ? [] : _b, onDeleteSelected = _a.onDeleteSelected, onSwitchView = _a.onSwitchView, toolbar = _a.toolbar, SelectToolbar = _a.selectToolbar, themed = _a.themed, propsRest = tslib_1.__rest(_a, ["children", "className", "items", "onDeleteSelected", "onSwitchView", "toolbar", "selectToolbar", "themed"]);
    var classNames = "Toolbar " + className;
    function handleDeleteSelected(e) {
        e.preventDefault();
        onDeleteSelected && onDeleteSelected(e);
    }
    var _themed = useMemo(function () { return [toolbarTheme].concat(themed); }, [
        toolbarTheme,
        themed,
    ]);
    function handleSwitchView(e) {
        e.preventDefault();
        var id = e.currentTarget.dataset.uid;
        onSwitchView && onSwitchView(e, { id: id });
    }
    var toolbarContent = useMemo(function () {
        return items.length > 0 ? (React.createElement(SelectToolbar, { selected: items.length, handleDeleteSelected: handleDeleteSelected })) : typeof children === 'function' ? (children({ handleSwitchView: handleSwitchView, toolbar: toolbar })) : (children);
    }, [children, handleSwitchView, handleDeleteSelected, items, toolbar]);
    return (React.createElement(AppBar, tslib_1.__assign({ className: classNames, themed: _themed }, propsRest), toolbarContent));
}
Toolbar.defaultProps = {
    className: '',
    themed: [],
};
export default Toolbar;
//# sourceMappingURL=Toolbar.js.map
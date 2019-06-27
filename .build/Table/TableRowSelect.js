import * as tslib_1 from "tslib";
import React from 'react';
export function TableRowSelect(_a) {
    var dispatch = _a.dispatch, handleChange = _a.handleChange, hook = _a.hook, id = _a.id, itemsToArray = _a.itemsToArray, loading = _a.loading, selected = _a.selected, propsRest = tslib_1.__rest(_a, ["dispatch", "handleChange", "hook", "id", "itemsToArray", "loading", "selected"]);
    return (React.createElement("td", { style: { width: '48px' } },
        React.createElement("input", tslib_1.__assign({ checked: selected.includes(id), name: id, onChange: handleChange, style: { cursor: 'pointer' }, type: "checkbox" }, propsRest))));
}
export default TableRowSelect;
//# sourceMappingURL=TableRowSelect.js.map
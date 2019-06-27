import * as tslib_1 from "tslib";
import React, { Fragment, useMemo } from 'react';
import TableBody from './TableBody';
export function TableView(_a) {
    var dispatch = _a.dispatch, handleAdd = _a.handleAdd, handleDeleteSelected = _a.handleDeleteSelected, headings = _a.headings, itemsToArray = _a.itemsToArray, loading = _a.loading, rows = _a.rows, selected = _a.selected, tableName = _a.tableName, propsRest = tslib_1.__rest(_a, ["dispatch", "handleAdd", "handleDeleteSelected", "headings", "itemsToArray", "loading", "rows", "selected", "tableName"]);
    var tableHeadings = useMemo(function () {
        return headings && (React.createElement("thead", null,
            React.createElement("tr", null, headings.map(function (heading, i) {
                return typeof heading === 'function' ? (React.createElement("th", { key: i }, heading())) : (React.createElement("th", { key: i }, heading));
            }))));
    }, [headings]);
    return (React.createElement(Fragment, null,
        tableHeadings,
        React.createElement(TableBody, tslib_1.__assign({ className: "TableView", dispatch: dispatch, handleAdd: handleAdd, handleDeleteSelected: handleDeleteSelected, rows: rows, tableName: tableName, loading: loading, selected: selected, itemsToArray: itemsToArray }, propsRest))));
}
export default TableView;
//# sourceMappingURL=TableView.js.map
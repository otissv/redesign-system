import * as tslib_1 from "tslib";
import React, { Fragment, useMemo } from 'react';
import { useCacheState } from '../reusable/cacheState';
import { TableCopyButton, TableDeleteButton, TableDownloadButton, TableEditLink, } from './TableButton';
export function TableBody(_a) {
    var dispatch = _a.dispatch, handleAdd = _a.handleAdd, handleDeleteSelected = _a.handleDeleteSelected, itemsToArray = _a.itemsToArray, loading = _a.loading, onRowClick = _a.onRowClick, _b = _a.rows, rows = _b === void 0 ? [] : _b, selected = _a.selected, tableName = _a.tableName, propsRest = tslib_1.__rest(_a, ["dispatch", "handleAdd", "handleDeleteSelected", "itemsToArray", "loading", "onRowClick", "rows", "selected", "tableName"]);
    var _c = useCacheState(tableName + "ExpandRows", []), state = _c.state, setItem = _c.setItem;
    function handleChange(e) {
        e.preventDefault();
        dispatch({
            type: 'TOGGLE_SELECTED_ITEMS',
            selected: [e.currentTarget.name],
        });
    }
    function handleDelete(e) {
        e.preventDefault();
        // onDelete && onDelete(e)
    }
    function handleExpandRows(e) {
        e.preventDefault();
        var id = e.currentTarget.dataset.uid;
        var isStringEqual = function (r) { return r === id; };
        if (state.find(isStringEqual)) {
            setItem(state.filter(function (r) { return !isStringEqual(r); }));
        }
        else {
            setItem(state.concat([id]));
        }
    }
    function handleRowClick(e) {
        e.preventDefault();
        var id = e.currentTarget.dataset.uid;
        onRowClick && onRowClick(e, id);
    }
    var body = useMemo(function () {
        return rows.map(function (_a, i) {
            var row = _a.row, rowDetail = _a.rowDetail;
            var RowDetail = rowDetail;
            return (React.createElement(Fragment, { key: i },
                React.createElement("tr", null, row.map(function (item) {
                    return (React.createElement(Fragment, { key: item.key }, item.component({
                        dispatch: dispatch,
                        handleAdd: handleAdd,
                        handleChange: handleChange,
                        handleDelete: handleDelete,
                        handleDeleteSelected: handleDeleteSelected,
                        handleExpandRows: handleExpandRows,
                        handleRowClick: handleRowClick,
                        itemsToArray: itemsToArray,
                        loading: loading,
                        selected: selected,
                        state: state,
                        Copy: function (props) { return (React.createElement(TableCopyButton, tslib_1.__assign({}, props))); },
                        Edit: function (props) { return (React.createElement(TableEditLink, tslib_1.__assign({}, props))); },
                        Delete: function (props) { return (React.createElement(TableDeleteButton, tslib_1.__assign({ onClick: handleDelete }, props))); },
                        Download: function (props) { return React.createElement(TableDownloadButton, tslib_1.__assign({}, props)); },
                    })));
                })),
                rowDetail && React.createElement(RowDetail, { state: state })));
        });
    }, [
        state,
        handleAdd,
        handleChange,
        handleDelete,
        handleDeleteSelected,
        handleExpandRows,
        rows,
    ]);
    return (React.createElement("tbody", tslib_1.__assign({ className: "TableBody" }, propsRest), body));
}
export default TableBody;
//# sourceMappingURL=TableBody.js.map
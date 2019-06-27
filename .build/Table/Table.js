import * as tslib_1 from "tslib";
import React, { Fragment, useEffect, useMemo, useReducer, useRef } from 'react';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import Base from '../Base/Base';
import { TableView } from './TableView';
import { Toolbar } from '../Toolbar/Toolbar';
import { ToolbarAddButton } from './ToolbarAddButton';
import { ToolbarCopyButton } from './ToolbarCopyButton';
import { ToolbarDeleteButton } from './ToolbarDeleteButton';
import { ToolbarDownloadButton } from './ToolbarDownloadButton';
import { ToolbarEditButton } from './ToolbarEditButton';
import { ToolbarExecuteButton } from './ToolbarExecuteButton';
import { ToolbarVariablesButton } from './ToolbarVariablesButton';
import { ToolbarViewsButton } from './ToolbarViewsButton';
import { tableTheme } from './table.theme';
import { useCacheState } from '../reusable/cacheState';
import { TableCaption } from './TableCaption';
var SelectedText = styled.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
export function Table(_a) {
    var className = _a.className, caption = _a.caption, headings = _a.headings, hook = _a.hook, initialValue = _a.initialValue, name = _a.name, numbered = _a.numbered, onAdd = _a.onAdd, onCopy = _a.onCopy, onDelete = _a.onDelete, onDeleteSelected = _a.onDeleteSelected, onDownload = _a.onDownload, onEdit = _a.onEdit, onExecute = _a.onExecute, rows = _a.rows, onRowClick = _a.onRowClick, title = _a.title, _b = _a.toolbar, toolbar = _b === void 0 ? [] : _b, propsThemed = _a.themed, uid = _a.uid, propsRest = tslib_1.__rest(_a, ["className", "caption", "headings", "hook", "initialValue", "name", "numbered", "onAdd", "onCopy", "onDelete", "onDeleteSelected", "onDownload", "onEdit", "onExecute", "rows", "onRowClick", "title", "toolbar", "themed", "uid"]);
    var classNames = "Table " + className;
    var themed = useMemo(function () { return [tableTheme].concat(propsThemed); }, [
        tableTheme,
        propsThemed,
    ]);
    var _c = hook(), loading = _c.loading, selected = _c.selected, dispatchHook = _c.dispatch, itemsToArray = _c.itemsToArray;
    var _itemList = useMemo(function () { return initialValue || itemsToArray(); }, [
        initialValue,
        itemsToArray,
    ]);
    var initialState = {
        variables: {},
        itemList: [],
    };
    var reducer = function reducer(state, actions) {
        switch (actions.type) {
            case 'SET_ITEM_LIST':
                return tslib_1.__assign({}, state, { itemList: actions.itemList });
            case 'SET_VARIABLES':
                return tslib_1.__assign({}, state, { variables: actions.variables });
            default:
                return state;
        }
    };
    var _d = useReducer(reducer, initialState), itemList = _d[0].itemList, dispatch = _d[1];
    var _e = useCacheState(uid + "_Table"), currentView = _e.state, setCurrentView = _e.setItem;
    var _f = useCacheState(uid + "_showVariables", false), showVariables = _f.state, setShowVariables = _f.setItem;
    var variablesRef = useRef('');
    var _headings = useMemo(function () { return headings; }, [headings]);
    var _rows = typeof rows === 'function' ? rows(itemList) : rows;
    useEffect(function () {
        dispatch({
            type: 'SET_ITEM_LIST',
            itemList: _itemList,
        });
    }, [_itemList]);
    function handleAdd(e) {
        e.preventDefault();
        onAdd && onAdd(e);
    }
    function handleDelete(e) {
        e.preventDefault();
        onDelete && onDelete(e);
    }
    function handleDeleteSelected(e) {
        e.preventDefault();
        var result = window.confirm("Drop collections?\n" + selected.join('\n'));
        if (result) {
            onDeleteSelected && onDeleteSelected(e);
        }
    }
    function handleEdit(e) {
        e.preventDefault();
        onEdit && onEdit(e);
    }
    function handleExecute(e) {
        e.preventDefault();
        var variablesObj = isEmpty(variablesRef.current)
            ? {}
            : JSON.parse(variablesRef.current);
        onExecute(variablesObj).then(function (result) {
            if (result) {
                dispatch({
                    type: 'SET_ITEM_LIST',
                    itemList: result,
                });
            }
        });
    }
    function handleSwitchView(e, _a) {
        var id = _a.id;
        e.preventDefault();
        if (id !== currentView) {
            setCurrentView(id);
        }
    }
    function handleVariables(e) {
        e.preventDefault();
        setShowVariables(!showVariables);
    }
    var SelectToolbar = useMemo(function () { return function (_a) {
        var selected = _a.selected, handleDeleteSelected = _a.handleDeleteSelected;
        return (React.createElement("div", null,
            React.createElement(SelectedText, null,
                selected,
                " selected "),
            React.createElement(ToolbarDeleteButton, { alt: "delete", onClick: handleDeleteSelected, title: "Delete Collection" })));
    }; }, [selected, handleDeleteSelected]);
    var toolbarContent = useMemo(function () { return function (_a) {
        var handleSwitchView = _a.handleSwitchView;
        var buttons = function (button) {
            switch (button) {
                case 'add':
                    return React.createElement(ToolbarAddButton, { alt: "add", key: "add", onClick: handleAdd });
                case 'copy':
                    return (React.createElement(ToolbarCopyButton, { alt: "copy", key: "copy", data: _itemList, onClick: onCopy }));
                case 'edit':
                    return (React.createElement(ToolbarEditButton, { alt: "edit", key: "edit", onClick: handleEdit }));
                case 'delete':
                    return (React.createElement(ToolbarDeleteButton, { alt: "delete", key: "delete", onClick: handleDelete, title: "Edit" }));
                case 'download':
                    return (React.createElement(ToolbarDownloadButton, { alt: "download", key: "download", data: _itemList, onClick: onDownload, fileName: "guru_download_" + title + ".json" }));
                case 'execute':
                    return (React.createElement(ToolbarExecuteButton, { alt: "execute", key: "execute", onClick: handleExecute, title: "Execute" }));
                case 'variables':
                    return (React.createElement(ToolbarVariablesButton, { alt: "variables", key: "variables", onClick: handleVariables }));
                case 'views':
                    return (React.createElement(ToolbarViewsButton, { key: "views", onClick: handleVariables, currentView: currentView }));
                default:
                    return null;
            }
        };
        console.log(toolbar.map(function (button) {
            return typeof button === 'function'
                ? button({ handleSwitchView: handleSwitchView, currentView: currentView, handleAdd: handleAdd })
                : buttons(button);
        }));
        return (React.createElement(Fragment, null, toolbar.map(function (button) {
            return typeof button === 'function'
                ? button({ handleSwitchView: handleSwitchView, currentView: currentView, handleAdd: handleAdd })
                : buttons(button);
        })));
    }; }, [
        handleSwitchView,
        currentView,
        handleAdd,
        onCopy,
        toolbar,
        handleDelete,
        handleEdit,
        handleVariables,
        handleExecute,
        onDownload,
        title,
        _itemList,
    ]);
    return (React.createElement(Fragment, null,
        toolbar.length > 0 ? (React.createElement(Toolbar, { items: selected, onDeleteSelected: handleDeleteSelected, onSwitchView: handleSwitchView, selectToolbar: SelectToolbar, borderBottom: "thin", paddingBottom: 2 }, toolbarContent)) : null,
        React.createElement(Base, tslib_1.__assign({ as: "table", className: classNames, themed: themed }, propsRest),
            caption ? React.createElement(TableCaption, null, caption) : null,
            React.createElement(TableView, { dispatch: dispatchHook, handleAdd: handleAdd, handleDeleteSelected: handleDeleteSelected, headings: _headings, itemsToArray: itemsToArray, loading: loading, rows: _rows, selected: selected, tableName: name, onRowClick: onRowClick }))));
}
Table.defaultProps = {
    className: '',
    themed: [],
};
export default Table;
var templateObject_1;
//# sourceMappingURL=Table.js.map
import * as tslib_1 from "tslib";
import { useReducer } from 'react';
import { COLLECTION_HASH_INITIAL_STATE } from './collectionHashConstants';
var buildInitialValue = function (initialState) { return (tslib_1.__assign({}, COLLECTION_HASH_INITIAL_STATE, initialState)); };
export var createInitialState = function (initialState) {
    return buildInitialValue(initialState);
};
export function itemsToArray(items) {
    var list = [];
    for (var item in items) {
        list.push(items[item]);
    }
    return list;
}
export var useCollectionHashReducer = function useCollectionHashReducer(extendReducer, initialState) {
    var initialValue = buildInitialValue(initialState);
    function removeItem(list, itemsToRemove) {
        var items = {};
        for (var item in list) {
            if (!itemsToRemove.includes(item)) {
                items[item] = list[item];
            }
        }
        return items;
    }
    function transformCollectionToObject(items) {
        if (!Array.isArray(items)) {
            return undefined;
        }
        var reducer = function (acc, item) {
            var _a;
            return (tslib_1.__assign({}, acc, (_a = {}, _a[item[initialValue.uid]] = item, _a)));
        };
        return items.reduce(reducer, {});
    }
    function reducer(state, action, initialValue, extendReducer) {
        var _a, _b;
        var notArray = function (value) { return !Array.isArray(value); };
        var notString = function (value) { return typeof value !== 'string'; };
        var notDefined = function (value) { return value == null; };
        switch (action.type) {
            case 'INSERT_ITEMS': {
                var items = Array.isArray(action.items)
                    ? transformCollectionToObject(action.items)
                    : (_a = {},
                        _a[action.items[initialValue.uid]] = action.items,
                        _a);
                return tslib_1.__assign({}, state, { items: tslib_1.__assign({}, state.items, items) });
            }
            case 'REDUCER': {
                return action.reducer(state);
            }
            case 'REMOVE_ITEMS': {
                if (notArray(action.remove)) {
                    return state;
                }
                return tslib_1.__assign({}, state, { active: action.remove.includes(state.active) ? '' : state.active, selected: state.selected.filter(function (item) { return !action.remove.includes(item); }), items: removeItem(state.items, action.remove) });
            }
            case 'REPLACE_ITEMS': {
                var transformedData = transformCollectionToObject(action.items);
                return tslib_1.__assign({}, state, { items: transformedData });
            }
            case 'RESET': {
                return initialValue;
            }
            case 'SET_ACTIVE': {
                if (notString(action.active)) {
                    return state;
                }
                return tslib_1.__assign({}, state, { active: notDefined(action.active) ? '' : action.active.trim() });
            }
            case 'SET_LOADING': {
                return tslib_1.__assign({}, state, { loading: !!action.loading });
            }
            case 'SET_SELECTED': {
                return tslib_1.__assign({}, state, { selected: action.selected });
            }
            case 'TOGGLE_SELECTED_ITEMS': {
                var selected = state.selected.slice();
                for (var _i = 0, _c = action.selected; _i < _c.length; _i++) {
                    var select = _c[_i];
                    var index = selected.indexOf(select);
                    var _select = select.trim();
                    if (state.items[index]) {
                        selected =
                            index === 0
                                ? selected.slice(1)
                                : index === selected.length - 1
                                    ? selected.slice(0, selected.length - 1)
                                    : selected.slice(0, index).concat(selected.slice(index + 1));
                    }
                    else {
                        selected.push(_select);
                    }
                }
                return tslib_1.__assign({}, state, { selected: selected });
            }
            case 'UPDATE_ITEM': {
                if (!state.items[action.select]) {
                    return state;
                }
                var item_1 = (_b = {},
                    _b[action.item.name || action.select] = tslib_1.__assign({}, state.items[action.select], action.item),
                    _b);
                var updateItemInList = function () { return (tslib_1.__assign({}, state.items, item_1)); };
                var removeCloneAndUpdateItem = function () { return (tslib_1.__assign({}, removeItem(state.items, [action.select]), item_1)); };
                var updatedItems = action.item[initialValue.uid]
                    ? removeCloneAndUpdateItem()
                    : updateItemInList();
                var setSelectedItem = function (list, item, update) {
                    var replaceSelectedItem = function () {
                        var index = list.indexOf(item);
                        return index === 0
                            ? [update].concat(list.slice(1)) : index === list.length - 1
                            ? list.slice(0, list.length - 1).concat([update]) : list.slice(0, index).concat([update], list.slice(index + 1));
                    };
                    return state.selected.includes(action.select)
                        ? replaceSelectedItem()
                        : state.selected;
                };
                return tslib_1.__assign({}, state, { active: state.active === action.select ? action.item.name : state.active, selected: setSelectedItem(state.selected, action.select, action.item.name), items: updatedItems });
            }
            default:
                return extendReducer ? extendReducer(state, action) : state;
        }
    }
    function crudReducer(state, action) {
        return reducer(state, action, initialValue, extendReducer);
    }
    return useReducer(crudReducer, initialValue);
};
//# sourceMappingURL=collectionHashReducer.js.map
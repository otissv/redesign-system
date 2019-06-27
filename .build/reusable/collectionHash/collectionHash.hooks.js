import { useMemo, useEffect, useState } from 'react';
export function useGetActiveItem(hook) {
    var _a = useState({}), state = _a[0], setState = _a[1];
    var _b = hook(), active = _b.active, items = _b.items;
    useEffect(function () {
        if (items && items[active]) {
            setState(items[active]);
        }
    }, [active, items]);
    return useMemo(function () { return state; }, [state]);
}
export function useGetItems(hook) {
    var _a = hook(), items = _a.items, itemsToArray = _a.itemsToArray;
    var _b = useState([]), state = _b[0], setState = _b[1];
    useEffect(function () {
        setState(itemsToArray(state));
    }, [items]);
    return useMemo(function () { return state; }, [state]);
}
export function useResetActive(hook) {
    var _a = hook(), active = _a.active, dispatch = _a.dispatch;
    useEffect(function () {
        if (active === '')
            return;
        dispatch({
            type: 'SET_ACTIVE',
            active: '',
        });
    }, []);
}
export function useSetActive(hook, value) {
    var _a = hook(), active = _a.active, dispatch = _a.dispatch;
    useEffect(function () {
        if (active === value)
            return;
        dispatch({
            type: 'SET_ACTIVE',
            active: value,
        });
    }, [active, value]);
}
//# sourceMappingURL=collectionHash.hooks.js.map
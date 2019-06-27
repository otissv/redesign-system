import { useState, useEffect, useMemo } from 'react';
export function useCacheState(key, initialState, storage) {
    var _a = useState(initialState), state = _a[0], setState = _a[1];
    var windowStorage = storage === 'sessionStorage' ? window.sessionStorage : window.localStorage;
    useEffect(function () {
        var cached = windowStorage.getItem(key);
        var data = !cached ? cached : JSON.parse(cached);
        setItem(data || initialState);
    }, []);
    function setItem(newState) {
        if (newState === state)
            return;
        var data = JSON.stringify(newState);
        setState(newState);
        return windowStorage.setItem(key, data);
    }
    function removeItem() {
        setState(undefined);
        windowStorage.removeItem(key);
    }
    return useMemo(function () { return ({ state: state, setItem: setItem, removeItem: removeItem }); }, [
        [state, setItem, removeItem],
    ]);
}
//# sourceMappingURL=useCacheState.js.map
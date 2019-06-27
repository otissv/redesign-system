import { useState, useEffect, useRef } from 'react';
export function useDevtools(_a, initialState, name, reducer) {
    var state = _a[0], dispatch = _a[1];
    var _b = useState(), devtools = _b[0], setDevtools = _b[1];
    var skippedActionIds = useRef([]);
    var stagedActions = useRef([]);
    // Check if extension is loaded
    var withDevtools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
    // Toggle skipped action
    function toggleAction(_a) {
        var id = _a.id, state = _a.state;
        var liftedState = JSON.parse(state);
        var idx = skippedActionIds.current.indexOf(id);
        var skipped = idx !== -1;
        // Toggle action in dev tools ui
        if (skipped) {
            skippedActionIds.current.splice(idx, 1);
            liftedState.skippedActionIds = skippedActionIds.current;
        }
        else {
            skippedActionIds.current.push(id);
            liftedState.skippedActionIds = skippedActionIds.current;
        }
        return liftedState;
    }
    function subscribeReducer(message) {
        if (message.type === 'DISPATCH') {
            switch (message.payload.type) {
                case 'COMMIT': {
                    reducer({ type: 'COMMIT', payload: null });
                    return;
                }
                case 'IMPORT_STATE': {
                    var nextLiftedState = message.payload.nextLiftedState;
                    var computedStates = nextLiftedState.computedStates;
                    reducer({
                        type: 'IMPORT_STATE',
                        payload: computedStates[computedStates.length - 1].state,
                    });
                    devtools.send(null, nextLiftedState);
                    return;
                }
                case 'JUMP_TO_STATE':
                    reducer({
                        type: 'JUMP_TO_ACTION',
                        payload: JSON.parse(message.state),
                    });
                    return;
                case 'JUMP_TO_ACTION': {
                    reducer({
                        type: 'JUMP_TO_ACTION',
                        payload: JSON.parse(message.state),
                    });
                    return;
                }
                case 'RESET': {
                    devtools.init(initialState);
                    reducer({ type: 'RESET', payload: initialState });
                    return;
                }
                case 'ROLLBACK': {
                    devtools.init(JSON.parse(message.state));
                    reducer({ type: 'ROLLBACK', payload: JSON.parse(message.state) });
                    return;
                }
                case 'SWEEP': {
                    reducer({ type: 'SWEEP', payload: null });
                    return;
                }
                case 'TOGGLE_ACTION': {
                    var liftedState = toggleAction({
                        id: message.payload.id,
                        state: message.state,
                    });
                    devtools.send(null, liftedState);
                    // Reset state
                    dispatch(initialState);
                    // Dispatch non skipped action
                    stagedActions.current.forEach(function (item, index) {
                        skippedActionIds.current.indexOf(index + 1) === -1 &&
                            dispatch(item);
                    });
                    reducer({
                        type: 'TOGGLE_ACTION',
                        payload: {
                            id: message.payload.id,
                            state: JSON.parse(message.state),
                        },
                    });
                    return;
                }
                default:
                    return;
            }
        }
    }
    useEffect(function () {
        if (withDevtools && !devtools) {
            // Connect to dev tools
            setDevtools(withDevtools.connect({
                name: name,
            }));
        }
        if (devtools) {
            // Set initial value
            devtools.init(state);
            // Subscribe to dev tools messages
            devtools.subscribe(subscribeReducer);
        }
    }, [devtools]);
    useEffect(function () {
        if (devtools) {
            var devState = stagedActions.current[stagedActions.current.length - 1];
            devState.type
                ? devtools.send(devState.type, state)
                : devtools.send(name ? "[" + name + "] UPDATE" : 'UPDATE', devState);
        }
    }, [stagedActions.current[stagedActions.current.length - 1]]);
    return [
        state,
        function (props) {
            stagedActions.current.push(props);
            dispatch(props);
        },
    ];
}
export function useReducerDevtools(_a, initialState, name) {
    var state = _a[0], dispatch = _a[1];
    function reducer(action) {
        switch (action.type) {
            case 'IMPORT_STATE':
            case 'JUMP_TO_STATE':
            case 'JUMP_TO_ACTION':
            case 'RESET':
            case 'ROLLBACK':
                dispatch(action.payload);
                return;
            default:
                return;
        }
    }
    return useDevtools([state, dispatch], initialState, name, reducer);
}
export function useStateDevtools(_a, initialState, name) {
    var state = _a[0], dispatch = _a[1];
    function reducer(action) {
        switch (action.type) {
            case 'IMPORT_STATE':
            case 'JUMP_TO_STATE':
            case 'JUMP_TO_ACTION':
            case 'RESET':
            case 'ROLLBACK':
                dispatch(action.payload);
                return;
            default:
                return;
        }
    }
    return useDevtools([state, dispatch], initialState, name, reducer);
}
//# sourceMappingURL=devtools.js.map
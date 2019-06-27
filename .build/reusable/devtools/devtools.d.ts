declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: any;
    }
}
export declare function useDevtools([state, dispatch]: [any, any], initialState: any, name: any, reducer: any): any[];
export declare function useReducerDevtools([state, dispatch]: [any, any], initialState: any, name: any): any[];
export declare function useStateDevtools([state, dispatch]: [any, any], initialState: any, name: any): any[];

export declare function useCacheState<T>(key: string, initialState?: T, storage?: string): {
    state: T;
    setItem: (newState: T) => void;
    removeItem: () => void;
};

/// <reference types="react" />
export declare type CollectionHashType = 'INSERT_ITEMS' | 'REDUCER' | 'REMOVE_ITEMS' | 'REPLACE_ITEMS' | 'RESET' | 'SET_ACTIVE' | 'SET_LOADING' | 'SET_SELECTED' | 'TOGGLE_SELECTED_ITEMS' | 'UPDATE_ITEM';
export declare type CollectionHashInitialValueType = {
    active?: string;
    items?: any[];
    loading?: boolean;
    selected?: any[];
    uid?: string;
};
export declare type CollectionHashStateType = {
    active?: string;
    items?: {
        [key: string]: any;
    };
    loading?: boolean;
    selected?: any[];
    uid?: string;
};
export declare type BuildInitialValueType = <T>(initialState: T) => T;
export declare type CreateInitialStateType = <T>(initialState: T) => T;
export declare type ReducerType = <S, A>(state: S, Actions?: A) => S;
export declare type CollectionHashActionType = {
    active?: string;
    item?: any;
    items?: any[];
    loading?: boolean;
    reducer?: <S, A>(state: S, Actions?: A) => S;
    remove?: any[];
    select?: string;
    selected?: any[];
    type: CollectionHashType;
    uid?: string;
    update?: any;
};
export declare type CollectionHashReducerType = (extendReducer: <S, A>(state: S, actions?: A) => S, initialState: CollectionHashInitialValueType) => [CollectionHashStateType, React.Dispatch<any>];

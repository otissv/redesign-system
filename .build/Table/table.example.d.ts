/// <reference types="react" />
export declare function useTable(): {
    dispatch: import("react").Dispatch<any>;
    itemsToArray: () => any[];
    active?: string;
    items?: {
        [key: string]: any;
    };
    loading?: boolean;
    selected?: any[];
    uid?: string;
};

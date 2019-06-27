import * as tslib_1 from "tslib";
import { useMemo } from 'react';
import { useCollectionHashReducer, itemsToArray, } from '../reusable/collectionHash';
export function useTable() {
    var initialState = {
        uid: 'id',
        items: [
            {
                id: '1',
                name: 'Project 1',
                endpoint: 'http://project1.com',
            },
            {
                id: '2',
                name: 'Project 3',
                endpoint: 'http://project2.com',
            },
            {
                id: '3',
                name: 'Project 3',
                endpoint: 'http://project3.com',
            },
        ],
    };
    var _a = useCollectionHashReducer(null, initialState), collection = _a[0], dispatch = _a[1];
    return useMemo(function () { return (tslib_1.__assign({}, collection, { dispatch: dispatch, itemsToArray: function () { return itemsToArray(collection.items); } })); }, [collection, dispatch]);
}
//# sourceMappingURL=table.example.js.map
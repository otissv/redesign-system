import { useMemo } from 'react';
import {
  useCollectionHashReducer,
  itemsToArray,
} from '../reusable/collectionHash';

export function useTable() {
  const initialState = {
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

  const [collection, dispatch] = useCollectionHashReducer(null, initialState);

  return useMemo(
    () => ({
      ...collection,
      dispatch,
      itemsToArray: () => itemsToArray(collection.items),
    }),
    [collection, dispatch]
  );
}

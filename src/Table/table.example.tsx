import { useMemo } from 'react'
import {
  useCollectionHashReducer,
  itemsToArray,
} from '../reusable/collectionHash'

const items = [...new Array(100)]

export function useTable() {
  const initialState = {
    uid: 'id',
    items: items.map((_, i) => ({
      id: `id_${i}`,
      name: `Project ${i}`,
      endpoint: `http://project${i}.com`,
    })),
  }

  const [collection, dispatch] = useCollectionHashReducer(initialState)

  return useMemo(
    () => ({
      ...collection,
      dispatch,
      itemsToArray: () => itemsToArray(collection.items),
    }),
    [collection, dispatch]
  )
}

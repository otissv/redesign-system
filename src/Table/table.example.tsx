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
      ip: `0.0.0.${i}`,
      repo: `repo${i}`,
      port: `${i}000`,
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

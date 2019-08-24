import { useMemo } from 'react'
import {
  useCollectionHashReducer,
  itemsToArray,
} from '../reusable/collectionHash'

//

export function useTable() {
  const items = useMemo(() => [...new Array(100)], [])
  const initialState = useMemo(
    () => ({
      uid: 'id',
      items: items.map((_, i) => ({
        id: `id_${i}`,
        name: `Project ${i}`,
        endpoint: `http://project${i}.com`,
        ip: `0.0.0.${i}`,
        repo: `repo${i}`,
        port: `${i}000`,
      })),
    }),
    [items]
  )

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

export function useTableRow() {
  const initialState = useMemo(
    () => ({
      active: '5c9ba223139ae94b6c2ca2d5',
      items: [
        {
          _id: '5c9ba223139ae94b6c2ca2d5',
          familyName: 'Thiel',
          givenName: 'Fatima',
          middleName: 'Roselyn',
          prefix: 'Dr.',
          suffix: 'Sr.',
        },
      ],
      uid: '_id',
    }),
    []
  )

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

import { useMemo, useEffect, useCallback, useRef } from 'react'

import {
  CollectionHashInitialValueInterface,
  ReducerType,
  createInitialState,
  useCollectionHashReducer,
} from '../collectionHash'

export function useCacheCollectionHashReducer(
  key: string,
  initialState: CollectionHashInitialValueInterface,
  extendReducer?: ReducerType,
  storage?: string
) {
  const windowStorage = useMemo(
    () =>
      storage === 'sessionStorage'
        ? window.sessionStorage
        : window.localStorage,
    [storage]
  )
  const cached = useRef(windowStorage.getItem(key))
  const initialValue = useMemo(() => createInitialState(initialState) || {}, [
    initialState,
  ])

  function cacheReducer(
    state: CollectionHashInitialValueInterface,
    action: any
  ) {
    switch (action.type) {
      case '__REPLACE':
        return action.payload
      default: {
        const reducer = extendReducer
          ? extendReducer(state, action)
          : (state: CollectionHashInitialValueInterface) => state
        return reducer
      }
    }
  }

  const [state, dispatch] = useCollectionHashReducer(initialValue, cacheReducer)

  const removeItem = useCallback(
    function removeItem() {
      windowStorage.removeItem(key)
    },
    [key, windowStorage]
  )

  const setItem = useCallback(
    function setItem(action: { type: string; [key: string]: any }) {
      dispatch(action)
      const data = JSON.stringify(state)
      windowStorage.setItem(key, data)
    },
    [dispatch, key, state, windowStorage]
  )

  useEffect(() => {
    try {
      windowStorage.setItem(key, JSON.stringify(state))
    } catch (error) {
      console.log(error)
    }
  }, [key, state, windowStorage])

  useEffect(() => {
    try {
      if (cached.current) {
        const data = JSON.parse(cached.current)
        dispatch({
          type: '__REPLACE',
          payload: data,
        })
      } else {
        return windowStorage.setItem(key, JSON.stringify(initialValue))
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  return useMemo(() => ({ state, dispatch: setItem, removeItem }), [
    removeItem,
    state,
    setItem,
  ])
}

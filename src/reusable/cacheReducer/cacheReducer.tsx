import { useCallback, useReducer, useRef, useEffect, useMemo } from 'react'

export interface ActionInterface {
  type: string
  payload?: any
}

export interface StateInterface {
  [key: string]: any
}

export function useCacheReducer<S, ActionInterface>(
  key: string,
  reducer: (state: S, action: ActionInterface) => S,
  initialState: S,
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
  const initialValue = useMemo(() => initialState || {}, [initialState])

  function cacheReducer(state: S, action: any) {
    switch (action.type) {
      case '__REPLACE':
        return action.payload
      default:
        return reducer(state, action)
    }
  }

  const [state, dispatch] = useReducer(cacheReducer, initialValue)

  const removeItem = useCallback(
    function removeItem() {
      windowStorage.removeItem(key)
    },
    [key, windowStorage]
  )

  const setItem = useCallback(
    function setItem(action: any) {
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
  }, [state, key, windowStorage])

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

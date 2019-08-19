import { useCallback, useState, useEffect, useMemo } from 'react'

export function useCacheState<T>(
  key: string,
  initialState?: T,
  storage?: string
) {
  const [state, setState] = useState(initialState)

  const windowStorage =
    storage === 'sessionStorage' ? window.sessionStorage : window.localStorage

  const setItem = useCallback(
    function setItem(newState: T) {
      if (newState === state) return

      const data = JSON.stringify(newState)
      setState(newState)
      return windowStorage.setItem(key, data)
    },
    [key, state, windowStorage]
  )

  const removeItem = useCallback(
    function removeItem() {
      setState(undefined)
      windowStorage.removeItem(key)
    },
    [key, setState, windowStorage]
  )

  useEffect(() => {
    const cached = windowStorage.getItem(key)
    const data = !cached ? cached : JSON.parse(cached)

    setItem(data || initialState)
  }, [])

  return useMemo(() => ({ state, setItem, removeItem }), [
    state,
    setItem,
    removeItem,
  ])
}

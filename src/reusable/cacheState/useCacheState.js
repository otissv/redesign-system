import { useState, useEffect, useMemo } from 'react'

export function useCacheState(key, initialState, storage = 'sessionStorage') {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const cached = window[storage].getItem(key)
    const data = !cached ? cached : JSON.parse(cached)

    setItem(data || initialState)
  }, [])

  function setItem(newState) {
    if (newState === state) return
    const data = JSON.stringify(newState)

    setState(newState)
    return window[storage].setItem(key, data)
  }

  function removeItem() {
    setState(undefined)
    window[storage].removeItem(key)
  }

  return useMemo(() => [state, setItem, removeItem], [
    [state, setItem, removeItem],
  ])
}

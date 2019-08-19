import { useEffect, useMemo, useCallback, useState } from 'react'

export function useCacheWindowLocation(
  key: string,
  storage?: string
): [Location, (pathname: string) => void] {
  const [state, setState] = useState(window.location)

  const windowStorage = useMemo(
    () =>
      storage === 'sessionStorage'
        ? window.sessionStorage
        : window.localStorage,
    [state]
  )

  useEffect(() => {
    window.addEventListener('popstate', (e: any) => {
      debugger
      setState(e.currentTarget.location)
    })
  }, [setState])

  useEffect(() => {
    try {
      const cached = windowStorage.getItem(key)
      const data = !cached ? cached : JSON.parse(cached)
      const pathname = window.location.pathname

      window.history.pushState(pathname, pathname, pathname)
      setState(data || window.location)
    } catch (error) {
      console.log(error)
    }
  }, [key, setState, windowStorage])

  useEffect(() => {
    try {
      const data = JSON.stringify(state)
      const pathname = state.pathname
      debugger
      window.history.pushState(pathname, pathname, pathname)
    } catch (error) {
      console.log(error)
    }
  }, [state])

  const setLocation = useCallback(
    function setLocation(pathname: string) {
      const location = {
        ...window.location,
        href: `${window.location.origin}${pathname}`,
        pathname: `${window.location.origin}${pathname}`,
      }

      if (window.location.pathname !== pathname) {
        setState(location)
      }
    },
    [setState]
  )

  return useMemo(() => [state, setLocation], [state, setLocation])
}

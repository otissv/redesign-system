import React, { Suspense, useEffect, useMemo, useReducer } from 'react'
import { RouterContext } from './RouterContext'

import { RouterProviderInterface } from './router.types'

export const RouterProvider = React.memo(function RouterProviderInterface({
  children,
  active = window.location.pathname,
  fallback = 'Loading...',
}: RouterProviderInterface) {
  let isBack = false

  function reducer(state: string[], action: { type: string; route?: string }) {
    switch (action.type) {
      case 'ADD_ROUTE': {
        return [...state, action.route]
      }
      case 'BACK_ROUTE': {
        return window.location.pathname === state[state.length - 2]
          ? state.slice(0, state.length - 1)
          : state
      }
      default:
        return state
    }
  }
  const [history, dispatch] = useReducer(reducer, [active])
  const route = history[history.length - 1]

  useEffect(() => {
    window.addEventListener('popstate', (e: any) => {
      isBack = true
      dispatch({
        type: 'BACK_ROUTE',
        route: e.currentTarget.location.pathname,
      })
    })
  })

  useEffect(() => {
    if (window.location.pathname !== route && !isBack) {
      window.history.pushState(route, route, route)
    }

    isBack = false
  }, [dispatch, route])

  const context = useMemo(() => ({ history, route, dispatch }), [
    route,
    history,
    dispatch,
  ])

  return (
    <RouterContext.Provider value={context}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </RouterContext.Provider>
  )
})

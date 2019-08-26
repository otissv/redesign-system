import React, { useMemo } from 'react'
import RouteParser from 'route-parser'

import { useRouter } from './RouterContext'
import { ParamsType, RouterTypes, RouteTypes } from './router.types'

function flattenRoutes(
  routes: RouteTypes[],
  parent?: RouteTypes
): RouteTypes[] {
  return routes.reduce((accumulator, route) => {
    return route.children
      ? [...accumulator, ...flattenRoutes(route.children, route)]
      : [
          ...accumulator,
          {
            ...route,
            component:
              (parent &&
                function() {
                  return parent.component.type
                    ? parent.component.type({ routes: parent.children })
                    : parent.component({ routes: parent.children })
                }) ||
              route.component,
          },
        ]
  }, [])
}

export const Router = React.memo(function Router({
  routes: routesProp = [],
  ...propsRest
}: RouterTypes) {
  const routes = useMemo(() => (routesProp ? flattenRoutes(routesProp) : []), [
    routesProp,
  ])
  const { route, history, dispatch } = useRouter()

  let params: ParamsType = false
  let Component: (props?: any) => any = () => null

  for (let item of routes) {
    const pattern = new RouteParser(item.path)
    const match = pattern.match(route)
    if (match) {
      params = match
      Component = item.component
      break
    }
  }

  const routeContext = useMemo(() => ({ route, history, dispatch }), [
    route,
    history,
    dispatch,
  ])

  return useMemo(
    () => (params ? <Component {...propsRest} route={routeContext} /> : null),
    [params, route]
  )
})

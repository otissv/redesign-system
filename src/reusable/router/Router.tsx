import React, { useMemo } from 'react';
import RouteParser from 'route-parser';

import { useRouter } from './RouterContext';
import { ParamsType, RouterTypes, RouteTypes } from './router.types';
// import { useStateDevtools } from '../devtools'

function flattenRoutes(routes: RouteTypes[], parent?: RouteTypes) {
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
                    : parent.component({ routes: parent.children });
                }) ||
              route.component,
          },
        ];
  }, []);
}

export const Router = (props: RouterTypes) => {
  const routes = useMemo(
    () => (props.routes ? flattenRoutes(props.routes) : []),
    [props.routes]
  );
  const { route, history, dispatch } = useRouter();
  let params: ParamsType = false;
  let Component = null;

  for (let item of routes) {
    const pattern = new RouteParser(item.path);
    const match = pattern.match(route);

    if (match) {
      params = match;
      Component = item.component;
      break;
    }
  }

  const routeContext = useMemo(() => ({ route, history, dispatch }), [
    route,
    history,
    dispatch,
  ]);

  return useMemo(
    () => (params ? <Component {...props} route={routeContext} /> : null),
    [params, route]
  );
};

Router.defaultProps = {
  routes: [],
};

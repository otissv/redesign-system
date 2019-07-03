import React, { useEffect, useMemo, useReducer } from 'react';
import { RouterContext } from './RouterContext';

import { RouterProviderInterface } from './router.types';

export const RouterProvider = function RouterProviderInterface({
  children,
  active,
}: RouterProviderInterface) {
  function reducer(state: string[], action: { type: string; route: string }) {
    switch (action.type) {
      case 'ADD_ROUTE': {
        return [...state, action.route];
      }
      case 'BACK_ROUTE': {
        return state.slice(0, state.length - 1);
      }
      default:
        return state;
    }
  }
  const [history, dispatch] = useReducer(reducer, [active]);
  const route = history[history.length - 1];

  useEffect(() => {
    window.addEventListener('popstate', (e: any) => {
      dispatch({
        type: 'ADD_ROUTE',
        route: e.currentTarget.location.pathname,
      });
    });
  });

  useEffect(() => {
    if (window.location.pathname !== route) {
      window.history.pushState(route, route, route);
    }
  }, [dispatch, route]);

  const context = useMemo(() => ({ history, route, dispatch }), [
    route,
    history,
    dispatch,
  ]);

  return (
    <RouterContext.Provider value={context}>{children}</RouterContext.Provider>
  );
};

RouterProvider.defaultProps = {
  active: window.location.pathname,
};

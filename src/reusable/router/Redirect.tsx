import React from 'react';
import { useRouter } from './RouterContext';

export const Redirect = function Redirect({ to }) {
  const { dispatch } = useRouter();

  React.useEffect(() => {
    // window.history.pushState(to, to, to)
    dispatch({
      type: 'ADD_ROUTE',
      route: to,
    });
  }, [to, dispatch]);

  return null;
};

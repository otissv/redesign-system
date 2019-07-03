import React, { useContext } from 'react';

import { RouterContextInterface } from './router.types';

export const RouterContext = React.createContext<RouterContextInterface>({
  route: '/',
  history: ['/'],
});

export function useRouter() {
  return useContext(RouterContext);
}

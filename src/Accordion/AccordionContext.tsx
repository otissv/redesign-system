import React, { useContext, useMemo, useState } from 'react';

import { AccordionInterface, AccordionContextType } from './accordion.types';

export const AccordionContext = React.createContext<AccordionContextType>({
  active: '',
});

export function useAccordion() {
  return useContext(AccordionContext);
}

export function AccordionProvider({
  animate,
  children,
  active,
}: AccordionInterface) {
  const state = useState(active);

  const context = useMemo(
    () => ({
      active: state[0],
      animate,
      setActiveItem: state[1],
    }),
    [state]
  );
  return (
    <AccordionContext.Provider value={context}>
      {children}
    </AccordionContext.Provider>
  );
}

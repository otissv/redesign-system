import React, { useContext, useMemo, useState } from 'react'

export const AccordionContext = React.createContext({ active: '' })

export function useAccordion() {
  return useContext(AccordionContext)
}

export function AccordionProvider({ animate, children, value }) {
  const state = useState(value)

  const context = useMemo(
    () => ({
      active: state[0],
      animate,
      setActiveItem: state[1],
    }),
    [state]
  )
  return (
    <AccordionContext.Provider value={context}>
      {children}
    </AccordionContext.Provider>
  )
}

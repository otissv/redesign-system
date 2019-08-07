import React, { useContext } from 'react'

import { AccordionContextType } from './accordion.types'

export const AccordionContext = React.createContext<AccordionContextType>({
  active: '',
})

export function useAccordion() {
  return useContext(AccordionContext)
}

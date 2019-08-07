import React, { useMemo, useState } from 'react'

import { AccordionContext } from './AccordionContext'
import { AccordionInterface } from './accordion.types'

export const AccordionProvider = React.memo(function AccordionProvider({
  animate,
  children,
  active,
}: AccordionInterface) {
  const state = useState(active)

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
})

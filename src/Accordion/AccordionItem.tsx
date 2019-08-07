import React, { useContext, useMemo, useState } from 'react'

import {
  AccordionItemInterface,
  AccordionItemContextType,
} from './accordion.types'

import Base from '../Base/Base'
import { accordionItemTheme } from './accordion.theme'

export const AccordionItemContext = React.createContext<
  AccordionItemContextType
>({ uid: '' } as AccordionItemContextType)

export function useAccordionItem() {
  return useContext(AccordionItemContext)
}

export const AccordionItem = React.memo(function AccordionItem({
  children,
  className = '',
  uid,
  themed = [],
  ...propsRest
}: AccordionItemInterface) {
  const classNames = useMemo(() => `AccordionItem ${className}`, [className])
  const _themed = useMemo(() => [accordionItemTheme, ...themed], [
    accordionItemTheme,
    themed,
  ])

  const state = useState(uid)

  const context = useMemo(
    () => ({
      uid: state[0],
    }),
    [uid]
  )

  return (
    <AccordionItemContext.Provider value={context}>
      <Base className={classNames} _themed={_themed} {...propsRest}>
        {children}
      </Base>
    </AccordionItemContext.Provider>
  )
})

export default AccordionItem

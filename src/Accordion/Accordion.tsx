import React, { useMemo } from 'react'

import { AccordionInterface } from './accordion.types'
import { AccordionProvider } from './AccordionProvider'
import Base from '../Base/Base'
import { accordionTheme } from './accordion.theme'

export const Accordion = React.memo(function Accordion({
  active,
  children,
  className = '',
  themed = [],
  ...propsRest
}: AccordionInterface) {
  const classNames = useMemo(() => `Accordion ${className}`, [className])

  const _themed = useMemo(() => [accordionTheme, ...themed], [
    accordionTheme,
    themed,
  ])

  return (
    <AccordionProvider active={active}>
      <Base className={classNames} themed={_themed} {...propsRest}>
        {children}
      </Base>
    </AccordionProvider>
  )
})

export default Accordion

import React, { useMemo } from 'react'

import { AccordionIconInterface } from './accordion.types'

import { Icon } from '../Icon'
import { accordionIconTheme } from './accordion.theme'
import { ChevronRight } from '../MaterialIcons/ChevronRight'

export const AccordionIcon = React.memo(function AccordionIcon({
  children,
  className = '',
  themed = [],
  ...propsRest
}: AccordionIconInterface) {
  const classNames = useMemo(() => `AccordionIcon ${className}`, [className])
  const _themed = useMemo(() => [accordionIconTheme, ...themed], [
    accordionIconTheme,
    ...themed,
  ])

  return (
    <Icon
      className={classNames}
      themed={_themed}
      {...propsRest}
      icon={ChevronRight}
    >
      {children}
    </Icon>
  )
})

export default AccordionIcon

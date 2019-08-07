import React, { useMemo } from 'react'

import Base from '../Base/Base'
import { useCard } from './CardContext'
import { cardFooterTheme, cardFooterContextTheme } from './cardFooter.theme'
import { CardHeaderInterface } from './card.types'

export const CardFooter = React.memo(function CardFooter({
  children,
  className = '',
  themed = [],
  ...propsRest
}: CardHeaderInterface) {
  const card = useCard()
  const classNames = useMemo(() => `CardFooter ${className}`, [className])
  const _themed = useMemo(
    () => [cardFooterTheme, cardFooterContextTheme, ...themed],
    [cardFooterTheme, cardFooterContextTheme, themed]
  )

  return (
    <Base className={classNames} {...card} themed={_themed} {...propsRest}>
      {children}
    </Base>
  )
})

export default CardFooter

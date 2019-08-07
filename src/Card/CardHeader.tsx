import React, { useMemo } from 'react'

import Base from '../Base/Base'
import { useCard } from './CardContext'
import { cardHeaderTheme, cardHeaderContextTheme } from './cardHeader.theme'
import { CardHeaderInterface } from './card.types'

export const CardHeader = React.memo(function CardHeader({
  children,
  className = '',
  themed = [],
  ...propsRest
}: CardHeaderInterface) {
  const card = useCard()
  const classNames = useMemo(() => `CardHeader ${className}`, [className])
  const _themed = useMemo(
    () => [cardHeaderTheme, cardHeaderContextTheme, ...themed],
    [cardHeaderTheme, cardHeaderContextTheme, themed]
  )

  return (
    <Base className={classNames} {...card} themed={_themed} {...propsRest}>
      {children}
    </Base>
  )
})

export default CardHeader

import React, { useMemo } from 'react'

import { Base } from '../Base'
import { CardInterface } from './card.types'

import { cardTheme, cardAppearanceTheme } from './card.theme'
import { CardProvider } from './CardContext'

export const Card = React.memo(function Card({
  children,
  className = '',
  context,
  hover = false,
  size,
  themed = [],
  ...propsRest
}: CardInterface) {
  const classNames = useMemo(() => `Card ${className}`, [className])
  const _themed = useMemo(() => [cardTheme, cardAppearanceTheme, , ...themed], [
    cardTheme,
    cardAppearanceTheme,
    ,
    themed,
  ])

  const value = useMemo(
    () => ({
      context,
      hover,
      size,
    }),
    [context, hover, size]
  )

  return (
    <CardProvider value={value}>
      <Base
        className={classNames}
        themed={_themed}
        context={context}
        hover={hover}
        size={size}
        {...propsRest}
      >
        {children}
      </Base>
    </CardProvider>
  )
})

export default Card

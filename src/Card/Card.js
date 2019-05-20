import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Base from '../Base/Base'

import { setTheme, sharedStyles, isChildrenFunction } from '../utils'
import { cardTheme, cardContextTheme, cardSizeTheme } from './card.theme'
import { useCard } from './CardContext'
import { CardProvider } from './CardContext'

const CardStyled = styled.div`
  ${cardTheme};
  ${cardContextTheme}
  ${cardSizeTheme}
  ${sharedStyles};
  ${props => props.styled};
`

export const Card = React.memo(function Card({
  children,
  className,
  context,
  hover,
  size,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Card ${className || ''}`
  const themed = useMemo(
    () => [cardTheme, cardContextTheme, cardSizeTheme, ...propsThemed],
    [cardTheme, cardContextTheme, cardSizeTheme, propsThemed]
  )

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
        themed={themed}
        context={context}
        hover={hover}
        size={size}
        {...propsRest}>
        {children}
      </Base>
    </CardProvider>
  )
})

Card.defaultProps = {
  hover: false,
  themed: [],
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  context: PropTypes.oneOf([
    'accent',
    'action',
    'danger',
    'success',
    'warning',
  ]),
  hover: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large', 'collapse']),
  themed: PropTypes.array,
}

export default Card

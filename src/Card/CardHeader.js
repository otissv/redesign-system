import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Base from '../Base/Base'
import { useCard } from './CardContext'
import {
  cardHeaderTheme,
  cardHeaderContextTheme,
  cardHeaderSizeTheme,
} from './cardHeader.theme'

export const CardHeader = React.memo(function CardHeader({
  children,
  className,
  themed: propsThemed,
  ...propsRest
}) {
  const card = useCard()
  const classNames = `CardHeader ${className || ''}`
  const themed = useMemo(
    () => [cardHeaderTheme, cardHeaderContextTheme, ...propsThemed],
    [cardHeaderTheme, cardHeaderContextTheme, propsThemed]
  )

  return (
    <Base className={classNames} {...card} themed={themed} {...propsRest}>
      {children}
    </Base>
  )
})

CardHeader.defaultProps = {
  themed: [],
}

CardHeader.propTypes = {
  children: PropTypes.node,
  context: PropTypes.oneOf([
    'accent',
    'action',
    'danger',
    'primary',
    'success',
    'warning',
  ]),
  size: PropTypes.oneOf(['collapse', 'small', 'large']),
  themed: PropTypes.array,
}

export default CardHeader

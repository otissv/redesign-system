import React, { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Base from '../Base/Base'
import { useCard } from './CardContext'
import { cardFooterTheme, cardFooterContextTheme } from './cardFooter.theme'

export const CardFooter = React.memo(function CardFooter({
  children,
  className,
  themed: propsThemed,
  ...propsRest
}) {
  const card = useCard()
  const classNames = `CardFooter ${className || ''}`
  const themed = useMemo(
    () => [cardFooterTheme, cardFooterContextTheme, ...propsThemed],
    [cardFooterTheme, cardFooterContextTheme, propsThemed]
  )

  return (
    <Base className={classNames} {...card} themed={themed} {...propsRest}>
      {children}
    </Base>
  )
})

CardFooter.defaultProps = {
  themed: [],
}

CardFooter.propTypes = {
  children: PropTypes.node,
  context: PropTypes.oneOf([
    'accent',
    'danger',
    'ghost',
    'primary',
    'success',
    'warning',
  ]),
  size: PropTypes.oneOf(['collapse', 'small', 'large']),
  themed: PropTypes.array,
}

export default CardFooter

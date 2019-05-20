import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { flexTheme, flexDirectionTheme } from './flex.theme'
import Base from '../Base/Base'

export const Flex = React.memo(function Flex({
  children,
  className,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Flex ${className || ''}`
  const themed = useMemo(
    () => [flexTheme, flexDirectionTheme, ...propsThemed],
    [flexTheme, flexDirectionTheme, propsThemed]
  )

  return (
    <Base className="Flex" themed={themed} {...propsRest}>
      {children}
    </Base>
  )
})

Flex.defaultProps = {
  themed: [],
}

Flex.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string,
  alignItems: PropTypes.oneOf([
    'center',
    'flexEnd',
    'flexStart',
    'stretch',
    'spaceAround',
    'spaceEvenly',
    'spaceBetween',
  ]),
  justifyItems: PropTypes.oneOf([
    'center',
    'flexEnd',
    'flexStart',
    'stretch',
    'spaceAround',
    'spaceEvenly',
    'spaceBetween',
  ]),
  direction: PropTypes.oneOf(['row', 'rowReverse', 'column', 'columnReverse']),
  flow: PropTypes.string,
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrapReverse']),
  justifyContent: PropTypes.oneOf([
    'center',
    'flexEnd',
    'flexStart',
    'spaceAround',
    'spaceBetween',
    'spaceEvenly',
    'stretch',
  ]),
  alignContent: PropTypes.oneOf([
    'center',
    'flexEnd',
    'flexStart',
    'spaceAround',
    'spaceBetween',
    'spaceEvenly',
    'stretch',
  ]),
  themed: PropTypes.array,
  // grow: PropTypes.number,
  // shrink: PropTypes.number,
  // basis: PropTypes.number,
}

export default Flex

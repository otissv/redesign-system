import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { containerContextTheme } from './container.theme'
import Base from '../Base/Base'

export const Container = React.memo(function Container({
  children,
  className,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Container ${className || ''}`
  const themed = useMemo(() => [containerContextTheme, ...propsThemed], [
    containerContextTheme,
    propsThemed,
  ])

  return (
    <Base className={classNames} themed={themed} {...propsRest}>
      {children}
    </Base>
  )
})

Container.defaultProps = {
  themed: [],
}

Container.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string,
  themed: PropTypes.array,
  context: PropTypes.oneOf([
    'accent',
    'primary',
    'success',
    'warning',
    'danger',
  ]),
}

export default Container

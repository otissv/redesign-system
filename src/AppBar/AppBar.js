import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'
import { appBarTheme, appBarAppearanceTheme } from './appBar.theme'

export const AppBar = React.memo(function AppBar({
  children,
  className,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `AppBar ${className || ''}`
  const themed = useMemo(
    () => [appBarTheme, appBarAppearanceTheme, ...propsThemed],
    [appBarTheme, appBarAppearanceTheme, propsThemed]
  )

  return (
    <Base
      className={classNames}
      themed={themed}
      aria-orientation="horizontal"
      {...propsRest}>
      {children}
    </Base>
  )
})

AppBar.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf([
    'accent',
    'action',
    'danger',
    'success',
    'warning',
  ]),
  position: PropTypes.oneOf([
    'fixed',
    'absolute',
    'sticky',
    'static',
    'relative',
  ]),
  themed: PropTypes.array,
}

AppBar.defaultProps = {
  position: 'static',
  themed: [],
}

export default AppBar

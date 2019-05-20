import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'
import { badgeTheme, badgeContextTheme, badgePillTheme } from './badge.theme'

export const Badge = React.memo(function Badge({
  children,
  className,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Badge ${className || ''}`
  const themed = useMemo(
    () => [badgeTheme, badgeContextTheme, badgePillTheme, ...propsThemed],
    [badgeTheme, badgeContextTheme, badgePillTheme, propsThemed]
  )

  return (
    <Base className={classNames} themed={themed} {...propsRest}>
      {children}
    </Base>
  )
})

Badge.defaultProps = {
  themed: [],
}

Badge.propTypes = {
  children: PropTypes.node,
  context: PropTypes.oneOf([
    'accent',
    'action',
    'success',
    'warning',
    'danger',
  ]),
  onClose: PropTypes.func,
  themed: PropTypes.array,
}

export default Badge

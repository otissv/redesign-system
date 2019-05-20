import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'

import { sharedStyles } from '../utils'
import { ThemeContext } from '../ThemeContext'
import { buttonIconTheme } from './buttonIcon.theme'
import Button from '../Button/Button'

export const ButtonIcon = React.memo(function ButtonIcon({
  children,
  className,
  icon,
  onClick,
  themed: propsThemed,
  title,
  uid,
  ...propsRest
}) {
  const classNames = `ButtonIcon ${className || ''}`
  const themed = useMemo(() => [buttonIconTheme, ...propsThemed], [
    buttonIconTheme,
    propsThemed,
  ])

  const Component = icon

  return (
    <Button
      className={classNames}
      data-uid={uid}
      onClick={onClick}
      themed={themed}
      {...propsRest}>
      <Component />
      <span>{children}</span>
    </Button>
  )
})

ButtonIcon.defaultProps = {
  themed: [],
}

ButtonIcon.propTypes = {
  // icon: PropTypes.node.isRequired,
  size: PropTypes.string,
  themed: PropTypes.array,
}

export default ButtonIcon

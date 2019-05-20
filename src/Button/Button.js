import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'

import {
  buttonTheme,
  buttonSizeTheme,
  buttonStretchTheme,
  buttonAppearanceTheme,
} from './button.theme'

export const Button = React.memo(function Button({
  children,
  className,
  onClick,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Button ${className || ''}`
  const themed = useMemo(
    () => [
      buttonTheme,
      buttonAppearanceTheme,
      buttonSizeTheme,
      buttonStretchTheme,
      ...propsThemed,
    ],
    [
      buttonTheme,
      buttonAppearanceTheme,
      buttonSizeTheme,
      buttonStretchTheme,
      propsThemed,
    ]
  )

  function handleOnClick(e) {
    e.preventDefault()
    onClick && onClick(e)
  }

  // console.log(propsRest.stretch)
  const appearance = {
    ...(propsRest.appearance === 'disabled' ||
    propsRest.appearance === 'primary-disabled' ||
    propsRest.appearance === 'secondary-disabled' ||
    propsRest.appearance === 'tertiary-disabled'
      ? 'aria-disabled'
      : {}),
  }

  return (
    <Base
      el="button"
      className={classNames}
      themed={themed}
      onClick={handleOnClick}
      role="button"
      tabIndex={0}
      {...propsRest}>
      {children}
    </Base>
  )
})

Button.defaultProps = {
  themed: [],
}

Button.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',

    'accent',
    'primary-accent',
    'secondary-accent',
    'tertiary-accent',

    'action',
    'primary-action',
    'secondary-action',
    'tertiary-action',

    'danger',
    'primary-danger',
    'secondary-danger',
    'tertiary-danger',

    'success',
    'primary-success',
    'secondary-success',
    'tertiary-success',

    'warning',
    'primary-warning',
    'secondary-warning',
    'tertiary-warning',

    'disabled',
    'primary-disabled',
    'secondary-disabled',
    'tertiary-disabled',
  ]),
  size: PropTypes.oneOf(['small', 'large']),
  stretch: PropTypes.bool,
  themed: PropTypes.array,
}

export default Button

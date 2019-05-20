import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'
import { buttonGroupTheme, buttonStretchGroupTheme } from './buttonGroup.theme'

export const ButtonGroupContext = React.createContext({})

export function useButtonGroup() {
  return useContext(ButtonGroupContext)
}

export const ButtonGroup = React.memo(function ButtonGroup({
  children,
  className,
  onClick,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `ButtonGroup ${className || ''}`
  const themed = useMemo(
    () => [buttonGroupTheme, buttonStretchGroupTheme, ...propsThemed],
    [buttonGroupTheme, buttonStretchGroupTheme, propsThemed]
  )

  const { appearance, context, size, stretch } = propsRest
  const value = useMemo(() => ({ appearance, context, size, stretch }), [
    appearance,
    context,
    size,
    stretch,
  ])

  return (
    <ButtonGroupContext.Provider value={value}>
      <Base role="group" className={classNames} themed={themed} {...propsRest}>
        {children}
      </Base>
    </ButtonGroupContext.Provider>
  )
})

ButtonGroup.defaultProps = {
  themed: [],
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',

    'accent',
    'primary-accent',
    'secondary-accent',
    'tertiary-accent',

    'primary-action',
    'accent',
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

export default ButtonGroup

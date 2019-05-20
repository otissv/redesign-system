import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import { useButtonGroup } from './ButtonGroup'

export const ButtonGroupButton = React.memo(function ButtonGroupButton({
  children,
  className,
  themed,
  ...propsRest
}) {
  const buttonGroup = useButtonGroup()
  const classNames = `ButtonGroupButton ${className || ''}`

  return (
    <Button {...buttonGroup} themed={themed} {...propsRest}>
      {children}
    </Button>
  )
})

ButtonGroupButton.propTypes = {
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

export default ButtonGroupButton

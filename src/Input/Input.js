import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

import Base from '../Base/Base'
import {
  inputTheme,
  inputAppearanceTheme,
  inputSizeTheme,
  inputWidthsTheme,
} from './input.theme'

export const Input = React.memo(function Input({
  children,
  className,
  valid,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Input ${className || ''}`
  const themed = useMemo(
    () => [
      inputTheme,
      inputAppearanceTheme,
      inputSizeTheme,
      inputWidthsTheme,
      ...propsThemed,
    ],
    [
      inputTheme,
      inputAppearanceTheme,
      inputSizeTheme,
      inputWidthsTheme,
      propsThemed,
    ]
  )
  const isDisabled =
    propsRest.appearance === 'disabled' ||
    propsRest.appearance === 'primary-disabled' ||
    propsRest.appearance === 'secondary-disabled' ||
    propsRest.appearance === 'tertiary-disabled'

  return (
    <Base
      el="input"
      className={classNames}
      themed={themed}
      disabled={isDisabled}
      aria-invalid={valid}
      {...propsRest}>
      {children}
    </Base>
  )
})

Input.propTypes = {
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',

    'primary-accent',
    'secondary-accent',
    'tertiary-accent',

    'primary-action',
    'secondary-action',
    'tertiary-action',

    'primary-danger',
    'secondary-danger',
    'tertiary-danger',

    'primary-success',
    'secondary-success',
    'tertiary-success',

    'primary-warning',
    'secondary-warning',
    'tertiary-warning',

    'primary-disabled',
    'secondary-disabled',
    'tertiary-disabled',
  ]),
  innerRef: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  styled: PropTypes.string,
  valid: PropTypes.bool,
  value: PropTypes.string,
  widths: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
}

Input.defaultProps = {
  context: null,
  onBlur: e => {},
  onChange: () => {},
  onFocus: e => {},
  placeholder: null,
  size: null,
  themed: [],
  valid: true,
  widths: null,
}

export default Input

import React, { useMemo } from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'
import { inputGroupTheme } from './inputGroup.theme'
import {
  inputAppearanceTheme,
  inputSizeTheme,
  inputWidthsTheme,
} from './input.theme'

export const InputGroup = React.memo(function InputGroup({
  children,
  className,
  valid,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `InputGroup ${className || ''}`
  const themed = useMemo(
    () => [
      inputAppearanceTheme,
      inputSizeTheme,
      inputWidthsTheme,
      inputGroupTheme,
      ...propsThemed,
    ],
    [inputGroupTheme, inputAppearanceTheme, inputSizeTheme, inputWidthsTheme]
  )

  return (
    <Base role="group" className={classNames} themed={themed}>
      {children}
    </Base>
  )
})

InputGroup.defaultProps = {
  themed: [],
}

export default InputGroup

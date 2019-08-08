import React, { useMemo } from 'react'

import { Base } from '../Base'
import {
  inputTheme,
  inputAppearanceTheme,
  inputSizeTheme,
  inputWidthsTheme,
} from './input.theme'
import { InputInterface } from './input.types'

export const Input = React.memo(function Input({
  children,
  className = '',
  onChange,
  placeholder = null,
  size = null,
  themed = [],
  valid = true,
  widths = null,
  ...propsRest
}: InputInterface) {
  const classNames = useMemo(() => `Input ${className}`, [className])
  const _themed = useMemo(
    () => [
      inputTheme,
      inputAppearanceTheme,
      inputSizeTheme,
      inputWidthsTheme,
      ...themed,
    ],
    [inputTheme, inputAppearanceTheme, inputSizeTheme, inputWidthsTheme, themed]
  )
  const isDisabled = useMemo(
    () =>
      propsRest.appearance === 'disabled' ||
      propsRest.appearance === 'primary-disabled' ||
      propsRest.appearance === 'secondary-disabled' ||
      propsRest.appearance === 'tertiary-disabled',
    [propsRest.appearance]
  )

  const props = {
    onChange,
    placeholder,
    size,
    widths,
    ...propsRest,
  }

  return (
    <Base
      as="input"
      className={classNames}
      themed={_themed}
      disabled={isDisabled}
      aria-invalid={valid}
      {...props}
    >
      {children}
    </Base>
  )
})

export default Input

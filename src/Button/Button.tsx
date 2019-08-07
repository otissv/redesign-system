import React, { useCallback, useMemo } from 'react'
import { ButtonInterface } from './button.types'

import { Base } from '../Base'

import {
  buttonTheme,
  buttonSizeTheme,
  buttonStretchTheme,
  buttonAppearanceTheme,
} from './button.theme'

export const Button = React.memo(function Button({
  children,
  className = '',
  onClick,
  as: el = 'button',
  themed: themed = [],
  ...propsRest
}: ButtonInterface) {
  const classNames = useMemo(() => `Button ${className}`, [className])

  const { disabled, appearance } = propsRest

  const _themed = useMemo(
    () => [
      buttonTheme,
      buttonAppearanceTheme,
      buttonSizeTheme,
      buttonStretchTheme,
      ...themed,
    ],
    [
      buttonTheme,
      buttonAppearanceTheme,
      buttonSizeTheme,
      buttonStretchTheme,
      themed,
    ]
  )

  const handleOnClick = useCallback(
    function handleOnClick(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()

      onClick && onClick(e)
    },
    [onClick]
  )

  return (
    <Base
      as={el}
      className={classNames}
      themed={_themed}
      onClick={handleOnClick}
      role="button"
      tabIndex={0}
      {...(disabled ||
      appearance === 'disabled' ||
      appearance === 'primary-disabled' ||
      appearance === 'secondary-disabled' ||
      appearance === 'tertiary-disabled'
        ? { disabled: true }
        : {})}
      {...propsRest}
    >
      {children}
    </Base>
  )
})

export default Button

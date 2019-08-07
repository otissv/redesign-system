import React, { useMemo } from 'react'

import { ErrorMessageInterface } from './errorMessage.types'
import { Base } from '../Base'

import {
  errorMessageTheme,
  errorMessageAppearanceTheme,
} from './errorMessage.theme'

export const ErrorMessage = React.memo(function ErrorMessage({
  children,
  className = '',
  themed = [],
  ...propsRest
}: ErrorMessageInterface) {
  const classNames = useMemo(() => `ErrorMessage ${className}`, [className])
  const _themed = useMemo(
    () => [errorMessageTheme, errorMessageAppearanceTheme, ...themed],
    [errorMessageTheme, errorMessageAppearanceTheme, themed]
  )

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      {children}
    </Base>
  )
})

export default ErrorMessage

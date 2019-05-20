import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'
import {
  errorMessageTheme,
  errorMessageAppearanceTheme,
} from './errorMessage.theme'

export const ErrorMessage = React.memo(function ErrorMessage({
  children,
  className,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `CardFooter ${className || ''}`
  const themed = useMemo(
    () => [errorMessageTheme, errorMessageAppearanceTheme, ...propsThemed],
    [errorMessageTheme, errorMessageAppearanceTheme, propsThemed]
  )

  return (
    <Base className={classNames} themed={themed} {...propsRest}>
      {children}
    </Base>
  )
})

ErrorMessage.defaultProps = {
  themed: [],
}

ErrorMessage.propTypes = {
  themed: PropTypes.array,
}
export default ErrorMessage

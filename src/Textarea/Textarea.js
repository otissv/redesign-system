import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'

import {
  textareaTheme,
  textareaAppearanceTheme,
  textareaWidthsTheme,
} from './textarea.theme'

export const Textarea = React.memo(function Textarea({
  children,
  className,
  ...propsRest
}) {
  const classNames = `Textarea ${className || ''}`
  const themed = useMemo(
    () => [textareaTheme, textareaAppearanceTheme, textareaWidthsTheme],
    [textareaTheme, textareaAppearanceTheme, textareaWidthsTheme]
  )

  return (
    <Base
      el="textarea"
      className={classNames}
      themed={themed}
      disabled={propsRest.appearance === 'disabled'}
      {...propsRest}>
      {children}
    </Base>
  )
})

Textarea.propTypes = {
  active: PropTypes.bool,
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'accent',
    'action',
    'danger',
    'success',
    'warning',
    'disabled',
  ]),
  widths: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
}

export default Textarea

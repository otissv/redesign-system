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
  widths: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
}

export default Textarea

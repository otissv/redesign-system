import React, { useMemo } from 'react'
import { TextAreaInterface } from './textarea.types'

import { Base } from '../Base'

import {
  textareaTheme,
  textareaAppearanceTheme,
  textareaWidthsTheme,
} from './textarea.theme'

export const Textarea = React.memo(function Textarea({
  children,
  className = '',
  themed = [],
  ...propsRest
}: TextAreaInterface) {
  const classNames = useMemo(() => `Textarea ${className}`, [className])
  const _themed = useMemo(
    () => [
      textareaTheme,
      textareaAppearanceTheme,
      textareaWidthsTheme,
      ...themed,
    ],
    [textareaTheme, textareaAppearanceTheme, textareaWidthsTheme, themed]
  )

  return (
    <Base
      as="textarea"
      className={classNames}
      themed={_themed}
      disabled={propsRest.appearance === 'disabled'}
      {...propsRest}
    >
      {children}
    </Base>
  )
})

export default Textarea

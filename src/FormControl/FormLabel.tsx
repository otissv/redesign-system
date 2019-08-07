import React, { useMemo } from 'react'

import { Base } from '../Base'
import { formLabelTheme } from './form-label.theme'
import { FormLabelInterface } from '../Form'

export const FormLabel = React.memo(function FormLabel({
  className = '',
  children,
  id,
  themed = [],
  ...propsRest
}: FormLabelInterface) {
  const classNames = useMemo(() => `FormLabel ${className}`, [className])
  const _themed = useMemo(() => [formLabelTheme, ...themed], [
    formLabelTheme,
    themed,
  ])

  return (
    <Base
      key={id}
      htmlFor={id}
      className={classNames}
      themed={_themed}
      {...propsRest}
    >
      {children}
    </Base>
  )
})

export default FormLabel

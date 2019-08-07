import React, { useMemo } from 'react'

import { FormLabel } from './FormLabel'
import { formControlTheme } from './form-control.theme'
import { Textarea } from '../Textarea'
import { Typography } from '../Typography'
import { FormControlInterface } from '../Form'
import { Base } from '../Base'
import { FormValidation } from './FormValidation'

export const FormTextareaControl = React.memo(function FormTextareaControl({
  className = '',
  id,
  label,
  parent,
  field,
  attributes,
  model,
  themed = [],
  ...propsRest
}: FormControlInterface) {
  const classNames = useMemo(() => `FormTextareaControl ${className}`, [
    className,
  ])
  const _themed = useMemo(() => [formControlTheme, ...themed], [
    formControlTheme,
    themed,
  ])

  const { description, isValid } = field
  const { appearance, value, ...attributesRest } = attributes

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      <FormLabel key={id} id={id}>
        {label}
      </FormLabel>
      <Textarea
        id={id}
        data-parent={parent}
        value={value}
        {...attributesRest}
        {...propsRest}
        name={id}
        appearance={!isValid ? 'error' : appearance}
        valid={isValid}
      />

      {description && (
        <Typography marginTop={1} styled="color: #a0a0a0;">
          {description}
        </Typography>
      )}

      <FormValidation attributes={attributes} field={field} model={model} />
    </Base>
  )
})

export default FormTextareaControl

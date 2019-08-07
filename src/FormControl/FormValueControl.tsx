import React, { useMemo } from 'react'

import { formControlTheme } from './form-control.theme'
import { Input } from '../Input'
import { FormLabel } from './FormLabel'
import { Typography } from '../Typography'
import { FormControlInterface } from '../Form'
import { Base } from '../Base'
import { FormValidation } from './FormValidation'

export const FormValueControl = React.memo(function FormValueControl({
  className = '',
  attributes = [],
  field,
  id,
  label,
  labelProps,
  parent,
  model,
  themed = [],
  ...propsRest
}: FormControlInterface) {
  const classNames = useMemo(() => `FormValueControl ${className}`, [className])
  const _themed = useMemo(() => [formControlTheme, ...themed], [
    formControlTheme,
    themed,
  ])

  const { appearance, value, ...attributesRest } = attributes
  const { description, isValid } = field

  const labelComponent = useMemo(
    () =>
      label ? (
        <FormLabel {...labelProps} id={id}>
          {label}
        </FormLabel>
      ) : null,
    [labelProps, label]
  )

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      {labelComponent}
      <Input
        id={id}
        data-parent={parent}
        value={value || ''}
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
      <FormValidation
        attributes={{ ...attributes, name: id }}
        field={field}
        model={model}
      />
    </Base>
  )
})

export default FormValueControl

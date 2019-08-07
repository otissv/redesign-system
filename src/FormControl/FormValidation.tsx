import React from 'react'
import { FormValidationInterface } from '../Form'

import { FormErrorMessage } from './FormErrorMessage'

export const FormValidation = React.memo(function FormValidation({
  attributes,
  field,
  model,
}: FormValidationInterface) {
  const { validate, isValid } = field

  switch (true) {
    case !isValid && !!validate: {
      return (
        <FormErrorMessage message={validate({ ...field, attributes }, model)} />
      )
    }

    case !isValid && !validate && attributes.required: {
      return <FormErrorMessage message="Please fill in this field." />
    }
    default:
      return null
  }
})

export default FormValidation

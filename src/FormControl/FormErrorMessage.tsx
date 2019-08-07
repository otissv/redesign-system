import React, { useMemo } from 'react'

import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { FormErrorMessageInterface } from '../Form'

export const FormErrorMessage = React.memo(function FormErrorMessage({
  className,
  message,
}: FormErrorMessageInterface) {
  const classNames = useMemo(() => `FormErrorMessage ${className}`, [className])

  return <ErrorMessage className={classNames}>{message}</ErrorMessage>
})

export default FormErrorMessage

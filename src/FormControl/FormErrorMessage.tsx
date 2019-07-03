import React from 'react';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { FormErrorMessageInterface } from '../Form';

export const FormErrorMessage = function FormErrorMessage({
  message,
}: FormErrorMessageInterface) {
  return <ErrorMessage className="FormErrorMessage">{message}</ErrorMessage>;
};

export default FormErrorMessage;

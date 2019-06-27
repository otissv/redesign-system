import React from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { FormErrorMessageInterface } from '../Form';

export function FormErrorMessage({ message }: FormErrorMessageInterface) {
  return <ErrorMessage className="FormErrorMessage">{message}</ErrorMessage>;
}

FormErrorMessage.protoType = {
  message: PropTypes.string,
};

export default FormErrorMessage;

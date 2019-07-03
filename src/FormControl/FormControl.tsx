import React from 'react';
import { FormValueControl } from './FormValueControl';
import { FormCheckedControl } from './FormCheckedControl';
import { FormTextareaControl } from './FormTextareaControl';
import { FormControlInterface } from '../Form';

export const FormControl = function FormControl(props: FormControlInterface) {
  function getType(type: string) {
    switch (type) {
      case 'text':
        return 'text';
      case 'checkbox':
        return 'boolean';
      case 'radio':
        return 'boolean';
      case 'number':
        return 'text';
      case 'textarea':
        return 'textarea';
      case 'textarea':
        return 'textarea';
      default:
        return 'text';
    }
  }
  const type = getType(props.attributes.type);

  return {
    text: () => <FormValueControl {...props} />,
    boolean: () => <FormCheckedControl {...props} />,
    textarea: () => <FormTextareaControl {...props} />,
  }[type]();
};

FormControl.defaultProps = {
  themed: [],
};

export default FormControl;

import React from 'react';

import { formControlTheme } from './form-control.theme';
import { Input } from '../Input';
import { FormLabel } from './FormLabel';
import { Typography } from '../Typography';
import { FormControlInterface } from '../Form';
import { Base } from '../Base';
import { FormValidation } from './FormValidation';

export const FormValueControl = function FormValueControl({
  className,
  attributes,
  field,
  id,
  label,
  labelProps,
  parent,
  model,
  themed,
  ...propsRest
}: FormControlInterface) {
  const classNames = `FormValueControl ${className}`;
  const _themed = React.useMemo(() => [formControlTheme, ...themed], [
    formControlTheme,
    themed,
  ]);

  const { appearance, value, ...attributesRest } = attributes;
  const { description, isValid } = field;

  const labelComponent = label ? (
    <FormLabel {...labelProps} id={id}>
      {label}
    </FormLabel>
  ) : null;

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
  );
};

FormValueControl.defaultProps = {
  className: '',
  themed: [],
  attributes: {},
};

export default FormValueControl;

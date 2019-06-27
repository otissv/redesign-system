import React from 'react';

import { formControlTheme } from './form-control.theme';
import { FormLabel } from './FormLabel';
import { Typography } from '../Typography';
import { FormControlInterface } from '../Form';
import { Base } from '../Base';
import { FormValidation } from './FormValidation';

export function CheckBox({
  valid,
  ...props
}: {
  valid: false;
  [key: string]: any;
}) {
  return <input {...props} />;
}

export function FormCheckedControl({
  attributes,
  className,
  field,
  id,
  label,
  labelProps,
  model,
  parent,
  themed,
  ...propsRest
}: FormControlInterface) {
  const classNames = `FormCheckedControl ${className}`;
  const _themed = React.useMemo(() => [formControlTheme, ...themed], [
    formControlTheme,
    themed,
  ]);

  const { description, isValid } = field;
  const { appearance, checked, ...attributesRest } = attributes;

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      <FormLabel id={id} {...labelProps}>
        <CheckBox
          id={id}
          data-parent={parent}
          checked={checked || false}
          {...attributesRest}
          {...propsRest}
          appearance={!isValid ? 'error' : appearance}
          valid={isValid}
        />
        {label}
      </FormLabel>

      {description && (
        <Typography marginTop={1} styled="color: #a0a0a0;">
          {description}
        </Typography>
      )}

      <FormValidation attributes={attributes} field={field} model={model} />
    </Base>
  );
}

FormCheckedControl.defaultProps = {
  className: '',
  themed: [],
};

export default FormCheckedControl;

import React from 'react';

import { Base } from '../Base';
import { formLabelTheme } from './form-label.theme';
import { FormLabelInterface } from '../Form';

export const FormLabel = function FormLabel({
  className,
  children,
  id,
  themed,
  ...propsRest
}: FormLabelInterface) {
  const classNames = `FormLabel ${className}`;
  const _themed = React.useMemo(() => [formLabelTheme, ...themed], [
    formLabelTheme,
    themed,
  ]);

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
  );
};

FormLabel.defaultProps = {
  className: '',
  themed: [],
};

export default FormLabel;

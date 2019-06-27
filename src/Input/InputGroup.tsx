import React, { useMemo } from 'react';

import { InputInterface } from './input.types';
import Base from '../Base/Base';
import { inputGroupTheme } from './inputGroup.theme';
import {
  inputAppearanceTheme,
  inputSizeTheme,
  inputWidthsTheme,
} from './input.theme';

export function InputGroup({
  children,
  className,
  valid,
  themed,
  ...propsRest
}: InputInterface) {
  const classNames = `InputGroup ${className}`;
  const _themed = useMemo(
    () => [
      inputAppearanceTheme,
      inputSizeTheme,
      inputWidthsTheme,
      inputGroupTheme,
      ...themed,
    ],
    [
      inputGroupTheme,
      inputAppearanceTheme,
      inputSizeTheme,
      inputWidthsTheme,
      themed,
    ]
  );

  return (
    <Base role="group" className={classNames} themed={_themed} {...propsRest}>
      {children}
    </Base>
  );
}

InputGroup.defaultProps = {
  className: '',
  themed: [],
};

export default InputGroup;

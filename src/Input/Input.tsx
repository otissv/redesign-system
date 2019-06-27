import React, { useMemo } from 'react';

import { Base } from '../Base';
import {
  inputTheme,
  inputAppearanceTheme,
  inputSizeTheme,
  inputWidthsTheme,
} from './input.theme';
import { InputInterface } from './input.types';

export const Input = function Input({
  children,
  className,
  valid,
  themed,
  ...propsRest
}: InputInterface) {
  const classNames = `Input ${className}`;
  const _themed = useMemo(
    () => [
      inputTheme,
      inputAppearanceTheme,
      inputSizeTheme,
      inputWidthsTheme,
      ...themed,
    ],
    [inputTheme, inputAppearanceTheme, inputSizeTheme, inputWidthsTheme, themed]
  );
  const isDisabled =
    propsRest.appearance === 'disabled' ||
    propsRest.appearance === 'primary-disabled' ||
    propsRest.appearance === 'secondary-disabled' ||
    propsRest.appearance === 'tertiary-disabled';

  return (
    <Base
      as="input"
      className={classNames}
      themed={_themed}
      disabled={isDisabled}
      aria-invalid={valid}
      {...propsRest}
    >
      {children}
    </Base>
  );
};

Input.defaultProps = {
  className: '',
  context: null,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  placeholder: null,
  size: null,
  themed: [],
  valid: true,
  widths: null,
};

export default Input;

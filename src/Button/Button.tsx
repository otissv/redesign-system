import React, { useMemo } from 'react';
import { ButtonInterface } from './button.types';

import { Base } from '../Base';

import {
  buttonTheme,
  buttonSizeTheme,
  buttonStretchTheme,
  buttonAppearanceTheme,
} from './button.theme';

export const Button = function Button({
  children,
  className,
  onClick,
  themed: themed,
  ...propsRest
}: ButtonInterface) {
  const classNames = `Button ${className}`;

  const { disabled, appearance } = propsRest;

  const _themed = useMemo(
    () => [
      buttonTheme,
      buttonAppearanceTheme,
      buttonSizeTheme,
      buttonStretchTheme,
      ...themed,
    ],
    [
      buttonTheme,
      buttonAppearanceTheme,
      buttonSizeTheme,
      buttonStretchTheme,
      themed,
    ]
  );

  function handleOnClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    onClick && onClick(e);
  }

  return (
    <Base
      as="button"
      className={classNames}
      themed={_themed}
      onClick={handleOnClick}
      role="button"
      tabIndex={0}
      {...(disabled ||
      appearance === 'disabled' ||
      appearance === 'primary-disabled' ||
      appearance === 'secondary-disabled' ||
      appearance === 'tertiary-disabled'
        ? { disabled: true }
        : {})}
      {...propsRest}
    >
      {children}
    </Base>
  );
};

Button.defaultProps = {
  className: '',
  themed: [],
};

export default Button;

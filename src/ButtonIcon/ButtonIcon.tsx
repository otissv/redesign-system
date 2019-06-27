import React, { useMemo } from 'react';

import { buttonIconTheme } from './buttonIcon.theme';
import Button from '../Button/Button';
import { ButtonIconInterface } from './buttonIcon.types';

export function ButtonIcon({
  alt,
  children,
  className,
  icon: Component,
  onClick,
  themed,
  title,
  uid,
  ...propsRest
}: ButtonIconInterface) {
  const classNames = `ButtonIcon ${className}`;
  const _themed = useMemo(() => [buttonIconTheme, ...themed], [
    buttonIconTheme,
    themed,
  ]);

  return (
    <Button
      className={classNames}
      data-uid={uid}
      onClick={onClick}
      themed={_themed}
      {...propsRest}
    >
      <Component alt={alt} />
      {children ? <span className="ButtonIconContent">{children}</span> : null}
    </Button>
  );
}

ButtonIcon.defaultProps = {
  height: '24px',
  themed: [],
  viewBox: '0 0 24 24',
  width: '24px',
  className: '',
};

export default ButtonIcon;

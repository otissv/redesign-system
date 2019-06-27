import React from 'react';

import Button from '../Button/Button';
import { useButtonGroup } from './ButtonGroup';
import { ButtonGroupButtonInterface } from './buttonGroup.types';

export const ButtonGroupButton = function ButtonGroupButton({
  children,
  className,
  themed,
  ...propsRest
}: ButtonGroupButtonInterface) {
  const buttonGroup = useButtonGroup();
  const classNames = `ButtonGroupButton ${className || ''}`;

  return (
    <Button
      className={classNames}
      {...buttonGroup}
      themed={themed}
      {...propsRest}
    >
      {children}
    </Button>
  );
};

export default ButtonGroupButton;

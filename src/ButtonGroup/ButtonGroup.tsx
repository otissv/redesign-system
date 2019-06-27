import React, { useContext, useMemo } from 'react';

import Base from '../Base/Base';
import { buttonGroupTheme, buttonStretchGroupTheme } from './buttonGroup.theme';
import { ButtonGroupInterface } from './buttonGroup.types';

export const ButtonGroupContext = React.createContext({});

export function useButtonGroup() {
  return useContext(ButtonGroupContext);
}

export const ButtonGroup = function ButtonGroup({
  children,
  className,
  onClick,
  themed: propsThemed,
  ...propsRest
}: ButtonGroupInterface) {
  const classNames = `ButtonGroup ${className}`;
  const themed = useMemo(
    () => [buttonGroupTheme, buttonStretchGroupTheme, ...propsThemed],
    [buttonGroupTheme, buttonStretchGroupTheme, propsThemed]
  );

  const { appearance, context, size, stretch } = propsRest;
  const value = useMemo(() => ({ appearance, context, size, stretch }), [
    appearance,
    context,
    size,
    stretch,
  ]);

  return (
    <ButtonGroupContext.Provider value={value}>
      <Base role="group" className={classNames} themed={themed} {...propsRest}>
        {children}
      </Base>
    </ButtonGroupContext.Provider>
  );
};

ButtonGroup.defaultProps = {
  className: '',
  themed: [],
};

export default ButtonGroup;

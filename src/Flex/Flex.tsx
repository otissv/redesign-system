import React, { useMemo } from 'react';

import { flexTheme, flexDirectionTheme } from './flex.theme';
import { Base } from '../Base';
import { FlexInterface } from './flex.types';

export const Flex = function Flex({
  children,
  className,
  themed,
  ...propsRest
}: FlexInterface) {
  const classNames = `Flex ${className}`;
  const _themed = useMemo(() => [flexTheme, flexDirectionTheme, ...themed], [
    flexTheme,
    flexDirectionTheme,
    themed,
  ]);

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      {children}
    </Base>
  );
};

Flex.defaultProps = {
  className: '',
  themed: [],
};

export default Flex;

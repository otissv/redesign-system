import React from 'react';

import { ContainerInterface } from './container.types';
import { Base } from '../Base';
import { containerAppearanceTheme } from './container.theme';

export function Container({
  children,
  className,
  themed,
  ...propsRest
}: ContainerInterface) {
  const classNames = `Container ${className}`;
  const _themed = React.useMemo(() => [containerAppearanceTheme, ...themed], [
    containerAppearanceTheme,
    themed,
  ]);

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      {children}
    </Base>
  );
}

Container.defaultProps = {
  className: '',
  themed: [],
};

export default Container;

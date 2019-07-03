import React, { useMemo } from 'react';
import { Base, BaseInterface } from '../Base';

import { collectionMenuItemTheme } from './collectionMenuItem.theme';

export function CollectionMenuItem({
  className,
  themed = [],
  children,
  ...propsRest
}: BaseInterface) {
  const classNames = `CollectionMenuItem ${className}`;
  const _themed = useMemo(() => [collectionMenuItemTheme, ...themed], [
    collectionMenuItemTheme,
  ]);

  return (
    <Base as="li" className={classNames} themed={_themed} {...propsRest}>
      {children}
    </Base>
  );
}

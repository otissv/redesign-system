import React, { useMemo } from 'react';
import { Base, BaseInterface } from '../Base';

import { useContextMenu } from './useContextMenu';
import { contextMenuTheme } from './contextMenu.theme';

export const ContextMenu = function ContextMenu({
  className,
  area,
  children,
  offset,
  onClosed,
  onOpened,
  themed = [],
  ...propsRest
}: BaseInterface) {
  const classNames = `ContextMenu ${className}`;
  const _themed = useMemo(() => [contextMenuTheme, ...themed], [
    contextMenuTheme,
    themed,
  ]);

  const [{ contextMenuRef, visible }] = useContextMenu({
    offset: offset,
    area: area,
    onOpened: onOpened,
    onClosed: onClosed,
  });

  return (
    <Base
      as="ul"
      className={classNames}
      themed={_themed}
      style={{ display: visible ? 'block' : 'none' }}
      ref={contextMenuRef}
      {...propsRest}
    >
      {children}
    </Base>
  );
};

ContextMenu.defaultProps = {
  offset: 0,
};

export default ContextMenu;

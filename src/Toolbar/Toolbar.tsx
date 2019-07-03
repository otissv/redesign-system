import React, { useMemo } from 'react';

import { AppBar } from '../AppBar';
import { toolbarTheme } from './toolbar.theme';
import { ToolbarInterface } from './toolbar.types';

export const Toolbar = function Toolbar({
  children,
  className,
  items = [],
  onDeleteSelected,
  onSwitchView,
  toolbar,
  selectToolbar: SelectToolbar,
  themed,
  ...propsRest
}: ToolbarInterface) {
  const classNames = `Toolbar ${className}`;

  function handleDeleteSelected(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onDeleteSelected && onDeleteSelected(e);
  }
  const _themed = useMemo(() => [toolbarTheme, ...themed], [
    toolbarTheme,
    themed,
  ]);

  function handleSwitchView(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const id = e.currentTarget.dataset.uid;

    onSwitchView && onSwitchView(e, { id });
  }

  const toolbarContent = useMemo(
    () =>
      items.length > 0 ? (
        <SelectToolbar
          selected={items.length}
          handleDeleteSelected={handleDeleteSelected}
        />
      ) : typeof children === 'function' ? (
        children({ handleSwitchView, toolbar })
      ) : (
        children
      ),
    [children, handleSwitchView, handleDeleteSelected, items, toolbar]
  );

  return (
    <AppBar className={classNames} themed={_themed} {...propsRest}>
      {toolbarContent}
    </AppBar>
  );
};

Toolbar.defaultProps = {
  className: '',
  themed: [],
};

export default Toolbar;

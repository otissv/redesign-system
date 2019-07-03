import React, { useMemo } from 'react';

import Base from '../Base/Base';
import { AppBarInterface } from './appBar.types';
import { appBarTheme, appBarAppearanceTheme } from './appBar.theme';

export const AppBar = function AppBar({
  children,
  className,
  themed,
  ...propsRest
}: AppBarInterface) {
  const classNames = `AppBar ${className}`;
  const _themed = useMemo(
    () => [appBarTheme, appBarAppearanceTheme, ...themed],
    [appBarTheme, appBarAppearanceTheme, themed]
  );

  return (
    <Base
      className={classNames}
      themed={_themed}
      aria-orientation="horizontal"
      {...propsRest}
    >
      {children}
    </Base>
  );
};

AppBar.defaultProps = {
  className: '',
  themed: [],
};

export default AppBar;

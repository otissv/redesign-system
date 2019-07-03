import React, { useMemo } from 'react';

import Base from '../Base/Base';
import { TabProvider } from './TabContext';
import { tabsTheme } from './tabs.theme';
import { TabsInterface } from './tabs.types';

export const Tabs = function Tabs({
  className,
  children,
  appearance,
  stretch,
  size,
  themed,
  height,
  width,
  stacked,
  ...propsRest
}: TabsInterface) {
  const classNames = `Tabs ${className}`;
  const _themed = useMemo(() => [tabsTheme, ...themed], [tabsTheme, themed]);

  return (
    <TabProvider
      appearance={appearance}
      height={height}
      width={width}
      stretch={stretch}
      size={size}
      stacked={stacked}
    >
      <Base
        className={classNames}
        themed={_themed}
        stacked={stacked}
        {...propsRest}
      >
        {children}
      </Base>
    </TabProvider>
  );
};

Tabs.defaultProps = {
  className: '',
  themed: [],
};

export default Tabs;

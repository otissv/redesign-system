import React, { useMemo } from 'react';

import { useTabs } from './TabContext';
import { tabsPanelTheme } from './tabs.theme';
import Base from '../Base/Base';
import { TabPanelInterface } from './tabs.types';

export const TabPanel = function TabPanel({
  children,
  className,
  uid,
  themed,
  ...propsRest
}: TabPanelInterface) {
  const classNames = `TabPanel ${className}`;
  const _themed = useMemo(() => [tabsPanelTheme, ...themed], [
    tabsPanelTheme,
    themed,
  ]);
  const { active, height, width } = useTabs();

  const getActiveStyle = active === uid ? 'display: block;' : 'display: none;';

  return active === uid ? (
    <Base
      className={classNames}
      height={height}
      width={width}
      themed={_themed}
      {...propsRest}
      css={`${getActiveStyle} height: ${height}; width: ${width};`}
      data-uid={uid}
    >
      {children}
    </Base>
  ) : null;
};

TabPanel.defaultProps = {
  className: '',
  themed: [],
};

export default TabPanel;

import React, { useEffect, useMemo } from 'react';

import ButtonGroup from '../ButtonGroup/ButtonGroup';
import { tabsListTheme } from './tabs.theme';
import { TabsListInterface } from './tabs.types';

import { useTabs } from './TabContext';

export const TabList = function TabList({
  active,
  children,
  className,
  themed,
  ...propsRest
}: TabsListInterface) {
  const classNames = `TabList ${className}`;
  const _themed = useMemo(() => [tabsListTheme, ...themed], [
    tabsListTheme,
    themed,
  ]);

  const { dispatch, appearance, stacked, stretch, size } = useTabs();

  function handleOnWheel(e: any) {
    e.preventDefault();

    const tabList = e.currentTarget;
    //TODO: not working
    tabList.scrollLeft = -e.nativeEvent.wheelDelta || -e.nativeEvent.detail;
  }

  useEffect(() => {
    dispatch({
      type: 'SET_ACTIVE',
      active: active,
    });
  }, [active]);

  return (
    <ButtonGroup
      className={classNames}
      onWheel={handleOnWheel}
      styled="overflow:hidden;"
      appearance={appearance}
      stretch={stretch}
      size={size}
      stacked={stacked}
      {...propsRest}
      themed={_themed}
    >
      {children}
    </ButtonGroup>
  );
};

TabList.defaultProps = {
  className: '',
  themed: [],
};

export default TabList;

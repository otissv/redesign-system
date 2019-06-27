import React, { useMemo } from 'react';

import { tabsListButtonTheme } from './tabs.theme';
import ButtonGroupButton from '../ButtonGroup/ButtonGroupButton';
import { useTabs } from './TabContext';
import { TabListButtonInterface } from './tabs.types';

export function TabListButton({
  children,
  className,
  uid,
  onClick,
  themed,
  ...propsRest
}: TabListButtonInterface) {
  const classNames = `TabPanel ${className}`;
  const _themed = useMemo(() => [tabsListButtonTheme, ...themed], [
    tabsListButtonTheme,
    themed,
  ]);
  const { active, appearance, dispatch, stacked } = useTabs();

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    dispatch({
      type: 'SET_ACTIVE',
      active: e.currentTarget.dataset.uid,
    });

    onClick && onClick(e);
  }

  const getActiveAppearance = active === uid ? 'active' : appearance;
  return (
    <ButtonGroupButton
      className={classNames}
      themed={_themed}
      {...propsRest}
      onClick={handleClick}
      appearance={getActiveAppearance}
      stacked={stacked}
      data-uid={uid}
    >
      {children}
    </ButtonGroupButton>
  );
}

TabListButton.defaultProps = {
  className: '',
  themed: [],
};

export default TabListButton;

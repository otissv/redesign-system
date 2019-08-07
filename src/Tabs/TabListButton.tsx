import React, { useCallback, useMemo } from 'react'

import { tabsListButtonTheme } from './tabs.theme'
import ButtonGroupButton from '../ButtonGroup/ButtonGroupButton'
import { useTabs } from './TabContext'
import { TabListButtonInterface } from './tabs.types'

export const TabListButton = React.memo(function TabListButton({
  children,
  className = '',
  uid,
  onClick,
  themed = [],
  ...propsRest
}: TabListButtonInterface) {
  const classNames = useMemo(() => `TabListButton ${className}`, [className])
  const _themed = useMemo(() => [tabsListButtonTheme, ...themed], [
    tabsListButtonTheme,
    themed,
  ])
  const { active, appearance, dispatch, stacked } = useTabs()

  const handleClick = useCallback(
    function handleClick(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()

      dispatch({
        type: 'SET_ACTIVE',
        active: e.currentTarget.dataset.uid,
      })

      onClick && onClick(e)
    },
    [dispatch]
  )

  const getActiveAppearance = useMemo(
    () => (active === uid ? 'active' : appearance),
    [active, appearance, uid]
  )

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
  )
})

export default TabListButton

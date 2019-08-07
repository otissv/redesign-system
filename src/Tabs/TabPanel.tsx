import React, { useMemo } from 'react'

import { useTabs } from './TabContext'
import { tabsPanelTheme } from './tabs.theme'
import Base from '../Base/Base'
import { TabPanelInterface } from './tabs.types'

export const TabPanel = React.memo(function TabPanel({
  css,
  children,
  className = '',
  uid,
  themed = [],
  ...propsRest
}: TabPanelInterface) {
  const classNames = useMemo(() => `TabPanel ${className}`, [className])
  const _themed = useMemo(() => [tabsPanelTheme, ...themed], [
    tabsPanelTheme,
    themed,
  ])
  const { active, height, width } = useTabs()

  const getActiveStyle = useMemo(
    () => (active === uid ? 'display: block;' : 'display: none;'),
    [active, uid]
  )

  const component = useMemo(
    () =>
      active === uid ? (
        <Base
          className={classNames}
          height={height}
          width={width}
          themed={_themed}
          {...propsRest}
          css={`${getActiveStyle} height: ${height}; width: ${width}; ${css}`}
          data-uid={uid}
        >
          {children}
        </Base>
      ) : null,
    [
      active,
      uid,
      height,
      propsRest,
      getActiveStyle,
      css,
      classNames,
      width,
      _themed,
      children,
    ]
  )

  return component
})

export default TabPanel

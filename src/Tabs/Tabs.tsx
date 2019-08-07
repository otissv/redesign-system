import React, { useMemo } from 'react'

import Base from '../Base/Base'
import { TabProvider } from './TabContext'
import { tabsTheme } from './tabs.theme'
import { TabsInterface } from './tabs.types'

export const Tabs = React.memo(function Tabs({
  className = '',
  children,
  appearance,
  stretch,
  size,
  themed = [],
  height,
  width,
  stacked,
  ...propsRest
}: TabsInterface) {
  const classNames = useMemo(() => `Tabs ${className}`, [className])
  const _themed = useMemo(() => [tabsTheme, ...themed], [tabsTheme, themed])

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
  )
})

export default Tabs

import React, { Fragment, useContext, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'
import TabList from './TabList'
import TabPanel from './TabPanel'
import { TabProvider, useTabs } from './TabContext'
import { tabsTheme } from './tabs.theme'

export function Tabs({ className, children, ...propsRest }) {
  const classNames = `Tabs ${className || ''}`
  const themed = useMemo(() => [tabsTheme], [tabsTheme])

  return (
    <TabProvider>
      <Base className={classNames} themed={themed} {...propsRest}>
        {children}
      </Base>
    </TabProvider>
  )
}

Tabs.propTypes = {
  children: PropTypes.node,
}

export default Tabs

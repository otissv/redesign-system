import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { useTheme } from '../ThemeContext'
import { useTabs } from './TabContext'
import { tabsPanelTheme } from './tabs.theme'
import Base from '../Base/Base'

export const TabPanel = React.memo(function TabPanel({
  children,
  className,
  uid,
  ...propsRest
}) {
  const classNames = `TabPanel ${className || ''}`
  const themed = useMemo(() => [tabsPanelTheme], [tabsPanelTheme])

  const { theme } = useTheme()
  const { selected, active } = useTabs()

  const getActiveStyle = active === uid ? 'display: block;' : 'display: none'

  return active === uid ? (
    <Base
      className={classNames}
      themed={themed}
      {...propsRest}
      css={getActiveStyle}
      data-uid={uid}>
      {children}
    </Base>
  ) : null
})

TabPanel.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
  uid: PropTypes.string,
}

export default TabPanel

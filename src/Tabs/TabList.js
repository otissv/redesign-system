import React, { useContext, useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'

import Base from '../Base/Base'
import TabListButton from './TabListButton'
import Button from '../Button/Button'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import ButtonGroupButton from '../ButtonGroup/ButtonGroupButton'
import { tabsTheme, tabsListTheme } from './tabs.theme'

import { useTabs } from './TabContext'
import { useTheme } from '../ThemeContext'

const TabListGroup = styled(ButtonGroup)`
  ${tabsListTheme};
`

export function TabList({ active, children, className, ...propsRest }) {
  const classNames = `TabList ${className || ''}`
  const themed = useMemo(() => [tabsTheme], [tabsTheme])

  const { theme } = useTheme()
  const { dispatch } = useTabs()
  const previousItems = useRef()

  function handleOnWheel(event) {
    event.preventDefault()

    const tabList = event.currentTarget

    tabList.scrollLeft =
      -event.nativeEvent.wheelDelta || -event.nativeEvent.detail
  }

  useEffect(() => {
    dispatch({
      type: 'SET_ACTIVE',
      active: active,
    })
  }, [active])

  return (
    <Base className={classNames} themed={themed} {...propsRest}>
      <TabListGroup
        radius="0"
        stretch
        className="Tab-list-button-group"
        onWheel={handleOnWheel}
        styled="overflow:hidden;">
        {children}
      </TabListGroup>
    </Base>
  )
}

TabList.propTypes = {
  active: PropTypes.string,
  theme: PropTypes.object,
}

export const tabList = styled(TabList)
export default TabList

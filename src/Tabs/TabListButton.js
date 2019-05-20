import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'
import { tabsItemTheme } from './tabs.theme'
import ButtonGroupButton from '../ButtonGroup/ButtonGroupButton'
import { useTabs } from './TabContext'

export function TabListButton({
  appearance,
  children,
  className,
  uid,
  onClick,
  ...propsRest
}) {
  const classNames = `TabPanel ${className || ''}`
  const themed = useMemo(() => [tabsItemTheme], [tabsItemTheme])
  const { active, dispatch } = useTabs()

  function handleClick(e) {
    e.preventDefault()
    dispatch({
      type: 'SET_ACTIVE',
      active: e.target.dataset.uid,
    })
    onClick && onClick(e)
  }

  const getActiveAppearance = active === uid ? 'action' : appearance

  return (
    <ButtonGroupButton
      className={classNames}
      themed={themed}
      {...propsRest}
      onClick={handleClick}
      appearance={getActiveAppearance}
      data-uid={uid}>
      {children}
    </ButtonGroupButton>
  )
}

export default TabListButton

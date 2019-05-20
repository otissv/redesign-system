import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { AppBar } from '../AppBar'
import { toolbarTheme } from './toolbar.theme'

export function Toolbar({
  children,
  className,
  items = [],
  onDeleteSelected,
  onSwitchView,
  toolbar,
  selectToolbar,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Toolbar ${className || ''}`

  function handleDeleteSelected(e) {
    e.preventDefault()
    onDeleteSelected && onDeleteSelected(e)
  }
  const themed = useMemo(() => [toolbarTheme, ...propsThemed], [
    toolbarTheme,
    propsThemed,
  ])

  function handleSwitchView(e) {
    e.preventDefault()
    const id = e.currentTarget.dataset.uid

    onSwitchView && onSwitchView(e, { id })
  }

  const SelectToolbar = selectToolbar

  const toolbarContent = useMemo(
    () =>
      items.length > 0 ? (
        <SelectToolbar
          selected={items.length}
          handleDeleteSelected={handleDeleteSelected}
        />
      ) : typeof children === 'function' ? (
        children({ handleSwitchView, toolbar })
      ) : (
        children
      ),
    [children, handleSwitchView, handleDeleteSelected, items, toolbar]
  )

  return (
    <AppBar className={classNames} themed={themed} {...propsRest}>
      {toolbarContent}
    </AppBar>
  )
}

Toolbar.defaultProps = {
  themed: [],
}

Toolbar.propTypes = {
  themed: PropTypes.array,
}

export default Toolbar

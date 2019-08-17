import React, { useCallback, useMemo } from 'react'

import { AppBar } from '../AppBar'
import { toolbarTheme } from './toolbar.theme'
import { ToolbarInterface } from './toolbar.types'

export const Toolbar = React.memo(function Toolbar({
  children,
  className = '',
  onSwitchView,
  toolbar,
  selectToolbar: SelectToolbar,
  themed = [],
  ...propsRest
}: ToolbarInterface) {
  const classNames = useMemo(() => `Toolbar ${className}`, [className])

  const _themed = useMemo(() => [toolbarTheme, ...themed], [
    toolbarTheme,
    themed,
  ])

  const handleSwitchView = useCallback(
    function handleSwitchView(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()
      const id = e.currentTarget.dataset.uid

      onSwitchView && onSwitchView(e, { id })
    },
    [onSwitchView]
  )

  const toolbarContent = useMemo(
    () =>
      typeof children === 'function'
        ? children({ handleSwitchView, toolbar })
        : children,
    [children, handleSwitchView, toolbar]
  )

  return (
    <AppBar className={classNames} themed={_themed} {...propsRest}>
      {toolbarContent}
    </AppBar>
  )
})

export default Toolbar

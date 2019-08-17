import React, { useMemo } from 'react'
import styled from 'styled-components'

import { tableSelectedToolbarTheme } from './table.theme'
import { SelectToolbarInterface } from './table.types'
import { ToolbarDeleteButton } from './ToolbarDeleteButton'
import { Toolbar } from '../Toolbar/Toolbar'

const SelectedText = styled.span`
  display: inline-block;
`
export const SelectToolbar = React.memo(function SelectToolbar({
  className = '',
  selected,
  handleDeleteSelected,
  themed = [],
  ...propsRest
}: SelectToolbarInterface) {
  const classNames = useMemo(() => `TableSelectToolbar ${className}`, [
    className,
  ])

  const _themed = useMemo(() => [tableSelectedToolbarTheme, ...themed], [
    tableSelectedToolbarTheme,
    themed,
  ])

  return (
    <Toolbar className={classNames} themed={_themed} {...propsRest}>
      <SelectedText>{selected} selected </SelectedText>
      <ToolbarDeleteButton
        alt="delete"
        onClick={handleDeleteSelected}
        title="Delete Collection"
      />
    </Toolbar>
  )
})

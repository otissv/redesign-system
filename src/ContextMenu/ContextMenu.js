import React, { useContext } from 'react'
import styled from 'styled-components'

import { sharedStyles, setTheme } from '../utils'
import { ThemeContext } from '../ThemeContext'
import { useContextMenu } from './useContextMenu'
import { contextMenuTheme } from './contextMenu.theme'

const ContextMenuStyled = styled.ul`
  ${contextMenuTheme};
  ${sharedStyles};

  ${props => props.styled}
`

export function ContextMenu({
  area,
  children,
  offset,
  onClosed,
  onOpened,
  ...restProps
}) {
  const { theme } = useContext(ThemeContext)
  const [{ contextMenuRef, visible }] = useContextMenu({
    offset: offset,
    area: area,
    onOpened: onOpened,
    onClosed: onClosed,
  })

  return (
    <ContextMenuStyled
      theme={setTheme(restProps.theme, theme)}
      style={{ display: visible ? 'block' : 'none' }}
      ref={contextMenuRef}
      {...restProps}>
      {children}
    </ContextMenuStyled>
  )
}

ContextMenu.defaultProps = {
  offset: 0,
}

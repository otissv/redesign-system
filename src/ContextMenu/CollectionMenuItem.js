import React, { useContext } from 'react'
import styled from 'styled-components'

import { sharedStyles, setTheme } from '../utils'
import { ThemeContext } from '../ThemeContext'
import { collectionMenuItemTheme } from './collectionMenuItem.theme'

const CollectionMenuItemStyled = styled.li`
  ${collectionMenuItemTheme};
  ${sharedStyles};

  ${props => props.styled}
`

export function CollectionMenuItem(props) {
  const { theme } = useContext(ThemeContext)

  return (
    <CollectionMenuItemStyled theme={setTheme(props.theme, theme)} {...props}>
      {props.children}
    </CollectionMenuItemStyled>
  )
}

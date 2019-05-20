import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ThemeContext } from '../ThemeContext'
import { setTheme, sharedStyles } from '../utils'

const NavStyled = styled.ul`
  ${sharedStyles};
  ${props => props.styled};
`

export function NavItem({ themed: propsThemed, ...propsRest }) {
  const { theme } = useContext(ThemeContext)
  return <NavStyled theme={theme} {...propsRest} />
}

NavItem.defaultProps = {
  themed: [],
}

NavItem.propTypes = {
  themed: PropTypes.array,
}

export default NavItem

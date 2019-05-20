import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ThemeContext } from '../ThemeContext'
import { setTheme, sharedStyles } from '../utils'

const NavStyled = styled.ul`
  ${sharedStyles};
  ${props => props.styled};
`

export function Nav({ themed: propsThemed, ...propsRest }) {
  const { theme } = useContext(ThemeContext)

  // componentWillReceiveProps() {
  //   const { active } = this.props
  //   active && this.setState({ active: active })
  // }

  return (
    <NavProvider>
      <NavStyled theme={theme} {...propsRest} />
    </NavProvider>
  )
}

Nav.defaultProps = {
  themed: [],
}

Nav.propTypes = {
  themed: PropTypes.array,
}

export default Nav

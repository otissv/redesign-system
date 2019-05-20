import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  menuTheme,
  menuContainerTheme,
  menuContentTheme,
} from './dropdown.theme'
import { Button } from '../Button/Button'
import { useTheme } from '../ThemeContext'
import { sharedStyles, setTheme } from '../utils'
import { Portal } from '../Portal'
import Base from '../Base/Base'

const MenuContainer = styled.div`
  ${menuContainerTheme}
  ${sharedStyles}
`

export const Dropdown = React.memo(function Dropdown({
  children,
  className,
  label,
  animate,
  themed: propsThemed,
  ...propsRest
}) {
  const [opened, setOpened] = useState(false)
  const classNames = `Dropdown ${className || ''}`
  const themed = useMemo(() => [menuTheme, menuContentTheme, ...propsThemed], [
    menuTheme,
    menuContentTheme,
    propsThemed,
  ])
  const { theme } = useTheme()

  function handleClick(e) {
    e.preventDefault
    setOpened(!opened)
  }

  const _animate = useMemo(() => {
    return (
      animate || {
        opened: {
          opacity: 1,
        },
        closed: {
          opacity: 0,
        },
      }
    )
  }, [animate])

  return (
    <MenuContainer className="MenuContainer" theme={theme}>
      <Button className={classNames} onClick={handleClick} {...propsRest}>
        {label}
      </Button>

      <Base
        className={classNames}
        element="ul"
        themed={themed}
        state={opened ? 'opened' : 'closed'}
        {...propsRest}
        animate={_animate}>
        {children}
      </Base>
    </MenuContainer>
  )
})

Dropdown.defaultProps = {
  themed: [],
}

Dropdown.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string,
  themed: PropTypes.array,
  appearance: PropTypes.oneOf([
    'accent',
    'primary',
    'success',
    'warning',
    'danger',
  ]),
}

export default Dropdown

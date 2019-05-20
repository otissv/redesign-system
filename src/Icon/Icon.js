import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { sharedStyles, setTheme } from '../utils'
import { ThemeContext } from '../ThemeContext'
import { iconTheme, iconAppearanceTheme } from './icon.theme'

import Base from '../Base/Base'

const IconStyled = styled.svg`
  ${iconTheme};
  ${iconAppearanceTheme};
  ${sharedStyles};
  ${props => props.css};
`

export function Icon({
  children,
  className,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Icon ${className || ''}`
  const themed = useMemo(
    () => [iconTheme, iconAppearanceTheme, ...propsThemed],
    [iconTheme, iconAppearanceTheme, propsThemed]
  )

  return (
    <Base
      el="svg"
      className={classNames}
      themed={themed}
      xmlns="http://www.w3.org/2000/svg"
      {...propsRest}>
      {children}
    </Base>
  )
}

Icon.propTypes = {
  appearance: PropTypes.oneOf([
    'accent',
    'danger',
    'inverted',
    'primary',
    'success',
    'warning',
  ]),
  children: PropTypes.node,
  height: PropTypes.string,
  hoverColor: PropTypes.string,
  css: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  themed: PropTypes.array,
}

Icon.defaultProps = {
  height: '24px',
  width: '24px',
  viewBox: '0 0 24 24',
  themed: [],
}

export default Icon

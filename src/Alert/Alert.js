import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Base from '../Base/Base'
import { alertTheme, alertAppearanceTheme } from './alert.theme'

const Close = styled.a`
  display: ${props => (props.onClose ? 'inline-block' : 'none')};
  position: absolute;
  top: 20px;
  right: 15px;
  color: inherit;
  opacity: 0.4;
  margin: 0;
  border: none;
  border-radius: 0;
  overflow: visible;
  font: inherit;
  color: inherit;
  text-transform: none;
  padding: 0;
  background-color: transparent;
  fill: currentcolor;
  line-height: 0;
`

export const Alert = React.memo(function Alert({
  children,
  className,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Alert ${className || ''}`
  const themed = useMemo(
    () => [alertTheme, alertAppearanceTheme, ...propsThemed],
    [alertTheme, alertAppearanceTheme, propsThemed]
  )

  function handleOnClose(e) {
    e.preventDefault()
  }

  return (
    <Base className={classNames} themed={themed} {...propsRest}>
      <Close onClick={handleOnClose}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg">
          <line
            fill="none"
            stroke="#000"
            strokeWidth="1.1"
            x1="1"
            y1="1"
            x2="13"
            y2="13"
          />
          <line
            fill="none"
            stroke="#000"
            strokeWidth="1.1"
            x1="13"
            y1="1"
            x2="1"
            y2="13"
          />
        </svg>
      </Close>
      {children}
    </Base>
  )
})

Alert.defaultProps = {
  themed: [],
}

Alert.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf(['primary', 'secondary']),
  context: PropTypes.oneOf([
    'accent',
    'action',
    'success',
    'warning',
    'danger',
  ]),
  onClose: PropTypes.func,
  themed: PropTypes.array,
}

export default Alert

import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'

import { Base } from '../Base'
import { AlertInterface } from './alert.types'

import { alertTheme, alertAppearanceTheme } from './alert.theme'

const Close = styled.a<AlertInterface>`
  display: ${props => (props.close ? 'inline-block' : 'none')};
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
  cursor: pointer;
`

export const Alert = React.memo(function Alert({
  children,
  className = '',
  onClose,
  themed = [],
  ...propsRest
}: AlertInterface) {
  const classNames = useMemo(() => `Alert ${className}`, [className])
  const _themed = useMemo(() => [alertTheme, alertAppearanceTheme, ...themed], [
    alertTheme,
    alertAppearanceTheme,
    themed,
  ])

  const handleOnClose = useCallback(function handleOnClose(e: any) {
    e.preventDefault()
    onClose(e)
  }, [])

  const close = typeof onClose === 'function'

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      <Close onClick={handleOnClose} close={close}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
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

export default Alert

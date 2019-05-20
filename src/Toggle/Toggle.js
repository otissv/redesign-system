import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '../ThemeContext'
import { sharedStyles } from '../utils'

const ToggleStyled = styled.div`
  display: inline;
`

const ToggleInput = styled.input`
  ${({ theme: { color } }) => `
      box-sizing: border-box;
      height: 0;
      width: 0;
      visibility: hidden;

      &:checked + label {
        background: ${color['grey-100']};
      }

      &:checked + label:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
      }
  `}
  ${sharedStyles};
  ${props => props.css};
`
export const ToggleLabel = styled.label`
  ${({ theme: { color }, checked, height, hideText, width }) => `
    position: relative;
    box-sizing: border-box;off
    cursor: pointer;
    text-indent ${hideText ? '-9999px' : 'inital'};
    width: ${width};
    height: ${height};
    background: ${color['grey-700']};
    display: inline-block;
    border-radius: 100px;
    font-size: ${height};
    line-height: ${height};

    text-align: ${checked ? 'left' : 'right'}
  `}
  ${sharedStyles};
  ${props => props.css};
`

const Component = styled.div`
  ${({ theme: { color }, toggle, height, width }) => `
    position: absolute;
    box-sizing: border-box;
    width: ${width};
    height: ${width};
    background: ${toggle ? color['grey-500'] : color['grey-400']};
    border-radius: 90px;
    transform: translateX(0);
    transition: 0.3s;

    &:active {
      width: 25px;
    // transform: translateX(calc(100%  - 25px);
    }

    ${toggle ? 'transform: translateX(100%);' : 'transform : translate(0);'}
  `}
  ${sharedStyles};
  ${props => props.css};
`

export function Toggle({ id, children, hideText, height, toggle, width }) {
  const [state, setState] = toggle

  function handleClick(e) {
    e.preventDefault()
    setState(!state)
  }

  const { theme } = useTheme()

  return (
    <ToggleStyled theme={theme}>
      <ToggleInput theme={theme} type="checkbox" id={id} checked={state} />
      <ToggleLabel
        htmlFor={id}
        onClick={handleClick}
        height={height}
        hideText={hideText}
        width={width}
        checked={state}
        theme={theme}>
        {children || (
          <Component
            elevate={1}
            theme={theme}
            toggle={state}
            width="20px"
            height="20px"
          />
        )}
      </ToggleLabel>
    </ToggleStyled>
  )
}

Toggle.defaultProps = {
  width: '40px',
  height: '20px',
}

Component.defaultProps = {
  width: '90px',
  height: '90px',
}

export default Toggle

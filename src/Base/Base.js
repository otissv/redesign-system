import React, { useMemo, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import posed from 'react-pose'

import { useTheme } from '../ThemeContext'
import { sharedStyles, setTheme } from '../utils'

export function Base({
  animate,
  children,
  css,
  el,
  forwardRef,
  state,
  theme: propsTheme,
  themed,
  ...propsRest
}) {
  const { theme } = useTheme()

  const buildStyledThemed = props =>
    themed.reduce((acc, themeFn) => {
      return { ...acc, ...themeFn(props) }
    }, {})

  const poseRef = useRef(posed[el || 'div'](animate))
  const styledRef = useRef(styled(poseRef.current)`
    ${buildStyledThemed}
    ${sharedStyles}
    ${css}
  `)

  const Component = styledRef.current
  const _theme = setTheme(propsTheme, theme)

  return (
    <Component pose={state} {...propsRest} theme={_theme} ref={forwardRef}>
      {children}
    </Component>
  )
}

Base.defaultProps = { themed: [] }

Base.propTypes = {
  animate: PropTypes.object,
  children: PropTypes.node,
  css: PropTypes.string,
  el: PropTypes.string,
  state: PropTypes.string,
  theme: PropTypes.arrayOf(PropTypes.func),
  themed: PropTypes.arrayOf(PropTypes.func),
}

export default Base

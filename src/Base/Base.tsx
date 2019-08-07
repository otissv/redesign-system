import React, { useCallback, useMemo, useRef } from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

import { BaseInterface } from './base.types'
import { setTheme } from '../utils/setTheme.util'
import { sharedStyles } from '../utils/sharedStyles.utils'
import { useTheme } from '../ThemeContext'

export const Base = React.memo(function Base({
  animate,
  children,
  css,
  as: el,
  state,
  theme: propsTheme,
  themed = [],
  ...propsRest
}: BaseInterface) {
  const { theme } = useTheme()

  const buildStyledThemed = useCallback(
    (props: BaseInterface) => {
      return themed.reduce(
        (acc: { [key: string]: string }, themeFn: (a: any) => any) => {
          return { ...acc, ...themeFn(props) }
        },
        {}
      )
    },
    [themed]
  )

  const poseRef = useRef(posed[el || 'div'](animate))
  const styledRef = useRef(styled(poseRef.current)`
    ${buildStyledThemed}
    ${sharedStyles}
    ${css}
  `)

  const Component = useMemo(() => styledRef.current, [
    el,
    animate,
    css,
    buildStyledThemed,
    sharedStyles,
  ])

  const _theme = setTheme(propsTheme, theme)

  return (
    <Component pose={state} theme={_theme} {...propsRest}>
      {children}
    </Component>
  )
})

export default Base

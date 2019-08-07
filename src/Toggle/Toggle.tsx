import React, { useCallback, useMemo } from 'react'

import { Base } from '../Base'
import {
  ToggleInterface,
  ToggleInputInterface,
  ToggleLabelInterface,
  ToggleContentInterface,
} from './toggle.types'
import {
  toggleAppearanceTheme,
  toggleInputTheme,
  toggleLabelTheme,
  toggleTheme,
  toggleContentTheme,
} from './toggle.theme'

export const ToggleInput = React.memo(function ToggleInput({
  checked,
  className = '',
  theme = [],
  ...propsRest
}: ToggleInputInterface) {
  const classNames = useMemo(() => `ToggleInput ${className}`, [className])
  const _themed = useMemo(() => [toggleInputTheme], [toggleInputTheme])

  return (
    <Base
      as="input"
      type="checkbox"
      className={classNames}
      themed={_themed}
      {...propsRest}
    />
  )
})

export const ToggleLabel = React.memo(function ToggleLabel({
  checked,
  className = '',
  ...propsRest
}: ToggleLabelInterface) {
  const classNames = useMemo(() => `ToggleLabel ${className}`, [className])
  const _themed = useMemo(() => [toggleAppearanceTheme, toggleLabelTheme], [
    toggleLabelTheme,
    toggleAppearanceTheme,
  ])

  return (
    <Base as="label" className={classNames} themed={_themed} {...propsRest} />
  )
})

export const ToggleContent = React.memo(function ToggleContent({
  checked,
  className = '',
  themed = [],
  width = '90px',
  height = '90px',
  ...propsRest
}: ToggleContentInterface) {
  const classNames = useMemo(() => `ToggleContent ${className}`, [className])
  const _themed = useMemo(() => [toggleContentTheme, ...themed], [
    toggleContentTheme,
    themed,
  ])

  return (
    <Base
      as="span"
      className={classNames}
      themed={_themed}
      width={width}
      height={height}
      {...propsRest}
    />
  )
})

export const Toggle = React.memo(function Toggle({
  children,
  className = '',
  height = '20px',
  hideText,
  id,
  themed = [],
  toggle,
  width = '40px',
  ...propsRest
}: ToggleInterface) {
  const classNames = useMemo(() => `Toggle ${className}`, [className])
  const _themed = useMemo(() => [toggleTheme, ...themed], [toggleTheme, themed])
  const [state, setState] = toggle

  const handleClick = useCallback(
    function handleClick(e: React.MouseEvent<HTMLInputElement>) {
      e.preventDefault()
      setState(!state)
    },
    [setState]
  )

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      <ToggleInput
        checked={state}
        height={height}
        id={id}
        type="checkbox"
        width={width}
      />
      <ToggleLabel
        checked={state}
        height={height}
        hideText={hideText}
        htmlFor={id}
        onClick={handleClick}
        width={width}
      >
        {children || (
          <ToggleContent
            elevate={1}
            toggle={state}
            width="20px"
            height="20px"
          />
        )}
      </ToggleLabel>
    </Base>
  )
})

export default Toggle

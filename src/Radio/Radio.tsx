import React, { useMemo } from 'react'
import styled from 'styled-components'

import { Base } from '../Base'
import { RadioInterface } from './radio.types'
import { radioTheme, radioContainerTheme } from './radio.theme'

export const Radio = React.memo(function Radio({
  checked,
  className = '',
  id,
  label,
  name,
  onChange,
  themed = [],
  appearance,
  ...propsRest
}: RadioInterface) {
  const classNames = useMemo(() => `Radio ${className}`, [className])
  const _themed = useMemo(() => [radioTheme, ...themed], [radioTheme, themed])
  const radioContainerThemed = useMemo(() => [radioContainerTheme, ...themed], [
    radioContainerTheme,
    themed,
  ])

  const isDisabled = useMemo(() => propsRest.appearance === 'disabled', [
    propsRest.appearance,
  ])

  return (
    <Base
      className={classNames}
      themed={_themed}
      {...propsRest}
      marginRight={3}
    >
      <Base
        className="RadioContainer"
        themed={radioContainerThemed}
        appearance={appearance}
        marginRight={1}
      >
        <input
          checked={checked}
          className="RadioInput"
          disabled={isDisabled}
          id={id}
          name={name}
          onChange={onChange}
          type="radio"
        />
        <div className="RadioBackground">
          <div className="RadioInnerCircle"></div>
          <div className="RadioOuterCircle"></div>
        </div>
      </Base>
      {label ? <label htmlFor={id}>{label}</label> : null}
    </Base>
  )
})

export default Radio

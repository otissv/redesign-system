import React, { useCallback, useMemo } from 'react'

import { Base } from '../Base'
import { CheckboxInterface } from './checkbox.types'
import { checkboxTheme } from './checkbox.theme'

export const Checkbox = React.memo(function Checkbox({
  checked,
  className = '',
  id,
  name,
  onChange,
  themed = [],
  ...propsRest
}: CheckboxInterface) {
  const classNames = useMemo(() => `Checkbox ${className}`, [className])
  const _themed = useMemo(() => [checkboxTheme, ...themed], [
    checkboxTheme,
    themed,
  ])

  const isDisabled = useMemo(() => propsRest.appearance === 'disabled', [
    propsRest.appearance,
  ])

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      <input
        checked={checked}
        className="CheckboxInput"
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={onChange}
        type="checkbox"
      />
      <div className="CheckboxBackground">
        <svg className="CheckboxCheckmark" viewBox="0 0 24 24">
          <path
            className="mdc-checkbox__checkmark-path"
            fill="none"
            stroke="white"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          ></path>
        </svg>
      </div>
    </Base>
  )
})

export default Checkbox

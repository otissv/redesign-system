import React, { useState } from 'react'

function noop() {}

export const FloatLabelContext = React.createContext({})

export function FloatLabelProvider({
  children,
  value: { active, floating, onBlur, onFocus },
}) {
  const [activeState, setActive] = useState(active || false)
  const [floatingState, setFloating] = useState(floating || false)
  const [onBlurState, setOnBlur] = useState(onBlur || noop)
  const [onFocusState, setOnFocus] = useState(onFocus || noop)

  const state = [activeState, floatingState, onBlurState, onFocusState]
  const setState = [setActive, setFloating, setOnBlur, setOnFocus]

  return (
    <FloatLabelContext.Provider value={[state, setState]}>
      {children}
    </FloatLabelContext.Provider>
  )
}

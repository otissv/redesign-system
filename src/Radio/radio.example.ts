import { useState } from 'react'

export function RadioExample({ children }) {
  const [state, setState] = useState(false)

  const onChange = e => {
    e.preventDefault()
    setState(!state)
  }

  return children(state, onChange)
}

import React, { useState } from 'react'

export const NavContext = React.createContext('')

export function NavProvider(props) {
  const [active, setActive] = useState(props.active)
  return (
    <NavContext.Provider value={{ active, setActive }}>
      {props.children}
    </NavContext.Provider>
  )
}

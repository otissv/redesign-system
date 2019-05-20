import React, { useContext } from 'react'

export const CardContext = React.createContext({})

export function useCard() {
  return useContext(CardContext)
}

export function CardProvider({ children, value }) {
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}

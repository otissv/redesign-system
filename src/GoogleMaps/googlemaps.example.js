import React, { useState } from 'react'

import GoogleMaps from '../GoogleMaps/GoogleMaps'
import Input from '../Input/Input'

const GoogleMapsContext = React.createContext('london')

export function GoogleMapsContainer({ children }) {
  const state = useState('london')

  return (
    <GoogleMapsContext.Provider value={state}>
      {children(state)}
    </GoogleMapsContext.Provider>
  )
}

export default GoogleMapsContainer

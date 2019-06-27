import React, { useContext, useState } from 'react';

import {
  GoogleMapsInterface,
  GoogleMapsContextInterface,
} from './googleMaps.types';

const GoogleMapsContext = React.createContext<GoogleMapsContextInterface>([
  'london',
] as GoogleMapsContextInterface);

export function useGoogleMaps() {
  return useContext(GoogleMapsContext);
}

export function GoogleMapsContainer({ children }: GoogleMapsInterface) {
  const state = useState('london');

  return (
    <GoogleMapsContext.Provider value={state}>
      {children(state)}
    </GoogleMapsContext.Provider>
  );
}

export default GoogleMapsContainer;

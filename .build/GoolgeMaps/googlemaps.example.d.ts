import React from 'react';
import { GoogleMapsInterface } from './googleMaps.types';
export declare function useGoogleMaps(): [string, React.Dispatch<React.SetStateAction<string>>?];
export declare function GoogleMapsContainer({ children }: GoogleMapsInterface): JSX.Element;
export default GoogleMapsContainer;

import React, { useContext, useState } from 'react';
var GoogleMapsContext = React.createContext([
    'london',
]);
export function useGoogleMaps() {
    return useContext(GoogleMapsContext);
}
export function GoogleMapsContainer(_a) {
    var children = _a.children;
    var state = useState('london');
    return (React.createElement(GoogleMapsContext.Provider, { value: state }, children(state)));
}
export default GoogleMapsContainer;
//# sourceMappingURL=googlemaps.example.js.map
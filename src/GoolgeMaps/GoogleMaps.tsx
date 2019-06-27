import React, { useMemo } from 'react';

import { Base } from '../Base';

import { GoogleMapsInterface } from './googleMaps.types';
import { googleMapsTheme } from './googleMaps.theme';

export const GoogleMaps = function GoogleMaps({
  children,
  className,
  location,
  themed,
  ...propsRest
}: GoogleMapsInterface) {
  const classNames = `GoogleMaps ${className}}`;
  const _themed = useMemo(() => [googleMapsTheme, ...themed], [
    googleMapsTheme,
    themed,
  ]);

  const query = encodeURIComponent(location);

  return (
    <Base className={classNames} themed={_themed} {...propsRest}>
      <div className="gmap_canvas">
        <iframe
          width={propsRest.width}
          height={propsRest.height}
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
      </div>
    </Base>
  );
};

GoogleMaps.defaultProps = {
  className: '',
  height: '300',
  width: '100%',
  themed: [],
};

export default GoogleMaps;

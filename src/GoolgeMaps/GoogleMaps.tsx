import React, { useMemo } from 'react'

import { Base } from '../Base'

import { GoogleMapsInterface } from './googleMaps.types'
import { googleMapsTheme } from './googleMaps.theme'

export const GoogleMaps = React.memo(function GoogleMaps({
  children,
  className = '',
  location,
  themed = [],
  height = '300',
  width = '100%',
  ...propsRest
}: GoogleMapsInterface) {
  const classNames = useMemo(() => `GoogleMaps ${className}}`, [className])
  const _themed = useMemo(() => [googleMapsTheme, ...themed], [
    googleMapsTheme,
    themed,
  ])

  const query = encodeURIComponent(location)

  const props = {
    ...propsRest,
    width,
    height,
  }

  return (
    <Base className={classNames} themed={_themed} {...props}>
      <div className="gmap_canvas">
        <iframe
          width={width}
          height={height}
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
      </div>
    </Base>
  )
})

export default GoogleMaps

import React, { useMemo } from 'react'

import Base from '../Base/Base'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export function googleMapsTheme({
  height,
  width,
  theme: { animation, color, font },
}) {
  return {
    position: 'relative',
    textAlign: 'right',
    height: width,
    width: height,

    '.gmap_canvas': {
      overflow: 'hidden',
      background: 'none !important',
      height: 'inherit',
      width: 'inherit',
    },
  }
}

export const GoogleMaps = React.memo(function GoogleMaps({
  children,
  className,
  location,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `GoogleMaps ${className || ''}`
  const themed = useMemo(() => [googleMapsTheme, ...propsThemed], [
    googleMapsTheme,
    propsThemed,
  ])

  const query = encodeURIComponent(location)

  return (
    <Base className={classNames} themed={themed} {...propsRest}>
      <div class="gmap_canvas">
        <iframe
          width={propsRest.width}
          height={propsRest.height}
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </Base>
  )
})

GoogleMaps.propTypes = {
  location: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  themed: PropTypes.arrayOf([PropTypes.func]),
}

GoogleMaps.defaultProps = {
  height: '300',
  width: '100%',
  themed: [],
}

export default GoogleMaps

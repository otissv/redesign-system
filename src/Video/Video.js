import React, { useMemo } from 'react'

import Base from '../Base/Base'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export function videoTheme({ theme: { animation, color, font } }) {
  return {}
}

export const Video = React.memo(function Video({
  allowFullScreen,
  autoPlay,
  children,
  className,
  embeded,
  height,
  muted,
  src,
  width,
  themed: propsThemed,
  ...propsRest
}) {
  const classNames = `Video ${className || ''}`
  const themed = useMemo(() => [videoTheme, ...propsThemed], [
    videoTheme,
    propsThemed,
  ])

  const properties = {
    ...propsRest,
    allowFullScreen: allowFullScreen ? 'true' : null,
    autoPlay: autoPlay ? 'true' : null,
    height,
    muted: muted || null,
    src,
    width,
  }

  console.log(properties.autoPlay)

  return (
    <Base
      el={embeded ? null : 'video'}
      className={classNames}
      themed={themed}
      {...(embeded ? null : properties)}>
      {embeded ? <iframe {...properties} frameBorder="0" /> : children}
    </Base>
  )
})

Video.propTypes = {
  allowFullScreen: PropTypes.bool,
  autoplay: PropTypes.bool,
  controls: PropTypes.bool,
  embeded: PropTypes.bool,
  height: PropTypes.string,
  intrinsicsize: PropTypes.string,
  inview: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  playsinline: PropTypes.bool,
  preload: PropTypes.oneOf(['none', 'metadata', 'auto']),
  src: PropTypes.string,
  themed: PropTypes.array,
  width: PropTypes.width,
}

Video.defaultProps = {
  embeded: false,
  height: 'auto',
  inView: false,
  loop: false,
  muted: false,
  playsInline: false,
  preload: 'auto',
  themed: [],
  width: '100%',
}

export default Video

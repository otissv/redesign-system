import React, { useMemo } from 'react'

import Base from '../Base/Base'
import { VideoInterface } from './vidoe.types'
import { videoTheme } from './video.theme'

export const Video = React.memo(function Video({
  allowFullScreen,
  autoPlay,
  children,
  className = '',
  embeded = false,
  height = 'auto',
  inview = false,
  loop = false,
  muted = false,
  playsInline = false,
  preload = 'auto',
  src,
  themed = [],
  width = '100%',
  ...propsRest
}: VideoInterface) {
  const classNames = useMemo(() => `Video ${className}`, [className])
  const _themed = useMemo(() => [videoTheme, ...themed], [videoTheme, themed])

  const properties = {
    ...propsRest,
    allowFullScreen: allowFullScreen ? true : null,
    autoPlay: autoPlay ? true : null,
    height,
    inview: inview ? true : null,
    loop,
    muted: muted || null,
    playsInline,
    preload,
    src,
    width,
  }

  return (
    <Base
      as={embeded ? null : 'video'}
      className={classNames}
      themed={_themed}
      {...(embeded ? null : properties)}
    >
      {embeded ? <iframe {...properties} frameBorder="0" /> : children}
    </Base>
  )
})

export default Video

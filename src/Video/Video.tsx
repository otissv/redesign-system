import React, { useMemo } from 'react';

import Base from '../Base/Base';
import { VideoInterface } from './vidoe.types';
import { videoTheme } from './video.theme';

export const Video = function Video({
  allowFullScreen,
  autoPlay,
  children,
  className,
  embeded,
  height,
  inview,
  muted,
  src,
  width,
  themed,
  ...propsRest
}: VideoInterface) {
  const classNames = `Video ${className}`;
  const _themed = useMemo(() => [videoTheme, ...themed], [videoTheme, themed]);

  const properties = {
    ...propsRest,
    allowFullScreen: allowFullScreen ? true : null,
    autoPlay: autoPlay ? true : null,
    height,
    inview: inview ? true : null,
    muted: muted || null,
    src,
    width,
  };

  return (
    <Base
      as={embeded ? null : 'video'}
      className={classNames}
      themed={_themed}
      {...(embeded ? null : properties)}
    >
      {embeded ? <iframe {...properties} frameBorder="0" /> : children}
    </Base>
  );
};

Video.defaultProps = {
  className: '',
  embeded: false,
  height: 'auto',
  inview: false,
  loop: false,
  muted: false,
  playsInline: false,
  preload: 'auto',
  themed: [],
  width: '100%',
};

export default Video;

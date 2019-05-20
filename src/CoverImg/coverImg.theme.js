import { isAbsolute } from 'path'

function getResponsiveImg(sizes) {
  return size => sizes[size]
}

export function coverImgTheme({
  cover,
  height,
  large,
  medium,
  position,
  repeat,
  responsive,
  small,
  src,
  width,
  xlarge,
  parallax,
  theme: { animation },
}) {
  const _responsive = responsive
    ? getResponsiveImg({ small, medium, large, xlarge })(responsive)
    : { height, width, src }

  return {
    position: 'relative',
    display: 'flex',
    backgroundImage: `url(${_responsive.src})`,
    height: _responsive.height,
    width: _responsive.width,
    ...(parallax ? { backgroundAttachment: 'fixed' } : {}),
    ...(position ? { backgroundPosition: '50% 50%' } : {}),
    ...(cover ? { backgroundSize: 'cover' } : {}),
    ...(repeat ? { backgroundRepeat: 'no-repeat' } : {}),
  }
}

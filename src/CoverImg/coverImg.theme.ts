import { CoverImgInterface } from './coverImg.types';

// function getResponsiveImg(sizes) {
//   return size => sizes[size]
// }

export function coverImgTheme({
  cover,
  height,
  parallax,
  position,
  repeat,
  src,
  width,
  theme: { animation },
}: CoverImgInterface) {
  // const _responsive = responsive
  //   ? getResponsiveImg({ small, medium, large, xlarge })(responsive)
  //   : { height, width, src }
  return {
    position: 'relative',
    display: 'flex',
    backgroundImage: `url(${src})`,
    height,
    width,
    transition: animation.easeMedium(),

    ...(parallax ? { backgroundAttachment: 'fixed' } : {}),
    ...(position ? { backgroundPosition: '50% 50%' } : {}),
    ...(cover ? { backgroundSize: 'cover' } : {}),
    ...(repeat ? { backgroundRepeat: 'no-repeat' } : {}),
  };
}

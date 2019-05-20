// function getResponsiveImg(sizes) {
//   return size => sizes[size]
// }

export function imgTheme({ height, width, theme: { animation } }) {
  // const _responsive = responsive
  //   ? getResponsiveImg({ small, medium, large, xlarge })(responsive)
  //   : { height, width, src }

  return {
    display: 'inline-block',
    height: height || 'auto',
    maxWidth: '100%',
    width: width || 'auto',
    transition: animation.easeInMedium(),
  }
}

export function imgSizeTheme({ size }) {
  return (
    {
      xsmall: { width: '150px' },
      small: { width: '200px' },
      medium: { width: '300px' },
      large: { width: '400px' },
      xlarge: { width: '640px' },
      stretch: { width: '100%' },
    }[size] || ''
  )
}

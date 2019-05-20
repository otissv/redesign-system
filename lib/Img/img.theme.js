"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imgTheme = imgTheme;
exports.imgSizeTheme = imgSizeTheme;

// function getResponsiveImg(sizes) {
//   return size => sizes[size]
// }
function imgTheme(_ref) {
  var height = _ref.height,
      width = _ref.width,
      animation = _ref.theme.animation;
  // const _responsive = responsive
  //   ? getResponsiveImg({ small, medium, large, xlarge })(responsive)
  //   : { height, width, src }
  return {
    display: 'inline-block',
    height: height || 'auto',
    maxWidth: '100%',
    width: width || 'auto',
    transition: animation.easeMedium()
  };
}

function imgSizeTheme(_ref2) {
  var size = _ref2.size;
  return {
    xsmall: {
      width: '150px'
    },
    small: {
      width: '200px'
    },
    medium: {
      width: '300px'
    },
    large: {
      width: '400px'
    },
    xlarge: {
      width: '640px'
    },
    stretch: {
      width: '100%'
    }
  }[size] || '';
}
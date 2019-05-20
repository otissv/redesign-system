"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coverImgTheme = coverImgTheme;

var _path = require("path");

function getResponsiveImg(sizes) {
  return function (size) {
    return sizes[size];
  };
}

function coverImgTheme(_ref) {
  var height = _ref.height,
      src = _ref.src,
      width = _ref.width,
      responsive = _ref.responsive,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      xlarge = _ref.xlarge,
      animation = _ref.theme.animation;

  var _responsive = responsive ? getResponsiveImg({
    small: small,
    medium: medium,
    large: large,
    xlarge: xlarge
  })(responsive) : {
    height: height,
    width: width,
    src: src
  };

  return {
    position: 'relative',
    backgroundImage: "url(".concat(_responsive.src, ")"),
    height: _responsive.height,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
}
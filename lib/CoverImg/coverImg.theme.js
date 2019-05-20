"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coverImgTheme = coverImgTheme;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _path = require("path");

function getResponsiveImg(sizes) {
  return function (size) {
    return sizes[size];
  };
}

function coverImgTheme(_ref) {
  var cover = _ref.cover,
      height = _ref.height,
      large = _ref.large,
      medium = _ref.medium,
      position = _ref.position,
      repeat = _ref.repeat,
      responsive = _ref.responsive,
      small = _ref.small,
      src = _ref.src,
      width = _ref.width,
      xlarge = _ref.xlarge,
      parallax = _ref.parallax,
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

  return (0, _objectSpread2.default)({
    position: 'relative',
    display: 'flex',
    backgroundImage: "url(".concat(_responsive.src, ")"),
    height: _responsive.height,
    width: _responsive.width
  }, parallax ? {
    backgroundAttachment: 'fixed'
  } : {}, position ? {
    backgroundPosition: '50% 50%'
  } : {}, cover ? {
    backgroundSize: 'cover'
  } : {}, repeat ? {
    backgroundRepeat: 'no-repeat'
  } : {});
}
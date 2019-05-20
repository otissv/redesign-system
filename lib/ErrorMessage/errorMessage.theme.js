"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMessageTheme = errorMessageTheme;

function errorMessageTheme(_ref) {
  var show = _ref.show,
      _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      border = _ref$theme.border,
      color = _ref$theme.color,
      px = _ref$theme.unit.px;
  return {
    color: color.danger,
    transition: animation.easeMedium(),
    margin: "0 0 ".concat(px.medium, " 3px"),
    fontSize: '0.8rem',
    lineHeight: '1.8'
  };
}
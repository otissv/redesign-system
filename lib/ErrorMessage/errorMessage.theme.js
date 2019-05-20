"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMessageTheme = errorMessageTheme;
exports.errorMessageAppearanceTheme = errorMessageAppearanceTheme;

function errorMessageTheme(_ref) {
  var show = _ref.show,
      _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      border = _ref$theme.border,
      color = _ref$theme.color,
      unit = _ref$theme.unit;
  return {
    color: color.danger,
    transition: animation.easeMedium(),
    margin: "0 0 ".concat(unit[3], " 3px"),
    fontSize: '0.8rem',
    lineHeight: '1.8',
    padding: unit[2]
  };
}

function errorMessageAppearanceTheme(_ref2) {
  var appearance = _ref2.appearance,
      _ref2$theme = _ref2.theme,
      animation = _ref2$theme.animation,
      border = _ref2$theme.border,
      color = _ref2$theme.color,
      unit = _ref2$theme.unit;
  return {
    primary: {
      color: color.foreground,
      backgroundColor: color.danger
    },
    secondary: {
      border: border.thinDanger
    }
  }[appearance] || '';
}
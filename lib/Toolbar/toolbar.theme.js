"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toolbarTheme = toolbarTheme;

function toolbarTheme(_ref) {
  var borders = _ref.borders,
      _ref$theme = _ref.theme,
      border = _ref$theme.border,
      color = _ref$theme.color,
      unit = _ref$theme.unit;
  return {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: 'auto',
    background: 'none',
    '>button': {
      color: color.foreground,
      background: 'none',
      borderColor: color.transparent,
      borderRadius: 0,
      '&:active': {
        color: color.foreground
      }
    }
  };
}
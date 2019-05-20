"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formLabelTheme = formLabelTheme;

function formLabelTheme(_ref) {
  var _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      font = _ref$theme.font,
      unit = _ref$theme.unit;
  return {
    display: 'block',
    // fontSize: font.size[3],
    marginBottom: unit[1],
    transition: animation.easeMedium()
  };
}
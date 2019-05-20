"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formControlTheme = formControlTheme;

function formControlTheme(_ref) {
  var _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      unit = _ref$theme.unit;
  return {
    marginBottom: "".concat(unit.default),
    transition: animation.easeMedium()
  };
}
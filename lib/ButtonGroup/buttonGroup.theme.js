"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonGroupTheme = buttonGroupTheme;
exports.buttonStretchGroupTheme = buttonStretchGroupTheme;

function buttonGroupTheme(_ref) {
  var animation = _ref.theme.animation;
  return {
    display: 'inline-flex',
    position: 'relative',
    transition: animation.easeMedium(),
    verticalAlign: 'middle'
  };
}

function buttonStretchGroupTheme(_ref2) {
  var stretch = _ref2.stretch;
  return {
    display: 'flex'
  }[stretch];
}
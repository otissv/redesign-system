"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonGroupTheme = buttonGroupTheme;
exports.buttonStretchGroupTheme = buttonStretchGroupTheme;

function buttonGroupTheme(_ref) {
  var radius = _ref.radius,
      _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      radiusTheme = _ref$theme.radius;
  return {
    display: 'inline-flex',
    position: 'relative',
    transition: animation.easeMedium(),
    verticalAlign: 'middle',
    button: {
      borderRadius: 0
    },
    'button:first-child': {
      borderTopLeftRadius: radius || radiusTheme.rounded,
      borderBottomLeftRadius: radius || radiusTheme.rounded
    },
    'button:last-child': {
      borderTopRightRadius: radius || radiusTheme.rounded,
      borderBottomRightRadius: radius || radiusTheme.rounded
    }
  };
}

function buttonStretchGroupTheme(_ref2) {
  var stretch = _ref2.stretch;
  return stretch ? {
    width: '100%'
  } : '';
}
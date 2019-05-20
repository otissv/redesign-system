"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconTheme = iconTheme;
exports.iconAppearanceTheme = iconAppearanceTheme;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

function iconTheme(_ref) {
  var _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      color = _ref$theme.color,
      hoverColor = _ref.hoverColor;
  return (0, _objectSpread2.default)({
    display: 'inline-block',
    color: 'inherit',
    fill: 'currentcolor',
    height: 'auto'
  }, hoverColor && {
    '&:hover': {
      color: hoverColor
    }
  });
}

function iconAppearanceTheme(_ref2) {
  var appearance = _ref2.appearance,
      color = _ref2.theme.color;
  return {
    accent: {
      color: color.accent,
      '&:hover': {
        color: color.accent2
      }
    },
    action: {
      color: color.action,
      '&:hover': {
        color: color.action2
      }
    },
    danger: {
      color: color.danger,
      '&:hover': {
        color: color.danger2
      }
    },
    success: {
      color: color.success,
      '&:hover': {
        color: color.success2
      }
    },
    warning: {
      color: color.warning,
      '&:hover': {
        color: color.warning2
      }
    },
    disabled: {
      color: color.disabled,
      '&:hover': {
        color: color.disabled2
      }
    }
  }[appearance] || '';
}
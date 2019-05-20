"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardTheme = cardTheme;
exports.cardContextTheme = cardContextTheme;
exports.cardSizeTheme = cardSizeTheme;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

function cardTheme(_ref) {
  var _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      border = _ref$theme.border,
      color = _ref$theme.color,
      elevate = _ref$theme.elevate,
      unit = _ref$theme.unit,
      radius = _ref$theme.radius,
      props = (0, _objectWithoutProperties2.default)(_ref, ["theme"]);
  var hoverTheme = props.hover ? {
    '&:hover': {
      boxShadow: elevate[3],
      transform: "translateY(-".concat(unit[3], ")")
    }
  } : {};
  return (0, _objectSpread2.default)({
    backgroundColor: color.background,
    border: border.thin,
    boxShadow: props.elevate ? elevate[3] : elevate[0],
    padding: unit[5],
    borderRadius: radius.rounded,
    transition: animation.easeMedium()
  }, hoverTheme);
}

function cardContextTheme(_ref2) {
  var context = _ref2.context,
      hover = _ref2.hover,
      _ref2$theme = _ref2.theme,
      color = _ref2$theme.color,
      border = _ref2$theme.border,
      elevate = _ref2$theme.elevate,
      unit = _ref2$theme.unit;
  var hoverTheme = hover ? {
    '&:hover': {
      backgroundColor: color["".concat(context, "2")],
      boxShadow: elevate[2],
      transform: "translateY(-".concat(unit[3], ")")
    }
  } : {};
  return {
    accent: {
      backgroundColor: color.accent,
      border: "1px solid ".concat(color['pink-300']),
      color: color.foreground,
      '&:active': (0, _objectSpread2.default)({}, hoverTheme),
      '&:focus': (0, _objectSpread2.default)({}, hoverTheme),
      '&:hover': (0, _objectSpread2.default)({}, hoverTheme)
    },
    danger: {
      backgroundColor: color.danger,
      border: "1px solid ".concat(color['red-300']),
      color: color.foreground,
      '&:active': (0, _objectSpread2.default)({}, hoverTheme),
      '&:focus': (0, _objectSpread2.default)({}, hoverTheme),
      '&:hover': (0, _objectSpread2.default)({}, hoverTheme)
    },
    action: {
      backgroundColor: color.action,
      border: "1px solid ".concat(color['light-blue-300']),
      color: color.foreground,
      '&:active': (0, _objectSpread2.default)({}, hoverTheme),
      '&:focus': (0, _objectSpread2.default)({}, hoverTheme),
      '&:hover': (0, _objectSpread2.default)({}, hoverTheme)
    },
    success: {
      backgroundColor: color.success,
      border: "1px solid ".concat(color['green-300']),
      color: color.foreground,
      '&:active': (0, _objectSpread2.default)({}, hoverTheme),
      '&:focus': (0, _objectSpread2.default)({}, hoverTheme),
      '&:hover': (0, _objectSpread2.default)({}, hoverTheme)
    },
    warning: {
      backgroundColor: color.warning,
      border: "1px solid ".concat(color['yellow-300']),
      color: color.foreground,
      '&:active': (0, _objectSpread2.default)({}, hoverTheme),
      '&:focus': (0, _objectSpread2.default)({}, hoverTheme),
      '&:hover': (0, _objectSpread2.default)({}, hoverTheme),
      context: context
    }
  }[context] || '';
}

function cardSizeTheme(_ref3) {
  var size = _ref3.size,
      unit = _ref3.theme.unit;
  return {
    collapse: {
      padding: 0
    },
    large: {
      padding: unit[7]
    },
    small: {
      padding: unit[3]
    }
  }[size] || '';
}
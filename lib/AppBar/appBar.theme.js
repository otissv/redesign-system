"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appBarTheme = appBarTheme;
exports.appBarAppearanceTheme = appBarAppearanceTheme;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var input = function input(color, radius) {
  return {
    background: 'hsla(0,0%,0%,0.1)',
    border: '1px solid #0000',
    borderRadius: radius.rounded,
    '&::placeholder': {
      color: color['grey-900']
    },
    '&:hover': {
      background: 'hsla(0,0%,0%,0.2)'
    },
    '&:focus': {
      background: 'hsla(0,0%,0%,0.2)'
    },
    '&:active': {
      background: 'hsla(0,0%, 0%,0.2)'
    }
  };
};

function appBarTheme(_ref) {
  var _ref2;

  var _ref$theme = _ref.theme,
      color = _ref$theme.color,
      radius = _ref$theme.radius,
      unit = _ref$theme.unit;
  return _ref2 = {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex'
  }, (0, _defineProperty2.default)(_ref2, "display", 'flex'), (0, _defineProperty2.default)(_ref2, "flexShrink", 0), (0, _defineProperty2.default)(_ref2, "minHeight", '56px'), (0, _defineProperty2.default)(_ref2, "position", 'relative'), (0, _defineProperty2.default)(_ref2, "width", '100%'), (0, _defineProperty2.default)(_ref2, "zIndex", '1100'), (0, _defineProperty2.default)(_ref2, "backgroundColor", color.backgroundInvert), (0, _defineProperty2.default)(_ref2, "color", color.foregroundInvert), (0, _defineProperty2.default)(_ref2, '>button.Button', {
    minHeight: 'inherit',
    border: '1px solid #0000',
    borderRadius: 0,
    '>svg.Icon': {
      paddingRight: 0
    }
  }), (0, _defineProperty2.default)(_ref2, 'input.Input', (0, _objectSpread2.default)({}, input(color, radius), {
    color: color.foregroundInvert
  })), _ref2;
}

function appBarAppearanceTheme(_ref3) {
  var appearance = _ref3.appearance,
      _ref3$theme = _ref3.theme,
      color = _ref3$theme.color,
      radius = _ref3$theme.radius;
  var appearanceInput = {
    'input.Input': (0, _objectSpread2.default)({}, input(color, radius), {
      color: color.foreground
    })
  };
  return {
    action: (0, _objectSpread2.default)({
      backgroundColor: color.action,
      color: '#ffffff'
    }, appearanceInput),
    accent: (0, _objectSpread2.default)({
      background: color.accent,
      color: '#ffffff'
    }, appearanceInput),
    danger: (0, _objectSpread2.default)({
      backgroundColor: color.danger,
      color: '#ffffff'
    }, appearanceInput),
    success: (0, _objectSpread2.default)({
      backgroundColor: color.success,
      color: '#ffffff'
    }, appearanceInput),
    warning: (0, _objectSpread2.default)({
      backgroundColor: color.warning,
      color: '#ffffff'
    }, appearanceInput)
  }[appearance] || '';
}
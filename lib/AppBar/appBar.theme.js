"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appBarTheme = appBarTheme;
exports.appBarAppearanceTheme = appBarAppearanceTheme;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

function appBarTheme(_ref) {
  var _ref2;

  (0, _objectDestructuringEmpty2.default)(_ref);
  return _ref2 = {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex'
  }, (0, _defineProperty2.default)(_ref2, "display", 'flex'), (0, _defineProperty2.default)(_ref2, "flexShrink", 0), (0, _defineProperty2.default)(_ref2, "minHeight", '56px'), (0, _defineProperty2.default)(_ref2, "position", 'relative'), (0, _defineProperty2.default)(_ref2, "width", '100%'), (0, _defineProperty2.default)(_ref2, "zIndex", '1100'), (0, _defineProperty2.default)(_ref2, "paddingLeft", '20px'), (0, _defineProperty2.default)(_ref2, "paddingRight", '20px'), _ref2;
}

function appBarAppearanceTheme(_ref3) {
  var appearance = _ref3.appearance,
      color = _ref3.theme.color;
  return {
    accent: {
      background: color.accent,
      color: '#ffffff'
    },
    danger: {
      backgroundColor: color.danger,
      color: '#ffffff'
    },
    primary: {
      backgroundColor: color.primary,
      color: '#ffffff'
    },
    success: {
      backgroundColor: color.success,
      color: '#ffffff'
    },
    warning: {
      backgroundColor: color.warning,
      color: '#ffffff'
    }
  }[appearance] || '';
}
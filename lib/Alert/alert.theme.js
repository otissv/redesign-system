"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertTheme = alertTheme;
exports.alertContextTheme = alertContextTheme;

function alertTheme(_ref) {
  var _ref$theme = _ref.theme,
      px = _ref$theme.unit.px,
      radius = _ref$theme.radius;
  return {
    position: 'relative',
    padding: "".concat(px.small, " ").concat(px.medium)
  };
}

function alertContextTheme(_ref2) {
  var context = _ref2.context,
      color = _ref2.theme.color;
  return {
    accent: {
      color: color.accent,
      background: '#fccfee'
    },
    danger: {
      color: '#f0506e',
      backgroundColor: '#fef4f6'
    },
    primary: {
      color: '#1e87f0',
      backgroundColor: '#d8eafc'
    },
    success: {
      color: '#32d296',
      backgroundColor: '#edfbf6'
    },
    warning: {
      color: '#faa05a',
      backgroundColor: '#fff6ee'
    }
  }[context] || '';
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertTheme = alertTheme;
exports.alertAppearanceTheme = alertAppearanceTheme;

function alertTheme(_ref) {
  var _ref$theme = _ref.theme,
      unit = _ref$theme.unit,
      color = _ref$theme.color;
  return {
    position: 'relative',
    padding: "".concat(unit[4])
  };
}

function alertAppearanceTheme(_ref2) {
  var appearance = _ref2.appearance,
      context = _ref2.context,
      _ref2$theme = _ref2.theme,
      border = _ref2$theme.border,
      color = _ref2$theme.color,
      theme = _ref2.theme;

  var _appearance = appearance || '';

  var _context = appearance && context ? "-".concat(context) : context ? context : '';

  var key = "".concat(_appearance).concat(_context);
  return {
    primary: {
      color: color.foregroundInvert,
      backgroundColor: color.backgroundInvert,
      border: border.thinTransparent
    },
    secondary: {
      backgroundColor: 'none',
      border: border.thin
    },
    accent: {
      color: color['accent-800'],
      backgroundColor: color['accent-100'],
      border: "1px solid ".concat(color['accent-100'])
    },
    'primary-accent': {
      color: color['accent-050'],
      backgroundColor: color['accent-500'],
      border: "1px solid ".concat(color['accent-500'])
    },
    'secondary-accent': {
      color: color['accent-300'],
      backgroundColor: 'none',
      border: "1px solid ".concat(color['accent-300'])
    },
    action: {
      color: color['action-800'],
      backgroundColor: color['action-100'],
      border: "1px solid ".concat(color['action-100'])
    },
    'primary-action': {
      color: color['action-050'],
      backgroundColor: color['action-500'],
      border: "1px solid ".concat(color['action-500'])
    },
    'secondary-action': {
      color: color['action-300'],
      backgroundColor: 'none',
      border: "1px solid ".concat(color['action-300'])
    },
    danger: {
      color: color['danger-800'],
      backgroundColor: color['danger-300'],
      border: "1px solid ".concat(color['danger-300'])
    },
    'primary-danger': {
      color: color['danger-050'],
      backgroundColor: color['danger-500'],
      border: "1px solid ".concat(color['danger-500'])
    },
    'secondary-danger': {
      color: color['danger-300'],
      backgroundColor: 'none',
      border: "1px solid ".concat(color['danger-300'])
    },
    success: {
      color: color['success-800'],
      backgroundColor: color['success-300'],
      border: "1px solid ".concat(color['success-300'])
    },
    'primary-success': {
      color: color['success-050'],
      backgroundColor: color['success-500'],
      border: "1px solid ".concat(color['success-500'])
    },
    'secondary-success': {
      color: color['success-300'],
      backgroundColor: 'none',
      border: "1px solid ".concat(color['success-300'])
    },
    warning: {
      color: color['warning-800'],
      backgroundColor: color['warning-300'],
      border: "1px solid ".concat(color['warning-300'])
    },
    'primary-warning': {
      color: color['warning-050'],
      backgroundColor: color['warning-500'],
      border: "1px solid ".concat(color['warning-500'])
    },
    'secondary-warning': {
      color: color['warning-300'],
      backgroundColor: 'none',
      border: "1px solid ".concat(color['warning-300'])
    }
  }[key] || '';
}
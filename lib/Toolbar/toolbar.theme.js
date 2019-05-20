"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toolbarTheme = toolbarTheme;
exports.toolbarAppearanceTheme = toolbarAppearanceTheme;

function toolbarTheme() {
  return {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexShrink: 0,
    minHeight: '56px',
    position: 'relative',
    width: '100%',
    zIndex: '1100',
    '@media (min-width: 600px)': {
      minHeight: '64px'
    },
    '@media (min-width: 0px) and (orientation: landscape)': {
      minHeight: '50px'
    }
  };
}

function toolbarAppearanceTheme(_ref) {
  var appearance = _ref.appearance,
      color = _ref.theme.color;
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floatLabelTheme = floatLabelTheme;
exports.floatLabelLabelTheme = floatLabelLabelTheme;
exports.floatLabelLabelFloatingTheme = floatLabelLabelFloatingTheme;
exports.floatLabelLabelActiveTheme = floatLabelLabelActiveTheme;
exports.floatLabelLabelContextTheme = floatLabelLabelContextTheme;

function floatLabelTheme(_ref) {
  var _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      font = _ref$theme.font;
  return {
    marginTop: '10px',
    position: 'relative',
    minHeight: '40px',
    lineHeight: "".concat(35 + parseInt(font.small, 10), "px"),
    transition: animation.easeMedium() // marginBottom: '30px'

  };
}

function floatLabelLabelTheme(_ref2) {
  var _ref2$theme = _ref2.theme,
      animation = _ref2$theme.animation,
      font = _ref2$theme.font;
  return {
    position: 'absolute',
    pointerEvents: 'none',
    top: '0',
    left: 0,
    height: 'inherit',
    margin: '3px',
    transition: animation.easeMedium('transform'),
    fontSize: font.default
  };
}

function floatLabelLabelFloatingTheme(_ref3) {
  var element = _ref3.element,
      floating = _ref3.floating,
      color = _ref3.theme.color;
  return floating ? {
    backgroundColor: color.background,
    transformOrigin: 'left',
    pointerEvents: 'none',
    transform: "translateY(-70%) scale(0.8)"
  } : null;
}

function floatLabelLabelActiveTheme(_ref4) {
  var active = _ref4.active,
      color = _ref4.theme.color;
  return active ? {
    color: color.active
  } : null;
}

function floatLabelLabelContextTheme(_ref5) {
  var context = _ref5.context,
      color = _ref5.theme.color;
  return {
    accent: {
      color: color.accent
    },
    danger: {
      color: color.danger
    },
    muted: {
      color: color.secondary
    },
    primary: {
      color: color.primary
    },
    success: {
      color: color.success
    },
    warning: {
      color: color.warning
    }
  }[context] || '';
}
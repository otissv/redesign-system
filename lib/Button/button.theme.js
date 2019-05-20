"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonTheme = buttonTheme;
exports.buttonAppearanceTheme = buttonAppearanceTheme;
exports.buttonDisabledTheme = buttonDisabledTheme;
exports.buttonSizeTheme = buttonSizeTheme;
exports.buttonStretchTheme = buttonStretchTheme;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

function buttonTheme(_ref) {
  var _ref$theme = _ref.theme,
      color = _ref$theme.color,
      border = _ref$theme.border,
      font = _ref$theme.font,
      unit = _ref$theme.unit,
      animation = _ref$theme.animation;
  return {
    backgroundColor: color.background,
    border: border.thinSecondary,
    boxShadow: 'none',
    boxSizing: 'border-box',
    color: color.foreground,
    cursor: 'pointer',
    display: 'inline-block',
    font: 'inherit',
    fontSize: font.default,
    lineHeight: '2.7',
    margin: 0,
    outline: 'none',
    overflow: 'visible',
    padding: "0 ".concat(unit[2]),
    textAlign: 'center',
    transition: animation.easeMedium(),
    verticalAlign: 'middle',
    '&:hover': {
      backgroundColor: color.background,
      border: border.thinTertiary
    },
    '&:focus': {
      backgroundColor: color.background,
      border: border.thinTertiary
    },
    '&:active': {
      backgroundColor: color.background,
      border: border.thinTertiary
    }
  };
}

function buttonAppearanceTheme(_ref2) {
  var appearance = _ref2.appearance,
      _ref2$theme = _ref2.theme,
      color = _ref2$theme.color,
      border = _ref2$theme.border;
  return {
    accent: {
      backgroundColor: color.accent,
      border: border.thinAccent,
      color: color.foreground,
      '&:hover': {
        backgroundColor: color.accent2,
        border: border.thinAccent
      },
      '&:active': {
        backgroundColor: color.accent2,
        border: border.thinAccent
      },
      '&:focus': {
        backgroundColor: color.accent2,
        border: border.thinAccent
      }
    },
    danger: {
      backgroundColor: color.danger,
      border: border.thinDanger,
      color: color.foreground,
      '&:hover': {
        backgroundColor: color.danger2,
        border: border.thinDanger
      },
      '&:active': {
        backgroundColor: color.danger2,
        border: border.thinDanger
      },
      '&:focus': {
        backgroundColor: color.danger2,
        border: border.thinDanger
      }
    },
    ghost: {
      backgroundColor: color.transparent,
      border: border.thinTransparent,
      '&:hover': {
        backgroundColor: color.background,
        border: border.thinSecondary,
        color: color.foreground
      },
      '&:focus': {
        backgroundColor: color.background,
        color: color.foreground
      },
      '&:active': {
        backgroundColor: color.background,
        color: color.foreground
      }
    },
    primary: {
      backgroundColor: color.primary,
      border: border.thinPrimary,
      color: color.foreground,
      '&:hover': {
        backgroundColor: color.primary2,
        border: border.thinPrimary
      },
      '&:active': {
        backgroundColor: color.primary2,
        border: border.thinPrimary
      },
      '&:focus': {
        backgroundColor: color.primary2,
        border: border.thinPrimary
      }
    },
    success: {
      backgroundColor: color.success,
      border: border.thinSuccess,
      color: color.foreground,
      '&:hover': {
        backgroundColor: color.success2,
        border: border.thinSuccess
      },
      '&:active': {
        backgroundColor: color.success2,
        border: border.thinSuccess
      },
      '&:focus': {
        backgroundColor: color.success2,
        border: border.thinSuccess
      }
    },
    warning: {
      backgroundColor: color.warning,
      border: border.thinWarning,
      color: color.foreground,
      '&:hover': {
        backgroundColor: color.warning2,
        border: border.thinWarning
      },
      '&:active': {
        backgroundColor: color.warning2,
        border: border.thinWarning
      },
      '&:focus': {
        backgroundColor: color.warning2,
        border: border.thinWarning
      }
    }
  }[appearance] || '';
}

function buttonDisabledTheme(_ref3) {
  var disabled = _ref3.disabled,
      _ref3$theme = _ref3.theme,
      color = _ref3$theme.color,
      border = _ref3$theme.border;
  var _disabled = {
    backgroundColor: '#e6e6e6',
    border: border.thinSecondary,
    color: color.thinTertiary,
    cursor: 'initial'
  };
  return disabled ? (0, _objectSpread2.default)({}, _disabled, {
    '&:hover': (0, _objectSpread2.default)({}, _disabled),
    '&:active': (0, _objectSpread2.default)({}, _disabled),
    '&:focus': (0, _objectSpread2.default)({}, _disabled)
  }) : '';
}

function buttonSizeTheme(_ref4) {
  var size = _ref4.size;
  return {
    large: {
      padding: '0 40px',
      lineHeight: '4'
    },
    small: {
      padding: '0 15px',
      lineHeight: '2'
    }
  }[size] || '';
}

function buttonStretchTheme(_ref5) {
  var stretch = _ref5.stretch;
  return stretch && 'width: 100%' || '';
}
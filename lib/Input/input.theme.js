"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputTheme = inputTheme;
exports.inputAppearanceTheme = inputAppearanceTheme;
exports.inputDisabledTheme = inputDisabledTheme;
exports.inputSizeTheme = inputSizeTheme;
exports.inputWidthsTheme = inputWidthsTheme;
exports.inputErrorTheme = inputErrorTheme;

function inputTheme(_ref) {
  var _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      border = _ref$theme.border,
      color = _ref$theme.color,
      font = _ref$theme.font,
      unit = _ref$theme.unit;
  return {
    '-webkitAppearance': 'none',
    background: color.transparent,
    border: border.thinTransparent,
    borderBottom: border.thinSecondary,
    borderRadius: 0,
    color: color.foreground,
    display: 'inline-block',
    fontSize: font.size.default,
    lineHeight: font.lineHeight.default,
    maxWidth: '100%',
    outline: 'none',
    overflow: 'visible',
    padding: '0',
    transition: animation.easeMedium(),
    verticalAlign: 'bottom',
    width: '100%',
    '&::placeholder': {
      color: 'inherit'
    }
  };
}

function inputAppearanceTheme(_ref2) {
  var appearance = _ref2.appearance,
      border = _ref2.theme.border;
  return {
    accent: {
      '&:hover': {
        borderBottom: border.thinAccent
      },
      '&:focus': {
        borderBottom: border.thinAccent
      },
      '&:active': {
        borderBottom: border.thinAccent
      }
    },
    blank: {
      '&:hover': {
        borderBottom: border.thinDashedSecondary
      },
      '&:focus': {
        borderBottom: border.thinDashedSecondary
      },
      '&:active': {
        borderBottom: border.thinDashedSecondary
      }
    },
    danger: {
      '&:active': {
        borderBottom: border.thinDanger
      },
      '&:focus': {
        borderBottom: border.thinDanger
      },
      '&:hover': {
        borderBottom: border.thinDanger
      }
    },
    overlay: {
      color: 'inherit',
      background: '#ffffff35',
      borderBottom: border.transparent,
      '&:active': {
        background: '#ffffff50',
        borderBottom: border.transparent
      },
      '&:focus': {
        background: '#ffffff50',
        borderBottom: border.transparent
      },
      '&:hover': {
        background: '#ffffff50',
        borderBottom: border.transparent
      }
    },
    primary: {
      '&:active': {
        borderBottom: border.thinPrimary
      },
      '&:focus': {
        borderBottom: border.thinPrimary
      },
      '&:hover': {
        borderBottom: border.thinPrimary
      }
    },
    success: {
      '&:active': {
        borderBottom: border.thinSuccess
      },
      '&:focus': {
        borderBottom: border.thinSuccess
      },
      '&:hover': {
        borderBottom: border.thinSuccess
      }
    },
    warning: {
      '&:active': {
        borderBottom: border.thinWarning
      },
      '&:focus': {
        borderBottom: border.thinWarning
      },
      '&:hover': {
        borderBottom: border.thinWarning
      }
    },
    error: {
      borderBottom: border.thinError
    }
  }[appearance] || '';
}

function inputDisabledTheme(_ref3) {
  var disabled = _ref3.disabled,
      _ref3$theme = _ref3.theme,
      color = _ref3$theme.color,
      border = _ref3$theme.border;
  return disabled ? {
    color: color.muted,
    background: color.secondary,
    border: border.thinSecondary,
    '&:active': {
      border: border.thinSecondary
    },
    '&:focus': {
      border: border.thinSecondary
    },
    '&:hover': {
      border: border.thinSecondary
    }
  } : '';
}

function inputSizeTheme(_ref4) {
  var size = _ref4.size,
      font = _ref4.theme.font;
  return {
    large: {
      height: '55px',
      padding: '0 12px',
      fontSize: font.large
    },
    small: {
      height: '30px',
      padding: '0 8px',
      fontSize: font.default
    }
  }[size] || '';
}

function inputWidthsTheme(_ref5) {
  var widths = _ref5.widths;
  return {
    large: {
      width: '300px'
    },
    medium: {
      width: '200px'
    },
    small: {
      width: '130px'
    },
    xlarge: {
      width: '500px'
    },
    xsmall: {
      width: '40px'
    }
  }[widths] || '';
}

function inputErrorTheme(_ref6) {
  var hasError = _ref6.hasError,
      _ref6$theme = _ref6.theme,
      border = _ref6$theme.border,
      color = _ref6$theme.color;
  return hasError ? {
    color: color.danger,
    borderBottom: border.thinDanger
  } : '';
}
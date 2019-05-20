"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textareaTheme = textareaTheme;
exports.textareaAppearanceTheme = textareaAppearanceTheme;
exports.textareaDisabledTheme = textareaDisabledTheme;
exports.textareaWidthsTheme = textareaWidthsTheme;

function textareaTheme(_ref) {
  var _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      font = _ref$theme.font,
      border = _ref$theme.border,
      color = _ref$theme.color;
  return {
    background: color.background,
    border: border.thinSecondary,
    borderRadius: 0,
    color: color.foreground,
    maxWidth: "calc(100% - 6px )",
    lineHeight: font.lineHeight.default,
    minHeight: "calc(".concat(font.size.default, " * 3.5)"),
    outline: 'none',
    verticalAlign: 'top',
    webkitAppearance: 'none',
    width: "calc(100% - 6px )",
    transition: animation.easeMedium(),
    '&:hover': {
      border: border.thinSecondary
    },
    '&:active': {
      border: border.thinSecondary
    },
    '&:focus': {
      border: border.thinSecondary
    }
  };
}

function textareaAppearanceTheme(_ref2) {
  var appearance = _ref2.appearance,
      border = _ref2.theme.border;
  return {
    accent: {
      border: border.thinAccent,
      '&:hover': {
        border: border.thinAccent2
      },
      '&:active': {
        border: border.thinAccent2
      },
      '&:focus': {
        border: border.thinAccent2
      }
    },
    danger: {
      border: border.thinDanger,
      '&:hover': {
        border: border.thinDanger2
      },
      '&:active': {
        border: border.thinDanger2
      },
      '&:focus': {
        border: border.thinDanger2
      }
    },
    primary: {
      border: border.thinPrimary,
      '&:hover': {
        border: border.thinPrimary2
      },
      '&:active': {
        border: border.thinPrimary2
      },
      '&:focus': {
        border: border.thinPrimary2
      }
    },
    success: {
      border: border.thinSuccess,
      '&:hover': {
        border: border.thinSuccess2
      },
      '&:active': {
        border: border.thinSuccess2
      },
      '&:focus': {
        border: border.thinSuccess2
      }
    },
    warning: {
      border: border.thinWarning,
      '&:hover': {
        border: border.thinWarning2
      },
      '&:active': {
        border: border.thinWarning2
      },
      '&:focus': {
        border: border.thinWarning2
      }
    },
    error: {
      border: border.thinError
    }
  }[appearance] || '';
}

function textareaDisabledTheme(_ref3) {
  var disabled = _ref3.disabled,
      _ref3$theme = _ref3.theme,
      color = _ref3$theme.color,
      border = _ref3$theme.border;
  return {
    disabled: {
      color: color.muted,
      backgroundColor: color.secondary,
      border: border.thinSecondary,
      '&:hover': {
        backgroundColor: color.secondary,
        border: border.thinSecondary
      },
      '&:active': {
        backgroundColor: color.secondary,
        border: border.thinSecondary
      },
      '&:focus': {
        backgroundColor: color.secondary,
        border: border.thinSecondary
      }
    }
  }[disabled] || '';
}

function textareaWidthsTheme(_ref4) {
  var widths = _ref4.widths;
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
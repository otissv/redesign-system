"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textareaTheme = textareaTheme;
exports.textareaAppearanceTheme = textareaAppearanceTheme;
exports.textareaWidthsTheme = textareaWidthsTheme;

function textareaTheme(_ref) {
  var _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      border = _ref$theme.border,
      color = _ref$theme.color,
      font = _ref$theme.font,
      unit = _ref$theme.unit;
  return {
    background: 'none',
    border: border.thinTransparent,
    borderRadius: 0,
    color: color.foreground,
    lineHeight: font.lineHeight.default,
    maxWidth: "calc(100% - 6px )",
    minHeight: "calc(".concat(font.size.default, " * 3.5)"),
    outline: 0,
    padding: unit[2],
    verticalAlign: 'top',
    webkitAppearance: 'none',
    width: "calc(100% - 6px )",
    transition: animation.easeMedium(),
    '&::placeholder': {
      color: color['grey-200']
    },
    '&:hover': {
      background: color['grey-500'],
      border: border.thinSecondary
    },
    '&:active': {
      background: color['grey-700'],
      border: border.thinSecondary
    },
    '&:focus': {
      background: color['grey-700'],
      border: border.thinSecondary,
      boxShadow: "0 0 0 0.2em ".concat(color.outline),
      zIndex: 2
    }
  };
}

function textareaAppearanceTheme(_ref2) {
  var appearance = _ref2.appearance,
      _ref2$theme = _ref2.theme,
      border = _ref2$theme.border,
      color = _ref2$theme.color;
  return {
    primary: {
      border: border.thinSecondary,
      background: color['grey-600'],
      '&:hover': {
        background: color['grey-500'],
        border: border.thinSecondary
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinSecondary
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinSecondary,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    secondary: {
      border: border.thinSecondary,
      '&:hover': {
        background: color['grey-500'],
        border: border.thinSecondary
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinSecondary
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinSecondary,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    accent: {
      '&:hover': {
        background: color['grey-500'],
        border: border.thinAccent2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinAccent2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinAccent2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    'primary-accent': {
      border: border.thinAccent,
      background: color['grey-600'],
      '&:hover': {
        background: color['grey-500'],
        border: border.thinAccent2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinAccent2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinAccent2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    'secondary-accent': {
      border: border.thinAccent,
      '&:hover': {
        background: color['grey-500'],
        border: border.thinAccent2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinAccent2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinAccent2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    action: {
      '&:hover': {
        background: color['grey-500'],
        border: border.thinAction2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinAction2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinAction2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    'primary-action': {
      border: border.thinAction,
      background: color['grey-600'],
      '&:hover': {
        background: color['grey-500'],
        border: border.thinAction2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinAction2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinAction2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    'secondary-action': {
      border: border.thinAction,
      '&:hover': {
        background: color['grey-500'],
        border: border.thinAction2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinAction2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinAction2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    danger: {
      '&:hover': {
        background: color['grey-500'],
        border: border.thinDanger2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinDanger2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinDanger2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    'primary-danger': {
      border: border.thinDanger,
      background: color['grey-600'],
      '&:hover': {
        background: color['grey-500'],
        border: border.thinDanger2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinDanger2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinDanger2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    'secondary-danger': {
      border: border.thinDanger,
      '&:hover': {
        background: color['grey-500'],
        border: border.thinDanger2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinDanger2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinDanger2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    success: {
      '&:hover': {
        background: color['grey-500'],
        border: border.thinSuccess2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinSuccess2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinSuccess2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    'primary-success': {
      border: border.thinSuccess,
      background: color['grey-600'],
      '&:hover': {
        background: color['grey-500'],
        border: border.thinSuccess2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinSuccess2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinSuccess2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    'secondary-success': {
      border: border.thinSuccess,
      '&:hover': {
        background: color['grey-500'],
        border: border.thinSuccess2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinSuccess2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinSuccess2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    warning: {
      '&:hover': {
        background: color['grey-500'],
        border: border.thinWarning2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinWarning2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinWarning2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    'primary-warning': {
      border: border.thinWarning,
      background: color['grey-600'],
      '&:hover': {
        background: color['grey-500'],
        border: border.thinWarning2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinWarning2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinWarning2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    'secondary-warning': {
      border: border.thinWarning,
      '&:hover': {
        background: color['grey-500'],
        border: border.thinWarning2
      },
      '&:active': {
        background: color['grey-700'],
        border: border.thinWarning2
      },
      '&:focus': {
        background: color['grey-700'],
        border: border.thinWarning2,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    disabled: {
      color: color.disabled,
      border: border.thinDisabled,
      backgroundColor: color.disabled,
      '&:hover': {
        backgroundColor: color.disabled,
        border: border.thinDisabled
      },
      '&:active': {
        backgroundColor: color.disabled,
        border: border.thinDisabled
      },
      '&:focus': {
        backgroundColor: color.disabled,
        border: border.thinDisabled,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    'primary-disabled': {
      color: color.disabled,
      border: border.thinDisabled,
      backgroundColor: color.disabled,
      '&:hover': {
        backgroundColor: color.disabled,
        border: border.thinDisabled
      },
      '&:active': {
        backgroundColor: color.disabled,
        border: border.thinDisabled
      },
      '&:focus': {
        backgroundColor: color.disabled,
        border: border.thinDisabled,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    },
    'secondary-disabled': {
      color: color.disabled,
      border: border.thinDisabled,
      backgroundColor: color.disabled,
      '&:hover': {
        backgroundColor: color.disabled,
        border: border.thinDisabled
      },
      '&:active': {
        backgroundColor: color.disabled,
        border: border.thinDisabled
      },
      '&:focus': {
        backgroundColor: color.disabled,
        border: border.thinDisabled,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      }
    }
  }[appearance] || '';
}

function textareaWidthsTheme(_ref3) {
  var widths = _ref3.widths;
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
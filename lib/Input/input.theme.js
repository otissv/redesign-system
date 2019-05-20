"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputTheme = inputTheme;
exports.inputAppearanceTheme = inputAppearanceTheme;
exports.inputSizeTheme = inputSizeTheme;
exports.inputWidthsTheme = inputWidthsTheme;

function inputTheme(_ref) {
  var _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      border = _ref$theme.border,
      color = _ref$theme.color,
      font = _ref$theme.font,
      radius = _ref$theme.radius,
      unit = _ref$theme.unit;
  return {
    '-webkitAppearance': 'none',
    background: color['grey-600'],
    border: border.transparent,
    borderBottom: border.thinForeground,
    borderTopLeftRadius: radius.rounded,
    borderTopRightRadius: radius.rounded,
    color: color.foreground,
    display: 'inline-block',
    fontSize: font.size.default,
    lineHeight: font.lineHeight.default,
    outline: 0,
    overflow: 'visible',
    padding: unit[2],
    verticalAlign: 'bottom',
    transition: animation.easeMedium(),
    '&:hover': {
      background: color['grey-500']
    },
    '&:focus': {
      background: color['grey-700'],
      boxShadow: "0 0 0 0.2em ".concat(color.outline),
      zIndex: 2
    },
    '&:active': {
      background: color['grey-700']
    },
    '&::placeholder': {
      color: color['grey-200']
    }
  };
}

function inputAppearanceTheme(_ref2) {
  var appearance = _ref2.appearance,
      _ref2$theme = _ref2.theme,
      color = _ref2$theme.color,
      border = _ref2$theme.border;
  return {
    secondary: {
      background: border.transparent,
      border: border.thinForeground,
      '&:hover': {
        background: color['grey-500']
      },
      '&:focus': {
        background: color['grey-700'],
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        background: color['grey-700']
      }
    },
    tertiary: {
      background: 'none',
      border: border.transparent,
      borderBottom: border.thinForeground,
      '&:hover': {
        background: color['grey-500']
      },
      '&:focus': {
        background: color['grey-700'],
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        background: color['grey-700']
      }
    },
    'primary-accent': {
      background: color['pink-600'],
      borderBottom: border.thinForeground,
      '&:hover': {
        background: color['pink-500']
      },
      '&:focus': {
        background: color['pink-700'],
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        background: color['pink-700']
      }
    },
    'secondary-accent': {
      border: border.thinAccent,
      borderBottom: border.thinAccent,
      background: border.transparent,
      '&:hover': {
        background: color['grey-500']
      },
      '&:focus': {
        background: color['grey-700'],
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        background: color['grey-700']
      }
    },
    'tertiary-accent': {
      background: 'none',
      border: border.transparent,
      borderBottom: border.thinAccent,
      '&:hover': {
        borderBottom: border.thinAccent
      },
      '&:focus': {
        borderBottom: border.thinAccent,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        borderBottom: border.thinAccent
      }
    },
    'primary-action': {
      background: color['light-blue-600'],
      borderBottom: border.thinForeground,
      '&:hover': {
        background: color['light-blue-500']
      },
      '&:focus': {
        background: color['light-blue-700'],
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        background: color['light-blue-700']
      }
    },
    'secondary-action': {
      border: border.thinAction,
      borderBottom: border.thinAction,
      background: border.transparent,
      '&:hover': {
        background: color['grey-500']
      },
      '&:focus': {
        background: color['grey-700'],
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        background: color['grey-700']
      }
    },
    'tertiary-action': {
      background: 'none',
      border: border.transparent,
      borderBottom: border.thinAction,
      '&:active': {
        borderBottom: border.thinAction
      },
      '&:focus': {
        borderBottom: border.thinAction,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:hover': {
        borderBottom: border.thinAction
      }
    },
    'primary-danger': {
      background: color['red-600'],
      borderBottom: border.thinForeground,
      '&:hover': {
        background: color['red-500']
      },
      '&:focus': {
        background: color['red-700'],
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        background: color['red-700']
      }
    },
    'secondary-danger': {
      border: border.thinDanger,
      borderBottom: border.thinDanger,
      background: border.transparent,
      '&:hover': {
        background: color['grey-500']
      },
      '&:focus': {
        background: color['grey-700'],
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        background: color['grey-700']
      }
    },
    'tertiary-danger': {
      background: 'none',
      border: border.transparent,
      borderBottom: border.thinDanger,
      '&:active': {
        borderBottom: border.thinDanger
      },
      '&:focus': {
        borderBottom: border.thinDanger,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:hover': {
        borderBottom: border.thinDanger
      }
    },
    'primary-success': {
      background: color['green-600'],
      borderBottom: border.thinForeground,
      '&:hover': {
        background: color['green-500']
      },
      '&:focus': {
        background: color['green-700'],
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        background: color['green-700']
      }
    },
    'secondary-success': {
      border: border.thinSuccess,
      borderBottom: border.thinSuccess,
      background: border.transparent,
      '&:hover': {
        background: color['grey-500']
      },
      '&:focus': {
        background: color['grey-700'],
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        background: color['grey-700']
      }
    },
    'tertiary-success': {
      background: 'none',
      border: border.transparent,
      borderBottom: border.thinSuccess,
      '&:active': {
        borderBottom: border.thinSuccess
      },
      '&:focus': {
        borderBottom: border.thinSuccess,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:hover': {
        borderBottom: border.thinSuccess
      }
    },
    'primary-warning': {
      background: color['yellow-600'],
      borderBottom: border.thinForeground,
      '&:hover': {
        background: color['yellow-500']
      },
      '&:focus': {
        background: color['yellow-700'],
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        background: color['yellow-700']
      }
    },
    'secondary-warning': {
      border: border.thinWarning,
      borderBottom: border.thinWarning,
      background: border.transparent,
      '&:hover': {
        background: color['grey-500']
      },
      '&:focus': {
        background: color['grey-700'],
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:active': {
        background: color['grey-700']
      }
    },
    'tertiary-warning': {
      background: 'none',
      border: border.transparent,
      borderBottom: border.thinWarning,
      '&:active': {
        borderBottom: border.thinWarning
      },
      '&:focus': {
        borderBottom: border.thinWarning,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:hover': {
        borderBottom: border.thinWarning
      }
    },
    disabled: {
      color: color['grey-900'],
      background: color.disabled,
      border: border.disabled,
      borderBottom: border.disabled,
      '&:active': {
        background: color.disabled,
        border: border.disabled
      },
      '&:focus': {
        background: color.disabled,
        border: border.disabled,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:hover': {
        background: color.disabled,
        border: border.disabled
      }
    },
    'primary-disabled': {
      color: color['grey-900'],
      background: color.disabled,
      border: border.disabled,
      borderBottom: border.disabled,
      '&:active': {
        background: color.disabled,
        border: border.disabled
      },
      '&:focus': {
        background: color.disabled,
        border: border.disabled,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:hover': {
        background: color.disabled,
        border: border.disabled
      }
    },
    'secondary-disabled': {
      color: color['grey-900'],
      background: color.disabled,
      border: border.disabled,
      borderBottom: border.disabled,
      '&:active': {
        background: color.disabled,
        border: border.disabled
      },
      '&:focus': {
        background: color.disabled,
        border: border.disabled,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:hover': {
        background: color.disabled,
        border: border.disabled
      }
    },
    'tertiary-disabled': {
      color: color['grey-900'],
      background: color.disabled,
      border: border.disabled,
      borderBottom: border.disabled,
      '&:active': {
        background: color.disabled,
        border: border.disabled,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:focus': {
        background: color.disabled,
        border: border.disabled,
        boxShadow: "0 0 0 0.2em ".concat(color.outline),
        zIndex: 2
      },
      '&:hover': {
        background: color.disabled,
        border: border.disabled
      }
    }
  }[appearance] || '';
}

function inputSizeTheme(_ref3) {
  var size = _ref3.size,
      font = _ref3.theme.font;
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

function inputWidthsTheme(_ref4) {
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
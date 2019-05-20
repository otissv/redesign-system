"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typographyTheme = typographyTheme;
exports.typographyContextTheme = typographyContextTheme;
exports.typographyElementTheme = typographyElementTheme;
exports.typographyModifyTheme = typographyModifyTheme;
exports.typographyWrapTheme = typographyWrapTheme;
exports.typographyTransformTheme = typographyTransformTheme;
exports.typographyTextAlignTheme = typographyTextAlignTheme;

function typographyTheme(_ref) {
  var animation = _ref.theme.animation;
  return {
    transition: animation.easeMedium()
    /* =====================================
     * Align
     * =================================== */

    /* =====================================
     * Vertical
     * =================================== */

  };
}

function typographyContextTheme(_ref2) {
  var context = _ref2.context,
      color = _ref2.theme.color;
  return {
    accent: {
      color: color.accent
    },
    action: {
      color: color.action
    },
    danger: {
      color: color.danger
    },
    disabled: {
      color: color.disabled
    },
    success: {
      color: color.success
    },
    warning: {
      color: color.warning
    }
  }[context] || '';
}

function typographyElementTheme(_ref3) {
  var as = _ref3.as,
      _ref3$theme = _ref3.theme,
      color = _ref3$theme.color,
      border = _ref3$theme.border,
      unit = _ref3$theme.unit;
  return {
    code: {
      background: color['grey-200'],
      color: color.accent,
      padding: '0 4px',
      whiteSpace: 'nowrap'
    },
    hr: {
      border: border.thin,
      margin: "calc(".concat(unit.default, " - 1px) 0"),
      textShadow: 'none',
      height: 0
    },
    q: {
      fontStyle: 'italic',
      '&:before': {
        content: ' open-quote'
      },
      '&:after': {
        content: ' close-quote'
      }
    },
    sm: {
      fontSize: '80%'
    },
    strong: {
      fontWeight: 700
    }
  }[as] || '';
}

function typographyModifyTheme(_ref4) {
  var modify = _ref4.modify,
      _ref4$theme = _ref4.theme,
      color = _ref4$theme.color,
      font = _ref4$theme.font;
  return {
    lead: {
      fontSize: font.x1,
      lineHeight: 1.5,
      fontWeight: 300
    },
    meta: {
      fontSize: font.small,
      color: color['grey-500'],
      lineHeight: 1.4
    }
  }[modify] || '';
}

function typographyWrapTheme(_ref5) {
  var wrap = _ref5.wrap;
  return {
    truncate: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    break: {
      wordWrap: 'break-word',
      hyphens: 'auto'
    },
    nowrap: {
      whiteSpace: 'nowrap'
    }
  }[wrap] || '';
}

function typographyTransformTheme(_ref6) {
  var textTransform = _ref6.textTransform;
  return {
    capitalize: {
      textTransform: 'capitalize'
    },
    lowercase: {
      textTransform: 'lowercase'
    },
    uppercase: {
      textTransform: 'uppercase'
    }
  }[textTransform] || '';
}

function typographyTextAlignTheme(_ref7) {
  var textAlign = _ref7.textAlign;
  return {
    left: {
      textAlign: 'left'
    },
    leftSmall: {
      textAlign: 'left'
    },
    leftMedium: {
      textAlign: 'left'
    },
    leftLarge: {
      textAlign: 'left'
    },
    right: {
      textAlign: 'right'
    },
    rightSmall: {
      textAlign: 'right'
    },
    rightMedium: {
      textAlign: 'right'
    },
    center: {
      textAlign: 'center'
    },
    centerSmall: {
      textAlign: 'center'
    },
    centerMedium: {
      textAlign: 'center'
    },
    centerLarge: {
      textAlign: 'center'
    },
    justify: {
      textAlign: 'justify'
    }
  }[textAlign] || '';
}
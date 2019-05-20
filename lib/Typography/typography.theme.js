"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typographyTheme = typographyTheme;
exports.typographyAppearanceTheme = typographyAppearanceTheme;
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

function typographyAppearanceTheme(_ref2) {
  var appearance = _ref2.appearance,
      color = _ref2.theme.color;
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
  }[appearance] || '';
}

function typographyElementTheme(_ref3) {
  var element = _ref3.element,
      _ref3$theme = _ref3.theme,
      color = _ref3$theme.color,
      border = _ref3$theme.border;
  return {
    code: {
      background: color.secondary,
      color: color.primary,
      padding: '0 4px',
      whiteSpace: 'nowrap'
    },
    hr: {
      border: border.thinSecondary,
      margin: '20px 0',
      textShadow: 'none'
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
  }[element] || '';
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
      color: color.secondary,
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
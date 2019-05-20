"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badgeTheme = badgeTheme;
exports.badgeContextTheme = badgeContextTheme;
exports.badgePillTheme = badgePillTheme;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

function badgeTheme(_ref) {
  (0, _objectDestructuringEmpty2.default)(_ref);
  return {
    display: 'inline-block',
    fontWeight: 700,
    padding: '0.25em 0.4em',
    fontSize: '90%',
    lineHeight: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: '2px',
    color: '#fff'
  };
}

function badgeContextTheme(_ref2) {
  var context = _ref2.context,
      color = _ref2.theme.color;
  return {
    accent: {
      background: color.accent
    },
    danger: {
      backgroundColor: color.danger
    },
    primary: {
      backgroundColor: color.primary
    },
    success: {
      backgroundColor: color.success
    },
    warning: {
      backgroundColor: color.warning
    }
  }[context] || '';
}

function badgePillTheme(_ref3) {
  var pill = _ref3.pill,
      color = _ref3.theme.color;
  return pill ? {
    paddingRight: ' 0.6em',
    paddingLeft: '0.6em',
    borderRadius: '10rem'
  } : '';
}
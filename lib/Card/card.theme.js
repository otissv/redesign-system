"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardTheme = cardTheme;
exports.cardAppearanceTheme = cardAppearanceTheme;
exports.cardCollapseTheme = cardCollapseTheme;
exports.cardSizeTheme = cardSizeTheme;
exports.cardBodyTheme = cardBodyTheme;
exports.cardFooterTheme = cardFooterTheme;
exports.cardHeaderTheme = cardHeaderTheme;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

function cardTheme(_ref) {
  var _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      depth = _ref$theme.depth,
      px = _ref$theme.unit.px,
      props = (0, _objectWithoutProperties2.default)(_ref, ["theme"]);
  var hoverTheme = props.hover ? {
    '&:hover': {
      boxShadow: depth[3],
      // transform: 'scale(1.005, 1.005)',
      transform: 'translateY(-3px)'
    }
  } : {};
  return (0, _objectSpread2.default)({
    boxShadow: props.depth ? depth[1] : depth[0],
    borderRadius: '5px',
    padding: px.small,
    transition: animation.easeMedium()
  }, hoverTheme);
}

function cardAppearanceTheme(_ref2) {
  var appearance = _ref2.appearance,
      hover = _ref2.hover,
      _ref2$theme = _ref2.theme,
      color = _ref2$theme.color,
      border = _ref2$theme.border,
      depth = _ref2$theme.depth;
  var hoverTheme = hover ? {
    '&:hover': {
      boxShadow: depth[2],
      // transform: 'scale(1.005, 1.005)',
      transform: 'translateY(-3px)'
    }
  } : {};
  return {
    accent: {
      backgroundColor: color.accent,
      border: border.thinAccent2,
      color: color.foregroundInvert,
      '&:active': (0, _objectSpread2.default)({
        backgroundColor: color.accent2,
        border: border.thinAccent2
      }, hoverTheme),
      '&:focus': (0, _objectSpread2.default)({
        backgroundColor: color.accent2,
        border: border.thinAccent2
      }, hoverTheme),
      '&:hover': (0, _objectSpread2.default)({
        backgroundColor: color.accent2,
        border: border.thinAccent2
      }, hoverTheme)
    },
    danger: {
      backgroundColor: color.danger,
      border: border.thinDanger,
      color: color.foregroundInvert,
      '&:active': (0, _objectSpread2.default)({
        backgroundColor: color.danger2,
        border: border.thinDanger2
      }, hoverTheme),
      '&:focus': (0, _objectSpread2.default)({
        backgroundColor: color.danger2,
        border: border.thinDanger2
      }, hoverTheme),
      '&:hover': (0, _objectSpread2.default)({
        backgroundColor: color.danger2,
        border: border.thinDanger2
      }, hoverTheme)
    },
    ghost: {
      backgroundColor: color.transparent,
      border: border.thinTransparent,
      '&:active': (0, _objectSpread2.default)({
        backgroundColor: color.background,
        border: border.thinTransparent,
        color: color.foreground
      }, hoverTheme),
      '&:focus': (0, _objectSpread2.default)({
        backgroundColor: color.background,
        border: border.thinTransparent,
        color: color.foreground
      }, hoverTheme),
      '&:hover': (0, _objectSpread2.default)({
        backgroundColor: color.background,
        border: border.thinTransparent,
        color: color.foreground
      }, hoverTheme)
    },
    primary: {
      backgroundColor: color.primary,
      border: border.thinPrimary,
      color: color.foregroundInvert,
      '&:active': (0, _objectSpread2.default)({
        backgroundColor: color.primary2,
        border: border.thinPrimary2
      }, hoverTheme),
      '&:focus': (0, _objectSpread2.default)({
        backgroundColor: color.primary2,
        border: border.thinPrimary2
      }, hoverTheme),
      '&:hover': (0, _objectSpread2.default)({
        backgroundColor: color.primary2,
        border: border.thinPrimary2
      }, hoverTheme)
    },
    success: {
      backgroundColor: color.success,
      border: border.thinSuccess,
      color: color.foregroundInvert,
      '&:active': (0, _objectSpread2.default)({
        backgroundColor: color.success2,
        border: border.thinSuccess2
      }, hoverTheme),
      '&:focus': (0, _objectSpread2.default)({
        backgroundColor: color.success2,
        border: border.thinSuccess2
      }, hoverTheme),
      '&:hover': (0, _objectSpread2.default)({
        backgroundColor: color.success2,
        border: border.thinSuccess2
      }, hoverTheme)
    },
    warning: {
      backgroundColor: color.warning,
      border: border.thinWarning,
      color: color.foregroundInvert,
      '&:active': (0, _objectSpread2.default)({
        backgroundColor: color.warning2,
        border: border.thinWarning2
      }, hoverTheme),
      '&:focus': (0, _objectSpread2.default)({
        backgroundColor: color.warning2,
        border: border.thinWarning2
      }, hoverTheme),
      '&:hover': (0, _objectSpread2.default)({
        backgroundColor: color.warning2,
        border: border.thinWarning2
      }, hoverTheme)
    }
  }[appearance] || '';
}

function cardCollapseTheme(_ref3) {
  var collapse = _ref3.collapse;
  return collapse ? {
    padding: 0
  } : '';
}

function cardSizeTheme(_ref4) {
  var size = _ref4.size,
      px = _ref4.theme.unit.px;
  return {
    large: {
      padding: px.xlarge
    },
    small: {
      padding: px.xsmall
    }
  }[size] || '';
}

function cardBodyTheme(_ref5) {
  var px = _ref5.theme.unit.px;
  return {
    overflow: 'hidden'
  };
}

function cardFooterTheme(_ref6) {
  (0, _objectDestructuringEmpty2.default)(_ref6);
  return {};
}

function cardHeaderTheme(_ref7) {
  var border = _ref7.theme.border;
  return {
    borderBottom: border.thinSecondary
  };
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accordionTheme = accordionTheme;
exports.accordionButtonTheme = accordionButtonTheme;
exports.accordionButtonIconTheme = accordionButtonIconTheme;
exports.accordionContentTheme = accordionContentTheme;
exports.accordionItemTheme = accordionItemTheme;

function accordionTheme(_ref) {
  var _ref$theme = _ref.theme,
      animation = _ref$theme.animation,
      border = _ref$theme.border,
      color = _ref$theme.color,
      font = _ref$theme.font,
      spacing = _ref$theme.spacing,
      widths = _ref$theme.widths;
  return {
    flex: 1,
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    transition: animation.easeMedium()
  };
}

function accordionButtonTheme(_ref2) {
  var _ref2$theme = _ref2.theme,
      animation = _ref2$theme.animation,
      color = _ref2$theme.color,
      font = _ref2$theme.font;
  return {
    textAlign: 'left',
    borderRadius: 0
  };
}

function accordionButtonIconTheme(_ref3) {
  var active = _ref3.active,
      _ref3$theme = _ref3.theme,
      animation = _ref3$theme.animation,
      color = _ref3$theme.color,
      unit = _ref3$theme.unit;
  return {
    float: 'right',
    padding: unit[2],
    transform: active ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
    transition: animation.easeMedium()
  };
}

function accordionContentTheme(_ref4) {
  var _ref4$theme = _ref4.theme,
      animation = _ref4$theme.animation,
      border = _ref4$theme.border,
      color = _ref4$theme.color,
      font = _ref4$theme.font,
      spacing = _ref4$theme.spacing,
      widths = _ref4$theme.widths;
  return {
    overflow: 'hidden',
    padding: 0,
    transition: animation.easeMedium()
  };
}

function accordionItemTheme(_ref5) {
  var animation = _ref5.theme.animation;
  return {
    cursor: 'pointer',
    display: 'list-item',
    lineHeight: 1.4,
    margin: 0,
    overflow: 'hidden',
    padding: 0,
    textAlign: '-webkit-match-parent',
    transition: animation.easeMedium()
  };
}
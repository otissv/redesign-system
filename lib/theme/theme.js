"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.theme = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _animation = require("./animation.theme");

var _borders = require("./borders");

var _colors = require("./colors");

var _elevate = require("./elevate");

var _fonts = require("./fonts");

var _scrollbar = require("./scrollbar.theme");

var _units = require("./units");

var _radius = require("./radius");

var _shared = require("./shared.theme");

var theme = function theme(props) {
  var _color = (0, _colors.colorTheme)(props);

  var _unit = (0, _units.unitTheme)(props);

  var _props = (0, _objectSpread2.default)({}, props, {
    color: _color,
    unit: _unit
  });

  var base = {
    animation: (0, _animation.animationTheme)(_props),
    border: (0, _borders.borderTheme)(_props),
    color: _color,
    elevate: (0, _elevate.elevateTheme)(_props),
    font: (0, _fonts.fontTheme)(_props),
    radius: (0, _radius.radiusTheme)(_props),
    scrollbar: (0, _scrollbar.scrollbarTheme)(_props),
    unit: _unit
  };
  return (0, _objectSpread2.default)({}, base, {
    shared: (0, _shared.sharedTheme)(base)
  });
};

exports.theme = theme;

var _default = theme(window.__theme);

exports.default = _default;
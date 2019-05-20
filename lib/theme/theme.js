"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _animation = require("./animation.theme");

var _border = require("./border.theme");

var _color2 = require("./color.theme");

var _depth = require("./depth.theme");

var _font = require("./font.theme");

var _scrollbar = require("./scrollbar.theme");

var _unit2 = require("./unit.theme");

var _radius = require("./radius.theme");

var _shared = require("./shared.theme");

var theme = function theme(props) {
  var _color = (0, _color2.colorTheme)(props);

  var _unit = (0, _unit2.unitTheme)(props);

  var _props = (0, _objectSpread2.default)({}, props, {
    color: _color,
    unit: _unit
  });

  var base = {
    animation: (0, _animation.animationTheme)(_props),
    border: (0, _border.borderTheme)(_props),
    color: _color,
    depth: (0, _depth.depthTheme)(_props),
    font: (0, _font.fontTheme)(_props),
    radius: (0, _radius.radiusTheme)(_props),
    scrollbar: (0, _scrollbar.scrollbarTheme)(_props),
    unit: _unit
  };
  return (0, _objectSpread2.default)({}, base, {
    shared: (0, _shared.sharedTheme)(base)
  });
};

exports.theme = theme;
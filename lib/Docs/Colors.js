"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Colors = Colors;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  height: 50px;\n  padding: 5px;\n  background: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: stretch;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Pallet = _styledComponents.default.div(_templateObject());

var Swatch = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var background = _ref.background;
  return background;
});

function Colors(props) {
  return React.createElement(Pallet, null, React.createElement(_ThemeContext.ThemeConsumer, null, function (_ref2) {
    var color = _ref2.color;
    return Object.keys(color).map(function (key) {
      return React.createElement(Swatch, {
        background: color[key]
      }, key);
    });
  }));
}
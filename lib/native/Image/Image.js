"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.image = exports.Image = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _ThemeContext = require("../../ThemeContext");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _image = require("./image.theme");

var _utils = require("../../utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ImageStyled = _styledComponents.default.Image(_templateObject(), _image.imageTheme, _utils.sharedStyles, function (props) {
  return props.styledView;
});

var Image = function Image(props) {
  return _react.default.createElement(_ThemeContext.ThemeConsumer, null, function (theme) {
    return _react.default.createElement(ImageStyled, (0, _extends2.default)({}, props, {
      theme: (0, _utils.setTheme)(props, theme)
    }), props.children);
  });
};

exports.Image = Image;
var image = (0, _styledComponents.default)(Image);
exports.image = image;
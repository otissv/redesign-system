"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormLabel = FormLabel;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _formLabel = require("./form-label.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", "\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FormLabelStyled = _styledComponents.default.label(_templateObject(), _formLabel.formLabelTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function FormLabel(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      theme = _useContext.theme;

  var children = props.children,
      id = props.id,
      propsRest = (0, _objectWithoutProperties2.default)(props, ["children", "id"]);
  var themeContext = (0, _utils.setTheme)(props.theme, theme);
  return _react.default.createElement(FormLabelStyled, (0, _extends2.default)({
    key: props.id,
    htmlFor: id
  }, propsRest, {
    theme: themeContext
  }), children);
}

FormLabel.protoType = {
  id: _propTypes.default.string,
  children: _propTypes.default.string,
  theme: _propTypes.default.object,
  styled: _propTypes.default.string
};
var _default = FormLabel;
exports.default = _default;
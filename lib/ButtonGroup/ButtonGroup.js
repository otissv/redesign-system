"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.buttonGroup = exports.ButtonGroup = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _buttonGroup = require("./buttonGroup.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ButtonGroupStyled = _styledComponents.default.div(_templateObject(), _buttonGroup.buttonGroupTheme, _buttonGroup.buttonStretchGroupTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

var ButtonGroup = _react.default.memo(function ButtonGroup(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  var themeContext = (0, _utils.setTheme)(props.theme, theme);
  var buttonProps = props.buttonProps,
      children = props.children,
      stretch = props.stretch;
  return _react.default.createElement(ButtonGroupStyled, (0, _extends2.default)({
    theme: themeContext
  }, props), children((0, _objectSpread2.default)({
    theme: themeContext,
    stretch: stretch
  }, buttonProps)));
});

exports.ButtonGroup = ButtonGroup;
ButtonGroup.propTypes = {
  buttonProps: _propTypes.default.object,
  children: _propTypes.default.func,
  stretch: _propTypes.default.bool,
  theme: _propTypes.default.object
};
var buttonGroup = (0, _styledComponents.default)(ButtonGroup);
exports.buttonGroup = buttonGroup;
var _default = ButtonGroup;
exports.default = _default;
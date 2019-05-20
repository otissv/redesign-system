"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = Container;
exports.default = exports.container = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ContainerStyled = _styledComponents.default.div(_templateObject(), _utils.sharedStyles, function (props) {
  return props.styled;
});

function Container(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  return _react.default.createElement(ContainerStyled, (0, _extends2.default)({}, props, {
    theme: (0, _utils.setTheme)(props.theme, theme)
  }), props.children);
}

Container.propTypes = {
  children: _propTypes.default.node,
  styled: _propTypes.default.string,
  themed: _propTypes.default.object
};
var container = (0, _styledComponents.default)(Container);
exports.container = container;
var _default = Container;
exports.default = _default;
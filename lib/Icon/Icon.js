"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = Icon;
exports.default = exports.icon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _icon = require("./icon.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var IconStyled = _styledComponents.default.svg(_templateObject(), _icon.iconTheme, _icon.iconAppearanceTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function Icon(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  return _react.default.createElement(IconStyled, (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg"
  }, props, {
    theme: (0, _utils.setTheme)(props.theme, theme)
  }), props.children);
}

Icon.propTypes = {
  appearance: _propTypes.default.oneOf(['accent', 'danger', 'inverted', 'primary', 'success', 'warning']),
  children: _propTypes.default.node,
  height: _propTypes.default.string,
  hoverColor: _propTypes.default.string,
  styled: _propTypes.default.string,
  viewBox: _propTypes.default.string,
  width: _propTypes.default.string,
  themed: _propTypes.default.object
};
Icon.defaultProps = {
  height: '24px',
  width: '24px',
  viewBox: '0 0 24 24'
};
var icon = (0, _styledComponents.default)(Icon);
exports.icon = icon;
var _default = Icon;
exports.default = _default;
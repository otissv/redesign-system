"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = Toolbar;
exports.default = exports.toolbar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _toolbar = require("./toolbar.theme");

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", "\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ToolbarStyled = _styledComponents.default.header(_templateObject(), _toolbar.toolbarTheme, _toolbar.toolbarAppearanceTheme, function (props) {
  return "position: ".concat(props.position);
}, _utils.sharedStyles, function (props) {
  return props.styled;
});

function Toolbar(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  return _react.default.createElement(ToolbarStyled, (0, _extends2.default)({}, props, {
    theme: (0, _utils.setTheme)(props.theme, theme)
  }), props.children);
}

Toolbar.propTypes = {
  children: _propTypes.default.node,
  appearance: _propTypes.default.oneOf(['accent', 'primary', 'success', 'warning', 'danger']),
  position: _propTypes.default.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']),
  styled: _propTypes.default.string,
  themed: _propTypes.default.object
};
Toolbar.defaultProps = {
  position: 'static'
};
var toolbar = (0, _styledComponents.default)(Toolbar);
exports.toolbar = toolbar;
var _default = Toolbar;
exports.default = _default;
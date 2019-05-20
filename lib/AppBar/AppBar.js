"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppBar = AppBar;
exports.default = exports.appBar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _appBar = require("./appBar.theme");

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", "\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var AppBarStyled = _styledComponents.default.header(_templateObject(), _appBar.appBarTheme, _appBar.appBarAppearanceTheme, function (props) {
  return "position: ".concat(props.position);
}, _utils.sharedStyles, function (props) {
  return props.styled;
});

function AppBar(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  return _react.default.createElement(AppBarStyled, (0, _extends2.default)({}, props, {
    theme: (0, _utils.setTheme)(props.theme, theme)
  }), props.children);
}

AppBar.propTypes = {
  children: _propTypes.default.node,
  appearance: _propTypes.default.oneOf(['accent', 'primary', 'success', 'warning', 'danger']),
  position: _propTypes.default.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']),
  styled: _propTypes.default.string,
  themed: _propTypes.default.object
};
AppBar.defaultProps = {
  position: 'static'
};
var appBar = (0, _styledComponents.default)(AppBar);
exports.appBar = appBar;
var _default = AppBar;
exports.default = _default;
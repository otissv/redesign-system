"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = useTheme;
exports.ThemeProvider = ThemeProvider;
exports.default = exports.ThemeConsumer = exports.ThemeContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../theme");

var ThemeContext = _react.default.createContext({});

exports.ThemeContext = ThemeContext;

function useTheme() {
  return (0, _react.useContext)(ThemeContext);
}

function ThemeProvider(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  var context = (0, _react.useState)(theme);
  return _react.default.createElement(ThemeContext.Provider, {
    value: context
  }, children);
}

ThemeProvider.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]).isRequired,
  theme: _propTypes.default.object
};
ThemeProvider.defaultProps = {
  theme: (0, _theme.theme)()
};
var ThemeConsumer = ThemeContext.Consumer;
exports.ThemeConsumer = ThemeConsumer;
var _default = ThemeContext;
exports.default = _default;
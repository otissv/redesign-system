"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = useTheme;
exports.ThemeProvider = ThemeProvider;
exports.default = exports.ThemeContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme2 = require("../theme");

var _GlobalStyle = _interopRequireDefault(require("../GlobalStyle/GlobalStyle"));

var ThemeContext = _react.default.createContext({});

exports.ThemeContext = ThemeContext;

function useTheme() {
  return (0, _react.useContext)(ThemeContext);
}

function ThemeProvider(_ref) {
  var children = _ref.children,
      theme = _ref.theme;

  var _theme = (0, _theme2.theme)((0, _objectSpread2.default)({
    color: {
      accent: 'pink',
      active: 'pink',
      danger: 'red',
      disabled: 'grey',
      action: 'blue',
      info: 'light-blue',
      success: 'green',
      warning: 'yellow',
      foreground: 'grey-050',
      background: 'grey-900',
      foregroundInvert: 'grey-900',
      backgroundInvert: 'grey-050'
    }
  }, theme));

  var _useState = (0, _react.useState)((0, _objectSpread2.default)({}, _theme)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      themeContext = _useState2[0],
      setTheme = _useState2[1];

  var context = (0, _react.useMemo)(function () {
    return {
      theme: themeContext,
      setTheme: setTheme
    };
  }, [themeContext, setTheme]);
  return _react.default.createElement(ThemeContext.Provider, {
    value: context
  }, _react.default.createElement(_GlobalStyle.default, null), children);
}

ThemeProvider.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]).isRequired,
  theme: _propTypes.default.object
};
ThemeProvider.defaultProps = {
  theme: {}
};
var _default = ThemeContext;
exports.default = _default;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.button = exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _button = require("./button.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ButtonStyled = _styledComponents.default.button(_templateObject(), _button.buttonTheme, _button.buttonAppearanceTheme, _button.buttonSizeTheme, _button.buttonDisabledTheme, _button.buttonStretchTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

var Button = _react.default.memo(function Button(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  function handleOnClick(e) {
    e.preventDefault();
    props.onClick && props.onClick(e);
  }

  return _react.default.createElement(ButtonStyled, (0, _extends2.default)({}, props, {
    theme: (0, _utils.setTheme)(props.theme, theme),
    onClick: handleOnClick
  }), props.children);
});

exports.Button = Button;
Button.propTypes = {
  children: _propTypes.default.node,
  stretch: _propTypes.default.bool,
  appearance: _propTypes.default.oneOf(['accent', 'danger', 'ghost', 'primary', 'success', 'warning']),
  disabled: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'large']),
  theme: _propTypes.default.object,
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  stretch: false
};
var button = (0, _styledComponents.default)(Button);
exports.button = button;
var _default = Button;
exports.default = _default;
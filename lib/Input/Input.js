"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = Input;
exports.default = exports.input = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ThemeContext = require("../ThemeContext");

var _utils = require("../utils");

var _input = require("./input.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var InputStyled = _styledComponents.default.input(_templateObject(), _input.inputTheme, _input.inputAppearanceTheme, _input.inputDisabledTheme, _input.inputSizeTheme, _input.inputWidthsTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function Input(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  return _react.default.createElement(InputStyled, (0, _extends2.default)({
    theme: (0, _utils.setTheme)(props.theme, theme)
  }, props, {
    "aria-invalid": props.valid,
    className: "Input"
  }));
}

Input.propTypes = {
  appearance: _propTypes.default.oneOf(['accent', 'danger', 'overlay', 'primary', 'success', 'warning', 'error']),
  disabled: _propTypes.default.bool,
  innerRef: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  size: _propTypes.default.oneOf(['small', 'large']),
  styled: _propTypes.default.string,
  valid: _propTypes.default.bool,
  value: _propTypes.default.string,
  widths: _propTypes.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  theme: _propTypes.default.object
};
Input.defaultProps = {
  context: null,
  disabled: null,
  onBlur: function onBlur(e) {},
  onChange: function onChange() {},
  onFocus: function onFocus(e) {},
  placeholder: null,
  size: null,
  valid: true,
  widths: null
};
var input = (0, _styledComponents.default)(Input);
exports.input = input;
var _default = Input;
exports.default = _default;
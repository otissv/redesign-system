"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = Textarea;
exports.default = exports.textarea = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _textarea = require("./textarea.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "  \n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TextareaStyled = _styledComponents.default.textarea(_templateObject(), _textarea.textareaTheme, _textarea.textareaAppearanceTheme, _textarea.textareaDisabledTheme, _textarea.textareaWidthsTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function Textarea(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  return _react.default.createElement(TextareaStyled, (0, _extends2.default)({
    className: "Textarea",
    theme: (0, _utils.setTheme)(props.theme, theme)
  }, props));
}

Textarea.propTypes = {
  active: _propTypes.default.bool,
  appearance: _propTypes.default.oneOf(['accent', 'danger', 'primary', 'success', 'warning', 'error']),
  widths: _propTypes.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  disabled: _propTypes.default.bool,
  theme: _propTypes.default.object
};
var textarea = (0, _styledComponents.default)(Textarea);
exports.textarea = textarea;
var _default = Textarea;
exports.default = _default;
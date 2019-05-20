"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormTextareaControl = FormTextareaControl;
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormLabel = require("./FormLabel");

var _ThemeContext = require("../ThemeContext");

var _formControl = require("./form-control.theme");

var _utils = require("../utils");

var _Textarea = require("../Textarea");

var _FormErrorMessage = require("./FormErrorMessage");

var _Typography = require("../Typography");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FormTextareaControlStyled = _styledComponents.default.div(_templateObject(), _formControl.formControlTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function FormTextareaControl(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      theme = _useContext.theme;

  var id = props.id,
      label = props.label,
      parent = props.parent,
      field = props.field,
      attributes = props.attributes,
      model = props.model,
      propsRest = (0, _objectWithoutProperties2.default)(props, ["id", "label", "parent", "field", "attributes", "model"]);
  var description = field.description,
      validate = field.validate,
      isValid = field.isValid,
      touched = field.touched;
  var value = attributes.value,
      attributesRest = (0, _objectWithoutProperties2.default)(attributes, ["value"]);
  var themeContext = (0, _utils.setTheme)(props.theme, theme);
  return _react.default.createElement(FormTextareaControlStyled, {
    theme: themeContext
  }, _react.default.createElement(_FormLabel.FormLabel, {
    key: props.id,
    htmlFor: id,
    theme: themeContext
  }, label), _react.default.createElement(_Textarea.Textarea, (0, _extends2.default)({
    id: id,
    "data-parent": parent,
    value: value || ''
  }, attributesRest, propsRest, {
    appearance: !isValid ? 'error' : null,
    valid: isValid
  })), description && _react.default.createElement(_Typography.Typography, {
    marginTop: 1,
    styled: "color: #a0a0a0;"
  }, description), !isValid && validate && _react.default.createElement(_FormErrorMessage.FormErrorMessage, {
    message: validate((0, _objectSpread2.default)({}, field, {
      attributes: attributes
    }), model)
  }));
}

FormTextareaControl.protoType = {
  type: _propTypes.default.string,
  id: _propTypes.default.string,
  parent: _propTypes.default.string,
  value: _propTypes.default.string,
  label: _propTypes.default.string,
  labelProps: _propTypes.default.object,
  theme: _propTypes.default.object
};
var _default = FormTextareaControl;
exports.default = _default;
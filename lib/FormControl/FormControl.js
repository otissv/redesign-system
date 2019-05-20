"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControl = FormControl;
exports.default = exports.formControl = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormValueControl = require("./FormValueControl");

var _FormCheckedControl = require("./FormCheckedControl");

var _FormTextareaControl = require("./FormTextareaControl");

function FormControl(props) {
  var type = {
    text: 'text',
    checkbox: 'boolean',
    radio: 'boolean',
    number: 'text',
    textarea: 'textarea'
  }[props.attributes.type || 'text'];
  return {
    text: function text() {
      return _react.default.createElement(_FormValueControl.FormValueControl, props);
    },
    boolean: function boolean() {
      return _react.default.createElement(_FormCheckedControl.FormCheckedControl, props);
    },
    textarea: function textarea() {
      return _react.default.createElement(_FormTextareaControl.FormTextareaControl, props);
    }
  }[type]();
}

FormControl.protoType = {
  htmlFor: _propTypes.default.string,
  label: _propTypes.default.string,
  labelProps: _propTypes.default.object,
  parent: _propTypes.default.string,
  type: _propTypes.default.string,
  value: _propTypes.default.string,
  theme: _propTypes.default.object
};
var formControl = (0, _styledComponents.default)(FormControl);
exports.formControl = formControl;
var _default = FormControl;
exports.default = _default;
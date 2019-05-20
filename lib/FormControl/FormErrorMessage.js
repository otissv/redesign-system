"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormErrorMessage = FormErrorMessage;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = require("../Typography");

function FormErrorMessage(_ref) {
  var message = _ref.message;
  return _react.default.createElement(_Typography.Typography, {
    appearance: "danger",
    marginTop: 1
  }, message);
}

FormErrorMessage.protoType = {
  message: _propTypes.default.string
};
var _default = FormErrorMessage;
exports.default = _default;
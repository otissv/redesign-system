"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewModuleTwoTone = ViewModuleTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ViewModuleTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("g", {
    opacity: ".3"
  }, _react.default.createElement("path", {
    d: "M11 12.5h3V16h-3zM11 7h3v3.5h-3zM6 12.5h3V16H6zM6 7h3v3.5H6zM16 7h3v3.5h-3zM16 12.5h3V16h-3z"
  })), _react.default.createElement("path", {
    d: "M4 5v13h17V5H4zm5 11H6v-3.5h3V16zm0-5.5H6V7h3v3.5zm5 5.5h-3v-3.5h3V16zm0-5.5h-3V7h3v3.5zm5 5.5h-3v-3.5h3V16zm0-5.5h-3V7h3v3.5z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("g", {
    opacity: ".3"
  }, _react.default.createElement("path", {
    d: "M11 12.5h3V16h-3zM11 7h3v3.5h-3zM6 12.5h3V16H6zM6 7h3v3.5H6zM16 7h3v3.5h-3zM16 12.5h3V16h-3z"
  })), _react.default.createElement("path", {
    d: "M4 5v13h17V5H4zm5 11H6v-3.5h3V16zm0-5.5H6V7h3v3.5zm5 5.5h-3v-3.5h3V16zm0-5.5h-3V7h3v3.5zm5 5.5h-3v-3.5h3V16zm0-5.5h-3V7h3v3.5z"
  })));
}
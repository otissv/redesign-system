"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewQuiltTwoTone = ViewQuiltTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ViewQuiltTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("g", {
    opacity: ".3"
  }, _react.default.createElement("path", {
    d: "M16 12.5h3V16h-3zM6 7h3v9H6zM11 12.5h3V16h-3zM11 7h8v3.5h-8z"
  })), _react.default.createElement("path", {
    d: "M4 5v13h17V5H4zm5 11H6V7h3v9zm5 0h-3v-3.5h3V16zm5 0h-3v-3.5h3V16zm0-5.5h-8V7h8v3.5z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("g", {
    opacity: ".3"
  }, _react.default.createElement("path", {
    d: "M16 12.5h3V16h-3zM6 7h3v9H6zM11 12.5h3V16h-3zM11 7h8v3.5h-8z"
  })), _react.default.createElement("path", {
    d: "M4 5v13h17V5H4zm5 11H6V7h3v9zm5 0h-3v-3.5h3V16zm5 0h-3v-3.5h3V16zm0-5.5h-8V7h8v3.5z"
  })));
}
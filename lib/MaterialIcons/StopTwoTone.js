"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StopTwoTone = StopTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function StopTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M8 8h8v8H8z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M6 18h12V6H6v12zM8 8h8v8H8V8z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M8 8h8v8H8z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M6 18h12V6H6v12zM8 8h8v8H8V8z"
  }));
}
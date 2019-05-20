"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowLeftSharp = ArrowLeftSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ArrowLeftSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M24 0v24H0V0h24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M14 7l-5 5 5 5V7z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M24 0v24H0V0h24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M14 7l-5 5 5 5V7z"
  }));
}
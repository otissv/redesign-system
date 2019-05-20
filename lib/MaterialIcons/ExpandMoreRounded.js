"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandMoreRounded = ExpandMoreRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ExpandMoreRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M24 24H0V0h24v24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M15.88 9.29L12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M24 24H0V0h24v24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M15.88 9.29L12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"
  }));
}
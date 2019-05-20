"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirstPageRounded = FirstPageRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FirstPageRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M24 0v24H0V0h24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M17.7 15.89L13.82 12l3.89-3.89c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.38.38-1.02-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M24 0v24H0V0h24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M17.7 15.89L13.82 12l3.89-3.89c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.38.38-1.02-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"
  }));
}
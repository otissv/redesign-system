"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowLeftRounded = ArrowLeftRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ArrowLeftRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M24 0v24H0V0h24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M12.29 8.71L9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M24 0v24H0V0h24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M12.29 8.71L9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z"
  }));
}
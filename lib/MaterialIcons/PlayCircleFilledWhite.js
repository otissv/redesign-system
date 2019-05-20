"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayCircleFilledWhite = PlayCircleFilledWhite;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function PlayCircleFilledWhite(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    transform: "scale(0.5, 0.5)",
    fill: "none",
    d: "M0 0h48v48H0z"
  }), _react.default.createElement("path", {
    transform: "scale(0.5, 0.5)",
    d: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z"
  }), _react.default.createElement("path", {
    transform: "scale(0.5, 0.5)",
    fill: "none",
    d: "M0 0h48v48H0z"
  }), _react.default.createElement("path", {
    transform: "scale(0.5, 0.5)",
    d: "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z"
  }));
}
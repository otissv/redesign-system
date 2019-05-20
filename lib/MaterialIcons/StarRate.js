"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRate = StarRate;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function StarRate(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    transform: "scale(1.33, 1.33)",
    d: "M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"
  }), _react.default.createElement("path", {
    transform: "scale(1.33, 1.33)",
    fill: "none",
    d: "M0 0h18v18H0z"
  }), _react.default.createElement("path", {
    transform: "scale(1.33, 1.33)",
    d: "M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"
  }), _react.default.createElement("path", {
    transform: "scale(1.33, 1.33)",
    fill: "none",
    d: "M0 0h18v18H0z"
  }));
}
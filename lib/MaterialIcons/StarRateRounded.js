"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRateRounded = StarRateRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function StarRateRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    transform: "scale(1.33, 1.33)",
    fill: "none",
    d: "M0 0h18v18H0V0z"
  }), _react.default.createElement("path", {
    transform: "scale(1.33, 1.33)",
    d: "M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"
  }), _react.default.createElement("path", {
    transform: "scale(1.33, 1.33)",
    fill: "none",
    d: "M0 0h18v18H0V0z"
  }), _react.default.createElement("path", {
    transform: "scale(1.33, 1.33)",
    d: "M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"
  }));
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FiberSmartRecordRounded = FiberSmartRecordRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FiberSmartRecordRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("circle", {
    cx: "9",
    cy: "12",
    r: "8"
  }), _react.default.createElement("path", {
    d: "M17 5.55v.18c0 .37.23.69.57.85C19.6 7.54 21 9.61 21 12s-1.4 4.46-3.43 5.42c-.34.16-.57.47-.57.84v.18c0 .68.71 1.11 1.32.82C21.08 18.01 23 15.23 23 12s-1.92-6.01-4.68-7.27c-.61-.28-1.32.14-1.32.82z"
  }), ",", _react.default.createElement("circle", {
    cx: "9",
    cy: "12",
    r: "8"
  }), _react.default.createElement("path", {
    d: "M17 5.55v.18c0 .37.23.69.57.85C19.6 7.54 21 9.61 21 12s-1.4 4.46-3.43 5.42c-.34.16-.57.47-.57.84v.18c0 .68.71 1.11 1.32.82C21.08 18.01 23 15.23 23 12s-1.92-6.01-4.68-7.27c-.61-.28-1.32.14-1.32.82z"
  }));
}
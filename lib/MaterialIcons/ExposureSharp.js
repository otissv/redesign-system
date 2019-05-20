"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExposureSharp = ExposureSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ExposureSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M21 3H3v18h18V3zM6 7h5v1.5H6V7zm13 12H5L19 5v14zm-4.5-3v2H16v-2h2v-1.5h-2v-2h-1.5v2h-2V16h2z"
  }), _react.default.createElement("path", {
    d: "M21 3H3v18h18V3zM6 7h5v1.5H6V7zm13 12H5L19 5v14zm-4.5-3v2H16v-2h2v-1.5h-2v-2h-1.5v2h-2V16h2z"
  }));
}
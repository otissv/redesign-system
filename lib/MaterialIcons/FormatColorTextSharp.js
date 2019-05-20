"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormatColorTextSharp = FormatColorTextSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FormatColorTextSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fillOpacity: ".36",
    d: "M0 20h24v4H0v-4z"
  }), _react.default.createElement("path", {
    d: "M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"
  }), _react.default.createElement("path", {
    fillOpacity: ".36",
    d: "M0 20h24v4H0v-4z"
  }), _react.default.createElement("path", {
    d: "M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"
  }));
}
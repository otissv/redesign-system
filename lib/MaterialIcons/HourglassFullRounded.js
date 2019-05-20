"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HourglassFullRounded = HourglassFullRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function HourglassFullRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M6 4v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M6 4v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2z"
  })));
}
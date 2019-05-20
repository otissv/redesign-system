"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectionsSharp = DirectionsSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function DirectionsSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M22.41 12L12 1.59 1.59 11.99 12 22.41 22.41 12zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5-3.5 3.5z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M22.41 12L12 1.59 1.59 11.99 12 22.41 22.41 12zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5-3.5 3.5z"
  }));
}
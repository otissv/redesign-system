"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatteryCharging90Sharp = BatteryCharging90Sharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function BatteryCharging90Sharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    fillOpacity: ".3",
    d: "M17 4h-3V2h-4v2H7v4h5.47L13 7v1h4V4z"
  }), _react.default.createElement("path", {
    d: "M13 12.5h2L11 20v-5.5H9L12.47 8H7v14h10V8h-4v4.5z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    fillOpacity: ".3",
    d: "M17 4h-3V2h-4v2H7v4h5.47L13 7v1h4V4z"
  }), _react.default.createElement("path", {
    d: "M13 12.5h2L11 20v-5.5H9L12.47 8H7v14h10V8h-4v4.5z"
  })));
}
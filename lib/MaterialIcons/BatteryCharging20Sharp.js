"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatteryCharging20Sharp = BatteryCharging20Sharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function BatteryCharging20Sharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M11 20v-3H7v5h10v-5h-4.4L11 20z"
  }), _react.default.createElement("path", {
    fillOpacity: ".3",
    d: "M17 4h-3V2h-4v2H7v13h4v-2.5H9L13 7v5.5h2L12.6 17H17V4z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M11 20v-3H7v5h10v-5h-4.4L11 20z"
  }), _react.default.createElement("path", {
    fillOpacity: ".3",
    d: "M17 4h-3V2h-4v2H7v13h4v-2.5H9L13 7v5.5h2L12.6 17H17V4z"
  })));
}
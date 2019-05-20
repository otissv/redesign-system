"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignalCellularConnectedNoInternet2Bar = SignalCellularConnectedNoInternet2Bar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function SignalCellularConnectedNoInternet2Bar(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    fillOpacity: ".3",
    d: "M22 8V2L2 22h16V8z"
  }), _react.default.createElement("path", {
    d: "M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    fillOpacity: ".3",
    d: "M22 8V2L2 22h16V8z"
  }), _react.default.createElement("path", {
    d: "M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z"
  }));
}
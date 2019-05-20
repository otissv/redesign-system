"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignalCellular2Bar = SignalCellular2Bar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function SignalCellular2Bar(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fillOpacity: ".3",
    d: "M2 22h20V2z"
  }), _react.default.createElement("path", {
    d: "M14 10L2 22h12z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    fillOpacity: ".3",
    d: "M2 22h20V2z"
  }), _react.default.createElement("path", {
    d: "M14 10L2 22h12z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Battery90Sharp = Battery90Sharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function Battery90Sharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    fillOpacity: ".3",
    d: "M17 4h-3V2h-4v2H7v4h10V4z"
  }), _react.default.createElement("path", {
    d: "M7 8v14h10V8H7z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    fillOpacity: ".3",
    d: "M17 4h-3V2h-4v2H7v4h10V4z"
  }), _react.default.createElement("path", {
    d: "M7 8v14h10V8H7z"
  })));
}
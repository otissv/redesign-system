"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BeenhereSharp = BeenhereSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function BeenhereSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M3.01 1L3 17l9 6 8.99-6L21 1H3.01zM10 16l-5-5 1.41-1.42L10 13.17l7.59-7.59L19 7l-9 9z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M3.01 1L3 17l9 6 8.99-6L21 1H3.01zM10 16l-5-5 1.41-1.42L10 13.17l7.59-7.59L19 7l-9 9z"
  }));
}
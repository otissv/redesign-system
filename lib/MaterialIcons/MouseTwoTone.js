"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MouseTwoTone = MouseTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function MouseTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M13 3.16V9h5c-.04-2.94-2.19-5.37-5-5.84zM11 3.16C8.19 3.63 6.04 6.06 6 9h5V3.16zM11 11H6v4c0 3.31 2.69 6 6 6s6-2.69 6-6v-4h-7z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8V9zm-7-5.84c2.81.47 4.96 2.9 5 5.84h-5V3.16zm-2 0V9H6c.04-2.94 2.19-5.37 5-5.84zM18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12v4z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M13 3.16V9h5c-.04-2.94-2.19-5.37-5-5.84zM11 3.16C8.19 3.63 6.04 6.06 6 9h5V3.16zM11 11H6v4c0 3.31 2.69 6 6 6s6-2.69 6-6v-4h-7z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M20 9c-.04-4.39-3.6-7.93-8-7.93S4.04 4.61 4 9v6c0 4.42 3.58 8 8 8s8-3.58 8-8V9zm-7-5.84c2.81.47 4.96 2.9 5 5.84h-5V3.16zm-2 0V9H6c.04-2.94 2.19-5.37 5-5.84zM18 15c0 3.31-2.69 6-6 6s-6-2.69-6-6v-4h12v4z"
  })));
}
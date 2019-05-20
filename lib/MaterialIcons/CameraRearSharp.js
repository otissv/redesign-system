"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CameraRearSharp = CameraRearSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function CameraRearSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm5-20H5v18h14V0zm-7 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M10 20H5v2h5v2l3-3-3-3v2zm4 0v2h5v-2h-5zm5-20H5v18h14V0zm-7 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6z"
  })));
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlCameraTwoTone = ControlCameraTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ControlCameraTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M7.3 13.77L5.54 12l1.76-1.77-1.76-1.77L2 12l3.54 3.54zM15.54 18.46l-1.77-1.76L12 18.46l-1.77-1.76-1.77 1.76L12 22zM18.46 15.54L22 12l-3.54-3.54-1.76 1.77L18.46 12l-1.76 1.77zM12 5.54l1.77 1.76 1.77-1.76L12 2 8.46 5.54l1.77 1.76z"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M7.3 13.77L5.54 12l1.76-1.77-1.76-1.77L2 12l3.54 3.54zM15.54 18.46l-1.77-1.76L12 18.46l-1.77-1.76-1.77 1.76L12 22zM18.46 15.54L22 12l-3.54-3.54-1.76 1.77L18.46 12l-1.76 1.77zM12 5.54l1.77 1.76 1.77-1.76L12 2 8.46 5.54l1.77 1.76z"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }));
}
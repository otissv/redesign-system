"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationTwoTone = NavigationTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function NavigationTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M7.72 17.7l3.47-1.53.81-.36.81.36 3.47 1.53L12 7.27z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2 4.5 20.29zm8.31-4.12l-.81-.36-.81.36-3.47 1.53L12 7.27l4.28 10.43-3.47-1.53z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M7.72 17.7l3.47-1.53.81-.36.81.36 3.47 1.53L12 7.27z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2 4.5 20.29zm8.31-4.12l-.81-.36-.81.36-3.47 1.53L12 7.27l4.28 10.43-3.47-1.53z"
  }));
}
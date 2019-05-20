"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoTwoTone = PhotoTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function PhotoTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M19 5H5v14h14V5zM6 17l3-3.86 2.14 2.58 3-3.87L18 17H6z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5z"
  }), _react.default.createElement("path", {
    d: "M11.14 15.72L9 13.14 6 17h12l-3.86-5.14z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M19 5H5v14h14V5zM6 17l3-3.86 2.14 2.58 3-3.87L18 17H6z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5z"
  }), _react.default.createElement("path", {
    d: "M11.14 15.72L9 13.14 6 17h12l-3.86-5.14z"
  })));
}
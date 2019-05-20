"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AspectRatioTwoTone = AspectRatioTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function AspectRatioTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 19.01h18V4.99H3v14.02zM14 15h3v-3h2v5h-5v-2zM5 7h5v2H7v3H5V7z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"
  }), _react.default.createElement("path", {
    d: "M7 9h3V7H5v5h2zM19 12h-2v3h-3v2h5z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 19.01h18V4.99H3v14.02zM14 15h3v-3h2v5h-5v-2zM5 7h5v2H7v3H5V7z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"
  }), _react.default.createElement("path", {
    d: "M7 9h3V7H5v5h2zM19 12h-2v3h-3v2h5z"
  })));
}
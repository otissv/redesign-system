"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewCompactRounded = ViewCompactRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ViewCompactRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M5 19h4v-7H3v5c0 1.1.9 2 2 2zm5 0h10c1.1 0 2-.9 2-2v-5H10v7zM3 7v4h19V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M5 19h4v-7H3v5c0 1.1.9 2 2 2zm5 0h10c1.1 0 2-.9 2-2v-5H10v7zM3 7v4h19V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z"
  })));
}
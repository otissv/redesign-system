"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BallotSharp = BallotSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function BallotSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M13 9.5h5v-2h-5v2zm0 7h5v-2h-5v2zm8 4.5H3V3h18v18zM6 11h5V6H6v5zm1-4h3v3H7V7zM6 18h5v-5H6v5zm1-4h3v3H7v-3z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M13 9.5h5v-2h-5v2zm0 7h5v-2h-5v2zm8 4.5H3V3h18v18zM6 11h5V6H6v5zm1-4h3v3H7V7zM6 18h5v-5H6v5zm1-4h3v3H7v-3z"
  }));
}
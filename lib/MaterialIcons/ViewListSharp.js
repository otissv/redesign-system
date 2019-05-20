"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewListSharp = ViewListSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ViewListSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z",
    opacity: ".87"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h12v-4H8v4zm0 5h12v-4H8v4zM8 5v4h12V5H8z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z",
    opacity: ".87"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h12v-4H8v4zm0 5h12v-4H8v4zM8 5v4h12V5H8z"
  })));
}
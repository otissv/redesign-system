"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbDownAltSharp = ThumbDownAltSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ThumbDownAltSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z",
    opacity: ".87"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M1 11.6V16h8.31l-1.12 5.38L9.83 23 17 15.82V3H4.69zM19 3h4v12h-4z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z",
    opacity: ".87"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M1 11.6V16h8.31l-1.12 5.38L9.83 23 17 15.82V3H4.69zM19 3h4v12h-4z"
  })));
}
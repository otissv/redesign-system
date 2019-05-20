"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeekendSharp = WeekendSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function WeekendSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M6 9.03V14h12V9.03h2V5H4v4.03z"
  }), _react.default.createElement("path", {
    d: "M19 15H5v-4.97H1V19h22v-8.97h-4z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M6 9.03V14h12V9.03h2V5H4v4.03z"
  }), _react.default.createElement("path", {
    d: "M19 15H5v-4.97H1V19h22v-8.97h-4z"
  }));
}
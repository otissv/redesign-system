"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BorderColorSharp = BorderColorSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function BorderColorSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M17.75 8L14 4.25l-10 10V18h3.75l10-10zm3.66-3.66L17.66.59 15 3.25 18.75 7l2.66-2.66z"
  }), _react.default.createElement("path", {
    fillOpacity: ".36",
    d: "M0 20h24v4H0v-4z"
  }), _react.default.createElement("path", {
    d: "M17.75 8L14 4.25l-10 10V18h3.75l10-10zm3.66-3.66L17.66.59 15 3.25 18.75 7l2.66-2.66z"
  }), _react.default.createElement("path", {
    fillOpacity: ".36",
    d: "M0 20h24v4H0v-4z"
  }));
}
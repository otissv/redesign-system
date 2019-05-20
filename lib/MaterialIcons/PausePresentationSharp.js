"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PausePresentationSharp = PausePresentationSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function PausePresentationSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M1 3v18h22V3H1zm20 16H3V5h18v14z"
  }), _react.default.createElement("path", {
    d: "M9 8h2v8H9zM13 8h2v8h-2z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M1 3v18h22V3H1zm20 16H3V5h18v14z"
  }), _react.default.createElement("path", {
    d: "M9 8h2v8H9zM13 8h2v8h-2z"
  })));
}
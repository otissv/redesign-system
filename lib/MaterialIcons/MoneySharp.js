"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoneySharp = MoneySharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function MoneySharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M14 16h5V8h-5v8zm2-6h1v4h-1v-4zM8 16h5V8H8v8zm2-6h1v4h-1v-4zM5 8h2v8H5z"
  }), _react.default.createElement("path", {
    d: "M2 4v16h20V4H2zm18 14H4V6h16v12z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M14 16h5V8h-5v8zm2-6h1v4h-1v-4zM8 16h5V8H8v8zm2-6h1v4h-1v-4zM5 8h2v8H5z"
  }), _react.default.createElement("path", {
    d: "M2 4v16h20V4H2zm18 14H4V6h16v12z"
  }));
}
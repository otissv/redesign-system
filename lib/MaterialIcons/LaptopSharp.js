"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LaptopSharp = LaptopSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function LaptopSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M20 18l2-2V4H2v12l2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
  })), ",", _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M20 18l2-2V4H2v12l2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
  })));
}
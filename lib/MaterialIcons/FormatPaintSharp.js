"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormatPaintSharp = FormatPaintSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FormatPaintSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z"
  }), _react.default.createElement("path", {
    d: "M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z"
  }));
}
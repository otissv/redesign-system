"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormatQuoteSharp = FormatQuoteSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FormatQuoteSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M5 17h3l2-4V7H4v6h3l-2 4zm10 0h3l2-4V7h-6v6h3l-2 4z"
  }), _react.default.createElement("path", {
    d: "M5 17h3l2-4V7H4v6h3l-2 4zm10 0h3l2-4V7h-6v6h3l-2 4z"
  }));
}
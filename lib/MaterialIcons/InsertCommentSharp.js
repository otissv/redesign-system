"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InsertCommentSharp = InsertCommentSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function InsertCommentSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M22 2H2v16h16l4 4V2zm-4 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
  }), _react.default.createElement("path", {
    d: "M22 2H2v16h16l4 4V2zm-4 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
  }));
}
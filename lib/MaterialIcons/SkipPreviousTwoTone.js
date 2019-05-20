"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkipPreviousTwoTone = SkipPreviousTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function SkipPreviousTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M16 14.14V9.86L12.97 12z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M6 6h2v12H6zM18 18V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M16 14.14V9.86L12.97 12z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M6 6h2v12H6zM18 18V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z"
  }));
}
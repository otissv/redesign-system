"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkipPreviousOutlined = SkipPreviousOutlined;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function SkipPreviousOutlined(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M6 6h2v12H6zM9.5 12l8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M6 6h2v12H6zM9.5 12l8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z"
  }));
}
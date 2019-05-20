"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirstPageOutlined = FirstPageOutlined;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FirstPageOutlined(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M24 0v24H0V0h24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M24 0v24H0V0h24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"
  }));
}
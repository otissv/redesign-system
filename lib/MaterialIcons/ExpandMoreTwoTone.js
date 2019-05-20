"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandMoreTwoTone = ExpandMoreTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ExpandMoreTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M24 24H0V0h24v24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M24 24H0V0h24v24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
  }));
}
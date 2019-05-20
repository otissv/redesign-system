"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MergeTypeTwoTone = MergeTypeTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function MergeTypeTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M5.59 19L7 20.41l6-6V8h3.5L12 3.5 7.5 8H11v5.59zM16.997 20.4114l-3.4082-3.4082 1.4071-1.4071 3.4082 3.4082z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M5.59 19L7 20.41l6-6V8h3.5L12 3.5 7.5 8H11v5.59zM16.997 20.4114l-3.4082-3.4082 1.4071-1.4071 3.4082 3.4082z"
  })));
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RepeatOneTwoTone = RepeatOneTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function RepeatOneTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M13 15V9h-1l-2 1v1h1.5v4z"
  }), _react.default.createElement("path", {
    d: "M19 13h-2v4H7v-3l-4 4 4 4v-3h12zM17 2v3H5v6h2V7h10v3l4-4z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M13 15V9h-1l-2 1v1h1.5v4z"
  }), _react.default.createElement("path", {
    d: "M19 13h-2v4H7v-3l-4 4 4 4v-3h12zM17 2v3H5v6h2V7h10v3l4-4z"
  }));
}
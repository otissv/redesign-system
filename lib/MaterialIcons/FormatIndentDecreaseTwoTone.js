"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormatIndentDecreaseTwoTone = FormatIndentDecreaseTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FormatIndentDecreaseTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M7 16V8l-4 4zM11 7h10v2H11zM11 11h10v2H11zM11 15h10v2H11zM3 19h18v2H3zM3 3h18v2H3z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M7 16V8l-4 4zM11 7h10v2H11zM11 11h10v2H11zM11 15h10v2H11zM3 19h18v2H3zM3 3h18v2H3z"
  })));
}
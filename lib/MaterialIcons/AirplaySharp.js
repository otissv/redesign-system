"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AirplaySharp = AirplaySharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function AirplaySharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M6 22h12l-6-6-6 6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6V3z"
  }), _react.default.createElement("path", {
    d: "M6 22h12l-6-6-6 6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6V3z"
  }));
}
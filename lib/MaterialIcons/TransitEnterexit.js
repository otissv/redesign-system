"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransitEnterexit = TransitEnterexit;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function TransitEnterexit(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    d: "M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16v3z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
}
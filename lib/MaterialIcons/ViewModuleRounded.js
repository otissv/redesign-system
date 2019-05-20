"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewModuleRounded = ViewModuleRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ViewModuleRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M5 11h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm0 7h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm6 0h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm6 0h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm-6-7h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm5-5v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M5 11h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm0 7h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm6 0h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm6 0h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm-6-7h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm5-5v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"
  })));
}
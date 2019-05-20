"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewQuiltRounded = ViewQuiltRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ViewQuiltRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M11 18h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm-6 0h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1zm12 0h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zM10 6v4c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-9c-.55 0-1 .45-1 1z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M11 18h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm-6 0h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1zm12 0h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zM10 6v4c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-9c-.55 0-1 .45-1 1z"
  })));
}
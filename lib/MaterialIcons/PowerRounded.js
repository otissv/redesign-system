"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PowerRounded = PowerRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function PowerRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M16.01 7L16 4c0-.55-.45-1-1-1s-1 .45-1 1v3h-4V4c0-.55-.45-1-1-1s-1 .45-1 1v3h-.01C6.9 7 6 7.9 6 8.99v4.66c0 .53.21 1.04.58 1.41L9.5 18v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2l2.92-2.92c.37-.38.58-.89.58-1.42V8.99C18 7.89 17.11 7 16.01 7z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M16.01 7L16 4c0-.55-.45-1-1-1s-1 .45-1 1v3h-4V4c0-.55-.45-1-1-1s-1 .45-1 1v3h-.01C6.9 7 6 7.9 6 8.99v4.66c0 .53.21 1.04.58 1.41L9.5 18v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2l2.92-2.92c.37-.38.58-.89.58-1.42V8.99C18 7.89 17.11 7 16.01 7z"
  })));
}
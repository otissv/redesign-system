"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyboardBackspaceRounded = KeyboardBackspaceRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function KeyboardBackspaceRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z"
  }), _react.default.createElement("path", {
    d: "M20 11H6.83l2.88-2.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L3.71 11.3c-.39.39-.39 1.02 0 1.41L8.3 17.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1z"
  }));
}
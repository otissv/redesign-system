"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebTwoTone = WebTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function WebTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M4 9h10.5v3.5H4zM4 14.5h10.5V18H4zM16.5 9H20v9h-3.5z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5.5 14H4v-3.5h10.5V18zm0-5.5H4V9h10.5v3.5zM20 18h-3.5V9H20v9z"
  }), _react.default.createElement("path", {
    d: "M4 9h10.5v3.5H4zM4 14.5h10.5V18H4zM16.5 9H20v9h-3.5z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5.5 14H4v-3.5h10.5V18zm0-5.5H4V9h10.5v3.5zM20 18h-3.5V9H20v9z"
  }));
}
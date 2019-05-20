"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedCamera = LinkedCamera;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function LinkedCamera(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "3.2"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "5",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6v1.33M16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33V6"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M24 0H0v24h24V0z"
  }), _react.default.createElement("path", {
    d: "M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-5zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
  }), ",", _react.default.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "3.2"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "5",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6v1.33M16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33V6"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M24 0H0v24h24V0z"
  }), _react.default.createElement("path", {
    d: "M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-5zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
  }));
}
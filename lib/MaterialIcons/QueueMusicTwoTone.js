"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueMusicTwoTone = QueueMusicTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function QueueMusicTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("circle", {
    cx: "16",
    cy: "17",
    r: "1",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M3 10h12v2H3zM3 14h8v2H3zM3 6h12v2H3z"
  }), _react.default.createElement("path", {
    d: "M17 14.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5v8.18zM16 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
  }), ",", _react.default.createElement("circle", {
    cx: "16",
    cy: "17",
    r: "1",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M3 10h12v2H3zM3 14h8v2H3zM3 6h12v2H3z"
  }), _react.default.createElement("path", {
    d: "M17 14.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5v8.18zM16 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
  }));
}
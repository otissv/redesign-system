"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventNoteSharp = EventNoteSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function EventNoteSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M17 10H7v2h10v-2zm4-7h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11zm-5-5H7v2h7v-2z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M17 10H7v2h10v-2zm4-7h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11zm-5-5H7v2h7v-2z"
  })));
}
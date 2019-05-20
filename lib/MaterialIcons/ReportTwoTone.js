"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportTwoTone = ReportTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ReportTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M9.1 5L5 9.1v5.8L9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1zM12 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-3h-2V7h2v7z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "16",
    r: "1"
  }), _react.default.createElement("path", {
    d: "M11 7h2v7h-2z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M9.1 5L5 9.1v5.8L9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1zM12 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-3h-2V7h2v7z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "16",
    r: "1"
  }), _react.default.createElement("path", {
    d: "M11 7h2v7h-2z"
  }));
}
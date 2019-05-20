"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestoreFromTrashSharp = RestoreFromTrashSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function RestoreFromTrashSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M6 21h12V7H6v14zm6-11l4 4h-2v4h-4v-4H8l4-4zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M6 21h12V7H6v14zm6-11l4 4h-2v4h-4v-4H8l4-4zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
  }));
}
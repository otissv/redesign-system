"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextureSharp = TextureSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function TextureSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M19.66 3L3.07 19.59V21h1.41L21.07 4.42V3zM11.95 3l-8.88 8.88v2.83L14.78 3zM3.07 3v4l4-4zM21.07 21v-4l-4 4zM12.19 21l8.88-8.88V9.29L9.36 21z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M19.66 3L3.07 19.59V21h1.41L21.07 4.42V3zM11.95 3l-8.88 8.88v2.83L14.78 3zM3.07 3v4l4-4zM21.07 21v-4l-4 4zM12.19 21l8.88-8.88V9.29L9.36 21z"
  })));
}
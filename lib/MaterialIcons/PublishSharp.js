"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublishSharp = PublishSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function PublishSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"
  }), _react.default.createElement("path", {
    d: "M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"
  }));
}
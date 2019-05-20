"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearAll = ClearAll;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ClearAll(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    d: "M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
}
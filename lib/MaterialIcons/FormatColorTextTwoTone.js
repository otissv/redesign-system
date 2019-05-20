"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormatColorTextTwoTone = FormatColorTextTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FormatColorTextTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    fillOpacity: ".36",
    d: "M0 20h24v4H0z"
  }), _react.default.createElement("path", {
    d: "M5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2L5.5 17zm8.88-5H9.62L12 5.67 14.38 12z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    fillOpacity: ".36",
    d: "M0 20h24v4H0z"
  }), _react.default.createElement("path", {
    d: "M5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2L5.5 17zm8.88-5H9.62L12 5.67 14.38 12z"
  })));
}
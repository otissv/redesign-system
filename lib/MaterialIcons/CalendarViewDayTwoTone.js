"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarViewDayTwoTone = CalendarViewDayTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function CalendarViewDayTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 17h18v2H3zM19 12v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z"
  }), _react.default.createElement("path", {
    d: "M5 12h14v1H5z",
    opacity: ".3"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 17h18v2H3zM19 12v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z"
  }), _react.default.createElement("path", {
    d: "M5 12h14v1H5z",
    opacity: ".3"
  })));
}
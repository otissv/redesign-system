"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FiberManualRecordRounded = FiberManualRecordRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FiberManualRecordRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  }), ",", _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  }));
}
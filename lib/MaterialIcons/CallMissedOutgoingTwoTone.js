"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallMissedOutgoingTwoTone = CallMissedOutgoingTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function CallMissedOutgoingTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z"
  }), _react.default.createElement("path", {
    d: "M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z"
  }));
}
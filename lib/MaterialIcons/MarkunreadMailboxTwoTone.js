"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkunreadMailboxTwoTone = MarkunreadMailboxTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function MarkunreadMailboxTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M10 12H6V8H4v12h16V8H10z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
  }), _react.default.createElement("path", {
    d: "M10 12H6V8H4v12h16V8H10z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
  }));
}
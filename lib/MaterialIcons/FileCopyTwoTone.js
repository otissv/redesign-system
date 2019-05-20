"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileCopyTwoTone = FileCopyTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FileCopyTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M14 7H8v14h11v-9h-5z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z"
  }), _react.default.createElement("path", {
    d: "M15 5H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M14 7H8v14h11v-9h-5z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z"
  }), _react.default.createElement("path", {
    d: "M15 5H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z"
  }));
}
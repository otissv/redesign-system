"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExplicitTwoTone = ExplicitTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ExplicitTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M5 19h14V5H5v14zM9 7h6v2h-4v2h4v2h-4v2h4v2H9V7z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H5V5h14v14z"
  }), _react.default.createElement("path", {
    d: "M15 15h-4v-2h4v-2h-4V9h4V7H9v10h6z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M5 19h14V5H5v14zM9 7h6v2h-4v2h4v2h-4v2h4v2H9V7z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H5V5h14v14z"
  }), _react.default.createElement("path", {
    d: "M15 15h-4v-2h4v-2h-4V9h4V7H9v10h6z"
  }));
}
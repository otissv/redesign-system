"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter4TwoTone = Filter4TwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function Filter4TwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M21 3H7v14h14V3zm-4 12h-2v-4h-4V5h2v4h2V5h2v10z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2z"
  }), _react.default.createElement("path", {
    d: "M7 19h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM7 3h14v14H7V3z"
  }), _react.default.createElement("path", {
    d: "M15 9h-2V5h-2v6h4v4h2V5h-2z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M21 3H7v14h14V3zm-4 12h-2v-4h-4V5h2v4h2V5h2v10z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2z"
  }), _react.default.createElement("path", {
    d: "M7 19h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM7 3h14v14H7V3z"
  }), _react.default.createElement("path", {
    d: "M15 9h-2V5h-2v6h4v4h2V5h-2z"
  })));
}
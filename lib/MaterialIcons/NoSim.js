"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoSim = NoSim;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function NoSim(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    d: "M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    d: "M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"
  }));
}
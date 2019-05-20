"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter2Sharp = Filter2Sharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function Filter2Sharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14zm-4-4h-4v-2h4V5h-6v2h4v2h-4v6h6v-2z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14zm-4-4h-4v-2h4V5h-6v2h4v2h-4v6h6v-2z"
  })));
}
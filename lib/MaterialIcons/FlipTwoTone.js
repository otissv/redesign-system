"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlipTwoTone = FlipTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FlipTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M19 7h2v2h-2zM19 21c1.1 0 2-.9 2-2h-2v2zM19 15h2v2h-2zM19 11h2v2h-2zM9 5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V5h4zM19 3v2h2c0-1.1-.9-2-2-2zM11 1h2v22h-2zM15 3h2v2h-2zM15 19h2v2h-2z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M19 7h2v2h-2zM19 21c1.1 0 2-.9 2-2h-2v2zM19 15h2v2h-2zM19 11h2v2h-2zM9 5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V5h4zM19 3v2h2c0-1.1-.9-2-2-2zM11 1h2v22h-2zM15 3h2v2h-2zM15 19h2v2h-2z"
  })));
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BorderStyleTwoTone = BorderStyleTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function BorderStyleTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M19 19h2v2h-2zM19 11h2v2h-2zM19 15h2v2h-2zM15 19h2v2h-2zM3 21h2V5h16V3H3z"
  }), _react.default.createElement("path", {
    d: "M19 7h2v2h-2zM11 19h2v2h-2zM7 19h2v2H7z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M19 19h2v2h-2zM19 11h2v2h-2zM19 15h2v2h-2zM15 19h2v2h-2zM3 21h2V5h16V3H3z"
  }), _react.default.createElement("path", {
    d: "M19 7h2v2h-2zM11 19h2v2h-2zM7 19h2v2H7z"
  })));
}
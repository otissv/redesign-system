"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IsoRounded = IsoRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function IsoRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6.25 7.5H7.5V6.25c0-.41.34-.75.75-.75s.75.34.75.75V7.5h1.25c.41 0 .75.34.75.75s-.34.75-.75.75H9v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9H6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM18 19H5L19 5v13c0 .55-.45 1-1 1zm-1-2.75c0-.41-.34-.75-.75-.75h-3.5c-.41 0-.75.34-.75.75s.34.75.75.75h3.5c.41 0 .75-.34.75-.75z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6.25 7.5H7.5V6.25c0-.41.34-.75.75-.75s.75.34.75.75V7.5h1.25c.41 0 .75.34.75.75s-.34.75-.75.75H9v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9H6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM18 19H5L19 5v13c0 .55-.45 1-1 1zm-1-2.75c0-.41-.34-.75-.75-.75h-3.5c-.41 0-.75.34-.75.75s.34.75.75.75h3.5c.41 0 .75-.34.75-.75z"
  })));
}
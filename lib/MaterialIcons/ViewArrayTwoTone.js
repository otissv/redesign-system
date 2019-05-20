"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewArrayTwoTone = ViewArrayTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ViewArrayTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M4 5h3v13H4zM18 5h3v13h-3zM8 18h9V5H8v13zm2-11h5v9h-5V7z"
  }), _react.default.createElement("path", {
    d: "M10 7h5v9h-5z",
    opacity: ".3"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M4 5h3v13H4zM18 5h3v13h-3zM8 18h9V5H8v13zm2-11h5v9h-5V7z"
  }), _react.default.createElement("path", {
    d: "M10 7h5v9h-5z",
    opacity: ".3"
  })));
}
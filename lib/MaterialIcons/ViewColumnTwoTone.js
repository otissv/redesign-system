"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewColumnTwoTone = ViewColumnTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ViewColumnTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("g", {
    opacity: ".3"
  }, _react.default.createElement("path", {
    d: "M6 7h3v9H6zM11 7h3v9h-3zM16 7h3v9h-3z"
  })), _react.default.createElement("path", {
    d: "M4 5v13h17V5H4zm5 11H6V7h3v9zm5 0h-3V7h3v9zm5 0h-3V7h3v9z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("g", {
    opacity: ".3"
  }, _react.default.createElement("path", {
    d: "M6 7h3v9H6zM11 7h3v9h-3zM16 7h3v9h-3z"
  })), _react.default.createElement("path", {
    d: "M4 5v13h17V5H4zm5 11H6V7h3v9zm5 0h-3V7h3v9zm5 0h-3V7h3v9z"
  })));
}
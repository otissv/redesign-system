"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewStreamTwoTone = ViewStreamTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ViewStreamTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("g", {
    opacity: ".3"
  }, _react.default.createElement("path", {
    d: "M6 13h13v3H6zM6 8h13v3H6z"
  })), _react.default.createElement("path", {
    d: "M4 6v12h17V6H4zm15 10H6v-3h13v3zm0-5H6V8h13v3z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("g", {
    opacity: ".3"
  }, _react.default.createElement("path", {
    d: "M6 13h13v3H6zM6 8h13v3H6z"
  })), _react.default.createElement("path", {
    d: "M4 6v12h17V6H4zm15 10H6v-3h13v3zm0-5H6V8h13v3z"
  })));
}
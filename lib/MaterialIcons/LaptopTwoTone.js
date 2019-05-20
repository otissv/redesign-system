"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LaptopTwoTone = LaptopTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function LaptopTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M4 6h16v10H4z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
  })), ",", _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M4 6h16v10H4z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
  })));
}
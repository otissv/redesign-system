"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarSharp = StarSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function StarSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("g", {
    fill: "none"
  }, _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z"
  })), _react.default.createElement("path", {
    d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
  }), ",", _react.default.createElement("g", {
    fill: "none"
  }, _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M0 0h24v24H0V0z"
  })), _react.default.createElement("path", {
    d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
  }));
}
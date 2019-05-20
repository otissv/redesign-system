"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailsRounded = DetailsRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function DetailsRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3.84 5.49l7.29 12.96c.38.68 1.36.68 1.74 0l7.29-12.96c.38-.67-.11-1.49-.87-1.49H4.71c-.76 0-1.25.82-.87 1.49zM6.38 6h11.25L12 16 6.38 6z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3.84 5.49l7.29 12.96c.38.68 1.36.68 1.74 0l7.29-12.96c.38-.67-.11-1.49-.87-1.49H4.71c-.76 0-1.25.82-.87 1.49zM6.38 6h11.25L12 16 6.38 6z"
  })));
}
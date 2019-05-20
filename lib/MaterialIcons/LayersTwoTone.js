"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayersTwoTone = LayersTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function LayersTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M6.26 9L12 13.47 17.74 9 12 4.53z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7z"
  }), _react.default.createElement("path", {
    d: "M12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M6.26 9L12 13.47 17.74 9 12 4.53z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7z"
  }), _react.default.createElement("path", {
    d: "M12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z"
  }));
}
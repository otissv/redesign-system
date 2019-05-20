"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapSharp = MapSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function MapSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M15 5.1L9 3 3 5.02v16.2l6-2.33 6 2.1 6-2.02V2.77L15 5.1zm0 13.79l-6-2.11V5.11l6 2.11v11.67z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M15 5.1L9 3 3 5.02v16.2l6-2.33 6 2.1 6-2.02V2.77L15 5.1zm0 13.79l-6-2.11V5.11l6 2.11v11.67z"
  }));
}
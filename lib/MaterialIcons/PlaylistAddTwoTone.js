"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaylistAddTwoTone = PlaylistAddTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function PlaylistAddTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M2 14h8v2H2zM2 10h12v2H2zM2 6h12v2H2z"
  }), _react.default.createElement("path", {
    d: "M18 10h-2v4h-4v2h4v4h2v-4h4v-2h-4z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M2 14h8v2H2zM2 10h12v2H2zM2 6h12v2H2z"
  }), _react.default.createElement("path", {
    d: "M18 10h-2v4h-4v2h4v4h2v-4h4v-2h-4z"
  }));
}
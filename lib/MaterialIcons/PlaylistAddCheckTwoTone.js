"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaylistAddCheckTwoTone = PlaylistAddCheckTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function PlaylistAddCheckTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M2 6h12v2H2zM2 10h12v2H2zM2 14h8v2H2zM16.01 17L13 14l-1.5 1.5 4.51 4.5L23 13l-1.5-1.5z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M2 6h12v2H2zM2 10h12v2H2zM2 14h8v2H2zM16.01 17L13 14l-1.5 1.5 4.51 4.5L23 13l-1.5-1.5z"
  }));
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Eject = Eject;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function Eject(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 24V0h24v24H0z"
  }), _react.default.createElement("path", {
    d: "M5 17h14v2H5zm7-12L5.33 15h13.34z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 24V0h24v24H0z"
  }), _react.default.createElement("path", {
    d: "M5 17h14v2H5zm7-12L5.33 15h13.34z"
  }));
}
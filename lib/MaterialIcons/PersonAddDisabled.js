"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonAddDisabled = PersonAddDisabled;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function PersonAddDisabled(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("circle", {
    cx: "15",
    cy: "8",
    r: "4"
  }), _react.default.createElement("path", {
    d: "M23 20v-2c0-2.3-4.1-3.7-6.9-3.9l6 5.9h.9zm-11.6-5.5C9.2 15.1 7 16.3 7 18v2h9.9l4 4 1.3-1.3-21-20.9L0 3.1l4 4V10H1v2h3v3h2v-3h2.9l2.5 2.5zM6 10v-.9l.9.9H6z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("circle", {
    cx: "15",
    cy: "8",
    r: "4"
  }), _react.default.createElement("path", {
    d: "M23 20v-2c0-2.3-4.1-3.7-6.9-3.9l6 5.9h.9zm-11.6-5.5C9.2 15.1 7 16.3 7 18v2h9.9l4 4 1.3-1.3-21-20.9L0 3.1l4 4V10H1v2h3v3h2v-3h2.9l2.5 2.5zM6 10v-.9l.9.9H6z"
  }));
}
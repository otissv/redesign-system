"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessTwoTone = BusinessTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function BusinessTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M12 11h2v2h-2v2h2v2h-2v2h8V9h-8v2zm4 0h2v2h-2v-2zm0 4h2v2h-2v-2z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M16 15h2v2h-2zM16 11h2v2h-2z"
  }), _react.default.createElement("path", {
    d: "M22 7H12V3H2v18h20V7zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M12 11h2v2h-2v2h2v2h-2v2h8V9h-8v2zm4 0h2v2h-2v-2zm0 4h2v2h-2v-2z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M16 15h2v2h-2zM16 11h2v2h-2z"
  }), _react.default.createElement("path", {
    d: "M22 7H12V3H2v18h20V7zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"
  })));
}
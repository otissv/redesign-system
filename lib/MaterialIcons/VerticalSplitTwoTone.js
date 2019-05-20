"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalSplitTwoTone = VerticalSplitTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function VerticalSplitTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M15 7h4v10h-4z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M3 13h8v2H3zM3 17h8v2H3zM3 9h8v2H3zM3 5h8v2H3zM13 5v14h8V5h-8zm6 12h-4V7h4v10z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M15 7h4v10h-4z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M3 13h8v2H3zM3 17h8v2H3zM3 9h8v2H3zM3 5h8v2H3zM13 5v14h8V5h-8zm6 12h-4V7h4v10z"
  })));
}
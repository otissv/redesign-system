"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BubbleChartRounded = BubbleChartRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function BubbleChartRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("circle", {
    cx: "7.2",
    cy: "14.4",
    r: "3.2"
  }), _react.default.createElement("circle", {
    cx: "14.8",
    cy: "18",
    r: "2"
  }), _react.default.createElement("circle", {
    cx: "15.2",
    cy: "8.8",
    r: "4.8"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("circle", {
    cx: "7.2",
    cy: "14.4",
    r: "3.2"
  }), _react.default.createElement("circle", {
    cx: "14.8",
    cy: "18",
    r: "2"
  }), _react.default.createElement("circle", {
    cx: "15.2",
    cy: "8.8",
    r: "4.8"
  })));
}
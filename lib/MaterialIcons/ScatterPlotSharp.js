"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScatterPlotSharp = ScatterPlotSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ScatterPlotSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("circle", {
    cx: "7",
    cy: "14",
    r: "3"
  }), _react.default.createElement("circle", {
    cx: "11",
    cy: "6",
    r: "3"
  }), _react.default.createElement("circle", {
    cx: "16.6",
    cy: "17.6",
    r: "3"
  }), ",", _react.default.createElement("circle", {
    cx: "7",
    cy: "14",
    r: "3"
  }), _react.default.createElement("circle", {
    cx: "11",
    cy: "6",
    r: "3"
  }), _react.default.createElement("circle", {
    cx: "16.6",
    cy: "17.6",
    r: "3"
  }));
}
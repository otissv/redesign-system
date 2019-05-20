"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategorySharp = CategorySharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function CategorySharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M12 2l-5.5 9h11z"
  }), _react.default.createElement("circle", {
    cx: "17.5",
    cy: "17.5",
    r: "4.5"
  }), _react.default.createElement("path", {
    d: "M3 13.5h8v8H3z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M12 2l-5.5 9h11z"
  }), _react.default.createElement("circle", {
    cx: "17.5",
    cy: "17.5",
    r: "4.5"
  }), _react.default.createElement("path", {
    d: "M3 13.5h8v8H3z"
  }));
}
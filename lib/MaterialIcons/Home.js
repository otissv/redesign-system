"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = Home;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function Home(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }));
}
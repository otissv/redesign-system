"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShuffleTwoTone = ShuffleTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ShuffleTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M20 4h-5.5l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5zM5.41 4L4 5.41l5.17 5.17 1.42-1.41zM20 20v-5.5l-2.04 2.04-3.13-3.13-1.41 1.41 3.13 3.13L14.5 20z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M20 4h-5.5l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5zM5.41 4L4 5.41l5.17 5.17 1.42-1.41zM20 20v-5.5l-2.04 2.04-3.13-3.13-1.41 1.41 3.13 3.13L14.5 20z"
  }));
}
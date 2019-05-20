"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CropFreeTwoTone = CropFreeTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function CropFreeTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 19c0 1.1.9 2 2 2h4v-2H5v-4H3v4zM21 5c0-1.1-.9-2-2-2h-4v2h4v4h2V5zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zM21 19v-4h-2v4h-4v2h4c1.1 0 2-.9 2-2z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 19c0 1.1.9 2 2 2h4v-2H5v-4H3v4zM21 5c0-1.1-.9-2-2-2h-4v2h4v4h2V5zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zM21 19v-4h-2v4h-4v2h4c1.1 0 2-.9 2-2z"
  })));
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CropFreeSharp = CropFreeSharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function CropFreeSharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 3v6h2V5h4V3H3zm2 12H3v6h6v-2H5v-4zm14 4h-4v2h6v-6h-2v4zm2-16h-6v2h4v4h2V3z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 3v6h2V5h4V3H3zm2 12H3v6h6v-2H5v-4zm14 4h-4v2h6v-6h-2v4zm2-16h-6v2h4v4h2V3z"
  })));
}
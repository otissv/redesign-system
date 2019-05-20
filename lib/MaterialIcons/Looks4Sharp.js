"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Looks4Sharp = Looks4Sharp;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function Looks4Sharp(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M.04 0h24v24h-24V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M21.04 3h-18v18h18V3zm-6 14h-2v-4h-4V7h2v4h2V7h2v10z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M.04 0h24v24h-24V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M21.04 3h-18v18h18V3zm-6 14h-2v-4h-4V7h2v4h2V7h2v10z"
  })));
}
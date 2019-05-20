"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortTextOutlined = ShortTextOutlined;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ShortTextOutlined(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M4 9h16v2H4V9zm0 4h10v2H4v-2z"
  }), _react.default.createElement("path", {
    d: "M4 9h16v2H4V9zm0 4h10v2H4v-2z"
  }));
}
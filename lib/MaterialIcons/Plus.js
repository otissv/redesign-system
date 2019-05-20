"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plus = Plus;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function Plus(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  }));
}
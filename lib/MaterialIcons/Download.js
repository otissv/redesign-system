"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Download = Download;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function Download(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
  }));
}
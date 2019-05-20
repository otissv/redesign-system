"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Brightness3Rounded = Brightness3Rounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function Brightness3Rounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M18.87 10.37c-.75-4.76-5-8.35-9.82-8.37-.49 0-.97.03-1.44.1-.5.07-.6.73-.14.96C10.75 4.69 13 8.08 13 12s-2.25 7.31-5.53 8.95c-.45.23-.36.89.14.96.47.06.95.09 1.44.09 4.82-.02 9.07-3.61 9.82-8.37.09-.55.11-1.09.11-1.63 0-.54-.02-1.08-.11-1.63z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M18.87 10.37c-.75-4.76-5-8.35-9.82-8.37-.49 0-.97.03-1.44.1-.5.07-.6.73-.14.96C10.75 4.69 13 8.08 13 12s-2.25 7.31-5.53 8.95c-.45.23-.36.89.14.96.47.06.95.09 1.44.09 4.82-.02 9.07-3.61 9.82-8.37.09-.55.11-1.09.11-1.63 0-.54-.02-1.08-.11-1.63z"
  })));
}
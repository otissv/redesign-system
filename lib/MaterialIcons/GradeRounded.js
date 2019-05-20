"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GradeRounded = GradeRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function GradeRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M12 17.27l5.17 3.12c.38.23.85-.11.75-.54l-1.37-5.88 4.56-3.95c.33-.29.16-.84-.29-.88l-6.01-.51-2.35-5.54c-.17-.41-.75-.41-.92 0L9.19 8.63l-6.01.51c-.44.04-.62.59-.28.88l4.56 3.95-1.37 5.88c-.1.43.37.77.75.54L12 17.27z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M12 17.27l5.17 3.12c.38.23.85-.11.75-.54l-1.37-5.88 4.56-3.95c.33-.29.16-.84-.29-.88l-6.01-.51-2.35-5.54c-.17-.41-.75-.41-.92 0L9.19 8.63l-6.01.51c-.44.04-.62.59-.28.88l4.56 3.95-1.37 5.88c-.1.43.37.77.75.54L12 17.27z"
  })));
}
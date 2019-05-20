"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFieldsTwoTone = TextFieldsTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function TextFieldsTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M12.5 12h3v7h3v-7h3V9h-9z"
  }), _react.default.createElement("path", {
    d: "M15.5 4h-13v3h5v12h3V7h5z"
  }), _react.default.createElement("path", {
    d: "M12.5 12h3v7h3v-7h3V9h-9z"
  }), _react.default.createElement("path", {
    d: "M15.5 4h-13v3h5v12h3V7h5z"
  }));
}
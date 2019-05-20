"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BorderInnerTwoTone = BorderInnerTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function BorderInnerTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 15h2v2H3zM3 3h2v2H3zM3 19h2v2H3z"
  }), _react.default.createElement("path", {
    d: "M11 21h2v-8h8v-2h-8V3h-2v8H3v2h8z"
  }), _react.default.createElement("path", {
    d: "M7 19h2v2H7zM19 15h2v2h-2zM15 19h2v2h-2zM19 19h2v2h-2zM3 7h2v2H3zM19 7h2v2h-2zM7 3h2v2H7zM15 3h2v2h-2zM19 3h2v2h-2z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M3 15h2v2H3zM3 3h2v2H3zM3 19h2v2H3z"
  }), _react.default.createElement("path", {
    d: "M11 21h2v-8h8v-2h-8V3h-2v8H3v2h8z"
  }), _react.default.createElement("path", {
    d: "M7 19h2v2H7zM19 15h2v2h-2zM15 19h2v2h-2zM19 19h2v2h-2zM3 7h2v2H3zM19 7h2v2h-2zM7 3h2v2H7zM15 3h2v2h-2zM19 3h2v2h-2z"
  })));
}
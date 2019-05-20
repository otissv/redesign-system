"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Highlight = Highlight;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function Highlight(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "a",
    d: "M0 0h24v24H0V0z"
  })), _react.default.createElement("path", {
    d: "M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z"
  }), ",", _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "a",
    d: "M0 0h24v24H0V0z"
  })), _react.default.createElement("path", {
    d: "M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z"
  }));
}
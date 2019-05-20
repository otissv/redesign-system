"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MmsRounded = MmsRounded;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function MmsRounded(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5.63 13.19l2.49-3.2c.2-.25.58-.26.78-.01l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.41-.01-.65-.49-.39-.82z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5.63 13.19l2.49-3.2c.2-.25.58-.26.78-.01l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.41-.01-.65-.49-.39-.82z"
  })));
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlashOffOutlined = FlashOffOutlined;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function FlashOffOutlined(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M17 10h-3.61l2.28 2.28zM17 2H7v1.61l6.13 6.13zM3.41 2.86L2 4.27l5 5V13h3v9l3.58-6.15L17.73 20l1.41-1.41z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M17 10h-3.61l2.28 2.28zM17 2H7v1.61l6.13 6.13zM3.41 2.86L2 4.27l5 5V13h3v9l3.58-6.15L17.73 20l1.41-1.41z"
  })));
}
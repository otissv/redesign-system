"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EjectTwoTone = EjectTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function EjectTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M12 8.6L9.07 13h5.86z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M5 17h14v2H5zM12 5L5.33 15h13.34L12 5zm0 3.6l2.93 4.4H9.07L12 8.6z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M12 8.6L9.07 13h5.86z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M5 17h14v2H5zM12 5L5.33 15h13.34L12 5zm0 3.6l2.93 4.4H9.07L12 8.6z"
  })));
}
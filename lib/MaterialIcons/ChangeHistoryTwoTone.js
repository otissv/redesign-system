"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeHistoryTwoTone = ChangeHistoryTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ChangeHistoryTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M12 7.77L5.61 18h12.78z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M12 4L2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M12 7.77L5.61 18h12.78z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M12 4L2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z"
  })));
}
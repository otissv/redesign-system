"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubdirectoryArrowRightOutlined = SubdirectoryArrowRightOutlined;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function SubdirectoryArrowRightOutlined(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M24 24H0V0h24v24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M24 24H0V0h24v24z",
    opacity: ".87"
  }), _react.default.createElement("path", {
    d: "M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"
  }));
}
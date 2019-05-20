"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForumTwoTone = ForumTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ForumTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M15 11V4H4v8.17L5.17 11H6z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M16 13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zm-12-.83V4h11v7H5.17L4 12.17z"
  }), _react.default.createElement("path", {
    d: "M22 7c0-.55-.45-1-1-1h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7z"
  })), ",", _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M15 11V4H4v8.17L5.17 11H6z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M16 13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zm-12-.83V4h11v7H5.17L4 12.17z"
  }), _react.default.createElement("path", {
    d: "M22 7c0-.55-.45-1-1-1h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7z"
  })));
}
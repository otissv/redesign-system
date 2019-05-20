"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeetingRoomTwoTone = MeetingRoomTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function MeetingRoomTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M7 19h6V5H7v14zm3-8h2v2h-2v-2z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14z"
  }), _react.default.createElement("path", {
    d: "M10 11h2v2h-2z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M7 19h6V5H7v14zm3-8h2v2h-2v-2z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14z"
  }), _react.default.createElement("path", {
    d: "M10 11h2v2h-2z"
  }));
}
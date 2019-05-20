"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportProblemTwoTone = ReportProblemTwoTone;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ReportProblemTwoTone(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M12 5.99L4.47 19h15.06L12 5.99zM13 18h-2v-2h2v2zm-2-4v-4h2v4h-2z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z"
  }), _react.default.createElement("path", {
    d: "M11 16h2v2h-2zM11 10h2v4h-2z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M12 5.99L4.47 19h15.06L12 5.99zM13 18h-2v-2h2v2zm-2-4v-4h2v4h-2z",
    opacity: ".3"
  }), _react.default.createElement("path", {
    d: "M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z"
  }), _react.default.createElement("path", {
    d: "M11 16h2v2h-2zM11 10h2v4h-2z"
  }));
}
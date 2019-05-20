"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportProblemOutlined = ReportProblemOutlined;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function ReportProblemOutlined(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2z"
  }), _react.default.createElement("path", {
    d: "M13 16h-2v2h2v-2zM13 10h-2v4h2v-4z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), _react.default.createElement("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2z"
  }), _react.default.createElement("path", {
    d: "M13 16h-2v2h2v-2zM13 10h-2v4h2v-4z"
  }));
}
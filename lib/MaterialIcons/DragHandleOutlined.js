"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragHandleOutlined = DragHandleOutlined;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function DragHandleOutlined(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z"
  }), _react.default.createElement("path", {
    d: "M20 9H4v2h16V9zM4 15h16v-2H4v2z"
  }));
}
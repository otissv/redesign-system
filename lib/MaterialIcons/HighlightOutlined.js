"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HighlightOutlined = HighlightOutlined;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _Icon = _interopRequireDefault(require("../Icon/Icon"));

function HighlightOutlined(props) {
  return _react.default.createElement(_Icon.default, props, _react.default.createElement("path", {
    d: "M6 14l3 3v5h6v-5l3-3V9H6v5zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3V11zM11 2h2v3h-2zM3.5022 5.8742l1.4136-1.4148L7.038 6.5798 5.6244 7.9946zM16.9598 6.5824l2.1228-2.1198 1.4132 1.4152-2.1228 2.1198z"
  }), _react.default.createElement("path", {
    d: "M6 14l3 3v5h6v-5l3-3V9H6v5zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3V11zM11 2h2v3h-2zM3.5022 5.8742l1.4136-1.4148L7.038 6.5798 5.6244 7.9946zM16.9598 6.5824l2.1228-2.1198 1.4132 1.4152-2.1228 2.1198z"
  }));
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contextMenuTheme = contextMenuTheme;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

function contextMenuTheme(_ref) {
  (0, _objectDestructuringEmpty2.default)(_ref);
  return {
    margin: 0,
    padding: 0,
    position: 'fixed',
    border: '1px solid #ccc',
    listStyle: 'none'
  };
}
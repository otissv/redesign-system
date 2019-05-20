"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collectionMenuItemTheme = collectionMenuItemTheme;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

function collectionMenuItemTheme(_ref) {
  (0, _objectDestructuringEmpty2.default)(_ref);
  return {
    cursor: 'pointer',
    padding: '6px 20px',
    textAlign: 'left',
    '&:hover': {
      background: '#666'
    }
  };
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollbarTheme = scrollbarTheme;

var _utils = require("../utils");

var _merge = _interopRequireDefault(require("lodash/fp/merge"));

function scrollbarTheme() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils.baseDefaults,
      color = _ref.color,
      scrollbar = _ref.scrollbar,
      unit = _ref.unit;

  var defaults = {
    width: unit[3],
    height: unit[3],
    backgroundColor: color.background,
    corner: {
      backgroundColor: color.background
    },
    thumb: {
      backgroundColor: '#7d7d7d94',
      outline: 'none',
      transition: 'background-color ease 0.2s',
      hover: {
        backgroundColor: '#7d7d7d'
      }
    }
  };
  return (0, _merge.default)(scrollbar)(defaults);
}
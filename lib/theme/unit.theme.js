"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unitTheme = unitTheme;

var _utils = require("../utils");

var _merge = _interopRequireDefault(require("lodash/fp/merge"));

function unitTheme() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils.baseDefaults,
      unit = _ref.unit;

  var defaults = {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '24px',
    6: '32px',
    7: '48px',
    8: '64px',
    9: '96px',
    10: '128px',
    // 11: 'px',
    // 12: 'px',
    // 13: 'px',
    // 14: 'px',
    // 15: 'px',
    // 16: 'px',
    // 17: 'px',
    // 18: 'px',
    // 19: 'px',
    default: '24px'
  };
  return (0, _merge.default)(unit)(defaults);
}
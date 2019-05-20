"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.depthTheme = depthTheme;

var _utils = require("../utils");

var _merge = _interopRequireDefault(require("lodash/fp/merge"));

function depthTheme() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils.baseDefaults,
      depth = _ref.depth;

  var defaults = {
    0: 'none',
    1: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;',
    2: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;',
    3: 'rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;',
    4: 'rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;',
    5: 'rgba(0, 0, 0, 0.3) 0px 19px 60px, rgba(0, 0, 0, 0.22) 0px 15px 20px;'
  };
  return (0, _merge.default)(depth)(defaults);
}
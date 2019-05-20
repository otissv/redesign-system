"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorTheme = colorTheme;

var _utils = require("../utils");

var _merge = _interopRequireDefault(require("lodash/fp/merge"));

// const colorDefaults = {
//   accent: '#E10098',
//   danger: '#f0506e',
//   muted: '#777',
//   primary: '#1e87f0',
//   secondary: '#e5e5e5',
//   tertiary: '#515151',
//   warning: '#faa05a',
//   error: '#f0506e',
//   active: '#E10098'
// };
function colorTheme() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils.baseDefaults,
      color = _ref.color;

  var defaults = (0, _utils.makeColorScheme)({
    foreground: '#fff',
    background: 'hsl(0, 0%, 12%, 1)',
    transparent: '#00ffff00',
    foregroundInvert: 'hsl(0, 0%, 12%, 1)',
    backgroundInvert: '#fff',
    accent2: '#e538ad',
    accent: '#E10098',
    active: '#E10098',
    danger2: '#ee395b',
    danger: '#f0506e',
    error2: '#fef4f6',
    error: '#f0506e',
    muted2: '#d2d2d2',
    muted: '#777',
    primary2: '#4ea1f3',
    primary: '#1e87f0',
    secondary2: '#999',
    secondary: '#e5e5e5',
    success2: '#edfbf6',
    success: '#32d296',
    tertiary2: '#515151',
    tertiary: '#515151',
    warning2: '#fec266',
    warning: '#faa05a'
  });
  return (0, _merge.default)(color)(defaults);
}
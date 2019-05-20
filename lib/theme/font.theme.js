"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontTheme = fontTheme;

var _utils = require("../utils");

var _merge = _interopRequireDefault(require("lodash/fp/merge"));

function fontTheme() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils.baseDefaults,
      color = _ref.color,
      font = _ref.font;

  var defaults = {
    color: color.foreground,
    smooth: "\n      text-rendering: optimizeLegibility !important;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n    ",
    // family
    code: "'Source Code Pro', 'Consolas', 'Inconsolata', 'Source Code Pro', 'Monaco', monospace !important",
    serif: 'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
    sans: '',
    size: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
      6: '24px',
      7: '30px',
      8: '36px',
      9: '48px',
      10: '60px',
      11: '72px',
      12: '84px',
      default: '16px'
    },
    lineHeight: {
      1: 1,
      2: 1.5,
      3: 1.75,
      4: 2,
      default: 1.5
    },
    weight: {
      1: 400,
      2: 500,
      3: 600,
      4: 700,
      5: 800,
      6: 900,
      default: 400
    }
  };
  return (0, _merge.default)(font)(defaults);
}
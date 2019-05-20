"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flexTheme = flexTheme;
exports.flexDirectionTheme = flexDirectionTheme;

var _kebabCase = _interopRequireDefault(require("lodash/kebabCase"));

function flexTheme(_ref) {
  var alignItems = _ref.alignItems,
      basis = _ref.basis,
      display = _ref.display,
      grow = _ref.grow,
      justifyContent = _ref.justifyContent,
      shrink = _ref.shrink,
      wrap = _ref.wrap;
  return {
    display: display || 'flex',
    basis: basis ? "".concat(basis) : '',
    grow: grow ? "".concat(grow) : '',
    shrink: shrink ? "".concat(shrink) : '',
    justifyContent: justifyContent && [(0, _kebabCase.default)(justifyContent)] || '',
    alignItems: alignItems && [(0, _kebabCase.default)(alignItems)] || '',
    flexWrap: wrap && [(0, _kebabCase.default)(wrap)] || ''
  };
}

function flexDirectionTheme(_ref2) {
  var direction = _ref2.direction;
  return {
    row: {
      flexDirection: 'row'
    },
    column: {
      flexDirection: 'column'
    },
    rowReverse: {
      flexDirection: 'rowReverse'
    },
    columnReverse: {
      flexDirection: 'columnReverse'
    }
  }[direction] || '';
}
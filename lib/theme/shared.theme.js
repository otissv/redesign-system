"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unitPositions = unitPositions;
exports.sharedTheme = sharedTheme;

var _objectSpread4 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _upperFirst = _interopRequireDefault(require("lodash/fp/upperFirst"));

var _utils = require("../utils");

function unitPositions(_ref) {
  var _initial;

  var unit = _ref.unit,
      style = _ref.style;

  var isValidStringValue = function isValidStringValue(value) {
    return typeof value === 'string' || value.trim() !== '';
  };

  var isValidNumberValue = function isValidNumberValue(value) {
    return typeof value === 'number' || value < 0;
  };

  var isValidUnitValue = function isValidUnitValue(value) {
    return value !== 'string' && isValidStringValue(value) && value.match(/%|px|rem|em|auto/);
  };

  function allPositions(value, prop) {
    switch (true) {
      case value === 'default':
        return (0, _defineProperty2.default)({}, prop, unit.default);

      case isValidNumberValue(value):
        return (0, _defineProperty2.default)({}, prop, unit[value]);

      case isValidUnitValue(value) || isValidStringValue(value):
        return (0, _defineProperty2.default)({}, prop, value);

      default:
        return;
    }
  }

  var reducer = function reducer(accumulator, key) {
    if (key === 'default') return accumulator;
    var prop = "".concat(style).concat((0, _upperFirst.default)(key));
    return (0, _objectSpread4.default)({}, accumulator, (0, _defineProperty2.default)({}, prop, function (value) {
      if (!isValidStringValue(value)) return {};
      var positions = value.split(' ');
      return Object.keys(positions).reduce(function (accum, pos) {
        return (0, _objectSpread4.default)({}, accum, (0, _defineProperty2.default)({}, "".concat(style, "-").concat(positions[pos]), unit[key]));
      }, {});
    }));
  };

  var initial = (_initial = {}, (0, _defineProperty2.default)(_initial, style, function (value) {
    return allPositions(value, style);
  }), (0, _defineProperty2.default)(_initial, "".concat(style, "Bottom"), function Bottom(value) {
    return allPositions(value, "".concat(style, "Bottom"));
  }), (0, _defineProperty2.default)(_initial, "".concat(style, "Left"), function Left(value) {
    return allPositions(value, "".concat(style, "Left"));
  }), (0, _defineProperty2.default)(_initial, "".concat(style, "Right"), function Right(value) {
    return allPositions(value, "".concat(style, "Right"));
  }), (0, _defineProperty2.default)(_initial, "".concat(style, "Top"), function Top(value) {
    return allPositions(value, "".concat(style, "Top"));
  }), _initial);
  return Object.keys(unit).reduce(reducer, initial);
}

function sharedTheme() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils.baseDefaults,
      _border = _ref5.border,
      _elevate = _ref5.elevate,
      _radius = _ref5.radius,
      shared = _ref5.shared,
      unit = _ref5.unit,
      font = _ref5.font;

  return (0, _objectSpread4.default)({}, unitPositions({
    unit: unit,
    style: 'margin'
  }), unitPositions({
    unit: unit,
    style: 'padding'
  }), {
    border: function border(value) {
      return {
        border: _border[value]
      };
    },
    borderBottom: function borderBottom(value) {
      return {
        borderBottom: _border[value]
      };
    },
    borderLeft: function borderLeft(value) {
      return {
        borderLeft: _border[value]
      };
    },
    borderRight: function borderRight(value) {
      return {
        borderRight: _border[value]
      };
    },
    borderTop: function borderTop(value) {
      return {
        borderTop: _border[value]
      };
    },
    radius: function radius(value) {
      return {
        borderRadius: _radius[value]
      };
    },
    elevate: function elevate(value) {
      return {
        boxShadow: _elevate[value]
      };
    },
    centered: function centered() {
      return {
        margin: '0 auto'
      };
    },
    flex: function flex(value) {
      return {
        flex: value
      };
    },
    flexGrow: function flexGrow(value) {
      return {
        flexGrow: value
      };
    },
    order: function order(value) {
      return {
        order: value
      };
    },
    display: function display(value) {
      return {
        display: value
      };
    },
    widthSize: function widthSize(value) {
      return {
        width: value
      };
    },
    fontSize: function fontSize(value) {
      return {
        fontSize: value === 'default' ? font.size.default : font.size[value]
      };
    },
    lineHeight: function lineHeight(value) {
      return {
        lineHeight: value === 'default' ? font.lineHeight.default : font.lineHeight[value]
      };
    },
    fontWeight: function fontWeight(value) {
      return {
        fontWeight: value === 'default' ? font.weight.default : font.weight[value]
      };
    }
  }, shared);
}
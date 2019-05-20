"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = Accordion;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _AccordionContext = require("./AccordionContext");

var _Base = _interopRequireDefault(require("../Base/Base"));

var _AccordionButton = _interopRequireDefault(require("./AccordionButton"));

var _AccordionContent = _interopRequireDefault(require("./AccordionContent"));

var _AccordionItem = _interopRequireDefault(require("./AccordionItem"));

var _accordion = require("./accordion.theme");

var _ThemeContext = require("../ThemeContext");

function Accordion(_ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["active", "children", "className", "themed"]);
  var classNames = "Accordion ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_accordion.accordionTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_accordion.accordionTheme, propsThemed]);
  return _react.default.createElement(_AccordionContext.AccordionProvider, {
    value: active
  }, _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed
  }, propsRest), children));
}

Accordion.defaultProps = {
  items: [],
  themed: []
};
Accordion.propTypes = {
  active: _propTypes.default.string,
  children: _propTypes.default.node,
  item: _propTypes.default.object,
  theme: _propTypes.default.object
};
var _default = Accordion;
exports.default = _default;
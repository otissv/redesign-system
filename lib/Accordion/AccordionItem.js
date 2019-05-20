"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAccordionItem = useAccordionItem;
exports.AccordionItem = AccordionItem;
exports.default = exports.AccordionItemContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _accordion = require("./accordion.theme");

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var AccordionItemContext = _react.default.createContext('');

exports.AccordionItemContext = AccordionItemContext;

function useAccordionItem() {
  return (0, _react.useContext)(AccordionItemContext);
}

function AccordionItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      uid = _ref.uid,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "uid", "themed"]);
  var classNames = "AccordionItem ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_accordion.accordionItemTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_accordion.accordionItemTheme, propsThemed]);
  var state = (0, _react.useState)(uid);

  var _useTheme = (0, _ThemeContext.useTheme)(),
      theme = _useTheme.theme;

  var themeContext = (0, _utils.setTheme)(propsRest.theme, theme);
  var context = (0, _react.useMemo)(function () {
    return {
      uid: state[0]
    };
  }, [uid]);
  return _react.default.createElement(AccordionItemContext.Provider, {
    value: context
  }, _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed
  }, propsRest), children));
}

AccordionItem.defaultProps = {
  themed: []
};
AccordionItem.propTypes = {
  children: _propTypes.default.node.isRequired,
  themed: _propTypes.default.array,
  uid: _propTypes.default.string
};
var _default = AccordionItem;
exports.default = _default;
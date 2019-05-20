"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionButton = AccordionButton;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("../Button/Button");

var _ChevronRight = require("../MaterialIcons/ChevronRight");

var _Icon = require("../Icon");

var _AccordionContext = require("./AccordionContext");

var _AccordionItem = require("./AccordionItem");

var _accordion = require("./accordion.theme");

function AccordionButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onFocus = _ref.onFocus,
      handleOnClick = _ref.handleOnClick,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "onFocus", "handleOnClick", "themed"]);
  var classNames = "AccordionButton ".concat(className || '');

  var _useAccordion = (0, _AccordionContext.useAccordion)(),
      active = _useAccordion.active,
      setActiveItem = _useAccordion.setActiveItem;

  var _useAccordionItem = (0, _AccordionItem.useAccordionItem)(),
      uid = _useAccordionItem.uid;

  function handleClick(e) {
    e.preventDefault();
    handleOnClick ? handleOnClick(e) : setActiveItem(e.target.dataset.uid);
  }

  function handleFocus(e) {
    e.preventDefault();
    onFocus ? onFocus(e) : setActiveItem(e.target.dataset.uid);
  }

  var themed = (0, _react.useMemo)(function () {
    return [_accordion.accordionButtonTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_accordion.accordionButtonTheme].concat((0, _toConsumableArray2.default)(propsThemed)));
  var iconThemed = (0, _react.useMemo)(function () {
    return [_accordion.accordionButtonIconTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_accordion.accordionButtonIconTheme].concat((0, _toConsumableArray2.default)(propsThemed)));
  return _react.default.createElement(_Button.Button, (0, _extends2.default)({
    className: classNames,
    onClick: handleClick,
    "data-uid": uid,
    onFocus: handleFocus,
    stretch: true,
    themed: themed
  }, propsRest), children, _react.default.createElement(_ChevronRight.ChevronRight, {
    "data-uid": uid,
    className: "AccordionButtonIcon",
    active: active === uid,
    css: "padding: 0;",
    themed: iconThemed
  }));
}

AccordionButton.defaultProps = {
  themed: []
};
AccordionButton.propTypes = {
  children: _propTypes.default.node,
  appearance: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary', 'accent', 'action', 'danger', 'success', 'warning', 'disabled']),
  size: _propTypes.default.oneOf(['small', 'large']),
  stretch: _propTypes.default.bool,
  themed: _propTypes.default.array,
  theme: _propTypes.default.array
};
var _default = AccordionButton;
exports.default = _default;
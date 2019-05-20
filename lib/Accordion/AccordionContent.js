"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionContent = AccordionContent;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _accordion = require("./accordion.theme");

var _utils = require("../utils");

var _AccordionContext = require("./AccordionContext");

var _AccordionItem = require("./AccordionItem");

var _ThemeContext = require("../ThemeContext");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var AccordionContentStyled = _styledComponents.default.div(_templateObject(), _accordion.accordionContentTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function AccordionContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsTheme = _ref.theme,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "theme"]);
  var classNames = "AccordionContent ".concat(className || '');

  var _useTheme = (0, _ThemeContext.useTheme)(),
      theme = _useTheme.theme;

  var _useAccordion = (0, _AccordionContext.useAccordion)(),
      active = _useAccordion.active,
      animate = _useAccordion.animate;

  var _useAccordionItem = (0, _AccordionItem.useAccordionItem)(),
      uid = _useAccordionItem.uid;

  var themeContext = (0, _utils.setTheme)(propsTheme, theme);

  var _animate = (0, _react.useMemo)(function () {
    return animate || {
      open: {
        height: 'auto'
      },
      close: {
        height: 0
      }
    };
  }, [animate]); // styled={active === uid ? 'display:block;' : ''}


  return _react.default.createElement(AccordionContentStyled, (0, _extends2.default)({
    className: classNames,
    theme: themeContext
  }, propsRest), _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    animate: _animate,
    state: active === uid ? 'open' : 'close'
  }, propsRest), children));
}

AccordionContent.propTypes = {
  children: _propTypes.default.any.isRequired,
  theme: _propTypes.default.object
};
var _default = AccordionContent;
exports.default = _default;
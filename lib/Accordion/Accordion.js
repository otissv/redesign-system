"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = Accordion;
exports.default = exports.AccordionConsumer = exports.accordion = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _AccordionButton = require("./AccordionButton");

var _AccordionContent = require("./AccordionContent");

var _AccordionItem = require("./AccordionItem");

var _AccordionContext = require("./AccordionContext");

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _accordion = require("./accordion.theme");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var AccordionStyled = _styledComponents.default.ul(_templateObject(), _accordion.accordionTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

var AccordionItem = (0, _AccordionItem.accordionItem)(_templateObject2());
var AccordionButton = (0, _AccordionButton.accordionButton)(_templateObject3());
var AccordionContent = (0, _AccordionContent.accordionContent)(_templateObject4());

function Accordion(props) {
  // const [state, setState] = useContext(AccordionContext)
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  var themeContext = (0, _utils.setTheme)(props.theme, theme);
  var active = props.active,
      children = props.children,
      items = props.items; // function handleButtonClick(e) {
  //   setState(e.currentTarget.dataset.uid)
  // }

  function getItems() {
    return items.map(function (_ref) {
      var content = _ref.content,
          title = _ref.title,
          uid = _ref.uid,
          itemProps = _ref.itemProps,
          buttonProps = _ref.buttonProps,
          contentProps = _ref.contentProps;
      return _react.default.createElement(AccordionItem, (0, _extends2.default)({
        theme: themeContext,
        uid: uid
      }, itemProps), function (props) {
        return _react.default.createElement(_react.Fragment, null, _react.default.createElement(AccordionButton, (0, _extends2.default)({
          theme: themeContext
        }, buttonProps), title), _react.default.createElement(AccordionContent, (0, _extends2.default)({
          theme: themeContext
        }, contentProps), content));
      });
    });
  }

  return _react.default.createElement(_AccordionContext.AccordionProvider, {
    value: active
  }, _react.default.createElement(AccordionStyled, (0, _extends2.default)({
    className: "Accordion",
    theme: themeContext
  }, props), items.length > 0 ? getItems() : children));
}

Accordion.defaultProps = {
  items: []
};
Accordion.propTypes = {
  active: _propTypes.default.string,
  children: _propTypes.default.node,
  item: _propTypes.default.object,
  theme: _propTypes.default.object
};
var accordion = (0, _styledComponents.default)(Accordion);
exports.accordion = accordion;
var AccordionConsumer = _AccordionContext.AccordionContext.Consumer;
exports.AccordionConsumer = AccordionConsumer;
var _default = Accordion;
exports.default = _default;
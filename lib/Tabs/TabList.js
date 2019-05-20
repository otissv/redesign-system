"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabList = TabList;
exports.default = exports.tabList = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _TabContext = require("./TabContext");

var _Button = require("../Button");

var _ButtonGroup = require("../ButtonGroup");

var _tabs = require("./tabs.theme");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Button = (0, _Button.button)(_templateObject(), _tabs.tabsItemTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});
var ButtonGroup = (0, _ButtonGroup.buttonGroup)(_templateObject2(), _tabs.tabsListTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

var TabListStyled = _styledComponents.default.div(_templateObject3(), _tabs.tabsTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function TabList(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  var tabContext = (0, _react.useContext)(_TabContext.TabContext);
  var previousItems = (0, _react.useRef)();
  var themeContext = (0, _utils.setTheme)(props.theme, theme);
  var _tabContext$ = tabContext[1],
      select = _tabContext$.select,
      dispatch = _tabContext$.dispatch;

  function handleOnWheel(event) {
    event.preventDefault();
    var tabList = event.currentTarget;
    tabList.scrollLeft = -event.nativeEvent.wheelDelta || -event.nativeEvent.detail;
  }

  function handleClick(onClick) {
    return function (e) {
      e.preventDefault();
      select(e.target.dataset.uid);
      onClick && onClick(e);
    };
  }

  function getItems(context) {
    return props.items.map(function (item) {
      return _react.default.createElement(Button, (0, _extends2.default)({
        className: "Tab-list-button",
        "data-uid": item.uid,
        key: item.uid,
        onClick: handleClick(item.onClick),
        theme: themeContext
      }, context), item.title);
    });
  }

  (0, _react.useEffect)(function () {
    if ((0, _isEqual.default)(previousItems.current, props.items.map(function (i) {
      return i.uid;
    }))) {
      return;
    }

    dispatch((0, _objectSpread2.default)({
      type: 'BULK_INSERT'
    }, props.items));
    dispatch({
      type: 'SELECT',
      query: function query(item) {
        return item.uid === props.active;
      }
    });
    previousItems.current = props.items.map(function (i) {
      return i.uid;
    });
  });
  return _react.default.createElement(TabListStyled, (0, _extends2.default)({
    className: "Tab-list",
    theme: themeContext
  }, props), _react.default.createElement(ButtonGroup, {
    className: "Tab-list-button-group",
    theme: themeContext,
    onWheel: handleOnWheel,
    buttonProps: props.itemsProps,
    styled: "overflow:hidden;"
  }, function (context) {
    return props.items.map(function (item) {
      return _react.default.createElement(Button, (0, _extends2.default)({
        className: "Tab-list-button",
        "data-uid": item.uid,
        key: item.uid,
        onClick: handleClick(item.onClick)
      }, context), item.title);
    });
  }));
}

TabList.propTypes = {
  active: _propTypes.default.string,
  items: _propTypes.default.array,
  itemsProps: _propTypes.default.object,
  theme: _propTypes.default.object
};
TabList.defaultProps = {
  items: []
};
var tabList = (0, _styledComponents.default)(TabList);
exports.tabList = tabList;
var _default = TabList;
exports.default = _default;
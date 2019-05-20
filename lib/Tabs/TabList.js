"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabList = TabList;
exports.default = exports.tabList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _TabListButton = _interopRequireDefault(require("./TabListButton"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup/ButtonGroup"));

var _ButtonGroupButton = _interopRequireDefault(require("../ButtonGroup/ButtonGroupButton"));

var _tabs = require("./tabs.theme");

var _TabContext = require("./TabContext");

var _ThemeContext = require("../ThemeContext");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TabListGroup = (0, _styledComponents.default)(_ButtonGroup.default)(_templateObject(), _tabs.tabsListTheme);

function TabList(_ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["active", "children", "className"]);
  var classNames = "TabList ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_tabs.tabsTheme];
  }, [_tabs.tabsTheme]);

  var _useTheme = (0, _ThemeContext.useTheme)(),
      theme = _useTheme.theme;

  var _useTabs = (0, _TabContext.useTabs)(),
      dispatch = _useTabs.dispatch;

  var previousItems = (0, _react.useRef)();

  function handleOnWheel(event) {
    event.preventDefault();
    var tabList = event.currentTarget;
    tabList.scrollLeft = -event.nativeEvent.wheelDelta || -event.nativeEvent.detail;
  }

  (0, _react.useEffect)(function () {
    dispatch({
      type: 'SET_ACTIVE',
      active: active
    });
  }, [active]);
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed
  }, propsRest), _react.default.createElement(TabListGroup, {
    radius: "0",
    stretch: true,
    className: "Tab-list-button-group",
    onWheel: handleOnWheel,
    styled: "overflow:hidden;"
  }, children));
}

TabList.propTypes = {
  active: _propTypes.default.string,
  theme: _propTypes.default.object
};
var tabList = (0, _styledComponents.default)(TabList);
exports.tabList = tabList;
var _default = TabList;
exports.default = _default;
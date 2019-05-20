"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabsTheme = tabsTheme;
exports.tabsItemTheme = tabsItemTheme;
exports.tabsListTheme = tabsListTheme;
exports.tabsPanelTheme = tabsPanelTheme;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

function tabsTheme(_ref) {
  (0, _objectDestructuringEmpty2.default)(_ref);
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'stretch',
    alignContent: 'stretch'
  };
}

function tabsItemTheme(_ref2) {
  var item = _ref2.item;
  return {
    width: 'auto',
    flex: 'none'
  }[item] || '';
}

function tabsListTheme(_ref3) {
  var list = _ref3.list;
  return {
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap'
  }[list] || '';
}

function tabsPanelTheme(_ref4) {
  var item = _ref4.item;
  return {
    display: 'flex',
    flex: 1
  }[item] || '';
}
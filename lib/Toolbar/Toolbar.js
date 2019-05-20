"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = Toolbar;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AppBar = require("../AppBar");

var _toolbar = require("./toolbar.theme");

function Toolbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onDeleteSelected = _ref.onDeleteSelected,
      onSwitchView = _ref.onSwitchView,
      toolbar = _ref.toolbar,
      selectToolbar = _ref.selectToolbar,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "items", "onDeleteSelected", "onSwitchView", "toolbar", "selectToolbar", "themed"]);
  var classNames = "Toolbar ".concat(className || '');

  function handleDeleteSelected(e) {
    e.preventDefault();
    onDeleteSelected && onDeleteSelected(e);
  }

  var themed = (0, _react.useMemo)(function () {
    return [_toolbar.toolbarTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_toolbar.toolbarTheme, propsThemed]);

  function handleSwitchView(e) {
    e.preventDefault();
    var id = e.currentTarget.dataset.uid;
    onSwitchView && onSwitchView(e, {
      id: id
    });
  }

  var SelectToolbar = selectToolbar;
  var toolbarContent = (0, _react.useMemo)(function () {
    return items.length > 0 ? _react.default.createElement(SelectToolbar, {
      selected: items.length,
      handleDeleteSelected: handleDeleteSelected
    }) : typeof children === 'function' ? children({
      handleSwitchView: handleSwitchView,
      toolbar: toolbar
    }) : children;
  }, [children, handleSwitchView, handleDeleteSelected, items, toolbar]);
  return _react.default.createElement(_AppBar.AppBar, (0, _extends2.default)({
    className: classNames,
    themed: themed
  }, propsRest), toolbarContent);
}

Toolbar.defaultProps = {
  themed: []
};
Toolbar.propTypes = {
  themed: _propTypes.default.array
};
var _default = Toolbar;
exports.default = _default;
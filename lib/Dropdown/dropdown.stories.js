"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = require("../dist/index.es");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var stories = (0, _react2.storiesOf)('Dropdown', module);
var Dropdown = (0, _index.dropdown)(_templateObject());
stories.add('Dropdown - default', function () {
  return _react.default.createElement(_index.ThemeProvider, null, _react.default.createElement(Dropdown, {
    toggle: "Open"
  }, "content"));
}).add('Dropdown - renderProps', function () {
  return _react.default.createElement(_index.ThemeProvider, null, _react.default.createElement(Dropdown, {
    toggle: "Dropdown using render props"
  }, function (_ref) {
    var trigger = _ref.trigger;
    return _react.default.createElement("h1", null, trigger);
  }));
}).add('Dropdown - divider', function () {
  return _react.default.createElement(_index.ThemeProvider, null, _react.default.createElement(Dropdown, {
    divider: true,
    toggle: "Dropdown with default h1"
  }));
});
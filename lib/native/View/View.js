"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.view = exports.View = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _ThemeContext = require("../../ThemeContext");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _view = require("./view.theme");

var _utils = require("../../utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ViewStyled = _styledComponents.default.View(_templateObject(), _view.viewTheme, _utils.sharedStyles, function (props) {
  return props.styledView;
});

var cleanProps = function cleanProps(props) {
  var tmpProps = (0, _objectSpread2.default)({}, props);
  var shared = [border, radius, depth, margin, marginXSmall, marginSmall, marginLarge, marginXLarge, padding, paddingXSmall, paddingSmall, paddingLarge, paddingXLarge];
  delete tmpProps.border;
  delete tmpProps.radius;
  delete tmpProps.depth;
  delete tmpProps.margin;
  delete tmpProps.marginXSmall;
  delete tmpProps.marginSmall;
  delete tmpProps.marginLarge;
  delete tmpProps.marginXLarge;
  delete tmpProps.padding;
  delete tmpProps.paddingXSmall;
  delete tmpProps.paddingSmall;
  delete tmpProps.paddingLarge;
  delete tmpProps.paddingXLarge;
};

var View = function View(props) {
  return _react.default.createElement(_ThemeContext.ThemeConsumer, null, function (theme) {
    return _react.default.createElement(ViewStyled, (0, _extends2.default)({}, props, {
      theme: (0, _utils.setTheme)(props, theme)
    }), props.children);
  });
};

exports.View = View;
var view = (0, _styledComponents.default)(View);
exports.view = view;
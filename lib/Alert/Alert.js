"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.alert = exports.Alert = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _alert = require("./alert.theme");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: ", ";\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  color: inherit;\n  opacity: 0.4;\n  margin: 0;\n  border: none;\n  border-radius: 0;\n  overflow: visible;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  padding: 0;\n  background-color: transparent;\n  fill: currentcolor;\n  line-height: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var AlertStyled = _styledComponents.default.div(_templateObject(), _alert.alertTheme, _alert.alertContextTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

var Close = _styledComponents.default.a(_templateObject2(), function (props) {
  return props.onClose ? 'inline-block' : 'none';
});

var Alert = _react.default.memo(function Alert(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  function handleOnClose(e) {
    e.preventDefault();
  }

  return _react.default.createElement(AlertStyled, (0, _extends2.default)({
    theme: (0, _utils.setTheme)(props.theme, theme)
  }, props), _react.default.createElement(Close, {
    onClick: handleOnClose
  }, _react.default.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("line", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "1.1",
    x1: "1",
    y1: "1",
    x2: "13",
    y2: "13"
  }), _react.default.createElement("line", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "1.1",
    x1: "13",
    y1: "1",
    x2: "1",
    y2: "13"
  }))), props.children);
});

exports.Alert = Alert;
Alert.propTypes = {
  children: _propTypes.default.node,
  context: _propTypes.default.oneOf(['accent', 'primary', 'success', 'warning', 'danger']),
  onClose: _propTypes.default.func,
  theme: _propTypes.default.object
};
var alert = (0, _styledComponents.default)(Alert);
exports.alert = alert;
var _default = Alert;
exports.default = _default;
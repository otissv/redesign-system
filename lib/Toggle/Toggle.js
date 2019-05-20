"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = Toggle;
exports.default = exports.ToggleLabel = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../ThemeContext");

var _utils = require("../utils");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", ";\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", ";\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ToggleStyled = _styledComponents.default.div(_templateObject());

var ToggleInput = _styledComponents.default.input(_templateObject2(), function (_ref) {
  var color = _ref.theme.color;
  return "\n      box-sizing: border-box;\n      height: 0;\n      width: 0;\n      visibility: hidden;\n\n      &:checked + label {\n        background: ".concat(color['grey-100'], ";\n      }\n\n      &:checked + label:after {\n        left: calc(100% - 5px);\n        transform: translateX(-100%);\n      }\n  ");
}, _utils.sharedStyles, function (props) {
  return props.css;
});

var ToggleLabel = _styledComponents.default.label(_templateObject3(), function (_ref2) {
  var color = _ref2.theme.color,
      checked = _ref2.checked,
      height = _ref2.height,
      hideText = _ref2.hideText,
      width = _ref2.width;
  return "\n    position: relative;\n    box-sizing: border-box;off\n    cursor: pointer;\n    text-indent ".concat(hideText ? '-9999px' : 'inital', ";\n    width: ").concat(width, ";\n    height: ").concat(height, ";\n    background: ").concat(color['grey-700'], ";\n    display: inline-block;\n    border-radius: 100px;\n    font-size: ").concat(height, ";\n    line-height: ").concat(height, ";\n\n    text-align: ").concat(checked ? 'left' : 'right', "\n  ");
}, _utils.sharedStyles, function (props) {
  return props.css;
});

exports.ToggleLabel = ToggleLabel;

var Component = _styledComponents.default.div(_templateObject4(), function (_ref3) {
  var color = _ref3.theme.color,
      toggle = _ref3.toggle,
      height = _ref3.height,
      width = _ref3.width;
  return "\n    position: absolute;\n    box-sizing: border-box;\n    width: ".concat(width, ";\n    height: ").concat(width, ";\n    background: ").concat(toggle ? color['grey-500'] : color['grey-400'], ";\n    border-radius: 90px;\n    transform: translateX(0);\n    transition: 0.3s;\n\n    &:active {\n      width: 25px;\n    // transform: translateX(calc(100%  - 25px);\n    }\n\n    ").concat(toggle ? 'transform: translateX(100%);' : 'transform : translate(0);', "\n  ");
}, _utils.sharedStyles, function (props) {
  return props.css;
});

function Toggle(_ref4) {
  var id = _ref4.id,
      children = _ref4.children,
      hideText = _ref4.hideText,
      height = _ref4.height,
      toggle = _ref4.toggle,
      width = _ref4.width;

  var _toggle = (0, _slicedToArray2.default)(toggle, 2),
      state = _toggle[0],
      setState = _toggle[1];

  function handleClick(e) {
    e.preventDefault();
    setState(!state);
  }

  var _useTheme = (0, _ThemeContext.useTheme)(),
      theme = _useTheme.theme;

  return _react.default.createElement(ToggleStyled, {
    theme: theme
  }, _react.default.createElement(ToggleInput, {
    theme: theme,
    type: "checkbox",
    id: id,
    checked: state
  }), _react.default.createElement(ToggleLabel, {
    htmlFor: id,
    onClick: handleClick,
    height: height,
    hideText: hideText,
    width: width,
    checked: state,
    theme: theme
  }, children || _react.default.createElement(Component, {
    elevate: 1,
    theme: theme,
    toggle: state,
    width: "20px",
    height: "20px"
  })));
}

Toggle.defaultProps = {
  width: '40px',
  height: '20px'
};
Component.defaultProps = {
  width: '90px',
  height: '90px'
};
var _default = Toggle;
exports.default = _default;
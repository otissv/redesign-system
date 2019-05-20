"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = Toggle;
exports.ToggleLabel = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  box-sizing: border-box;\n  height: 0;\n  width: 0;\n  visibility: hidden;\n\n  &:checked + label {\n    background: #fff;\n  }\n\n  &:checked + label:after {\n    left: calc(100% - 5px);\n    transform: translateX(-100%);\n  }\n"]);

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

var ToggleInput = _styledComponents.default.input(_templateObject2());

var ToggleLabel = _styledComponents.default.label(_templateObject3(), function (_ref) {
  var checked = _ref.checked,
      height = _ref.height,
      hideText = _ref.hideText,
      width = _ref.width;
  return "\nposition: relative;\nbox-sizing: border-box;off\ncursor: pointer;\ntext-indent ".concat(hideText ? '-9999px' : 'inital', ";\nwidth: ").concat(width, ";\nheight: ").concat(height, ";\nbackground: grey;\ndisplay: inline-block;\nborder-radius: 100px;\nfont-size: ").concat(height, ";\nline-height: ").concat(height, ";\n\ntext-align: ").concat(checked ? 'left' : 'right', "\n");
});

exports.ToggleLabel = ToggleLabel;

var Component = _styledComponents.default.div(_templateObject4(), function (_ref2) {
  var toggle = _ref2.toggle,
      height = _ref2.height,
      width = _ref2.width;
  return "\nposition: absolute;\nbox-sizing: border-box;\nwidth: ".concat(width, ";\nheight: ").concat(width, ";\nbackground: red;\nborder-radius: 90px;\ntransform: translateX(0);\ntransition: 0.3s;\n\n&:active {\n  width: 25px;\n// transform: translateX(calc(100%  - 25px);\n}\n\n").concat(toggle ? 'transform : translate(0);' : 'transform: translateX(100%);', "\n");
});

function Toggle(_ref3) {
  var id = _ref3.id,
      checked = _ref3.checked,
      children = _ref3.children,
      hideText = _ref3.hideText,
      height = _ref3.height,
      toggle = _ref3.toggle,
      width = _ref3.width;
  var localState = (0, _react.useState)(checked);

  var _ref4 = toggle || localState,
      _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
      state = _ref5[0],
      setState = _ref5[1];

  (0, _react.useEffect)(function () {
    setState(checked);
  }, [checked]);

  function handleClick(e) {
    e.preventDefault();
    setState(!state);
  }

  return _react.default.createElement(ToggleStyled, null, _react.default.createElement(ToggleInput, {
    type: "checkbox",
    id: id,
    checked: state
  }), _react.default.createElement(ToggleLabel, {
    htmlFor: id,
    onClick: handleClick,
    height: height,
    hideText: hideText,
    width: width,
    checked: state
  }, children || _react.default.createElement(Component, {
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
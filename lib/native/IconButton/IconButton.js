"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconButton = exports.IconButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _ThemeContext = require("../../ThemeContext");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icon = require("./icon.theme");

var _utils = require("../../utils");

var _reactNative = require("react-native");

var _FontAwesome = _interopRequireDefault(require("react-native-vector-icons/FontAwesome"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var IconButtonStyled = _styledComponents.default.View(_templateObject(), _icon.iconButtonTheme, _utils.sharedStyles, function (props) {
  return props.styledView;
});

var IconButton = function IconButton(props) {
  return _react.default.createElement(_ThemeContext.ThemeConsumer, null, function (theme) {
    var color = props.color,
        name = props.name,
        onPress = props.onPress,
        size = props.size;
    return _react.default.createElement(_reactNative.TouchableWithoutFeedback, null, _react.default.createElement(IconButtonStyled, (0, _extends2.default)({}, props, {
      theme: (0, _utils.setTheme)(props, theme)
    }), _react.default.createElement(_FontAwesome.default, {
      name: name,
      size: size,
      color: color
    })));
  });
};

exports.IconButton = IconButton;
var iconButton = (0, _styledComponents.default)(IconButton);
exports.iconButton = iconButton;
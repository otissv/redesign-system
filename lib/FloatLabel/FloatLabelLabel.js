"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatLabelLabel = FloatLabelLabel;
exports.floatLabelLabel = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _floatLabel = require("./floatLabel.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n  ", " ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var LabelStyled = _styledComponents.default.label(_templateObject(), _floatLabel.floatLabelLabelTheme, _floatLabel.floatLabelLabelFloatingTheme, _floatLabel.floatLabelLabelActiveTheme, _floatLabel.floatLabelLabelContextTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

function FloatLabelLabel(props) {
  return _react.default.createElement(LabelStyled, props);
}

var floatLabelLabel = (0, _styledComponents.default)(FloatLabelLabel);
exports.floatLabelLabel = floatLabelLabel;
FloatLabelLabel.propTypes = {
  children: _propTypes.default.node,
  context: _propTypes.default.oneOf(['accent', 'blank', 'danger', 'primary', 'success', 'warning', 'disabled']),
  floating: _propTypes.default.bool,
  theme: _propTypes.default.object,
  styled: _propTypes.default.string
};
FloatLabelLabel.defaultProps = {
  floating: false
};
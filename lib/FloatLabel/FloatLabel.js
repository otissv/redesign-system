"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatLabel = FloatLabel;
exports.default = exports.FloatLabelStyled = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _FloatLabelContext = require("./FloatLabelContext");

var _Input = require("../Input");

var _floatLabel = require("./floatLabel.theme");

var _FloatLabelLabel = require("./FloatLabelLabel");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FloatLabelStyled = _styledComponents.default.div(_templateObject(), _floatLabel.floatLabelTheme, _utils.sharedStyles, function (props) {
  return props.styled;
});

exports.FloatLabelStyled = FloatLabelStyled;

function FloatLabel(props) {
  var _this$props = this.props,
      size = _this$props.size,
      widths = _this$props.widths,
      placeholder = _this$props.placeholder,
      context = _this$props.context,
      disabled = _this$props.disabled,
      label = _this$props.label,
      labelProps = _this$props.labelProps,
      value = _this$props.value,
      onBlur = _this$props.onBlur,
      onChange = _this$props.onChange,
      onFocus = _this$props.onFocus;

  var _useContext = (0, _react.useContext)(_FloatLabelContext.FloatContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 2),
      _ = _useContext2[0],
      setFloating = _useContext2[1].setFloating; // useEffect(() => {
  //   setFloating(true)
  // })
  // componentDidMount() {
  //   if (this.props.value) {
  //     this.setState({ floating: true });
  //   }
  //   if (this.props.element && this.props.element.value) {
  //     this.props.onFloatLabel();
  //   }
  // }
  // onBlur = event => {
  //   if (event.target.value.trim() === '' && this.state.floating === true) {
  //     this.setState({ floating: false });
  //   }
  //   if (this.props.onBlur) this.props.onBlur(event);
  // };
  // onChange = event => {
  //   if (this.props.onChange) this.props.onChange(event);
  // };
  // onFocus = event => {
  //   if (this.state.floating === false) {
  //     this.setState({ floating: true });
  //   }
  //   if (this.props.onFocus) this.props.onFocus(event);
  // };


  var themeContext = (0, _utils.setTheme)(this.props.theme, theme);
  return _react.default.createElement(FloatLabelStyled, {
    theme: themeContext
  }, _react.default.createElement("div", null, this.props.children, _react.default.createElement(_FloatLabelLabel.FloatLabelLabel, (0, _extends2.default)({
    context: context,
    theme: themeContext,
    floating: this.props.floating || this.state.floating
  }, labelProps), label)));
}

FloatLabel.propTypes = {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  context: _propTypes.default.oneOf(['accent', 'blank', 'danger', 'primary', 'success', 'warning', 'disabled']),
  disabled: _propTypes.default.bool,
  element: _propTypes.default.oneOf(['text', 'textarea']),
  floating: _propTypes.default.bool,
  size: _propTypes.default.string,
  label: _propTypes.default.string,
  labelProps: _propTypes.default.object,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  widths: _propTypes.default.string,
  theme: _propTypes.default.object,
  styled: _propTypes.default.string
};
FloatLabel.defaultProps = {
  active: false,
  context: null,
  element: 'text',
  floating: false,
  disabled: null,
  label: null,
  labelProps: {}
};
var _default = FloatLabel;
exports.default = _default;
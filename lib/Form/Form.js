"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fields = exports.Form = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reusable = require("reusable");

var _FormControl = require("themed-styled-components/FormControl");

var _ThemeContext = require("../ThemeContext");

var _utils = require("../utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FormStyled = _styledComponents.default.form(_templateObject(), _utils.sharedStyles, function (props) {
  return props.styled;
}); //TODO: add hide boolean / function
//TODO: add error component


var Form = _react.default.memo(function Form(props) {
  var _useContext = (0, _react.useContext)(_ThemeContext.ThemeContext),
      _useContext2 = (0, _slicedToArray2.default)(_useContext, 1),
      theme = _useContext2[0];

  var children = props.children,
      initialState = props.initialState,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onSubmit = props.onSubmit,
      name = props.name,
      propRest = (0, _objectWithoutProperties2.default)(props, ["children", "initialState", "onChange", "onBlur", "onFocus", "onSubmit", "name"]);

  var _useForm = (0, _reusable.useForm)({
    initialState: initialState,
    onSubmit: onSubmit,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus
  }),
      modelState = _useForm.model,
      formDispatch = _useForm.dispatch,
      handleSubmit = _useForm.handleSubmit,
      formRest = (0, _objectWithoutProperties2.default)(_useForm, ["model", "dispatch", "handleSubmit"]);

  var _useReducerDevtools = (0, _reusable.useReducerDevtools)([modelState, formDispatch], initialState, name || 'Form'),
      _useReducerDevtools2 = (0, _slicedToArray2.default)(_useReducerDevtools, 2),
      model = _useReducerDevtools2[0],
      dispatch = _useReducerDevtools2[1];

  var render = typeof children === 'function' ? children((0, _objectSpread2.default)({
    dispatch: dispatch,
    model: model,
    handleSubmit: handleSubmit
  }, formRest)) : children;
  var themeContext = (0, _utils.setTheme)(props.theme, theme);
  return _react.default.createElement(FormStyled, (0, _extends2.default)({
    noValidate: true,
    onSubmit: handleSubmit,
    theme: themeContext
  }, propRest), _react.default.createElement(Fields, (0, _extends2.default)({
    model: model
  }, formRest)), render);
});

exports.Form = Form;

var Fields = _react.default.memo(function Fields(_ref) {
  var handleBlur = _ref.handleBlur,
      handleChange = _ref.handleChange,
      handleFocus = _ref.handleFocus,
      model = _ref.model,
      parent = _ref.parent;
  return model.fields.map(function (_ref2) {
    var label = _ref2.label,
        _ref2$attributes = _ref2.attributes,
        attributes = _ref2$attributes === void 0 ? {} : _ref2$attributes,
        children = _ref2.children,
        component = _ref2.component,
        heading = _ref2.heading,
        id = _ref2.id,
        fieldRest = (0, _objectWithoutProperties2.default)(_ref2, ["label", "attributes", "children", "component", "heading", "id"]);
    var value = attributes.value,
        name = attributes.name,
        checked = attributes.checked,
        attributesRest = (0, _objectWithoutProperties2.default)(attributes, ["value", "name", "checked"]);
    var fieldProps = {
      handleBlur: handleBlur,
      handleChange: handleChange,
      handleFocus: handleFocus,
      label: label,
      id: id,
      model: {
        fields: children
      },
      parent: id
    };
    var render = component ? component((0, _objectSpread2.default)({
      attributes: attributes,
      children: children
    }, fieldProps)) : children ? _react.default.createElement("div", attributesRest, Fields(fieldProps)) : _react.default.createElement(_FormControl.FormControl, {
      attributes: attributes,
      id: id,
      onBlur: handleBlur,
      onChange: handleChange,
      onFocus: handleFocus,
      label: label,
      field: fieldRest,
      model: model
    });
    return _react.default.createElement(_react.Fragment, {
      key: id
    }, render);
  });
});

exports.Fields = Fields;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Img = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _img = require("./img.theme");

var Img = _react.default.memo(function Img(_ref) {
  var children = _ref.children,
      className = _ref.className,
      propsThemed = _ref.themed,
      propsRest = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "themed"]);
  // componentDidMount() {
  //   // this.element = helpers.getElement(this.props.kitid);
  //   // this.updateImg(this.element);
  //   // window.addEventListener('resize', this.updateImg);
  // }
  // componentWillUnmount() {
  //   // window.removeEventListener('resize', this.updateImg);
  // }
  // updateImg() {
  //   // const props = this.props;
  //   // const element = this.element;
  //   // let screen = helpers.breakpoints().screen;
  //   // let locked = false;
  //   // if (!locked) {
  //   //   const updateElement = (media) => {
  //   //     if (props.cover) {
  //   //       element.style.backgroundImage = props[media].src  `url(${props[media].src})` : `url(${props.src})`;
  //   //     } else {
  //   //       element.src = props[media].src || props.src;
  //   //       element.alt = props[media].alt || props.alt;
  //   //     }
  //   //     element.style.width = props[media].width || props.width;
  //   //     element.style.height = props[media].height || props.height;
  //   //   };
  //   //   if (props.small || props.medium || props.large || props.xlarge) {
  //   //     if (screen.small) {
  //   //       updateElement('small');
  //   //     } else if (screen.medium) {
  //   //       updateElement('medium');
  //   //     } else if (screen.large) {
  //   //       updateElement('large');
  //   //     } else if (screen.xlarge) {
  //   //       updateElement('xlarge');
  //   //     }
  //   //   }
  //   // }
  // }
  var classNames = "Img ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_img.imgTheme, _img.imgSizeTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_img.imgTheme, _img.imgSizeTheme, propsThemed]);
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    el: "img",
    className: classNames,
    themed: themed
  }, propsRest));
});

exports.Img = Img;
Img.defaultProps = {
  themed: []
};
Img.propTypes = {
  alt: _propTypes.default.string,
  height: _propTypes.default.string,
  large: _propTypes.default.shape({
    src: _propTypes.default.string,
    width: _propTypes.default.string,
    height: _propTypes.default.string
  }),
  medium: _propTypes.default.shape({
    src: _propTypes.default.string,
    width: _propTypes.default.string,
    height: _propTypes.default.string
  }),
  size: _propTypes.default.oneOf(['xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'stretch']),
  small: _propTypes.default.shape({
    src: _propTypes.default.string,
    width: _propTypes.default.string,
    height: _propTypes.default.string
  }),
  xlarge: _propTypes.default.shape({
    src: _propTypes.default.string,
    width: _propTypes.default.string,
    height: _propTypes.default.string
  })
};
var _default = Img;
exports.default = _default;
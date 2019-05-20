"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CoverImg = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../Base/Base"));

var _coverImg = require("./coverImg.theme");

var CoverImg = _react.default.memo(function CoverImg(_ref) {
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
  var classNames = "CoverImg ".concat(className || '');
  var themed = (0, _react.useMemo)(function () {
    return [_coverImg.coverImgTheme].concat((0, _toConsumableArray2.default)(propsThemed));
  }, [_coverImg.coverImgTheme, propsThemed]);
  return _react.default.createElement(_Base.default, (0, _extends2.default)({
    className: classNames,
    themed: themed
  }, propsRest), children);
});

exports.CoverImg = CoverImg;
CoverImg.defaultProps = {
  cover: true,
  height: '300px',
  position: '50% 50%',
  repeat: false,
  themed: [],
  width: '100%',
  parallax: false
};
CoverImg.propTypes = {
  children: _propTypes.default.node,
  cover: _propTypes.default.bool,
  repeat: _propTypes.default.bool,
  position: _propTypes.default.string,
  parallax: _propTypes.default.bool,
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
  small: _propTypes.default.shape({
    src: _propTypes.default.string,
    width: _propTypes.default.string,
    height: _propTypes.default.string
  }),
  src: _propTypes.default.string,
  width: _propTypes.default.string,
  xlarge: _propTypes.default.shape({
    src: _propTypes.default.string,
    width: _propTypes.default.string,
    height: _propTypes.default.string
  })
};
var _default = CoverImg;
exports.default = _default;
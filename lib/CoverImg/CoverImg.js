"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.coverImg = exports.CoverImg = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var _ThemeContext = require("../ThemeContext");

var _coverImg = require("./coverImg.theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CoverImgStyled = _styledComponents.default.div(_templateObject(), _utils.sharedStyles, _coverImg.coverImgTheme, function (props) {
  return props.styled;
});

var CoverImg =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CoverImg, _Component);

  function CoverImg() {
    (0, _classCallCheck2.default)(this, CoverImg);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CoverImg).apply(this, arguments));
  }

  (0, _createClass2.default)(CoverImg, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.element = helpers.getElement(this.props.kitid);
      // this.updateImg(this.element);
      // window.addEventListener('resize', this.updateImg);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// window.removeEventListener('resize', this.updateImg);
    }
  }, {
    key: "updateImg",
    value: function updateImg() {// const props = this.props;
      // const element = this.element;
      // let screen = helpers.breakpoints().screen;
      // let locked = false;
      // if (!locked) {
      //   const updateElement = (media) => {
      //     if (props.cover) {
      //       element.style.backgroundImage = props[media].src  `url(${props[media].src})` : `url(${props.src})`;
      //     } else {
      //       element.src = props[media].src || props.src;
      //       element.alt = props[media].alt || props.alt;
      //     }
      //     element.style.width = props[media].width || props.width;
      //     element.style.height = props[media].height || props.height;
      //   };
      //   if (props.small || props.medium || props.large || props.xlarge) {
      //     if (screen.small) {
      //       updateElement('small');
      //     } else if (screen.medium) {
      //       updateElement('medium');
      //     } else if (screen.large) {
      //       updateElement('large');
      //     } else if (screen.xlarge) {
      //       updateElement('xlarge');
      //     }
      //   }
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_ThemeContext.ThemeConsumer, null, function (theme) {
        return _react.default.createElement(CoverImgStyled, (0, _extends2.default)({}, _this.props, {
          theme: (0, _utils.setTheme)(_this.props.theme, theme)
        }));
      });
    }
  }]);
  return CoverImg;
}(_react.Component);

exports.CoverImg = CoverImg;
CoverImg.propTypes = {
  children: _propTypes.default.node,
  cover: _propTypes.default.bool,
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
  }),
  theme: _propTypes.default.object,
  styled: _propTypes.default.string
};
var coverImg = (0, _styledComponents.default)(CoverImg);
exports.coverImg = coverImg;
var _default = CoverImg;
exports.default = _default;
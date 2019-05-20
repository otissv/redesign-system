"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _Theme = require("../Theme");

var _index = require("./index");

var _AccordionButton = require("./AccordionButton");

var _AccordionContent = require("./AccordionContent");

var _AccordionItem = require("./AccordionItem");

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var stories = (0, _react2.storiesOf)('Accordion', module);
var Accordion = (0, _index.accordion)(_templateObject());
var AccordionItem = (0, _AccordionItem.accordionItem)(_templateObject2());
var AccordionButton = (0, _AccordionButton.accordionButton)(_templateObject3());
var AccordionContent = (0, _AccordionContent.accordionContent)(_templateObject4());
stories.add('Default - Accordion', (0, _addonInfo.withInfo)("\n  \n      ~~~js\n      <Accordion  active=\"1\">\n          {({ itemProps, buttonProps, contentProps }) => (\n            <Fragment>\n              <AccordionItem {...itemProps} uid=\"1\">\n                {() => (\n                  <Fragment>\n                    <AccordionButton {...buttonProps}\n                      toggleProps={{\n                        opened: { icon: 'chevron-down' },\n                        closed: { icon: 'chevron-right' }\n                      }}\n                    >\n                      Item 1\n                    </AccordionButton>\n                    <AccordionContent {...contentProps}>\n                      Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing\n                      elit, sed do eiusmod tempor incididunt ut labore et dolore\n                      magna aliqua.\n                    </AccordionContent>\n                  </Fragment>\n                )}\n              </AccordionItem>\n\n              <AccordionItem {...itemProps} uid=\"2\">\n                {props => (\n                  <Fragment>\n                    <AccordionButton {...buttonProps}\n                      iconOpenPros={{ icon: 'chevron-right' }}\n                      iconClosePros={{ icon: 'chevron-down' }}\n                    >\n                      Item 2\n                    </AccordionButton>\n                    <AccordionContent {...contentProps}>\n                      Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing\n                      elit, sed do eiusmod tempor incididunt ut labore et dolore\n                      magna aliqua.\n                    </AccordionContent>\n                  </Fragment>\n                )}\n              </AccordionItem>\n\n              <AccordionItem {...itemProps} uid=\"3\">\n                {props => (\n                  <Fragment>\n                    <AccordionButton {...buttonProps}\n                      iconOpenPros={{ icon: 'chevron-right' }}\n                      iconClosePros={{ icon: 'chevron-down' }}\n                    >\n                      Item 3\n                    </AccordionButton>\n                    <AccordionContent {...contentProps}>\n                      Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing\n                      elit, sed do eiusmod tempor incididunt ut labore et dolore\n                      magna aliqua.\n                    </AccordionContent>\n                  </Fragment>\n                )}\n              </AccordionItem>\n            </Fragment>\n          )}\n        </Accordion>\n      ~~~\n\n    ")(function () {
  return _react.default.createElement(_Theme.ThemeProvider, null, _react.default.createElement(Accordion, {
    active: "1"
  }, function (_ref) {
    var itemProps = _ref.itemProps,
        buttonProps = _ref.buttonProps,
        contentProps = _ref.contentProps;
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement(AccordionItem, (0, _extends2.default)({}, itemProps, {
      uid: "1"
    }), function () {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(AccordionButton, (0, _extends2.default)({}, buttonProps, {
        toggleProps: {
          opened: {
            icon: 'chevron-down'
          },
          closed: {
            icon: 'chevron-right'
          }
        }
      }), "Item 1"), _react.default.createElement(AccordionContent, contentProps, "Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
    }), _react.default.createElement(AccordionItem, (0, _extends2.default)({}, itemProps, {
      uid: "2"
    }), function (props) {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(AccordionButton, (0, _extends2.default)({}, buttonProps, {
        iconOpenPros: {
          icon: 'chevron-right'
        },
        iconClosePros: {
          icon: 'chevron-down'
        }
      }), "Item 2"), _react.default.createElement(AccordionContent, contentProps, "Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
    }), _react.default.createElement(AccordionItem, (0, _extends2.default)({}, itemProps, {
      uid: "3"
    }), function (props) {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(AccordionButton, (0, _extends2.default)({}, buttonProps, {
        iconOpenPros: {
          icon: 'chevron-right'
        },
        iconClosePros: {
          icon: 'chevron-down'
        }
      }), "Item 3"), _react.default.createElement(AccordionContent, contentProps, "Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
    }));
  }));
})).add('Dynamic - Accordion', (0, _addonInfo.withInfo)("\n  \n      ~~~js\n      <Accordion\n        active=\"1\"\n        items={[\n          {\n            uid: '1',\n            title: 'Dynamic Item 1',\n            content:\n              'Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing',\n          },\n          {\n            uid: '2',\n            title: 'Dynamic Item 2',\n            content:\n              'Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing',\n          },\n          {\n            uid: '3',\n            title: 'Dynamic Item 3',\n            content:\n              'Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing',\n          },\n        ]}\n      />\n      ~~~\n\n    ")(function () {
  return _react.default.createElement(_Theme.ThemeProvider, null, _react.default.createElement(Accordion, {
    active: "1",
    items: [{
      uid: '1',
      title: 'Dynamic Item 1',
      content: 'Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing'
    }, {
      uid: '2',
      title: 'Dynamic Item 2',
      content: 'Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing'
    }, {
      uid: '3',
      title: 'Dynamic Item 3',
      content: 'Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing'
    }]
  }));
})).add('Posistion - Accordion', (0, _addonInfo.withInfo)("\n  \n      ~~~js\n      <Accordion\n        pos=\"left\"\n        active=\"1\"\n        items={[\n          {\n            uid: '1',\n            title: 'Item 1',\n            content:\n              'Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing',\n          },\n          {\n            uid: '2',\n            title: 'Item 2',\n            content:\n              'Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing',\n          },\n          {\n            uid: '3',\n            title: 'Item 3',\n            content:\n              'Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing',\n          },\n        ]}\n      />\n      ~~~\n\n    ")(function () {
  return _react.default.createElement(_Theme.ThemeProvider, null, _react.default.createElement(Accordion, {
    pos: "left",
    active: "1",
    items: [{
      uid: '1',
      title: 'Item 1',
      content: 'Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing'
    }, {
      uid: '2',
      title: 'Item 2',
      content: 'Item 2 Lorem ipsum dolor sit amet, consectetur adipiscing'
    }, {
      uid: '3',
      title: 'Item 3',
      content: 'Item 3 Lorem ipsum dolor sit amet, consectetur adipiscing'
    }]
  }));
}));
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./src/Base/Base.js":function(n,e,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/react/index.js"),c=t.n(o),s=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),h=t("./node_modules/react-pose/dist/react-pose.es.js"),b=t("./src/ThemeContext/index.js"),m=t("./src/utils/index.js");function g(){var n=Object(r.a)(["\n    ","\n    ","\n    ","\n  "]);return g=function(){return n},n}function d(n){var e=n.animate,t=n.children,r=n.css,d=n.el,l=n.forwardRef,p=n.state,x=n.theme,u=n.themed,f=Object(a.a)(n,["animate","children","css","el","forwardRef","state","theme","themed"]),j=Object(b.b)().theme,C=Object(o.useRef)(h.b[d||"div"](e)),O=Object(o.useRef)(Object(s.default)(C.current)(g(),function(n){return u.reduce(function(e,t){return Object(i.a)({},e,t(n))},{})},m.d,r)).current,w=Object(m.c)(x,j);return c.a.createElement(O,Object.assign({pose:p},f,{theme:w,ref:l}),t)}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Base",filename:"src/Base/Base.js"}}),d.defaultProps={themed:[]},e.a=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Base",filename:"src/Base/Base.js"}})},"./src/Container/Container.js":function(n,e,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("./node_modules/react/index.js"),o=t.n(a);function c(n){var e=n.context,t=n.theme.color;return{accent:{background:t.accent,color:"#ffffff"},action:{backgroundColor:t.action,color:"#ffffff"},danger:{backgroundColor:t.danger,color:"#ffffff"},success:{backgroundColor:t.success,color:"#ffffff"},warning:{backgroundColor:t.warning,color:"#ffffff"}}[e]||""}"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"containerContextTheme",filename:"src/Container/container.theme.js"}});var s=t("./src/Base/Base.js");t.d(e,"a",function(){return h});var h=o.a.memo(function(n){var e=n.children,t=n.className,h=n.themed,b=Object(i.a)(n,["children","className","themed"]),m="Container ".concat(t||""),g=Object(a.useMemo)(function(){return[c].concat(Object(r.a)(h))},[c,h]);return o.a.createElement(s.a,Object.assign({className:m,themed:g},b),e)});"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Container",filename:"src/Container/Container.js"}}),h.defaultProps={themed:[]};e.b=h;"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Container",filename:"src/Container/Container.js"}})},"./src/Flex/Flex.js":function(n,e,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("./node_modules/react/index.js"),o=t.n(a),c=t("./node_modules/lodash/kebabCase.js"),s=t.n(c);function h(n){var e=n.alignItems,t=n.basis,r=n.display,i=n.grow,a=n.justifyContent,o=n.shrink,c=n.wrap,h=n.theme;return console.log(h),{display:r||"flex",basis:t?"".concat(t):"",grow:i?"".concat(i):"",shrink:o?"".concat(o):"",justifyContent:a&&[s()(a)]||"",alignItems:e&&[s()(e)]||"",flexWrap:c&&[s()(c)]||""}}function b(n){return{row:{flexDirection:"row"},column:{flexDirection:"column"},rowReverse:{flexDirection:"rowReverse"},columnReverse:{flexDirection:"columnReverse"}}[n.direction]||""}"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexTheme",filename:"src/Flex/flex.theme.js"}}),"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexDirectionTheme",filename:"src/Flex/flex.theme.js"}});var m=t("./src/Base/Base.js");t.d(e,"a",function(){return g});var g=o.a.memo(function(n){var e=n.children,t=n.className,c=n.themed,s=Object(i.a)(n,["children","className","themed"]),g=("Flex ".concat(t||""),Object(a.useMemo)(function(){return[h,b].concat(Object(r.a)(c))},[h,b,c]));return o.a.createElement(m.a,Object.assign({className:"Flex",themed:g},s),e)});"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/Flex/Flex.js"}}),g.defaultProps={themed:[]};e.b=g;"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/Flex/Flex.js"}})},"./src/theme/borders/border.mdx":function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return g});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a=t("./node_modules/docz/dist/index.esm.js"),o=t("./src/Container/Container.js"),c=t("./src/Flex/Flex.js"),s=t("./src/ThemeContext/index.js"),h=t("./src/theme/theme.js"),b={},m="wrapper";function g(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(i.b)(m,Object.assign({},b,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"borders"},"Borders"),Object(i.b)("h2",{id:"thin"},"Thin"),Object(i.b)(a.c,{__position:0,__code:'<ThemeProvider>\n  <Flex wrap="wrap">\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thin"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thin\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinDashed"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thinDashed\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinDashedInvert"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thinDashedInvert\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinInvert"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thinInvert\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinTransparent"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thinTransparent\n    </Container>\n  </Flex>\n</ThemeProvider>',__scope:{props:this?this.props:t,Playground:a.c,Props:a.d,Container:o.b,Flex:c.b,ThemeProvider:s.a,theme:h.a},__codesandbox:"undefined",mdxType:"Playground"},Object(i.b)(s.a,{mdxType:"ThemeProvider"},Object(i.b)(c.b,{wrap:"wrap",mdxType:"Flex"},Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thin",css:"\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ",mdxType:"Container"}),"thin"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thinDashed",css:"\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ",mdxType:"Container"}),"thinDashed"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thinDashedInvert",css:"\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ",mdxType:"Container"}),"thinDashedInvert"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thinInvert",css:"\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ",mdxType:"Container"}),"thinInvert"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thinTransparent",css:"\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ",mdxType:"Container"}),"thinTransparent")))),Object(i.b)("h2",{id:"thick"},"Thick"),Object(i.b)(a.c,{__position:1,__code:'<ThemeProvider>\n  <Flex wrap="wrap">\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thick"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thick\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDashed"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDashed\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDashedInvert"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDashedInvert\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickInvert"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickInvert\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickTransparent"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickTransparent\n    </Container>\n  </Flex>\n</ThemeProvider>',__scope:{props:this?this.props:t,Playground:a.c,Props:a.d,Container:o.b,Flex:c.b,ThemeProvider:s.a,theme:h.a},__codesandbox:"undefined",mdxType:"Playground"},Object(i.b)(s.a,{mdxType:"ThemeProvider"},Object(i.b)(c.b,{wrap:"wrap",mdxType:"Flex"},Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thick",css:"\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ",mdxType:"Container"}),"thick"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickDashed",css:"\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ",mdxType:"Container"}),"thickDashed"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickDashedInvert",css:"\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ",mdxType:"Container"}),"thickDashedInvert"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickInvert",css:"\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ",mdxType:"Container"}),"thickInvert"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickTransparent",css:"\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ",mdxType:"Container"}),"thickTransparent")))),Object(i.b)("h2",{id:"apperance"},"Apperance"),Object(i.b)(a.c,{__position:2,__code:'<ThemeProvider>\n  <h3>Accent</h3>\n  <Flex wrap="wrap">\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinAccent"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thinAccent\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickAccent"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickAccent\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDashedAccent"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDashedAccent\n    </Container>\n  </Flex>\n\n  <h3>Action</h3>\n  <Flex wrap="wrap">\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinAction"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thiActiont\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickAction"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickAction\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDashedAction"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDashedAction\n    </Container>\n  </Flex>\n\n  <h3>Danger</h3>\n  <Flex wrap="wrap">\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinDanger"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thiDangert\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDanger"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDanger\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDashedDanger"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDashedDanger\n    </Container>\n  </Flex>\n\n  <h3>Success</h3>\n  <Flex wrap="wrap">\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinSuccess"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thiSuccesst\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickSuccess"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickSuccess\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDashedSuccess"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDashedSuccess\n    </Container>\n  </Flex>\n\n  <h3>Action</h3>\n  <Flex wrap="wrap">\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinAction"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thiActiont\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickAction"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickAction\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDashedAction"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDashedAction\n    </Container>\n  </Flex>\n</ThemeProvider>',__scope:{props:this?this.props:t,Playground:a.c,Props:a.d,Container:o.b,Flex:c.b,ThemeProvider:s.a,theme:h.a},__codesandbox:"undefined",mdxType:"Playground"},Object(i.b)(s.a,{mdxType:"ThemeProvider"},Object(i.b)("h3",null,"Accent"),Object(i.b)(c.b,{wrap:"wrap",mdxType:"Flex"},Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thinAccent",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thinAccent"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickAccent",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thickAccent"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickDashedAccent",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thickDashedAccent")),Object(i.b)("h3",null,"Action"),Object(i.b)(c.b,{wrap:"wrap",mdxType:"Flex"},Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thinAction",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thiActiont"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickAction",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thickAction"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickDashedAction",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thickDashedAction")),Object(i.b)("h3",null,"Danger"),Object(i.b)(c.b,{wrap:"wrap",mdxType:"Flex"},Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thinDanger",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thiDangert"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickDanger",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thickDanger"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickDashedDanger",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n         margin-right: auto;\n      ",mdxType:"Container"}),"thickDashedDanger")),Object(i.b)("h3",null,"Success"),Object(i.b)(c.b,{wrap:"wrap",mdxType:"Flex"},Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thinSuccess",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thiSuccesst"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickSuccess",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thickSuccess"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickDashedSuccess",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thickDashedSuccess")),Object(i.b)("h3",null,"Action"),Object(i.b)(c.b,{wrap:"wrap",mdxType:"Flex"},Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thinAction",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thiActiont"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickAction",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thickAction"),Object(i.b)(o.b,{margin5:"right bottom",css:"text-align: center",mdxType:"Container"},Object(i.b)(o.b,{border:"thickDashedAction",css:"\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ",mdxType:"Container"}),"thickDashedAction")))))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/theme/borders/border.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=src-theme-borders-border.8490a1474f6ac2c890a0.js.map
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [30],
  {
    './src/Container/Container.tsx': function(n, e, t) {
      'use strict'
      var r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        i = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = t('./node_modules/react/index.js'),
        o = t.n(a),
        c = t('./src/Base/index.tsx')
      function s(n) {
        var e = n.appearance,
          t = n.theme,
          r = t.border,
          i = t.color,
          a = {
            color: i['accent-050'],
            backgroundColor: i['accent-500'],
            border: '1px solid '.concat(i['accent-500']),
          },
          o = {
            color: i['action-050'],
            backgroundColor: i['action-500'],
            border: '1px solid '.concat(i['action-500']),
          },
          c = {
            color: i['danger-050'],
            backgroundColor: i['danger-500'],
            border: '1px solid '.concat(i['danger-500']),
          },
          s = {
            color: i['success-050'],
            backgroundColor: i['success-500'],
            border: '1px solid '.concat(i['success-500']),
          },
          h = {
            color: i['warning-050'],
            backgroundColor: i['warning-500'],
            border: '1px solid '.concat(i['warning-500']),
          }
        switch (e) {
          case 'primary':
            return {
              color: i.foregroundInvert,
              backgroundColor: i.backgroundInvert,
              border: r.thinTransparent,
            }
          case 'secondary':
            return {
              color: i['grey-800'],
              backgroundColor: i['grey-100'],
              border: '1px solid '.concat(i['grey-100']),
            }
          case 'tertiary':
            return { backgroundColor: 'none', border: r.thin }
          case 'accent':
          case 'primary-accent':
            return a
          case 'secondary-accent':
            return {
              color: i['accent-800'],
              backgroundColor: i['accent-100'],
              border: '1px solid '.concat(i['accent-100']),
            }
          case 'tertiary-accent':
            return {
              color: i['accent-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(i['accent-300']),
            }
          case 'action':
          case 'primary-action':
            return o
          case 'secondary-action':
            return {
              color: i['action-800'],
              backgroundColor: i['action-100'],
              border: '1px solid '.concat(i['action-100']),
            }
          case 'tertiary-action':
            return {
              color: i['action-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(i['action-300']),
            }
          case 'danger':
          case 'primary-danger':
            return c
          case 'secondary-danger':
            return {
              color: i['danger-800'],
              backgroundColor: i['danger-300'],
              border: '1px solid '.concat(i['danger-300']),
            }
          case 'tertiary-danger':
            return {
              color: i['danger-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(i['danger-300']),
            }
          case 'success':
          case 'primary-success':
            return s
          case 'secondary-success':
            return {
              color: i['success-800'],
              backgroundColor: i['success-300'],
              border: '1px solid '.concat(i['success-300']),
            }
          case 'tertiary-success':
            return {
              color: i['success-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(i['success-300']),
            }
          case 'warning':
          case 'primary-warning':
            return h
          case 'secondary-warning':
            return {
              color: i['warning-800'],
              backgroundColor: i['warning-300'],
              border: '1px solid '.concat(i['warning-300']),
            }
          case 'tertiary-warning':
            return {
              color: i['warning-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(i['warning-300']),
            }
          default:
            return {}
        }
      }
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'containerAppearanceTheme',
            filename: 'src/Container/container.theme.ts',
          },
        }),
        t.d(e, 'a', function() {
          return h
        })
      var h = o.a.memo(function(n) {
        var e = n.children,
          t = n.className,
          h = void 0 === t ? '' : t,
          g = n.themed,
          m = void 0 === g ? [] : g,
          d = Object(i.a)(n, ['children', 'className', 'themed']),
          b = Object(a.useMemo)(
            function() {
              return 'Container '.concat(h)
            },
            [h]
          ),
          l = Object(a.useMemo)(
            function() {
              return [s].concat(Object(r.a)(m))
            },
            [s, m]
          )
        return o.a.createElement(
          c.Base,
          Object.assign({ className: b, themed: l }, d),
          e
        )
      })
      'undefined' !== typeof h &&
        h &&
        h === Object(h) &&
        Object.isExtensible(h) &&
        Object.defineProperty(h, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
      e.b = h
      'undefined' !== typeof h &&
        h &&
        h === Object(h) &&
        Object.isExtensible(h) &&
        Object.defineProperty(h, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
    },
    './src/Container/container.types.ts': function(n, e) {
      'undefined' !== typeof ContainerInterface &&
        ContainerInterface &&
        ContainerInterface === Object(ContainerInterface) &&
        Object.isExtensible(ContainerInterface) &&
        Object.defineProperty(ContainerInterface, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ContainerInterface',
            filename: 'src/Container/container.types.ts',
          },
        })
    },
    './src/Container/index.tsx': function(n, e, t) {
      'use strict'
      var r = t('./src/Container/Container.tsx')
      t.d(e, 'Container', function() {
        return r.a
      })
      t('./src/Container/container.types.ts')
    },
    './src/Flex/Flex.tsx': function(n, e, t) {
      'use strict'
      var r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        i = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = t('./node_modules/react/index.js'),
        o = t.n(a),
        c = t('./node_modules/lodash/kebabCase.js'),
        s = t.n(c)
      function h(n) {
        var e = n.alignItems,
          t = n.basis,
          r = n.display,
          i = n.grow,
          a = n.justifyContent,
          o = n.shrink,
          c = n.wrap
        return {
          display: r || 'flex',
          basis: t ? ''.concat(t) : '',
          grow: i ? ''.concat(i) : '',
          shrink: o ? ''.concat(o) : '',
          justifyContent: (a && [s()(a)]) || '',
          alignItems: (e && [s()(e)]) || '',
          flexWrap: (c && [s()(c)]) || '',
        }
      }
      function g(n) {
        switch (n.direction) {
          case 'row':
            return { flexDirection: 'row' }
          case 'column':
            return { flexDirection: 'column' }
          case 'rowReverse':
            return { flexDirection: 'rowReverse' }
          case 'columnReverse':
            return { flexDirection: 'columnReverse' }
          default:
            return {}
        }
      }
      'undefined' !== typeof h &&
        h &&
        h === Object(h) &&
        Object.isExtensible(h) &&
        Object.defineProperty(h, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'flexTheme', filename: 'src/Flex/flex.theme.ts' },
        }),
        'undefined' !== typeof g &&
          g &&
          g === Object(g) &&
          Object.isExtensible(g) &&
          Object.defineProperty(g, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'flexDirectionTheme',
              filename: 'src/Flex/flex.theme.ts',
            },
          })
      var m = t('./src/Base/index.tsx')
      t.d(e, 'a', function() {
        return d
      })
      var d = o.a.memo(function(n) {
        var e = n.children,
          t = n.className,
          c = void 0 === t ? '' : t,
          s = n.themed,
          d = void 0 === s ? [] : s,
          b = Object(i.a)(n, ['children', 'className', 'themed']),
          l = Object(a.useMemo)(
            function() {
              return 'Flex '.concat(c)
            },
            [c]
          ),
          p = Object(a.useMemo)(
            function() {
              return [h, g].concat(Object(r.a)(d))
            },
            [h, g, d]
          )
        return o.a.createElement(
          m.Base,
          Object.assign({ className: l, themed: p }, b),
          e
        )
      })
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
      e.b = d
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
    },
    './src/Flex/flex.types.ts': function(n, e) {
      'undefined' !== typeof AlignItemsType &&
        AlignItemsType &&
        AlignItemsType === Object(AlignItemsType) &&
        Object.isExtensible(AlignItemsType) &&
        Object.defineProperty(AlignItemsType, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'AlignItemsType', filename: 'src/Flex/flex.types.ts' },
        }),
        'undefined' !== typeof AlignContentType &&
          AlignContentType &&
          AlignContentType === Object(AlignContentType) &&
          Object.isExtensible(AlignContentType) &&
          Object.defineProperty(AlignContentType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'AlignContentType',
              filename: 'src/Flex/flex.types.ts',
            },
          }),
        'undefined' !== typeof JustifyContentType &&
          JustifyContentType &&
          JustifyContentType === Object(JustifyContentType) &&
          Object.isExtensible(JustifyContentType) &&
          Object.defineProperty(JustifyContentType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'JustifyContentType',
              filename: 'src/Flex/flex.types.ts',
            },
          }),
        'undefined' !== typeof JustifyItemsType &&
          JustifyItemsType &&
          JustifyItemsType === Object(JustifyItemsType) &&
          Object.isExtensible(JustifyItemsType) &&
          Object.defineProperty(JustifyItemsType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'JustifyItemsType',
              filename: 'src/Flex/flex.types.ts',
            },
          }),
        'undefined' !== typeof DirectionType &&
          DirectionType &&
          DirectionType === Object(DirectionType) &&
          Object.isExtensible(DirectionType) &&
          Object.defineProperty(DirectionType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'DirectionType',
              filename: 'src/Flex/flex.types.ts',
            },
          }),
        'undefined' !== typeof WrapType &&
          WrapType &&
          WrapType === Object(WrapType) &&
          Object.isExtensible(WrapType) &&
          Object.defineProperty(WrapType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'WrapType', filename: 'src/Flex/flex.types.ts' },
          }),
        'undefined' !== typeof FlexInterface &&
          FlexInterface &&
          FlexInterface === Object(FlexInterface) &&
          Object.isExtensible(FlexInterface) &&
          Object.defineProperty(FlexInterface, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'FlexInterface',
              filename: 'src/Flex/flex.types.ts',
            },
          })
    },
    './src/Flex/index.ts': function(n, e, t) {
      'use strict'
      var r = t('./src/Flex/Flex.tsx')
      t.d(e, 'Flex', function() {
        return r.a
      })
      t('./src/Flex/flex.types.ts')
    },
    './src/theme/border/border.mdx': function(n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, 'default', function() {
          return m
        })
      var r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        i =
          (t('./node_modules/react/index.js'),
          t('./node_modules/@mdx-js/react/dist/index.es.js')),
        a = t('./node_modules/docz/dist/index.esm.js'),
        o = t('./src/Container/index.tsx'),
        c = t('./src/Flex/index.ts'),
        s = t('./src/ThemeContext/ThemeProvider.tsx'),
        h = {},
        g = 'wrapper'
      function m(n) {
        var e = n.components,
          t = Object(r.a)(n, ['components'])
        return Object(i.b)(
          g,
          Object.assign({}, h, t, { components: e, mdxType: 'MDXLayout' }),
          Object(i.b)('h1', { id: 'borders' }, 'Borders'),
          Object(i.b)('h2', { id: 'thin' }, 'Thin'),
          Object(i.b)(
            a.c,
            {
              __position: 0,
              __code:
                '<ThemeProvider>\n  <Flex wrap="wrap">\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thin"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thin\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinDashed"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thinDashed\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinDashedInvert"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thinDashedInvert\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinInvert"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thinInvert\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinTransparent"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thinTransparent\n    </Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Playground: a.c,
                Props: a.d,
                Container: o.Container,
                Flex: c.Flex,
                ThemeProvider: s.a,
              },
              mdxType: 'Playground',
            },
            Object(i.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(i.b)(
                c.Flex,
                { wrap: 'wrap', mdxType: 'Flex' },
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thin',
                    css:
                      '\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ',
                    mdxType: 'Container',
                  }),
                  'thin'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thinDashed',
                    css:
                      '\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ',
                    mdxType: 'Container',
                  }),
                  'thinDashed'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thinDashedInvert',
                    css:
                      '\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ',
                    mdxType: 'Container',
                  }),
                  'thinDashedInvert'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thinInvert',
                    css:
                      '\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ',
                    mdxType: 'Container',
                  }),
                  'thinInvert'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thinTransparent',
                    css:
                      '\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ',
                    mdxType: 'Container',
                  }),
                  'thinTransparent'
                )
              )
            )
          ),
          Object(i.b)('h2', { id: 'thick' }, 'Thick'),
          Object(i.b)(
            a.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Flex wrap="wrap">\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thick"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thick\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDashed"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDashed\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDashedInvert"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDashedInvert\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickInvert"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickInvert\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickTransparent"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickTransparent\n    </Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Playground: a.c,
                Props: a.d,
                Container: o.Container,
                Flex: c.Flex,
                ThemeProvider: s.a,
              },
              mdxType: 'Playground',
            },
            Object(i.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(i.b)(
                c.Flex,
                { wrap: 'wrap', mdxType: 'Flex' },
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thick',
                    css:
                      '\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ',
                    mdxType: 'Container',
                  }),
                  'thick'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thickDashed',
                    css:
                      '\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ',
                    mdxType: 'Container',
                  }),
                  'thickDashed'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thickDashedInvert',
                    css:
                      '\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ',
                    mdxType: 'Container',
                  }),
                  'thickDashedInvert'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thickInvert',
                    css:
                      '\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ',
                    mdxType: 'Container',
                  }),
                  'thickInvert'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thickTransparent',
                    css:
                      '\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          ',
                    mdxType: 'Container',
                  }),
                  'thickTransparent'
                )
              )
            )
          ),
          Object(i.b)('h2', { id: 'apperance' }, 'Apperance'),
          Object(i.b)(
            a.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <section>\n    <h3>Accent</h3>\n    <Flex wrap="wrap">\n      <Container margin5="right bottom" css="text-align: center">\n        <Container\n          border="thinAccent"\n          css={`\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          `}\n        />\n        thinAccent\n      </Container>\n      <Container margin5="right bottom" css="text-align: center">\n        <Container\n          border="thickAccent"\n          css={`\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          `}\n        />\n        thickAccent\n      </Container>\n      <Container margin5="right bottom" css="text-align: center">\n        <Container\n          border="thickDashedAccent"\n          css={`\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          `}\n        />\n        thickDashedAccent\n      </Container>\n    </Flex>\n  </section>\n  <section>\n    <h3>Active</h3>\n    <Flex wrap="wrap">\n      <Container margin5="right bottom" css="text-align: center">\n        <Container\n          border="thinActive"\n          css={`\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          `}\n        />\n        thiAcctive\n      </Container>\n      <Container margin5="right bottom" css="text-align: center">\n        <Container\n          border="thickActive"\n          css={`\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          `}\n        />\n        thickActive\n      </Container>\n      <Container margin5="right bottom" css="text-align: center">\n        <Container\n          border="thickDashedActive"\n          css={`\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          `}\n        />\n        thickDashedActive\n      </Container>\n    </Flex>\n  </section>\n\n  <section>\n    <h3>Action</h3>\n    <Flex wrap="wrap">\n      <Container margin5="right bottom" css="text-align: center">\n        <Container\n          border="thinAction"\n          css={`\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          `}\n        />\n        thinAction\n      </Container>\n      <Container margin5="right bottom" css="text-align: center">\n        <Container\n          border="thickAction"\n          css={`\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          `}\n        />\n        thickAction\n      </Container>\n      <Container margin5="right bottom" css="text-align: center">\n        <Container\n          border="thickDashedAction"\n          css={`\n            height: 100px;\n            width: 100px;\n            margin-left: auto;\n            margin-right: auto;\n          `}\n        />\n        thickDashedAction\n      </Container>\n    </Flex>\n  </section>\n\n  <h3>Danger</h3>\n  <Flex wrap="wrap">\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinDanger"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thiDangert\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDanger"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDanger\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDashedDanger"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDashedDanger\n    </Container>\n  </Flex>\n\n  <h3>Success</h3>\n  <Flex wrap="wrap">\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinSuccess"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thiSuccesst\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickSuccess"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickSuccess\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDashedSuccess"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDashedSuccess\n    </Container>\n  </Flex>\n\n  <h3>Warning</h3>\n  <Flex wrap="wrap">\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thinWarning"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thiWarning\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickWarning"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickWarning\n    </Container>\n    <Container margin5="right bottom" css="text-align: center">\n      <Container\n        border="thickDashedWarning"\n        css={`\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        `}\n      />\n      thickDashedWarning\n    </Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Playground: a.c,
                Props: a.d,
                Container: o.Container,
                Flex: c.Flex,
                ThemeProvider: s.a,
              },
              mdxType: 'Playground',
            },
            Object(i.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(i.b)(
                'section',
                null,
                Object(i.b)('h3', null, 'Accent'),
                Object(i.b)(
                  c.Flex,
                  { wrap: 'wrap', mdxType: 'Flex' },
                  Object(i.b)(
                    o.Container,
                    {
                      margin5: 'right bottom',
                      css: 'text-align: center',
                      mdxType: 'Container',
                    },
                    Object(i.b)(o.Container, {
                      border: 'thinAccent',
                      css:
                        '\n              height: 100px;\n              width: 100px;\n              margin-left: auto;\n              margin-right: auto;\n            ',
                      mdxType: 'Container',
                    }),
                    'thinAccent'
                  ),
                  Object(i.b)(
                    o.Container,
                    {
                      margin5: 'right bottom',
                      css: 'text-align: center',
                      mdxType: 'Container',
                    },
                    Object(i.b)(o.Container, {
                      border: 'thickAccent',
                      css:
                        '\n              height: 100px;\n              width: 100px;\n              margin-left: auto;\n              margin-right: auto;\n            ',
                      mdxType: 'Container',
                    }),
                    'thickAccent'
                  ),
                  Object(i.b)(
                    o.Container,
                    {
                      margin5: 'right bottom',
                      css: 'text-align: center',
                      mdxType: 'Container',
                    },
                    Object(i.b)(o.Container, {
                      border: 'thickDashedAccent',
                      css:
                        '\n              height: 100px;\n              width: 100px;\n              margin-left: auto;\n              margin-right: auto;\n            ',
                      mdxType: 'Container',
                    }),
                    'thickDashedAccent'
                  )
                )
              ),
              Object(i.b)(
                'section',
                null,
                Object(i.b)('h3', null, 'Active'),
                Object(i.b)(
                  c.Flex,
                  { wrap: 'wrap', mdxType: 'Flex' },
                  Object(i.b)(
                    o.Container,
                    {
                      margin5: 'right bottom',
                      css: 'text-align: center',
                      mdxType: 'Container',
                    },
                    Object(i.b)(o.Container, {
                      border: 'thinActive',
                      css:
                        '\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        ',
                      mdxType: 'Container',
                    }),
                    'thiAcctive'
                  ),
                  Object(i.b)(
                    o.Container,
                    {
                      margin5: 'right bottom',
                      css: 'text-align: center',
                      mdxType: 'Container',
                    },
                    Object(i.b)(o.Container, {
                      border: 'thickActive',
                      css:
                        '\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        ',
                      mdxType: 'Container',
                    }),
                    'thickActive'
                  ),
                  Object(i.b)(
                    o.Container,
                    {
                      margin5: 'right bottom',
                      css: 'text-align: center',
                      mdxType: 'Container',
                    },
                    Object(i.b)(o.Container, {
                      border: 'thickDashedActive',
                      css:
                        '\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        ',
                      mdxType: 'Container',
                    }),
                    'thickDashedActive'
                  )
                )
              ),
              Object(i.b)(
                'section',
                null,
                Object(i.b)('h3', null, 'Action'),
                Object(i.b)(
                  c.Flex,
                  { wrap: 'wrap', mdxType: 'Flex' },
                  Object(i.b)(
                    o.Container,
                    {
                      margin5: 'right bottom',
                      css: 'text-align: center',
                      mdxType: 'Container',
                    },
                    Object(i.b)(o.Container, {
                      border: 'thinAction',
                      css:
                        '\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        ',
                      mdxType: 'Container',
                    }),
                    'thinAction'
                  ),
                  Object(i.b)(
                    o.Container,
                    {
                      margin5: 'right bottom',
                      css: 'text-align: center',
                      mdxType: 'Container',
                    },
                    Object(i.b)(o.Container, {
                      border: 'thickAction',
                      css:
                        '\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        ',
                      mdxType: 'Container',
                    }),
                    'thickAction'
                  ),
                  Object(i.b)(
                    o.Container,
                    {
                      margin5: 'right bottom',
                      css: 'text-align: center',
                      mdxType: 'Container',
                    },
                    Object(i.b)(o.Container, {
                      border: 'thickDashedAction',
                      css:
                        '\n          height: 100px;\n          width: 100px;\n          margin-left: auto;\n          margin-right: auto;\n        ',
                      mdxType: 'Container',
                    }),
                    'thickDashedAction'
                  )
                )
              ),
              Object(i.b)('h3', null, 'Danger'),
              Object(i.b)(
                c.Flex,
                { wrap: 'wrap', mdxType: 'Flex' },
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thinDanger',
                    css:
                      '\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ',
                    mdxType: 'Container',
                  }),
                  'thiDangert'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thickDanger',
                    css:
                      '\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ',
                    mdxType: 'Container',
                  }),
                  'thickDanger'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thickDashedDanger',
                    css:
                      '\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n         margin-right: auto;\n      ',
                    mdxType: 'Container',
                  }),
                  'thickDashedDanger'
                )
              ),
              Object(i.b)('h3', null, 'Success'),
              Object(i.b)(
                c.Flex,
                { wrap: 'wrap', mdxType: 'Flex' },
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thinSuccess',
                    css:
                      '\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ',
                    mdxType: 'Container',
                  }),
                  'thiSuccesst'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thickSuccess',
                    css:
                      '\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ',
                    mdxType: 'Container',
                  }),
                  'thickSuccess'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thickDashedSuccess',
                    css:
                      '\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ',
                    mdxType: 'Container',
                  }),
                  'thickDashedSuccess'
                )
              ),
              Object(i.b)('h3', null, 'Warning'),
              Object(i.b)(
                c.Flex,
                { wrap: 'wrap', mdxType: 'Flex' },
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thinWarning',
                    css:
                      '\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ',
                    mdxType: 'Container',
                  }),
                  'thiWarning'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thickWarning',
                    css:
                      '\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ',
                    mdxType: 'Container',
                  }),
                  'thickWarning'
                ),
                Object(i.b)(
                  o.Container,
                  {
                    margin5: 'right bottom',
                    css: 'text-align: center',
                    mdxType: 'Container',
                  },
                  Object(i.b)(o.Container, {
                    border: 'thickDashedWarning',
                    css:
                      '\n        height: 100px;\n        width: 100px;\n        margin-left: auto;\n        margin-right: auto;\n      ',
                    mdxType: 'Container',
                  }),
                  'thickDashedWarning'
                )
              )
            )
          )
        )
      }
      m &&
        m === Object(m) &&
        Object.isExtensible(m) &&
        Object.defineProperty(m, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'MDXContent',
            filename: 'src/theme/border/border.mdx',
          },
        }),
        (m.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-theme-border-border.e87bed39511fd489c1d4.js.map

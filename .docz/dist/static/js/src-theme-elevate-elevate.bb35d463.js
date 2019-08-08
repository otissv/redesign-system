;(window.webpackJsonp = window.webpackJsonp || []).push([
  [31],
  {
    './src/Container/Container.tsx': function(e, n, t) {
      'use strict'
      var r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = t('./node_modules/react/index.js'),
        a = t.n(c),
        s = t('./src/Base/index.tsx')
      function i(e) {
        var n = e.appearance,
          t = e.theme,
          r = t.border,
          o = t.color,
          c = {
            color: o['accent-050'],
            backgroundColor: o['accent-500'],
            border: '1px solid '.concat(o['accent-500']),
          },
          a = {
            color: o['action-050'],
            backgroundColor: o['action-500'],
            border: '1px solid '.concat(o['action-500']),
          },
          s = {
            color: o['danger-050'],
            backgroundColor: o['danger-500'],
            border: '1px solid '.concat(o['danger-500']),
          },
          i = {
            color: o['success-050'],
            backgroundColor: o['success-500'],
            border: '1px solid '.concat(o['success-500']),
          },
          l = {
            color: o['warning-050'],
            backgroundColor: o['warning-500'],
            border: '1px solid '.concat(o['warning-500']),
          }
        switch (n) {
          case 'primary':
            return {
              color: o.foregroundInvert,
              backgroundColor: o.backgroundInvert,
              border: r.thinTransparent,
            }
          case 'secondary':
            return {
              color: o['grey-800'],
              backgroundColor: o['grey-100'],
              border: '1px solid '.concat(o['grey-100']),
            }
          case 'tertiary':
            return { backgroundColor: 'none', border: r.thin }
          case 'accent':
          case 'primary-accent':
            return c
          case 'secondary-accent':
            return {
              color: o['accent-800'],
              backgroundColor: o['accent-100'],
              border: '1px solid '.concat(o['accent-100']),
            }
          case 'tertiary-accent':
            return {
              color: o['accent-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(o['accent-300']),
            }
          case 'action':
          case 'primary-action':
            return a
          case 'secondary-action':
            return {
              color: o['action-800'],
              backgroundColor: o['action-100'],
              border: '1px solid '.concat(o['action-100']),
            }
          case 'tertiary-action':
            return {
              color: o['action-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(o['action-300']),
            }
          case 'danger':
          case 'primary-danger':
            return s
          case 'secondary-danger':
            return {
              color: o['danger-800'],
              backgroundColor: o['danger-300'],
              border: '1px solid '.concat(o['danger-300']),
            }
          case 'tertiary-danger':
            return {
              color: o['danger-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(o['danger-300']),
            }
          case 'success':
          case 'primary-success':
            return i
          case 'secondary-success':
            return {
              color: o['success-800'],
              backgroundColor: o['success-300'],
              border: '1px solid '.concat(o['success-300']),
            }
          case 'tertiary-success':
            return {
              color: o['success-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(o['success-300']),
            }
          case 'warning':
          case 'primary-warning':
            return l
          case 'secondary-warning':
            return {
              color: o['warning-800'],
              backgroundColor: o['warning-300'],
              border: '1px solid '.concat(o['warning-300']),
            }
          case 'tertiary-warning':
            return {
              color: o['warning-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(o['warning-300']),
            }
          default:
            return {}
        }
      }
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'containerAppearanceTheme',
            filename: 'src/Container/container.theme.ts',
          },
        }),
        t.d(n, 'a', function() {
          return l
        })
      var l = a.a.memo(function(e) {
        var n = e.children,
          t = e.className,
          l = void 0 === t ? '' : t,
          d = e.themed,
          b = void 0 === d ? [] : d,
          u = Object(o.a)(e, ['children', 'className', 'themed']),
          p = Object(c.useMemo)(
            function() {
              return 'Container '.concat(l)
            },
            [l]
          ),
          m = Object(c.useMemo)(
            function() {
              return [i].concat(Object(r.a)(b))
            },
            [i, b]
          )
        return a.a.createElement(
          s.Base,
          Object.assign({ className: p, themed: m }, u),
          n
        )
      })
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
      n.b = l
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
    },
    './src/Flex/Flex.tsx': function(e, n, t) {
      'use strict'
      var r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = t('./node_modules/react/index.js'),
        a = t.n(c),
        s = t('./node_modules/lodash/kebabCase.js'),
        i = t.n(s)
      function l(e) {
        var n = e.alignItems,
          t = e.basis,
          r = e.display,
          o = e.grow,
          c = e.justifyContent,
          a = e.shrink,
          s = e.wrap
        return {
          display: r || 'flex',
          basis: t ? ''.concat(t) : '',
          grow: o ? ''.concat(o) : '',
          shrink: a ? ''.concat(a) : '',
          justifyContent: (c && [i()(c)]) || '',
          alignItems: (n && [i()(n)]) || '',
          flexWrap: (s && [i()(s)]) || '',
        }
      }
      function d(e) {
        switch (e.direction) {
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
      'undefined' !== typeof l &&
        l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'flexTheme', filename: 'src/Flex/flex.theme.ts' },
        }),
        'undefined' !== typeof d &&
          d &&
          d === Object(d) &&
          Object.isExtensible(d) &&
          Object.defineProperty(d, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'flexDirectionTheme',
              filename: 'src/Flex/flex.theme.ts',
            },
          })
      var b = t('./src/Base/index.tsx')
      t.d(n, 'a', function() {
        return u
      })
      var u = a.a.memo(function(e) {
        var n = e.children,
          t = e.className,
          s = void 0 === t ? '' : t,
          i = e.themed,
          u = void 0 === i ? [] : i,
          p = Object(o.a)(e, ['children', 'className', 'themed']),
          m = Object(c.useMemo)(
            function() {
              return 'Flex '.concat(s)
            },
            [s]
          ),
          f = Object(c.useMemo)(
            function() {
              return [l, d].concat(Object(r.a)(u))
            },
            [l, d, u]
          )
        return a.a.createElement(
          b.Base,
          Object.assign({ className: m, themed: f }, p),
          n
        )
      })
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
      n.b = u
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
    },
    './src/Flex/flex.types.ts': function(e, n) {
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
    './src/Flex/index.ts': function(e, n, t) {
      'use strict'
      var r = t('./src/Flex/Flex.tsx')
      t.d(n, 'Flex', function() {
        return r.a
      })
      t('./src/Flex/flex.types.ts')
    },
    './src/theme/elevate/elevate.mdx': function(e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function() {
          return b
        })
      var r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o =
          (t('./node_modules/react/index.js'),
          t('./node_modules/@mdx-js/react/dist/index.es.js')),
        c =
          (t('./node_modules/docz/dist/index.esm.js'),
          t('./src/Container/Container.tsx')),
        a = t('./src/Flex/index.ts'),
        s = t('./src/ThemeContext/ThemeProvider.tsx'),
        i = t('./src/theme/theme.ts'),
        l = {},
        d = 'wrapper'
      function b(e) {
        var n = e.components,
          t = Object(r.a)(e, ['components'])
        return Object(o.b)(
          d,
          Object.assign({}, l, t, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', { id: 'elevate' }, 'Elevate'),
          Object(o.b)(
            s.a,
            { mdxType: 'ThemeProvider' },
            Object(o.b)(
              a.Flex,
              { wrap: 'wrap', mdxType: 'Flex' },
              Object(o.b)(
                c.a,
                { css: 'text-align: center', mdxType: 'Container' },
                Object(o.b)(c.a, {
                  elevate: 0,
                  css: '\n          margin: 20px;\n          width: 200px;\n          height: 200px;\n          border: 1px solid '.concat(
                    i.a.color['grey-100'],
                    ';\n        '
                  ),
                  mdxType: 'Container',
                }),
                '0'
              ),
              Object(o.b)(
                c.a,
                { css: '\n    text-align: center;\n  ', mdxType: 'Container' },
                Object(o.b)(c.a, {
                  elevate: 1,
                  css: '\n      margin: 20px;\n      width: 200px;\n      height: 200px;\n      border: 1px solid '.concat(
                    i.a.color['grey-100'],
                    ';\n    '
                  ),
                  mdxType: 'Container',
                }),
                '1'
              ),
              Object(o.b)(
                c.a,
                { css: '\n    text-align: center;\n  ', mdxType: 'Container' },
                Object(o.b)(c.a, {
                  elevate: 2,
                  css: '\n      margin: 20px;\n      width: 200px;\n      height: 200px;\n      border: 1px solid '.concat(
                    i.a.color['grey-100'],
                    ';\n    '
                  ),
                  mdxType: 'Container',
                }),
                '2'
              ),
              Object(o.b)(
                c.a,
                { css: '\n    text-align: center;\n  ', mdxType: 'Container' },
                Object(o.b)(c.a, {
                  elevate: 3,
                  css: '\n      margin: 20px;\n      width: 200px;\n      height: 200px;\n      border: 1px solid '.concat(
                    i.a.color['grey-100'],
                    ';\n    '
                  ),
                  mdxType: 'Container',
                }),
                '3'
              ),
              Object(o.b)(
                c.a,
                { css: '\n    text-align: center;\n  ', mdxType: 'Container' },
                Object(o.b)(c.a, {
                  elevate: 4,
                  css: '\n      margin: 20px;\n      width: 200px;\n      height: 200px;\n      border: 1px solid '.concat(
                    i.a.color['grey-100'],
                    ';\n    '
                  ),
                  mdxType: 'Container',
                }),
                '4'
              ),
              Object(o.b)(
                c.a,
                { css: '\n    text-align: center;\n  ', mdxType: 'Container' },
                Object(o.b)(c.a, {
                  elevate: 5,
                  css: '\n      margin: 20px;\n      width: 200px;\n      height: 200px;\n      border: 1px solid '.concat(
                    i.a.color['grey-100'],
                    ';\n    '
                  ),
                  mdxType: 'Container',
                }),
                '5'
              )
            )
          )
        )
      }
      b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'MDXContent',
            filename: 'src/theme/elevate/elevate.mdx',
          },
        }),
        (b.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-theme-elevate-elevate.a207fa0f391889dcebe8.js.map

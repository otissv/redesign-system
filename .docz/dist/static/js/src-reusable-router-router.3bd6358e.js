;(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    './src/Flex/Flex.tsx': function(e, t, n) {
      'use strict'
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        s = n('./node_modules/react/index.js'),
        a = n.n(s),
        u = n('./node_modules/lodash/kebabCase.js'),
        c = n.n(u)
      function i(e) {
        var t = e.alignItems,
          n = e.basis,
          r = e.display,
          o = e.grow,
          s = e.justifyContent,
          a = e.shrink,
          u = e.wrap
        return {
          display: r || 'flex',
          basis: n ? ''.concat(n) : '',
          grow: o ? ''.concat(o) : '',
          shrink: a ? ''.concat(a) : '',
          justifyContent: (s && [c()(s)]) || '',
          alignItems: (t && [c()(t)]) || '',
          flexWrap: (u && [c()(u)]) || '',
        }
      }
      function l(e) {
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
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'flexTheme', filename: 'src/Flex/flex.theme.ts' },
        }),
        'undefined' !== typeof l &&
          l &&
          l === Object(l) &&
          Object.isExtensible(l) &&
          Object.defineProperty(l, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'flexDirectionTheme',
              filename: 'src/Flex/flex.theme.ts',
            },
          })
      var b = n('./src/Base/index.tsx')
      n.d(t, 'a', function() {
        return m
      })
      var m = a.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          u = void 0 === n ? '' : n,
          c = e.themed,
          m = void 0 === c ? [] : c,
          d = Object(o.a)(e, ['children', 'className', 'themed']),
          f = Object(s.useMemo)(
            function() {
              return 'Flex '.concat(u)
            },
            [u]
          ),
          p = Object(s.useMemo)(
            function() {
              return [i, l].concat(Object(r.a)(m))
            },
            [i, l, m]
          )
        return a.a.createElement(
          b.Base,
          Object.assign({ className: f, themed: p }, d),
          t
        )
      })
      'undefined' !== typeof m &&
        m &&
        m === Object(m) &&
        Object.isExtensible(m) &&
        Object.defineProperty(m, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
      t.b = m
      'undefined' !== typeof m &&
        m &&
        m === Object(m) &&
        Object.isExtensible(m) &&
        Object.defineProperty(m, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
    },
    './src/Flex/flex.types.ts': function(e, t) {
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
    './src/Flex/index.ts': function(e, t, n) {
      'use strict'
      var r = n('./src/Flex/Flex.tsx')
      n.d(t, 'Flex', function() {
        return r.a
      })
      n('./src/Flex/flex.types.ts')
    },
    './src/reusable/router/Link.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = n('./node_modules/react/index.js'),
        s = n.n(o),
        a = n('./src/reusable/router/RouterContext.tsx'),
        u = n('./src/Base/index.tsx'),
        c = function(e) {
          var t = e.className,
            n = e.children,
            c = e.onClick,
            i = (e.onEnter, e.to),
            l = Object(r.a)(e, [
              'className',
              'children',
              'onClick',
              'onEnter',
              'to',
            ]),
            b = 'Link '.concat(t),
            m = Object(a.b)(),
            d = m.route,
            f = m.dispatch,
            p = Object(o.useCallback)(
              function(e) {
                e.preventDefault(),
                  i !== d && f({ type: 'ADD_ROUTE', route: i }),
                  c && c(e)
              },
              [c]
            )
          return s.a.createElement(
            u.Base,
            Object.assign(
              { as: 'a', className: b, href: i, onClick: p, tabIndex: 0 },
              l
            ),
            n
          )
        }
      'undefined' !== typeof c &&
        c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Link', filename: 'src/reusable/router/Link.tsx' },
        })
    },
    './src/reusable/router/Router.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return b
      })
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        s = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = n('./node_modules/react/index.js'),
        u = n.n(a),
        c = n('./node_modules/route-parser/index.js'),
        i = n.n(c),
        l = n('./src/reusable/router/RouterContext.tsx')
      var b = u.a.memo(function(e) {
        var t = e.routes,
          n = void 0 === t ? [] : t,
          c = Object(r.a)(e, ['routes']),
          b = Object(a.useMemo)(
            function() {
              return n
                ? (function e(t, n) {
                    return t.reduce(function(t, r) {
                      return r.children
                        ? [].concat(
                            Object(s.a)(t),
                            Object(s.a)(e(r.children, r))
                          )
                        : [].concat(Object(s.a)(t), [
                            Object(o.a)({}, r, {
                              component:
                                (n &&
                                  function() {
                                    return n.component.type
                                      ? n.component.type({ routes: n.children })
                                      : n.component({ routes: n.children })
                                  }) ||
                                r.component,
                            }),
                          ])
                    }, [])
                  })(n)
                : []
            },
            [n]
          ),
          m = Object(l.b)(),
          d = m.route,
          f = m.history,
          p = m.dispatch,
          x = !1,
          y = null,
          j = !0,
          O = !1,
          _ = void 0
        try {
          for (
            var h, T = b[Symbol.iterator]();
            !(j = (h = T.next()).done);
            j = !0
          ) {
            var v = h.value,
              g = new i.a(v.path).match(d)
            if (g) {
              ;(x = g), (y = v.component)
              break
            }
          }
        } catch (F) {
          ;(O = !0), (_ = F)
        } finally {
          try {
            j || null == T.return || T.return()
          } finally {
            if (O) throw _
          }
        }
        var C = Object(a.useMemo)(
          function() {
            return { route: d, history: f, dispatch: p }
          },
          [d, f, p]
        )
        return Object(a.useMemo)(
          function() {
            return x
              ? u.a.createElement(y, Object.assign({}, c, { route: C }))
              : null
          },
          [x, d]
        )
      })
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Router', filename: 'src/reusable/router/Router.tsx' },
        })
    },
    './src/reusable/router/RouterContext.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return o
      }),
        n.d(t, 'b', function() {
          return s
        })
      var r = n('./node_modules/react/index.js'),
        o = n.n(r).a.createContext({ route: '/', history: ['/'] })
      function s() {
        return Object(r.useContext)(o)
      }
      'undefined' !== typeof o &&
        o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'RouterContext',
            filename: 'src/reusable/router/RouterContext.tsx',
          },
        }),
        s &&
          s === Object(s) &&
          Object.isExtensible(s) &&
          Object.defineProperty(s, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useRouter',
              filename: 'src/reusable/router/RouterContext.tsx',
            },
          })
    },
    './src/reusable/router/router.mdx': function(e, t, n) {
      'use strict'
      n.r(t)
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = n('./node_modules/react/index.js'),
        s = n.n(o),
        a = n('./node_modules/@mdx-js/react/dist/index.es.js'),
        u = s.a.lazy(function() {
          return n
            .e(41)
            .then(n.bind(null, './src/reusable/router/Users.example.tsx'))
        }),
        c = [
          {
            path: '/router',
            component: function() {
              return 'Home Page'
            },
          },
          {
            path: '/router/about',
            component: function() {
              return 'About Page'
            },
          },
          {
            component: function(e) {
              return s.a.createElement(u, e)
            },
            children: [
              {
                path: '/router/users/1',
                component: function() {
                  return 'Users 1'
                },
              },
              {
                path: '/router/users/2',
                component: function() {
                  return 'Users 2'
                },
              },
            ],
          },
        ]
      'undefined' !== typeof c &&
        c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'routes',
            filename: 'src/reusable/router/router.example.tsx',
          },
        })
      var i = n('./src/reusable/router/Link.tsx'),
        l = n('./src/reusable/router/Router.tsx'),
        b = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        m = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        d = n('./src/reusable/router/RouterContext.tsx'),
        f = s.a.memo(function(e) {
          var t = e.children,
            n = e.active,
            r = void 0 === n ? window.location.pathname : n
          var a = Object(o.useReducer)(
              function(e, t) {
                switch (t.type) {
                  case 'ADD_ROUTE':
                    return [].concat(Object(m.a)(e), [t.route])
                  case 'BACK_ROUTE':
                    return e.slice(0, e.length - 1)
                  default:
                    return e
                }
              },
              [r]
            ),
            u = Object(b.a)(a, 2),
            c = u[0],
            i = u[1],
            l = c[c.length - 1]
          Object(o.useEffect)(function() {
            window.addEventListener('popstate', function(e) {
              i({ type: 'ADD_ROUTE', route: e.currentTarget.location.pathname })
            })
          }),
            Object(o.useEffect)(
              function() {
                window.location.pathname !== l &&
                  window.history.pushState(l, l, l)
              },
              [i, l]
            )
          var f = Object(o.useMemo)(
            function() {
              return { history: c, route: l, dispatch: i }
            },
            [l, c, i]
          )
          return s.a.createElement(d.a.Provider, { value: f }, t)
        })
      'undefined' !== typeof f &&
        f &&
        f === Object(f) &&
        Object.isExtensible(f) &&
        Object.defineProperty(f, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'RouterProvider',
            filename: 'src/reusable/router/RouterProvider.tsx',
          },
        })
      var p = n('./src/Flex/index.ts'),
        x = n('./src/ThemeContext/ThemeProvider.tsx')
      n.d(t, 'default', function() {
        return O
      })
      var y = {},
        j = 'wrapper'
      function O(e) {
        var t = e.components,
          n = Object(r.a)(e, ['components'])
        return Object(a.b)(
          j,
          Object.assign({}, y, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', { id: 'router' }, 'Router'),
          Object(a.b)(
            x.a,
            { mdxType: 'ThemeProvider' },
            Object(a.b)(
              f,
              { mdxType: 'RouterProvider' },
              Object(a.b)(
                o.Suspense,
                { fallback: 'Loading...', mdxType: 'Suspense' },
                Object(a.b)(
                  p.Flex,
                  { mdxType: 'Flex' },
                  Object(a.b)(
                    p.Flex,
                    {
                      direction: 'column',
                      css: 'width: 200px;',
                      mdxType: 'Flex',
                    },
                    Object(a.b)(
                      i.a,
                      { to: '/router', mdxType: 'Link' },
                      'Home'
                    ),
                    Object(a.b)(
                      i.a,
                      { to: '/router/about', mdxType: 'Link' },
                      'About'
                    ),
                    Object(a.b)(
                      i.a,
                      { to: '/router/users/1', mdxType: 'Link' },
                      'Users'
                    )
                  ),
                  Object(a.b)(l.a, { routes: c, mdxType: 'Router' })
                )
              )
            )
          )
        )
      }
      O &&
        O === Object(O) &&
        Object.isExtensible(O) &&
        Object.defineProperty(O, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'MDXContent',
            filename: 'src/reusable/router/router.mdx',
          },
        }),
        (O.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-reusable-router-router.3ae2d971195c87fda938.js.map

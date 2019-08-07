;(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    './src/ErrorMessage/ErrorMessage.mdx': function(e, r, s) {
      'use strict'
      s.r(r),
        s.d(r, 'default', function() {
          return b
        })
      var a = s(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = s('./node_modules/react/index.js'),
        n = s('./node_modules/@mdx-js/react/dist/index.es.js'),
        t = s('./node_modules/docz/dist/index.esm.js'),
        d = s(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        c = s('./src/ErrorMessage/ErrorMessage.tsx'),
        i = s('./src/ThemeContext/ThemeProvider.tsx'),
        m = {},
        p = 'wrapper'
      function b(e) {
        var r = e.components,
          s = Object(a.a)(e, ['components'])
        return Object(n.b)(
          p,
          Object.assign({}, m, s, { components: r, mdxType: 'MDXLayout' }),
          Object(n.b)('h1', { id: 'error-message' }, 'Error Message'),
          Object(n.b)(t.d, { of: c.a, mdxType: 'Props' }),
          Object(n.b)('h2', { id: 'default' }, 'Default'),
          Object(n.b)(
            t.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <ErrorMessage>Error message</ErrorMessage>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : s,
                Fragment: o.Fragment,
                Playground: t.c,
                Props: t.d,
                styled: d.default,
                ErrorMessage: c.a,
                ThemeProvider: i.a,
              },
              mdxType: 'Playground',
            },
            Object(n.b)(
              i.a,
              { mdxType: 'ThemeProvider' },
              Object(n.b)(c.a, { mdxType: 'ErrorMessage' }, 'Error message')
            )
          ),
          Object(n.b)('h2', { id: 'appearance' }, 'Appearance'),
          Object(n.b)(
            t.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <h3>Primary</h3>\n  <ErrorMessage appearance="primary">Error message</ErrorMessage>\n  <h3>Secondary</h3>\n  <ErrorMessage appearance="secondary">Error message</ErrorMessage>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : s,
                Fragment: o.Fragment,
                Playground: t.c,
                Props: t.d,
                styled: d.default,
                ErrorMessage: c.a,
                ThemeProvider: i.a,
              },
              mdxType: 'Playground',
            },
            Object(n.b)(
              i.a,
              { mdxType: 'ThemeProvider' },
              Object(n.b)('h3', null, 'Primary'),
              Object(n.b)(
                c.a,
                { appearance: 'primary', mdxType: 'ErrorMessage' },
                'Error message'
              ),
              Object(n.b)('h3', null, 'Secondary'),
              Object(n.b)(
                c.a,
                { appearance: 'secondary', mdxType: 'ErrorMessage' },
                'Error message'
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
            filename: 'src/ErrorMessage/ErrorMessage.mdx',
          },
        }),
        (b.isMDXComponent = !0)
    },
    './src/ErrorMessage/ErrorMessage.tsx': function(e, r, s) {
      'use strict'
      var a = s(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = s(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        n = s('./node_modules/react/index.js'),
        t = s.n(n),
        d = s('./src/Base/index.tsx')
      function c(e) {
        var r = e.theme,
          s = r.animation,
          a = r.color,
          o = r.unit
        return {
          color: a.danger,
          transition: s.easeMedium(),
          margin: '0 0 '.concat(o[3], ' 3px'),
          paddingTop: o[1],
          paddingBottom: o[1],
        }
      }
      function i(e) {
        var r = e.appearance,
          s = e.theme,
          a = s.border,
          o = s.color,
          n = s.unit
        switch (r) {
          case 'primary':
            return {
              color: o.foreground,
              backgroundColor: o.danger,
              paddingLeft: n[2],
              paddingRight: n[2],
            }
          case 'secondary':
            return {
              border: a.thinDanger,
              paddingLeft: n[2],
              paddingRight: n[2],
            }
          default:
            return {}
        }
      }
      'undefined' !== typeof c &&
        c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'errorMessageTheme',
            filename: 'src/ErrorMessage/errorMessage.theme.ts',
          },
        }),
        'undefined' !== typeof i &&
          i &&
          i === Object(i) &&
          Object.isExtensible(i) &&
          Object.defineProperty(i, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'errorMessageAppearanceTheme',
              filename: 'src/ErrorMessage/errorMessage.theme.ts',
            },
          })
      var m = t.a.memo(function(e) {
        var r = e.children,
          s = e.className,
          m = void 0 === s ? '' : s,
          p = e.themed,
          b = void 0 === p ? [] : p,
          l = Object(o.a)(e, ['children', 'className', 'themed']),
          u = Object(n.useMemo)(
            function() {
              return 'ErrorMessage '.concat(m)
            },
            [m]
          ),
          g = Object(n.useMemo)(
            function() {
              return [c, i].concat(Object(a.a)(b))
            },
            [c, i, b]
          )
        return t.a.createElement(
          d.Base,
          Object.assign({ className: u, themed: g }, l),
          r
        )
      })
      'undefined' !== typeof m &&
        m &&
        m === Object(m) &&
        Object.isExtensible(m) &&
        Object.defineProperty(m, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ErrorMessage',
            filename: 'src/ErrorMessage/ErrorMessage.tsx',
          },
        })
      r.a = m
      'undefined' !== typeof m &&
        m &&
        m === Object(m) &&
        Object.isExtensible(m) &&
        Object.defineProperty(m, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ErrorMessage',
            filename: 'src/ErrorMessage/ErrorMessage.tsx',
          },
        })
    },
  },
])
//# sourceMappingURL=src-error-message-error-message.e5c15bfd4c5b7d97eb90.js.map

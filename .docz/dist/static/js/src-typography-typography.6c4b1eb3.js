;(window.webpackJsonp = window.webpackJsonp || []).push([
  [39],
  {
    './src/Container/Container.tsx': function(e, t, n) {
      'use strict'
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = n('./node_modules/react/index.js'),
        c = n.n(o),
        s = n('./src/Base/index.tsx')
      function l(e) {
        var t = e.appearance,
          n = e.theme,
          r = n.border,
          a = n.color,
          o = {
            color: a['accent-050'],
            backgroundColor: a['accent-500'],
            border: '1px solid '.concat(a['accent-500']),
          },
          c = {
            color: a['action-050'],
            backgroundColor: a['action-500'],
            border: '1px solid '.concat(a['action-500']),
          },
          s = {
            color: a['danger-050'],
            backgroundColor: a['danger-500'],
            border: '1px solid '.concat(a['danger-500']),
          },
          l = {
            color: a['success-050'],
            backgroundColor: a['success-500'],
            border: '1px solid '.concat(a['success-500']),
          },
          d = {
            color: a['warning-050'],
            backgroundColor: a['warning-500'],
            border: '1px solid '.concat(a['warning-500']),
          }
        switch (t) {
          case 'primary':
            return {
              color: a.foregroundInvert,
              backgroundColor: a.backgroundInvert,
              border: r.thinTransparent,
            }
          case 'secondary':
            return {
              color: a['grey-800'],
              backgroundColor: a['grey-100'],
              border: '1px solid '.concat(a['grey-100']),
            }
          case 'tertiary':
            return { backgroundColor: 'none', border: r.thin }
          case 'accent':
          case 'primary-accent':
            return o
          case 'secondary-accent':
            return {
              color: a['accent-800'],
              backgroundColor: a['accent-100'],
              border: '1px solid '.concat(a['accent-100']),
            }
          case 'tertiary-accent':
            return {
              color: a['accent-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(a['accent-300']),
            }
          case 'action':
          case 'primary-action':
            return c
          case 'secondary-action':
            return {
              color: a['action-800'],
              backgroundColor: a['action-100'],
              border: '1px solid '.concat(a['action-100']),
            }
          case 'tertiary-action':
            return {
              color: a['action-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(a['action-300']),
            }
          case 'danger':
          case 'primary-danger':
            return s
          case 'secondary-danger':
            return {
              color: a['danger-800'],
              backgroundColor: a['danger-300'],
              border: '1px solid '.concat(a['danger-300']),
            }
          case 'tertiary-danger':
            return {
              color: a['danger-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(a['danger-300']),
            }
          case 'success':
          case 'primary-success':
            return l
          case 'secondary-success':
            return {
              color: a['success-800'],
              backgroundColor: a['success-300'],
              border: '1px solid '.concat(a['success-300']),
            }
          case 'tertiary-success':
            return {
              color: a['success-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(a['success-300']),
            }
          case 'warning':
          case 'primary-warning':
            return d
          case 'secondary-warning':
            return {
              color: a['warning-800'],
              backgroundColor: a['warning-300'],
              border: '1px solid '.concat(a['warning-300']),
            }
          case 'tertiary-warning':
            return {
              color: a['warning-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(a['warning-300']),
            }
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
          value: {
            name: 'containerAppearanceTheme',
            filename: 'src/Container/container.theme.ts',
          },
        }),
        n.d(t, 'a', function() {
          return d
        })
      var d = c.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          d = void 0 === n ? '' : n,
          b = e.themed,
          p = void 0 === b ? [] : b,
          i = Object(a.a)(e, ['children', 'className', 'themed']),
          u = Object(o.useMemo)(
            function() {
              return 'Container '.concat(d)
            },
            [d]
          ),
          y = Object(o.useMemo)(
            function() {
              return [l].concat(Object(r.a)(p))
            },
            [l, p]
          )
        return c.a.createElement(
          s.Base,
          Object.assign({ className: u, themed: y }, i),
          t
        )
      })
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
      t.b = d
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
    },
    './src/Typography/Typography.tsx': function(e, t, n) {
      'use strict'
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        s = n.n(c),
        l = n('./src/Base/index.tsx')
      function d(e) {
        return { transition: e.theme.animation.easeMedium() }
      }
      function b(e) {
        var t = e.appearance,
          n = e.theme.color
        switch (t) {
          case 'accent':
            return { color: n.accent }
          case 'action':
            return { color: n.action }
          case 'danger':
            return { color: n.danger }
          case 'disabled':
            return { color: n.disabled }
          case 'success':
            return { color: n.success }
          case 'warning':
            return { color: n.warning }
          default:
            return {}
        }
      }
      function p(e) {
        var t = e.modify,
          n = e.theme,
          r = n.color,
          a = n.font
        switch (t) {
          case 'lead':
            return { fontSize: a.size[8], fontWeight: 300 }
          case 'meta':
            return { fontSize: a.size[2], color: r['grey-500'] }
          default:
            return {}
        }
      }
      function i(e) {
        switch (e.wrap) {
          case 'truncate':
            return {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }
          case 'break':
            return { wordWrap: 'break-word', hyphens: 'auto' }
          case 'nowrap':
            return { whiteSpace: 'nowrap' }
          default:
            return {}
        }
      }
      function u(e) {
        switch (e.textTransform) {
          case 'capitalize':
            return { textTransform: 'capitalize' }
          case 'lowercase':
            return { textTransform: 'lowercase' }
          case 'uppercase':
            return { textTransform: 'uppercase' }
          default:
            return {}
        }
      }
      function y(e) {
        switch (e.textAlign) {
          case 'left':
          case 'leftSmall':
          case 'leftMedium':
          case 'leftLarge':
            return { textAlign: 'left' }
          case 'right':
          case 'rightSmall':
          case 'rightMedium':
            return { textAlign: 'right' }
          case 'center':
          case 'centerSmall':
          case 'centerMedium':
          case 'centerLarge':
            return { textAlign: 'center' }
          case 'justify':
            return { textAlign: 'justify' }
          default:
            return {}
        }
      }
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'typographyTheme',
            filename: 'src/Typography/typography.theme.ts',
          },
        }),
        'undefined' !== typeof b &&
          b &&
          b === Object(b) &&
          Object.isExtensible(b) &&
          Object.defineProperty(b, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'typographyAppearanceTheme',
              filename: 'src/Typography/typography.theme.ts',
            },
          }),
        'undefined' !== typeof p &&
          p &&
          p === Object(p) &&
          Object.isExtensible(p) &&
          Object.defineProperty(p, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'typographyModifyTheme',
              filename: 'src/Typography/typography.theme.ts',
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
              name: 'typographyWrapTheme',
              filename: 'src/Typography/typography.theme.ts',
            },
          }),
        'undefined' !== typeof u &&
          u &&
          u === Object(u) &&
          Object.isExtensible(u) &&
          Object.defineProperty(u, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'typographyTransformTheme',
              filename: 'src/Typography/typography.theme.ts',
            },
          }),
        'undefined' !== typeof y &&
          y &&
          y === Object(y) &&
          Object.isExtensible(y) &&
          Object.defineProperty(y, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'typographyTextAlignTheme',
              filename: 'src/Typography/typography.theme.ts',
            },
          }),
        n.d(t, 'a', function() {
          return m
        })
      var m = s.a.memo(function(e) {
        var t = e.as,
          n = void 0 === t ? 'p' : t,
          m = e.children,
          h = e.className,
          g = void 0 === h ? '' : h,
          j = e.themed,
          f = void 0 === j ? [] : j,
          O = Object(o.a)(e, ['as', 'children', 'className', 'themed']),
          T = Object(c.useMemo)(
            function() {
              return 'Typography '.concat(g)
            },
            [g]
          ),
          x = Object(c.useMemo)(
            function() {
              return [b, d, p, i, y, u].concat(Object(a.a)(f))
            },
            [b, d, p, i, y, u, f]
          ),
          _ = Object(c.useMemo)(function() {
            return Object(
              r.a
            )({}, 'hr' === n ? { role: 'separator', 'aria-orientation': 'horizontal' } : {})
          }, [])
        return s.a.createElement(
          l.Base,
          Object.assign({ className: T, themed: x }, _, { as: n }, O),
          m
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
            name: 'Typography',
            filename: 'src/Typography/Typography.tsx',
          },
        })
      t.b = m
      'undefined' !== typeof m &&
        m &&
        m === Object(m) &&
        Object.isExtensible(m) &&
        Object.defineProperty(m, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'Typography',
            filename: 'src/Typography/Typography.tsx',
          },
        })
    },
    './src/Typography/typography.mdx': function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function() {
          return p
        })
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a =
          (n('./node_modules/react/index.js'),
          n('./node_modules/@mdx-js/react/dist/index.es.js')),
        o = n('./node_modules/docz/dist/index.esm.js'),
        c = n('./src/Typography/Typography.tsx'),
        s = n('./src/ThemeContext/ThemeProvider.tsx'),
        l = n('./src/Container/Container.tsx'),
        d = {},
        b = 'wrapper'
      function p(e) {
        var t = e.components,
          n = Object(r.a)(e, ['components'])
        return Object(a.b)(
          b,
          Object.assign({}, d, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h1', { id: 'typography' }, 'Typography'),
          Object(a.b)(o.d, { of: c.b, mdxType: 'Props' }),
          Object(a.b)('h2', { id: 'as' }, 'As'),
          Object(a.b)(
            o.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <table>\n    <thead>\n      <tr>\n        <th>Prop</th>\n        <th>Example</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>a</td>\n        <td>\n          <Typography href="#" as="a">\n            hyper link\n          </Typography>\n        </td>\n      </tr>\n      <tr>\n        <td>code</td>\n        <td>\n          <Typography as="code">code element</Typography>\n        </td>\n      </tr>\n      <tr>\n        <td>em</td>\n        <td>\n          <Typography as="em">em element</Typography>\n        </td>\n      </tr>\n      <tr>\n        <td>h1</td>\n        <td>\n          <Typography as="h1">h1 element</Typography>\n        </td>\n      </tr>\n      <tr>\n        <td>h2</td>\n        <td>\n          <Typography as="h2">h2 element</Typography>\n        </td>\n      </tr>\n      <tr>\n        <td>h3</td>\n        <td>\n          <Typography as="h3">h3 element</Typography>\n        </td>\n      </tr>\n      <tr>\n        <td>h4</td>\n        <td>\n          <Typography as="h4">h4 element</Typography>\n        </td>\n      </tr>\n      <tr>\n        <td>h5</td>\n        <td>\n          <Typography as="h5">h5 element</Typography>\n        </td>\n      </tr>\n      <tr>\n        <td>h6</td>\n        <td>\n          <Typography as="h6">h6 element</Typography>\n        </td>\n      </tr>\n      <tr>\n        <td>hr</td>\n        <td>\n          <Typography as="hr" />\n        </td>\n      </tr>\n      <tr>\n        <td>q</td>\n        <td>\n          <Typography as="q">q element</Typography>\n        </td>\n      </tr>\n      <tr>\n        <td>p</td>\n        <td>\n          <Typography as="p">\n            Define a paragraph using the p element.\n          </Typography>\n        </td>\n      </tr>\n      <tr>\n        <td>span</td>\n        <td>\n          <Typography as="span">span element</Typography>\n        </td>\n      </tr>\n      <tr>\n        <td>strong</td>\n        <td>\n          <Typography as="strong">strong element</Typography>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: o.c,
                Props: o.d,
                Typography: c.b,
                ThemeProvider: s.a,
                Container: l.b,
              },
              mdxType: 'Playground',
            },
            Object(a.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(a.b)(
                'table',
                null,
                Object(a.b)(
                  'thead',
                  null,
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('th', null, 'Prop'),
                    Object(a.b)('th', null, 'Example')
                  )
                ),
                Object(a.b)(
                  'tbody',
                  null,
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'a'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { href: '#', as: 'a', mdxType: 'Typography' },
                        'hyper link'
                      )
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'code'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { as: 'code', mdxType: 'Typography' },
                        'code element'
                      )
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'em'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { as: 'em', mdxType: 'Typography' },
                        'em element'
                      )
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'h1'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { as: 'h1', mdxType: 'Typography' },
                        'h1 element'
                      )
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'h2'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { as: 'h2', mdxType: 'Typography' },
                        'h2 element'
                      )
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'h3'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { as: 'h3', mdxType: 'Typography' },
                        'h3 element'
                      )
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'h4'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { as: 'h4', mdxType: 'Typography' },
                        'h4 element'
                      )
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'h5'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { as: 'h5', mdxType: 'Typography' },
                        'h5 element'
                      )
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'h6'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { as: 'h6', mdxType: 'Typography' },
                        'h6 element'
                      )
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'hr'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(c.b, { as: 'hr', mdxType: 'Typography' })
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'q'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { as: 'q', mdxType: 'Typography' },
                        'q element'
                      )
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'p'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { as: 'p', mdxType: 'Typography' },
                        'Define a paragraph using the p element.'
                      )
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'span'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { as: 'span', mdxType: 'Typography' },
                        'span element'
                      )
                    )
                  ),
                  Object(a.b)(
                    'tr',
                    null,
                    Object(a.b)('td', null, 'strong'),
                    Object(a.b)(
                      'td',
                      null,
                      Object(a.b)(
                        c.b,
                        { as: 'strong', mdxType: 'Typography' },
                        'strong element'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      }
      p &&
        p === Object(p) &&
        Object.isExtensible(p) &&
        Object.defineProperty(p, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'MDXContent',
            filename: 'src/Typography/typography.mdx',
          },
        }),
        (p.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-typography-typography.d26d79b5d0539dda5417.js.map

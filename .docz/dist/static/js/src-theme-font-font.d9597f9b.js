;(window.webpackJsonp = window.webpackJsonp || []).push([
  [33],
  {
    './src/Container/Container.tsx': function(e, t, n) {
      'use strict'
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = n('./node_modules/react/index.js'),
        c = n.n(a),
        l = n('./src/Base/index.tsx')
      function b(e) {
        var t = e.appearance,
          n = e.theme,
          r = n.border,
          o = n.color,
          a = {
            color: o['accent-050'],
            backgroundColor: o['accent-500'],
            border: '1px solid '.concat(o['accent-500']),
          },
          c = {
            color: o['action-050'],
            backgroundColor: o['action-500'],
            border: '1px solid '.concat(o['action-500']),
          },
          l = {
            color: o['danger-050'],
            backgroundColor: o['danger-500'],
            border: '1px solid '.concat(o['danger-500']),
          },
          b = {
            color: o['success-050'],
            backgroundColor: o['success-500'],
            border: '1px solid '.concat(o['success-500']),
          },
          s = {
            color: o['warning-050'],
            backgroundColor: o['warning-500'],
            border: '1px solid '.concat(o['warning-500']),
          }
        switch (t) {
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
            return a
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
            return c
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
            return l
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
            return b
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
            return s
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
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'containerAppearanceTheme',
            filename: 'src/Container/container.theme.ts',
          },
        }),
        n.d(t, 'a', function() {
          return s
        })
      var s = c.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          s = void 0 === n ? '' : n,
          i = e.themed,
          p = void 0 === i ? [] : i,
          d = Object(o.a)(e, ['children', 'className', 'themed']),
          u = Object(a.useMemo)(
            function() {
              return 'Container '.concat(s)
            },
            [s]
          ),
          y = Object(a.useMemo)(
            function() {
              return [b].concat(Object(r.a)(p))
            },
            [b, p]
          )
        return c.a.createElement(
          l.Base,
          Object.assign({ className: u, themed: y }, d),
          t
        )
      })
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
      t.b = s
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
    },
    './src/Flex/Flex.tsx': function(e, t, n) {
      'use strict'
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = n('./node_modules/react/index.js'),
        c = n.n(a),
        l = n('./node_modules/lodash/kebabCase.js'),
        b = n.n(l)
      function s(e) {
        var t = e.alignItems,
          n = e.basis,
          r = e.display,
          o = e.grow,
          a = e.justifyContent,
          c = e.shrink,
          l = e.wrap
        return {
          display: r || 'flex',
          basis: n ? ''.concat(n) : '',
          grow: o ? ''.concat(o) : '',
          shrink: c ? ''.concat(c) : '',
          justifyContent: (a && [b()(a)]) || '',
          alignItems: (t && [b()(t)]) || '',
          flexWrap: (l && [b()(l)]) || '',
        }
      }
      function i(e) {
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
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'flexTheme', filename: 'src/Flex/flex.theme.ts' },
        }),
        'undefined' !== typeof i &&
          i &&
          i === Object(i) &&
          Object.isExtensible(i) &&
          Object.defineProperty(i, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'flexDirectionTheme',
              filename: 'src/Flex/flex.theme.ts',
            },
          })
      var p = n('./src/Base/index.tsx')
      n.d(t, 'a', function() {
        return d
      })
      var d = c.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          l = void 0 === n ? '' : n,
          b = e.themed,
          d = void 0 === b ? [] : b,
          u = Object(o.a)(e, ['children', 'className', 'themed']),
          y = Object(a.useMemo)(
            function() {
              return 'Flex '.concat(l)
            },
            [l]
          ),
          m = Object(a.useMemo)(
            function() {
              return [s, i].concat(Object(r.a)(d))
            },
            [s, i, d]
          )
        return c.a.createElement(
          p.Base,
          Object.assign({ className: y, themed: m }, u),
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
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
      t.b = d
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
    './src/Typography/Typography.tsx': function(e, t, n) {
      'use strict'
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        l = n.n(c),
        b = n('./src/Base/index.tsx')
      function s(e) {
        return { transition: e.theme.animation.easeMedium() }
      }
      function i(e) {
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
          o = n.font
        switch (t) {
          case 'lead':
            return { fontSize: o.size[8], fontWeight: 300 }
          case 'meta':
            return { fontSize: o.size[2], color: r['grey-500'] }
          default:
            return {}
        }
      }
      function d(e) {
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
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'typographyTheme',
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
        'undefined' !== typeof d &&
          d &&
          d === Object(d) &&
          Object.isExtensible(d) &&
          Object.defineProperty(d, '__filemeta', {
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
      var m = l.a.memo(function(e) {
        var t = e.as,
          n = void 0 === t ? 'p' : t,
          m = e.children,
          h = e.className,
          f = void 0 === h ? '' : h,
          j = e.themed,
          g = void 0 === j ? [] : j,
          O = Object(a.a)(e, ['as', 'children', 'className', 'themed']),
          T = Object(c.useMemo)(
            function() {
              return 'Typography '.concat(f)
            },
            [f]
          ),
          x = Object(c.useMemo)(
            function() {
              return [i, s, p, d, y, u].concat(Object(o.a)(g))
            },
            [i, s, p, d, y, u, g]
          ),
          v = Object(c.useMemo)(function() {
            return Object(
              r.a
            )({}, 'hr' === n ? { role: 'separator', 'aria-orientation': 'horizontal' } : {})
          }, [])
        return l.a.createElement(
          b.Base,
          Object.assign({ className: T, themed: x }, v, { as: n }, O),
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
    './src/Typography/index.ts': function(e, t, n) {
      'use strict'
      var r = n('./src/Typography/Typography.tsx')
      n.d(t, 'Typography', function() {
        return r.a
      })
      n('./src/Typography/typography.types.ts')
    },
    './src/Typography/typography.types.ts': function(e, t) {
      'undefined' !== typeof ModifyType &&
        ModifyType &&
        ModifyType === Object(ModifyType) &&
        Object.isExtensible(ModifyType) &&
        Object.defineProperty(ModifyType, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ModifyType',
            filename: 'src/Typography/typography.types.ts',
          },
        }),
        'undefined' !== typeof TextAlignType &&
          TextAlignType &&
          TextAlignType === Object(TextAlignType) &&
          Object.isExtensible(TextAlignType) &&
          Object.defineProperty(TextAlignType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TextAlignType',
              filename: 'src/Typography/typography.types.ts',
            },
          }),
        'undefined' !== typeof TextTransformType &&
          TextTransformType &&
          TextTransformType === Object(TextTransformType) &&
          Object.isExtensible(TextTransformType) &&
          Object.defineProperty(TextTransformType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TextTransformType',
              filename: 'src/Typography/typography.types.ts',
            },
          }),
        'undefined' !== typeof TextVerticalType &&
          TextVerticalType &&
          TextVerticalType === Object(TextVerticalType) &&
          Object.isExtensible(TextVerticalType) &&
          Object.defineProperty(TextVerticalType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TextVerticalType',
              filename: 'src/Typography/typography.types.ts',
            },
          }),
        'undefined' !== typeof TextWrapType &&
          TextWrapType &&
          TextWrapType === Object(TextWrapType) &&
          Object.isExtensible(TextWrapType) &&
          Object.defineProperty(TextWrapType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TextWrapType',
              filename: 'src/Typography/typography.types.ts',
            },
          }),
        'undefined' !== typeof TypographyInterface &&
          TypographyInterface &&
          TypographyInterface === Object(TypographyInterface) &&
          Object.isExtensible(TypographyInterface) &&
          Object.defineProperty(TypographyInterface, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TypographyInterface',
              filename: 'src/Typography/typography.types.ts',
            },
          })
    },
    './src/theme/font/font.mdx': function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function() {
          return d
        })
      var r = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o =
          (n('./node_modules/react/index.js'),
          n('./node_modules/@mdx-js/react/dist/index.es.js')),
        a =
          (n('./node_modules/docz/dist/index.esm.js'),
          n('./src/Container/Container.tsx')),
        c = n('./src/Flex/Flex.tsx'),
        l = n('./src/ThemeContext/ThemeProvider.tsx'),
        b = n('./src/theme/theme.ts'),
        s = n('./src/Typography/index.ts'),
        i = {},
        p = 'wrapper'
      function d(e) {
        var t = e.components,
          n = Object(r.a)(e, ['components'])
        return Object(o.b)(
          p,
          Object.assign({}, i, n, { components: t, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', { id: 'fonts' }, 'Fonts'),
          Object(o.b)('h2', { id: 'color' }, 'Color'),
          Object(o.b)(
            l.a,
            { mdxType: 'ThemeProvider' },
            Object(o.b)(
              c.b,
              { css: 'max-width: 768px;', mdxType: 'Flex' },
              Object(o.b)(
                c.b,
                {
                  direction: 'column',
                  css:
                    '\n      text-align: center; \n      width: 150px;\n      align-items: center;\n    ',
                  mdxType: 'Flex',
                },
                Object(o.b)(a.b, {
                  css: '\n          background: '
                    .concat(
                      b.a.font.color,
                      ';\n          height: 100px;\n          width: 100px;\n          border: '
                    )
                    .concat(b.a.border.thin, '\n        '),
                  mdxType: 'Container',
                }),
                Object(o.b)('p', null, 'Font color')
              ),
              Object(o.b)(
                c.b,
                {
                  direction: 'column',
                  css:
                    '\n      text-align: center; \n      width: 150px;\n      align-items: center;\n    ',
                  mdxType: 'Flex',
                },
                Object(o.b)(a.b, {
                  css: '\n          background: '
                    .concat(
                      b.a.font.colorInvert,
                      ';\n          height: 100px;\n          width: 100px;\n          border: '
                    )
                    .concat(b.a.border.thin, '\n        '),
                  mdxType: 'Container',
                }),
                Object(o.b)('p', null, 'Font color Inverted')
              )
            )
          ),
          Object(o.b)('h2', { id: 'family' }, 'Family'),
          Object(o.b)('h3', { id: 'serif' }, 'Serif'),
          Object(o.b)(
            l.a,
            { mdxType: 'ThemeProvider' },
            Object(o.b)(
              a.b,
              { css: '\n      max-width: 768px;\n    ', mdxType: 'Container' },
              Object(o.b)(
                'p',
                null,
                'The quick brown fox jumps over the lazy dog'
              ),
              Object(o.b)(
                'p',
                null,
                'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif'
              )
            )
          ),
          Object(o.b)('h3', { id: 'sans' }, 'Sans'),
          Object(o.b)(
            l.a,
            { mdxType: 'ThemeProvider' },
            Object(o.b)(
              a.b,
              { css: '\n      max-width: 768px;\n    ', mdxType: 'Container' },
              Object(o.b)(
                'p',
                null,
                'The quick brown fox jumps over the lazy dog'
              ),
              Object(o.b)('p', null)
            )
          ),
          Object(o.b)('h3', { id: 'code' }, 'Code'),
          Object(o.b)(
            l.a,
            { mdxType: 'ThemeProvider' },
            Object(o.b)(
              a.b,
              { css: '\n      max-width: 768px;\n    ', mdxType: 'Container' },
              Object(o.b)('code', null, '<div>Hello, World<div>'),
              Object(o.b)(
                'p',
                null,
                'Source Code Pro, Consolas, Inconsolata, Source Code Pro, Monaco, monospace'
              )
            )
          ),
          Object(o.b)('h2', { id: 'size' }, 'Size'),
          Object(o.b)(
            l.a,
            { mdxType: 'ThemeProvider' },
            Object(o.b)(
              a.b,
              {
                css: '\n      max-width: 768px;\n  table {\n    width: 100%;\n  }\n  th, td {\n    border-bottom: 1px solid '.concat(
                  b.a.color['grey-100'],
                  '\n  }\n  tr:last-child td {\n    border-bottom: none;\n  }\n\n  tr {\n    text-align: left;\n  }\n\n  td {\n    vertical-align: top;\n  }\n'
                ),
                mdxType: 'Container',
              },
              Object(o.b)(
                'table',
                null,
                Object(o.b)(
                  'thead',
                  null,
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('th', null, 'Value'),
                    Object(o.b)('th', null, 'Example')
                  )
                ),
                Object(o.b)(
                  'tbody',
                  null,
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, 'default'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        {
                          fontSize: 'default',
                          element: 'span',
                          mdxType: 'Typography',
                        },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '1'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        { fontSize: 1, element: 'span', mdxType: 'Typography' },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '2'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        { fontSize: 2, element: 'span', mdxType: 'Typography' },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '3'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        { fontSize: 3, element: 'span', mdxType: 'Typography' },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '4'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        { fontSize: 4, element: 'span', mdxType: 'Typography' },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '5'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        { fontSize: 5, element: 'span', mdxType: 'Typography' },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '6'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        { fontSize: 6, element: 'span', mdxType: 'Typography' },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '7'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        { fontSize: 7, element: 'span', mdxType: 'Typography' },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '8'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        { fontSize: 8, element: 'span', mdxType: 'Typography' },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '9'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        { fontSize: 9, element: 'span', mdxType: 'Typography' },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '10'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        {
                          fontSize: 10,
                          element: 'span',
                          mdxType: 'Typography',
                        },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '11'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        {
                          fontSize: 11,
                          element: 'span',
                          mdxType: 'Typography',
                        },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '12'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        {
                          fontSize: 12,
                          element: 'span',
                          mdxType: 'Typography',
                        },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  )
                )
              )
            )
          ),
          Object(o.b)('h2', { id: 'line-height' }, 'Line Height'),
          Object(o.b)(
            l.a,
            { mdxType: 'ThemeProvider' },
            Object(o.b)(
              a.b,
              {
                css: '\n      max-width: 768px;\n      tr {\n        text-align: left;\n      }\n      table {\n        width: 100%;\n      }\n      th, td {\n        border-bottom: 1px solid '.concat(
                  b.a.color['grey-100'],
                  '\n      }\n      tr:last-child td {\n        border-bottom: none;\n      }\n    '
                ),
                mdxType: 'Container',
              },
              Object(o.b)(
                'table',
                null,
                Object(o.b)(
                  'thead',
                  null,
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('th', null, 'Value'),
                    Object(o.b)('th', null, 'Line height')
                  )
                ),
                Object(o.b)(
                  'tbody',
                  null,
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, 'default'),
                    Object(o.b)('td', null, '1.5')
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '1'),
                    Object(o.b)('td', null, '1')
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '2'),
                    Object(o.b)('td', null, '1.5')
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '3'),
                    Object(o.b)('td', null, '1.75')
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '4'),
                    Object(o.b)('td', null, '2')
                  )
                )
              )
            )
          ),
          Object(o.b)('h1', { id: 'weight' }, 'Weight'),
          Object(o.b)(
            l.a,
            { mdxType: 'ThemeProvider' },
            Object(o.b)(
              a.b,
              {
                css: '\n      max-width: 768px;\n      tr {\n        text-align: left;\n      }\n      table {\n        width: 100%;\n      }\n      th, td {\n        border-bottom: 1px solid '.concat(
                  b.a.color['grey-100'],
                  '\n      }\n      tr:last-child td {\n        border-bottom: none;\n      }\n    '
                ),
                mdxType: 'Container',
              },
              Object(o.b)(
                'table',
                null,
                Object(o.b)(
                  'thead',
                  null,
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('th', null, 'Value'),
                    Object(o.b)('th', null, 'Example')
                  )
                ),
                Object(o.b)(
                  'tbody',
                  null,
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, 'default'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        {
                          fontWeight: 'default',
                          element: 'span',
                          mdxType: 'Typography',
                        },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '1'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        {
                          fontWeight: 1,
                          element: 'span',
                          mdxType: 'Typography',
                        },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '2'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        {
                          fontWeight: 2,
                          element: 'span',
                          mdxType: 'Typography',
                        },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '3'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        {
                          fontWeight: 3,
                          element: 'span',
                          mdxType: 'Typography',
                        },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '4'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        {
                          fontWeight: 4,
                          element: 'span',
                          mdxType: 'Typography',
                        },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '5'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        {
                          fontWeight: 5,
                          element: 'span',
                          mdxType: 'Typography',
                        },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, '6'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        {
                          fontWeight: 6,
                          element: 'span',
                          mdxType: 'Typography',
                        },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  ),
                  Object(o.b)(
                    'tr',
                    null,
                    Object(o.b)('td', null, 'normal'),
                    Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        s.Typography,
                        {
                          fontWeight: 'normal',
                          element: 'span',
                          mdxType: 'Typography',
                        },
                        'The quick brown fox jumps over the lazy dog'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      }
      d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/theme/font/font.mdx' },
        }),
        (d.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-theme-font-font.e87bed39511fd489c1d4.js.map

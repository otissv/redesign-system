;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    './src/Badge/badge.mdx': function(e, r, a) {
      'use strict'
      a.r(r)
      var n = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        t = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = a('./node_modules/react/index.js'),
        i = a.n(c),
        o = a('./node_modules/@mdx-js/react/dist/index.es.js'),
        d = a('./node_modules/docz/dist/index.esm.js'),
        g = a('./src/Container/index.tsx'),
        s = a(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        p = a('./src/ThemeContext/ThemeProvider.tsx'),
        l = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        m = a('./src/Base/Base.tsx')
      function b(e) {
        var r = e.theme,
          a = r.border,
          n = r.color
        return {
          display: 'inline-block',
          fontWeight: 700,
          padding: '0.25em 0.4em',
          fontSize: '90%',
          lineHeight: 1,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          verticalAlign: 'baseline',
          borderRadius: '2px',
          color: n.foregroundInvert,
          background: n.backgroundInvert,
          border: a.thinTransparent,
        }
      }
      function y(e) {
        var r = e.appearance,
          a = e.theme,
          n = a.color,
          t = a.border
        switch (r) {
          case 'secondary':
            return {
              color: n['grey-600'],
              background: n['grey-200'],
              border: t.thinTransparent,
            }
          case 'tertiary':
            return { background: 'none', border: t.thin, color: n.foreground }
          case 'accent':
          case 'primary-accent':
            return {
              color: '#fff',
              background: n.accent,
              border: t.thinTransparent,
            }
          case 'secondary-accent':
            return {
              color: n['accent-600'],
              background: n['accent-200'],
              border: t.thinTransparent,
            }
          case 'tertiary-accent':
            return {
              background: 'none',
              border: '1px solid '.concat(n['accent-400']),
              color: n['accent-400'],
            }
          case 'action':
          case 'primary-action':
            return {
              color: n['action-500'],
              background: n['action-200'],
              border: t.thinTransparent,
            }
          case 'secondary-action':
            return {
              color: n['action-600'],
              background: n['action-200'],
              border: t.thinTransparent,
            }
          case 'tertiary-action':
            return {
              background: 'none',
              border: '1px solid '.concat(n['action-400']),
              color: n['action-400'],
            }
          case 'danger':
          case 'primary-danger':
            return {
              color: '#fff',
              background: n.danger,
              border: t.thinTransparent,
            }
          case 'secondary-danger':
            return {
              color: n['danger-600'],
              background: n['danger-200'],
              border: t.thinTransparent,
            }
          case 'tertiary-danger':
            return {
              background: 'none',
              border: '1px solid '.concat(n['danger-400']),
              color: n['danger-400'],
            }
          case 'success':
          case 'primary-success':
            return {
              color: '#fff',
              background: n.success,
              border: t.thinTransparent,
            }
          case 'secondary-success':
            return {
              color: n['success-600'],
              background: n['success-200'],
              border: t.thinTransparent,
            }
          case 'tertiary-success':
            return {
              background: 'none',
              border: '1px solid '.concat(n['success-400']),
              color: n['success-400'],
            }
          case 'warning':
          case 'primary-warning':
            return {
              color: '#fff',
              background: n.warning,
              border: t.thinTransparent,
            }
          case 'secondary-warning':
            return {
              color: n['warning-600'],
              background: n['warning-200'],
              border: t.thinTransparent,
            }
          case 'tertiary-warning':
            return {
              background: 'none',
              border: '1px solid '.concat(n['warning-400']),
              color: n['warning-400'],
            }
          default:
            return {}
        }
      }
      function u(e) {
        return e.pill
          ? {
              paddingRight: ' 0.6em',
              paddingLeft: '0.6em',
              borderRadius: '10rem',
            }
          : {}
      }
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'badgeTheme', filename: 'src/Badge/badge.theme.ts' },
        }),
        'undefined' !== typeof y &&
          y &&
          y === Object(y) &&
          Object.isExtensible(y) &&
          Object.defineProperty(y, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'badgeAppearanceTheme',
              filename: 'src/Badge/badge.theme.ts',
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
              name: 'badgePillTheme',
              filename: 'src/Badge/badge.theme.ts',
            },
          })
      var f = i.a.memo(function(e) {
        var r = e.children,
          a = e.className,
          n = void 0 === a ? '' : a,
          o = e.themed,
          d = void 0 === o ? [] : o,
          g = Object(t.a)(e, ['children', 'className', 'themed']),
          s = Object(c.useMemo)(
            function() {
              return 'Badge '.concat(n)
            },
            [n]
          ),
          p = Object(c.useMemo)(
            function() {
              return [b, y, u].concat(Object(l.a)(d))
            },
            [b, y, u, d]
          )
        return i.a.createElement(
          m.b,
          Object.assign({ className: s, themed: p }, g),
          r
        )
      })
      'undefined' !== typeof f &&
        f &&
        f === Object(f) &&
        Object.isExtensible(f) &&
        Object.defineProperty(f, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Badge', filename: 'src/Badge/Badge.tsx' },
        })
      var h = f
      'undefined' !== typeof f &&
        f &&
        f === Object(f) &&
        Object.isExtensible(f) &&
        Object.defineProperty(f, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Badge', filename: 'src/Badge/Badge.tsx' },
        }),
        a.d(r, 'default', function() {
          return O
        })
      var B = {},
        j = 'wrapper'
      function O(e) {
        var r,
          a = e.components,
          c = Object(t.a)(e, ['components'])
        return Object(o.b)(
          j,
          Object.assign({}, B, c, { components: a, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', { id: 'badge' }, 'Badge'),
          Object(o.b)(d.d, { of: h, mdxType: 'Props' }),
          Object(o.b)('h2', { id: 'appearance' }, 'appearance'),
          Object(o.b)(
            d.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Container marginBottom={3}>\n    <Badge appearance="primary" margin1="left right">\n      Primary\n    </Badge>\n    <Badge appearance="secondary" margin1="left right">\n      Secondary\n    </Badge>\n    <Badge appearance="tertiary" margin1="left right">\n      Tertiary\n    </Badge>\n  </Container>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : c,
                Playground: d.c,
                Props: d.d,
                Container: g.Container,
                styled: s.default,
                ThemeProvider: p.a,
                Badge: h,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              p.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(
                g.Container,
                { marginBottom: 3, mdxType: 'Container' },
                Object(o.b)(
                  h,
                  {
                    appearance: 'primary',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Primary'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'secondary',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Secondary'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'tertiary',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Tertiary'
                )
              )
            )
          ),
          Object(o.b)('h2', { id: 'context' }, 'Context'),
          Object(o.b)(
            d.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <h3>Accent</h3>\n  <Container marginBottom={3}>\n    <Badge appearance="primary-accent" margin1="left right">\n      Primary\n    </Badge>\n    <Badge appearance="secondary-accent" margin1="left right">\n      Secondary\n    </Badge>\n    <Badge appearance="tertiary-accent" margin1="left right">\n      Tertiary\n    </Badge>\n  </Container>\n  <h3>Accent</h3>\n  <Container marginBottom={3}>\n    <Badge appearance="primary-action" margin1="left right">\n      Primary\n    </Badge>\n    <Badge appearance="secondary-action" margin1="left right">\n      Secondary\n    </Badge>\n    <Badge appearance="tertiary-action" margin1="left right">\n      Tertiary\n    </Badge>\n  </Container>\n\n  <h3>Danger</h3>\n  <Container marginBottom={3}>\n    <Badge appearance="primary-danger" margin1="left right">\n      Primary\n    </Badge>\n    <Badge appearance="secondary-danger" margin1="left right">\n      Secondary\n    </Badge>\n    <Badge appearance="tertiary-danger" margin1="left right">\n      Tertiary\n    </Badge>\n  </Container>\n\n  <h3>Error</h3>\n  <Container marginBottom={3}>\n    <Badge appearance="primary-error" margin1="left right">\n      Primary\n    </Badge>\n    <Badge appearance="secondary-error" margin1="left right">\n      Secondary\n    </Badge>\n    <Badge appearance="tertiary-error" margin1="left right">\n      Tertiary\n    </Badge>\n  </Container>\n\n  <h3>Success</h3>\n  <Container marginBottom={3}>\n    <Badge appearance="primary-success" margin1="left right">\n      Primary\n    </Badge>\n    <Badge appearance="secondary-success" margin1="left right">\n      Secondary\n    </Badge>\n    <Badge appearance="tertiary-success" margin1="left right">\n      Tertiary\n    </Badge>\n  </Container>\n\n  <h3>Warning</h3>\n  <Container marginBottom={3}>\n    <Badge appearance="primary-warning" margin1="left right">\n      Warning\n    </Badge>\n    <Badge appearance="secondary-warning" margin1="left right">\n      Warning\n    </Badge>\n    <Badge appearance="tertiary-warning" margin1="left right">\n      Tertiary\n    </Badge>\n  </Container>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : c,
                Playground: d.c,
                Props: d.d,
                Container: g.Container,
                styled: s.default,
                ThemeProvider: p.a,
                Badge: h,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              p.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)('h3', null, 'Accent'),
              Object(o.b)(
                g.Container,
                { marginBottom: 3, mdxType: 'Container' },
                Object(o.b)(
                  h,
                  {
                    appearance: 'primary-accent',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Primary'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'secondary-accent',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Secondary'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'tertiary-accent',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Tertiary'
                )
              ),
              Object(o.b)('h3', null, 'Accent'),
              Object(o.b)(
                g.Container,
                { marginBottom: 3, mdxType: 'Container' },
                Object(o.b)(
                  h,
                  {
                    appearance: 'primary-action',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Primary'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'secondary-action',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Secondary'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'tertiary-action',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Tertiary'
                )
              ),
              Object(o.b)('h3', null, 'Danger'),
              Object(o.b)(
                g.Container,
                { marginBottom: 3, mdxType: 'Container' },
                Object(o.b)(
                  h,
                  {
                    appearance: 'primary-danger',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Primary'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'secondary-danger',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Secondary'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'tertiary-danger',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Tertiary'
                )
              ),
              Object(o.b)('h3', null, 'Error'),
              Object(o.b)(
                g.Container,
                { marginBottom: 3, mdxType: 'Container' },
                Object(o.b)(
                  h,
                  {
                    appearance: 'primary-error',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Primary'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'secondary-error',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Secondary'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'tertiary-error',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Tertiary'
                )
              ),
              Object(o.b)('h3', null, 'Success'),
              Object(o.b)(
                g.Container,
                { marginBottom: 3, mdxType: 'Container' },
                Object(o.b)(
                  h,
                  {
                    appearance: 'primary-success',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Primary'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'secondary-success',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Secondary'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'tertiary-success',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Tertiary'
                )
              ),
              Object(o.b)('h3', null, 'Warning'),
              Object(o.b)(
                g.Container,
                { marginBottom: 3, mdxType: 'Container' },
                Object(o.b)(
                  h,
                  {
                    appearance: 'primary-warning',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Warning'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'secondary-warning',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Warning'
                ),
                Object(o.b)(
                  h,
                  {
                    appearance: 'tertiary-warning',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Tertiary'
                )
              )
            )
          ),
          Object(o.b)('h1', { id: 'pill' }, 'Pill'),
          Object(o.b)(
            d.c,
            {
              __position: 3,
              __code:
                '<ThemeProvider>\n  <h3>Accent</h3>\n  <Container marginBottom={3}>\n    <Badge\n      pill\n      appearance="primary-accent"\n      appearance=""\n      margin1="left right"\n    >\n      Primary\n    </Badge>\n    <Badge pill appearance="secondary-accent" margin1="left right">\n      Secondary\n    </Badge>\n    <Badge pill appearance="tertiary-accent" margin1="left right">\n      Tertiary\n    </Badge>\n  </Container>\n\n  <h3>Action</h3>\n  <Container marginBottom={3}>\n    <Badge pill appearance="primary-action" margin1="left right">\n      Primary\n    </Badge>\n    <Badge pill appearance="secondary-action" margin1="left right">\n      Secondary\n    </Badge>\n    <Badge pill appearance="tertiary-action" margin1="left right">\n      Tertiary\n    </Badge>\n  </Container>\n\n  <h3>Danger</h3>\n  <Container marginBottom={3}>\n    <Badge pill appearance="primary-danger" margin1="left right">\n      Primary\n    </Badge>\n    <Badge pill appearance="secondary-danger" margin1="left right">\n      Secondary\n    </Badge>\n    <Badge pill appearance="tertiary-danger" margin1="left right">\n      Tertiary\n    </Badge>\n  </Container>\n\n  <h3>Success</h3>\n  <Container marginBottom={3}>\n    <Badge pill appearance="primary-success" margin1="left right">\n      Primary\n    </Badge>\n    <Badge pill appearance="secondary-success" margin1="left right">\n      Secondary\n    </Badge>\n    <Badge pill appearance="tertiary-success" margin1="left right">\n      Tertiary\n    </Badge>\n  </Container>\n\n  <h3>Warning</h3>\n  <Container marginBottom={3}>\n    <Badge pill appearance="primary-warning" margin1="left right">\n      Primary\n    </Badge>\n    <Badge pill appearance="secondary-warning" margin1="left right">\n      Secondary\n    </Badge>\n    <Badge pill appearance="tertiary-warning" margin1="left right">\n      Tertiary\n    </Badge>\n  </Container>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : c,
                Playground: d.c,
                Props: d.d,
                Container: g.Container,
                styled: s.default,
                ThemeProvider: p.a,
                Badge: h,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              p.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)('h3', null, 'Accent'),
              Object(o.b)(
                g.Container,
                { marginBottom: 3, mdxType: 'Container' },
                Object(o.b)(
                  h,
                  ((r = { pill: !0, appearance: 'primary-accent' }),
                  Object(n.a)(r, 'appearance', ''),
                  Object(n.a)(r, 'margin1', 'left right'),
                  Object(n.a)(r, 'mdxType', 'Badge'),
                  r),
                  'Primary'
                ),
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'secondary-accent',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Secondary'
                ),
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'tertiary-accent',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Tertiary'
                )
              ),
              Object(o.b)('h3', null, 'Action'),
              Object(o.b)(
                g.Container,
                { marginBottom: 3, mdxType: 'Container' },
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'primary-action',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Primary'
                ),
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'secondary-action',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Secondary'
                ),
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'tertiary-action',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Tertiary'
                )
              ),
              Object(o.b)('h3', null, 'Danger'),
              Object(o.b)(
                g.Container,
                { marginBottom: 3, mdxType: 'Container' },
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'primary-danger',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Primary'
                ),
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'secondary-danger',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Secondary'
                ),
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'tertiary-danger',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Tertiary'
                )
              ),
              Object(o.b)('h3', null, 'Success'),
              Object(o.b)(
                g.Container,
                { marginBottom: 3, mdxType: 'Container' },
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'primary-success',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Primary'
                ),
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'secondary-success',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Secondary'
                ),
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'tertiary-success',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Tertiary'
                )
              ),
              Object(o.b)('h3', null, 'Warning'),
              Object(o.b)(
                g.Container,
                { marginBottom: 3, mdxType: 'Container' },
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'primary-warning',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Primary'
                ),
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'secondary-warning',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Secondary'
                ),
                Object(o.b)(
                  h,
                  {
                    pill: !0,
                    appearance: 'tertiary-warning',
                    margin1: 'left right',
                    mdxType: 'Badge',
                  },
                  'Tertiary'
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
          value: { name: 'MDXContent', filename: 'src/Badge/badge.mdx' },
        }),
        (O.isMDXComponent = !0)
    },
    './src/Container/Container.tsx': function(e, r, a) {
      'use strict'
      var n = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        t = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = a('./node_modules/react/index.js'),
        i = a.n(c),
        o = a('./src/Base/index.tsx')
      function d(e) {
        var r = e.appearance,
          a = e.theme,
          n = a.border,
          t = a.color,
          c = {
            color: t['accent-050'],
            backgroundColor: t['accent-500'],
            border: '1px solid '.concat(t['accent-500']),
          },
          i = {
            color: t['action-050'],
            backgroundColor: t['action-500'],
            border: '1px solid '.concat(t['action-500']),
          },
          o = {
            color: t['danger-050'],
            backgroundColor: t['danger-500'],
            border: '1px solid '.concat(t['danger-500']),
          },
          d = {
            color: t['success-050'],
            backgroundColor: t['success-500'],
            border: '1px solid '.concat(t['success-500']),
          },
          g = {
            color: t['warning-050'],
            backgroundColor: t['warning-500'],
            border: '1px solid '.concat(t['warning-500']),
          }
        switch (r) {
          case 'primary':
            return {
              color: t.foregroundInvert,
              backgroundColor: t.backgroundInvert,
              border: n.thinTransparent,
            }
          case 'secondary':
            return {
              color: t['grey-800'],
              backgroundColor: t['grey-100'],
              border: '1px solid '.concat(t['grey-100']),
            }
          case 'tertiary':
            return { backgroundColor: 'none', border: n.thin }
          case 'accent':
          case 'primary-accent':
            return c
          case 'secondary-accent':
            return {
              color: t['accent-800'],
              backgroundColor: t['accent-100'],
              border: '1px solid '.concat(t['accent-100']),
            }
          case 'tertiary-accent':
            return {
              color: t['accent-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(t['accent-300']),
            }
          case 'action':
          case 'primary-action':
            return i
          case 'secondary-action':
            return {
              color: t['action-800'],
              backgroundColor: t['action-100'],
              border: '1px solid '.concat(t['action-100']),
            }
          case 'tertiary-action':
            return {
              color: t['action-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(t['action-300']),
            }
          case 'danger':
          case 'primary-danger':
            return o
          case 'secondary-danger':
            return {
              color: t['danger-800'],
              backgroundColor: t['danger-300'],
              border: '1px solid '.concat(t['danger-300']),
            }
          case 'tertiary-danger':
            return {
              color: t['danger-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(t['danger-300']),
            }
          case 'success':
          case 'primary-success':
            return d
          case 'secondary-success':
            return {
              color: t['success-800'],
              backgroundColor: t['success-300'],
              border: '1px solid '.concat(t['success-300']),
            }
          case 'tertiary-success':
            return {
              color: t['success-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(t['success-300']),
            }
          case 'warning':
          case 'primary-warning':
            return g
          case 'secondary-warning':
            return {
              color: t['warning-800'],
              backgroundColor: t['warning-300'],
              border: '1px solid '.concat(t['warning-300']),
            }
          case 'tertiary-warning':
            return {
              color: t['warning-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(t['warning-300']),
            }
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
            name: 'containerAppearanceTheme',
            filename: 'src/Container/container.theme.ts',
          },
        }),
        a.d(r, 'a', function() {
          return g
        })
      var g = i.a.memo(function(e) {
        var r = e.children,
          a = e.className,
          g = void 0 === a ? '' : a,
          s = e.themed,
          p = void 0 === s ? [] : s,
          l = Object(t.a)(e, ['children', 'className', 'themed']),
          m = Object(c.useMemo)(
            function() {
              return 'Container '.concat(g)
            },
            [g]
          ),
          b = Object(c.useMemo)(
            function() {
              return [d].concat(Object(n.a)(p))
            },
            [d, p]
          )
        return i.a.createElement(
          o.Base,
          Object.assign({ className: m, themed: b }, l),
          r
        )
      })
      'undefined' !== typeof g &&
        g &&
        g === Object(g) &&
        Object.isExtensible(g) &&
        Object.defineProperty(g, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
      r.b = g
      'undefined' !== typeof g &&
        g &&
        g === Object(g) &&
        Object.isExtensible(g) &&
        Object.defineProperty(g, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
    },
    './src/Container/container.types.ts': function(e, r) {
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
    './src/Container/index.tsx': function(e, r, a) {
      'use strict'
      var n = a('./src/Container/Container.tsx')
      a.d(r, 'Container', function() {
        return n.a
      })
      a('./src/Container/container.types.ts')
    },
  },
])
//# sourceMappingURL=src-badge-badge.b745f521513d232a6ff4.js.map

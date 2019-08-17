;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    './src/Container/Container.tsx': function(n, e, r) {
      'use strict'
      var a = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        o = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        t = r('./node_modules/react/index.js'),
        c = r.n(t),
        i = r('./src/Base/index.tsx')
      function d(n) {
        var e = n.appearance,
          r = n.theme,
          a = r.border,
          o = r.color,
          t = {
            color: o['accent-050'],
            backgroundColor: o['accent-500'],
            border: '1px solid '.concat(o['accent-500']),
          },
          c = {
            color: o['action-050'],
            backgroundColor: o['action-500'],
            border: '1px solid '.concat(o['action-500']),
          },
          i = {
            color: o['danger-050'],
            backgroundColor: o['danger-500'],
            border: '1px solid '.concat(o['danger-500']),
          },
          d = {
            color: o['success-050'],
            backgroundColor: o['success-500'],
            border: '1px solid '.concat(o['success-500']),
          },
          p = {
            color: o['warning-050'],
            backgroundColor: o['warning-500'],
            border: '1px solid '.concat(o['warning-500']),
          }
        switch (e) {
          case 'primary':
            return {
              color: o.foregroundInvert,
              backgroundColor: o.backgroundInvert,
              border: a.thinTransparent,
            }
          case 'secondary':
            return {
              color: o['grey-800'],
              backgroundColor: o['grey-100'],
              border: '1px solid '.concat(o['grey-100']),
            }
          case 'tertiary':
            return { backgroundColor: 'none', border: a.thin }
          case 'accent':
          case 'primary-accent':
            return t
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
            return i
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
            return d
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
            return p
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
        r.d(e, 'a', function() {
          return p
        })
      var p = c.a.memo(function(n) {
        var e = n.children,
          r = n.className,
          p = void 0 === r ? '' : r,
          s = n.themed,
          m = void 0 === s ? [] : s,
          b = Object(o.a)(n, ['children', 'className', 'themed']),
          g = Object(t.useMemo)(
            function() {
              return 'Container '.concat(p)
            },
            [p]
          ),
          y = Object(t.useMemo)(
            function() {
              return [d].concat(Object(a.a)(m))
            },
            [d, m]
          )
        return c.a.createElement(
          i.Base,
          Object.assign({ className: g, themed: y }, b),
          e
        )
      })
      'undefined' !== typeof p &&
        p &&
        p === Object(p) &&
        Object.isExtensible(p) &&
        Object.defineProperty(p, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
      e.b = p
      'undefined' !== typeof p &&
        p &&
        p === Object(p) &&
        Object.isExtensible(p) &&
        Object.defineProperty(p, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
    },
    './src/Container/container.mdx': function(n, e, r) {
      'use strict'
      r.r(e),
        r.d(e, 'default', function() {
          return m
        })
      var a = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        o = r('./node_modules/react/index.js'),
        t = r('./node_modules/@mdx-js/react/dist/index.es.js'),
        c = r('./node_modules/docz/dist/index.esm.js'),
        i = r('./src/Container/Container.tsx'),
        d = r('./src/ThemeContext/ThemeProvider.tsx'),
        p = {},
        s = 'wrapper'
      function m(n) {
        var e = n.components,
          r = Object(a.a)(n, ['components'])
        return Object(t.b)(
          s,
          Object.assign({}, p, r, { components: e, mdxType: 'MDXLayout' }),
          Object(t.b)('h1', { id: 'container' }, 'Container'),
          Object(t.b)(c.d, { of: i.b, mdxType: 'Props' }),
          Object(t.b)('h1', { id: 'default' }, 'Default'),
          Object(t.b)(
            c.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Container>Container</Container>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Fragment: o.Fragment,
                Playground: c.c,
                Props: c.d,
                Container: i.b,
                ThemeProvider: d.a,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(i.b, { mdxType: 'Container' }, 'Container')
            )
          ),
          Object(t.b)('h1', { id: 'apperance' }, 'Apperance'),
          Object(t.b)(
            c.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <Container marginBottom={3} padding={5} appearance="primary">\n    Primary\n  </Container>\n  <Container marginBottom={3} padding={5} appearance="secondary">\n    Secondary\n  </Container>\n  <Container marginBottom={3} padding={5} appearance="tertiary">\n    Tertiary\n  </Container>\n\n  <h3>Accent</h3>\n  <Container marginBottom={3} padding={5} appearance="primary-accent">\n    Primary\n  </Container>\n  <Container marginBottom={3} padding={5} appearance="secondary-accent">\n    Secondary\n  </Container>\n  <Container marginBottom={3} padding={5} appearance="tertiary-accent">\n    Tertiary\n  </Container>\n\n  <h3>Action</h3>\n  <Container marginBottom={3} padding={5} appearance="primary-action">\n    Primary\n  </Container>\n  <Container marginBottom={3} padding={5} appearance="secondary-action">\n    Secondary\n  </Container>\n  <Container marginBottom={3} padding={5} appearance="tertiary-action">\n    Tertiary\n  </Container>\n\n  <h3>Danger</h3>\n  <Container marginBottom={3} padding={5} appearance="primary-danger">\n    Primary\n  </Container>\n  <Container marginBottom={3} padding={5} appearance="secondary-danger">\n    Secondary\n  </Container>\n  <Container marginBottom={3} padding={5} appearance="tertiary-danger">\n    Tertiary\n  </Container>\n\n  <h3>Success</h3>\n  <Container marginBottom={3} padding={5} appearance="primary-success">\n    Primary\n  </Container>\n  <Container marginBottom={3} padding={5} appearance="secondary-success">\n    Secondary\n  </Container>\n  <Container marginBottom={3} padding={5} appearance="tertiary-success">\n    Tertiary\n  </Container>\n\n  <h3>Warning</h3>\n  <Container marginBottom={3} padding={5} appearance="primary-warning">\n    Primary\n  </Container>\n  <Container marginBottom={3} padding={5} appearance="secondary-warning">\n    Secondary\n  </Container>\n  <Container marginBottom={3} padding={5} appearance="tertiary-warning">\n    Tertiary\n  </Container>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Fragment: o.Fragment,
                Playground: c.c,
                Props: c.d,
                Container: i.b,
                ThemeProvider: d.a,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'primary',
                  mdxType: 'Container',
                },
                'Primary'
              ),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'secondary',
                  mdxType: 'Container',
                },
                'Secondary'
              ),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'tertiary',
                  mdxType: 'Container',
                },
                'Tertiary'
              ),
              Object(t.b)('h3', null, 'Accent'),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'primary-accent',
                  mdxType: 'Container',
                },
                'Primary'
              ),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'secondary-accent',
                  mdxType: 'Container',
                },
                'Secondary'
              ),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'tertiary-accent',
                  mdxType: 'Container',
                },
                'Tertiary'
              ),
              Object(t.b)('h3', null, 'Action'),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'primary-action',
                  mdxType: 'Container',
                },
                'Primary'
              ),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'secondary-action',
                  mdxType: 'Container',
                },
                'Secondary'
              ),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'tertiary-action',
                  mdxType: 'Container',
                },
                'Tertiary'
              ),
              Object(t.b)('h3', null, 'Danger'),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'primary-danger',
                  mdxType: 'Container',
                },
                'Primary'
              ),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'secondary-danger',
                  mdxType: 'Container',
                },
                'Secondary'
              ),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'tertiary-danger',
                  mdxType: 'Container',
                },
                'Tertiary'
              ),
              Object(t.b)('h3', null, 'Success'),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'primary-success',
                  mdxType: 'Container',
                },
                'Primary'
              ),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'secondary-success',
                  mdxType: 'Container',
                },
                'Secondary'
              ),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'tertiary-success',
                  mdxType: 'Container',
                },
                'Tertiary'
              ),
              Object(t.b)('h3', null, 'Warning'),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'primary-warning',
                  mdxType: 'Container',
                },
                'Primary'
              ),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'secondary-warning',
                  mdxType: 'Container',
                },
                'Secondary'
              ),
              Object(t.b)(
                i.b,
                {
                  marginBottom: 3,
                  padding: 5,
                  appearance: 'tertiary-warning',
                  mdxType: 'Container',
                },
                'Tertiary'
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
            filename: 'src/Container/container.mdx',
          },
        }),
        (m.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-container-container.5a777fd46df50694fdd3.js.map

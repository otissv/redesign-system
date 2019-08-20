;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    './src/Alert/alert.mdx': function(e, n, t) {
      'use strict'
      t.r(n)
      var r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        a = t('./node_modules/react/index.js'),
        c = t.n(a),
        o = t('./node_modules/@mdx-js/react/dist/index.es.js'),
        i = t('./node_modules/docz/dist/index.esm.js'),
        s = t('./src/Flex/index.ts'),
        l = t('./src/ThemeContext/ThemeProvider.tsx'),
        d = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        p = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        m = t(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        b = t('./src/Base/index.tsx')
      function u(e) {
        var n = e.theme.unit
        return { position: 'relative', padding: ''.concat(n[4]) }
      }
      function y(e) {
        var n = e.appearance,
          t = e.theme,
          r = t.border,
          a = t.color,
          c = {
            color: a['accent-050'],
            backgroundColor: a['accent-500'],
            border: '1px solid '.concat(a['accent-500']),
          },
          o = {
            color: a['active-050'],
            backgroundColor: a['active-500'],
            border: '1px solid '.concat(a['active-500']),
          },
          i = {
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
        switch (n) {
          case 'primary':
            return {
              color: a.white,
              backgroundColor: a.default,
              border: r.thinDefault,
            }
          case 'secondary':
            return {
              color: a['default-800'],
              backgroundColor: a['default-100'],
              border: '1px solid '.concat(a['default-100']),
            }
          case 'tertiary':
            return { backgroundColor: 'none', border: r.thin }
          case 'accent':
          case 'primary-accent':
            return c
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
          case 'active':
          case 'primary-active':
            return o
          case 'secondary-active':
            return {
              color: a['active-800'],
              backgroundColor: a['active-100'],
              border: '1px solid '.concat(a['active-100']),
            }
          case 'tertiary-active':
            return {
              color: a['active-300'],
              backgroundColor: 'none',
              border: '1px solid '.concat(a['active-300']),
            }
          case 'action':
          case 'primary-action':
            return i
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
      function x() {
        var e = Object(p.a)([
          '\n  display: ',
          ';\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  color: inherit;\n  opacity: 0.4;\n  margin: 0;\n  border: none;\n  border-radius: 0;\n  overflow: visible;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  padding: 0;\n  background-color: transparent;\n  fill: currentcolor;\n  line-height: 0;\n  cursor: pointer;\n',
        ])
        return (
          (x = function() {
            return e
          }),
          e
        )
      }
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'alertTheme', filename: 'src/Alert/alert.theme.ts' },
        }),
        'undefined' !== typeof y &&
          y &&
          y === Object(y) &&
          Object.isExtensible(y) &&
          Object.defineProperty(y, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'alertAppearanceTheme',
              filename: 'src/Alert/alert.theme.ts',
            },
          })
      var g = m.default.a(x(), function(e) {
          return e.close ? 'inline-block' : 'none'
        }),
        h = c.a.memo(function(e) {
          var n = e.children,
            t = e.className,
            o = void 0 === t ? '' : t,
            i = e.onClose,
            s = e.themed,
            l = void 0 === s ? [] : s,
            p = Object(r.a)(e, ['children', 'className', 'onClose', 'themed']),
            m = Object(a.useMemo)(
              function() {
                return 'Alert '.concat(o)
              },
              [o]
            ),
            x = Object(a.useMemo)(
              function() {
                return [u, y].concat(Object(d.a)(l))
              },
              [u, y, l]
            ),
            h = Object(a.useCallback)(function(e) {
              e.preventDefault(), i(e)
            }, []),
            f = 'function' === typeof i
          return c.a.createElement(
            b.Base,
            Object.assign({ className: m, themed: x }, p),
            c.a.createElement(
              g,
              { onClick: h, close: f },
              c.a.createElement(
                'svg',
                {
                  width: '14',
                  height: '14',
                  viewBox: '0 0 14 14',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                c.a.createElement('line', {
                  fill: 'none',
                  stroke: '#000',
                  strokeWidth: '1.1',
                  x1: '1',
                  y1: '1',
                  x2: '13',
                  y2: '13',
                }),
                c.a.createElement('line', {
                  fill: 'none',
                  stroke: '#000',
                  strokeWidth: '1.1',
                  x1: '13',
                  y1: '1',
                  x2: '1',
                  y2: '13',
                })
              )
            ),
            n
          )
        })
      'undefined' !== typeof h &&
        h &&
        h === Object(h) &&
        Object.isExtensible(h) &&
        Object.defineProperty(h, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Alert', filename: 'src/Alert/Alert.tsx' },
        })
      var f = h
      'undefined' !== typeof h &&
        h &&
        h === Object(h) &&
        Object.isExtensible(h) &&
        Object.defineProperty(h, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Alert', filename: 'src/Alert/Alert.tsx' },
        }),
        t.d(n, 'default', function() {
          return T
        })
      var j = {},
        O = 'wrapper'
      function T(e) {
        var n = e.components,
          t = Object(r.a)(e, ['components'])
        return Object(o.b)(
          O,
          Object.assign({}, j, t, { components: n, mdxType: 'MDXLayout' }),
          Object(o.b)('h1', { id: 'alert' }, 'Alert'),
          Object(o.b)(i.d, { of: f, mdxType: 'Props' }),
          Object(o.b)('h2', { id: 'default' }, 'Default'),
          Object(o.b)(
            i.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Alert>Default alert</Alert>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Playground: i.c,
                Props: i.d,
                Flex: s.Flex,
                ThemeProvider: l.a,
                Alert: f,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              l.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(f, { mdxType: 'Alert' }, 'Default alert')
            )
          ),
          Object(o.b)('h2', { id: 'appearance' }, 'Appearance'),
          Object(o.b)(
            i.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <Flex>\n    <Alert\n      appearance="primary"\n      margin3="right bottom"\n      css={`\n        width: 200px;\n      `}\n    >\n      Primary\n    </Alert>\n    <Alert\n      appearance="secondary"\n      margin3="right bottom"\n      css={`\n        width: 200px;\n      `}\n    >\n      Secondary\n    </Alert>\n    <Alert\n      appearance="tertiary"\n      margin3="right bottom"\n      css={`\n        width: 200px;\n      `}\n    >\n      Tertiary\n    </Alert>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Playground: i.c,
                Props: i.d,
                Flex: s.Flex,
                ThemeProvider: l.a,
                Alert: f,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              l.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(
                s.Flex,
                { mdxType: 'Flex' },
                Object(o.b)(
                  f,
                  {
                    appearance: 'primary',
                    margin3: 'right bottom',
                    css: '\n          width: 200px;\n        ',
                    mdxType: 'Alert',
                  },
                  'Primary'
                ),
                Object(o.b)(
                  f,
                  {
                    appearance: 'secondary',
                    margin3: 'right bottom',
                    css: '\n          width: 200px;\n        ',
                    mdxType: 'Alert',
                  },
                  'Secondary'
                ),
                Object(o.b)(
                  f,
                  {
                    appearance: 'tertiary',
                    margin3: 'right bottom',
                    css: '\n          width: 200px;\n        ',
                    mdxType: 'Alert',
                  },
                  'Tertiary'
                )
              )
            )
          ),
          Object(o.b)('h2', { id: 'context' }, 'Context'),
          Object(o.b)(
            i.c,
            {
              __position: 3,
              __code:
                '<ThemeProvider>\n  <section>\n    <h3>Accent</h3>\n    <Flex>\n      <Alert\n        appearance="primary-accent"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Primary\n      </Alert>\n      <Alert\n        appearance="secondary-accent"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Seconday\n      </Alert>\n      <Alert\n        appearance="tertiary-accent"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Tertiary\n      </Alert>\n    </Flex>\n  </section>\n  <section>\n    <h3>Active</h3>\n    <Flex>\n      <Alert\n        appearance="primary-active"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        {\' \'}\n        Primary\n      </Alert>\n      <Alert\n        appearance="secondary-active"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Seconday\n      </Alert>\n      <Alert\n        appearance="tertiary-active"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Tertiary\n      </Alert>\n    </Flex>\n  </section>\n  <section>\n    <h3>Action</h3>\n    <Flex>\n      <Alert\n        appearance="primary-action"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        {\' \'}\n        Primary\n      </Alert>\n      <Alert\n        appearance="secondary-action"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Seconday\n      </Alert>\n      <Alert\n        appearance="tertiary-action"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Tertiary\n      </Alert>\n    </Flex>\n  </section>\n  <section>\n    <h3>Danger</h3>\n    <Flex>\n      <Alert\n        appearance="primary-danger"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        {\' \'}\n        Primary\n      </Alert>\n      <Alert\n        appearance="secondary-danger"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Seconday\n      </Alert>\n      <Alert\n        appearance="tertiary-danger"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Tertiary\n      </Alert>\n    </Flex>\n  </section>\n  <section>\n    <h3>Success</h3>\n    <Flex>\n      <Alert\n        appearance="primary-success"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        {\' \'}\n        Primary\n      </Alert>\n      <Alert\n        appearance="secondary-success"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Seconday\n      </Alert>\n      <Alert\n        appearance="tertiary-success"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Tertiary\n      </Alert>\n    </Flex>\n  </section>\n  <section>\n    <h3>Warning</h3>\n    <Flex>\n      <Alert\n        appearance="primary-warning"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        {\' \'}\n        Primary\n      </Alert>\n      <Alert\n        appearance="secondary-warning"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Seconday\n      </Alert>\n      <Alert\n        appearance="tertiary-warning"\n        margin3="right bottom"\n        css={`\n          width: 200px;\n        `}\n      >\n        Tertiary\n      </Alert>\n    </Flex>\n  </section>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Playground: i.c,
                Props: i.d,
                Flex: s.Flex,
                ThemeProvider: l.a,
                Alert: f,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              l.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(
                'section',
                null,
                Object(o.b)('h3', null, 'Accent'),
                Object(o.b)(
                  s.Flex,
                  { mdxType: 'Flex' },
                  Object(o.b)(
                    f,
                    {
                      appearance: 'primary-accent',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Primary'
                  ),
                  Object(o.b)(
                    f,
                    {
                      appearance: 'secondary-accent',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Seconday'
                  ),
                  Object(o.b)(
                    f,
                    {
                      appearance: 'tertiary-accent',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Tertiary'
                  )
                )
              ),
              Object(o.b)(
                'section',
                null,
                Object(o.b)('h3', null, 'Active'),
                Object(o.b)(
                  s.Flex,
                  { mdxType: 'Flex' },
                  Object(o.b)(
                    f,
                    {
                      appearance: 'primary-active',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    ' Primary'
                  ),
                  Object(o.b)(
                    f,
                    {
                      appearance: 'secondary-active',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Seconday'
                  ),
                  Object(o.b)(
                    f,
                    {
                      appearance: 'tertiary-active',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Tertiary'
                  )
                )
              ),
              Object(o.b)(
                'section',
                null,
                Object(o.b)('h3', null, 'Action'),
                Object(o.b)(
                  s.Flex,
                  { mdxType: 'Flex' },
                  Object(o.b)(
                    f,
                    {
                      appearance: 'primary-action',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    ' Primary'
                  ),
                  Object(o.b)(
                    f,
                    {
                      appearance: 'secondary-action',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Seconday'
                  ),
                  Object(o.b)(
                    f,
                    {
                      appearance: 'tertiary-action',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Tertiary'
                  )
                )
              ),
              Object(o.b)(
                'section',
                null,
                Object(o.b)('h3', null, 'Danger'),
                Object(o.b)(
                  s.Flex,
                  { mdxType: 'Flex' },
                  Object(o.b)(
                    f,
                    {
                      appearance: 'primary-danger',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    ' Primary'
                  ),
                  Object(o.b)(
                    f,
                    {
                      appearance: 'secondary-danger',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Seconday'
                  ),
                  Object(o.b)(
                    f,
                    {
                      appearance: 'tertiary-danger',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Tertiary'
                  )
                )
              ),
              Object(o.b)(
                'section',
                null,
                Object(o.b)('h3', null, 'Success'),
                Object(o.b)(
                  s.Flex,
                  { mdxType: 'Flex' },
                  Object(o.b)(
                    f,
                    {
                      appearance: 'primary-success',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    ' Primary'
                  ),
                  Object(o.b)(
                    f,
                    {
                      appearance: 'secondary-success',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Seconday'
                  ),
                  Object(o.b)(
                    f,
                    {
                      appearance: 'tertiary-success',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Tertiary'
                  )
                )
              ),
              Object(o.b)(
                'section',
                null,
                Object(o.b)('h3', null, 'Warning'),
                Object(o.b)(
                  s.Flex,
                  { mdxType: 'Flex' },
                  Object(o.b)(
                    f,
                    {
                      appearance: 'primary-warning',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    ' Primary'
                  ),
                  Object(o.b)(
                    f,
                    {
                      appearance: 'secondary-warning',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Seconday'
                  ),
                  Object(o.b)(
                    f,
                    {
                      appearance: 'tertiary-warning',
                      margin3: 'right bottom',
                      css: 'width: 200px',
                      mdxType: 'Alert',
                    },
                    'Tertiary'
                  )
                )
              )
            )
          ),
          Object(o.b)('h2', { id: 'close' }, 'Close'),
          Object(o.b)(
            i.c,
            {
              __position: 4,
              __code:
                '<ThemeProvider>\n  <Alert\n    onClose={e => {\n      alert(\'close clicked\')\n    }}\n    appearance="primary"\n    margin3="right bottom"\n    css={`\n      width: 200px;\n    `}\n  >\n    Alert\n  </Alert>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : t,
                Playground: i.c,
                Props: i.d,
                Flex: s.Flex,
                ThemeProvider: l.a,
                Alert: f,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              l.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(
                f,
                {
                  onClose: function(e) {
                    alert('close clicked')
                  },
                  appearance: 'primary',
                  margin3: 'right bottom',
                  css: '\n        width: 200px;\n      ',
                  mdxType: 'Alert',
                },
                'Alert'
              )
            )
          )
        )
      }
      T &&
        T === Object(T) &&
        Object.isExtensible(T) &&
        Object.defineProperty(T, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/Alert/alert.mdx' },
        }),
        (T.isMDXComponent = !0)
    },
    './src/Flex/Flex.tsx': function(e, n, t) {
      'use strict'
      var r = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        a = t(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = t('./node_modules/react/index.js'),
        o = t.n(c),
        i = t('./node_modules/lodash/kebabCase.js'),
        s = t.n(i)
      function l(e) {
        var n = e.alignItems,
          t = e.basis,
          r = e.display,
          a = e.grow,
          c = e.justifyContent,
          o = e.shrink,
          i = e.wrap
        return {
          display: r || 'flex',
          basis: t ? ''.concat(t) : '',
          grow: a ? ''.concat(a) : '',
          shrink: o ? ''.concat(o) : '',
          justifyContent: (c && [s()(c)]) || '',
          alignItems: (n && [s()(n)]) || '',
          flexWrap: (i && [s()(i)]) || '',
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
      var p = t('./src/Base/index.tsx')
      t.d(n, 'a', function() {
        return m
      })
      var m = o.a.memo(function(e) {
        var n = e.children,
          t = e.className,
          i = void 0 === t ? '' : t,
          s = e.themed,
          m = void 0 === s ? [] : s,
          b = Object(a.a)(e, ['children', 'className', 'themed']),
          u = Object(c.useMemo)(
            function() {
              return 'Flex '.concat(i)
            },
            [i]
          ),
          y = Object(c.useMemo)(
            function() {
              return [l, d].concat(Object(r.a)(m))
            },
            [l, d, m]
          )
        return o.a.createElement(
          p.Base,
          Object.assign({ className: u, themed: y }, b),
          n
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
      n.b = m
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
  },
])
//# sourceMappingURL=src-alert-alert.b745f521513d232a6ff4.js.map

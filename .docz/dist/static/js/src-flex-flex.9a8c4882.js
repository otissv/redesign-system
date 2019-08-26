;(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    './src/Container/Container.tsx': function(e, n, r) {
      'use strict'
      var o = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        t = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        i = r('./node_modules/react/index.js'),
        a = r.n(i),
        d = r('./src/Base/index.tsx')
      function b(e) {
        var n = e.appearance,
          r = e.theme,
          o = r.border,
          t = r.color,
          i = {
            color: t['accent-050'],
            backgroundColor: t['accent-500'],
            border: '1px solid '.concat(t['accent-500']),
          },
          a = {
            color: t['action-050'],
            backgroundColor: t['action-500'],
            border: '1px solid '.concat(t['action-500']),
          },
          d = {
            color: t['danger-050'],
            backgroundColor: t['danger-500'],
            border: '1px solid '.concat(t['danger-500']),
          },
          b = {
            color: t['success-050'],
            backgroundColor: t['success-500'],
            border: '1px solid '.concat(t['success-500']),
          },
          c = {
            color: t['warning-050'],
            backgroundColor: t['warning-500'],
            border: '1px solid '.concat(t['warning-500']),
          }
        switch (n) {
          case 'primary':
            return {
              color: t.foregroundInvert,
              backgroundColor: t.backgroundInvert,
              border: o.thinTransparent,
            }
          case 'secondary':
            return {
              color: t['grey-800'],
              backgroundColor: t['grey-100'],
              border: '1px solid '.concat(t['grey-100']),
            }
          case 'tertiary':
            return { backgroundColor: 'none', border: o.thin }
          case 'accent':
          case 'primary-accent':
            return i
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
            return a
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
            return d
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
            return b
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
            return c
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
        r.d(n, 'a', function() {
          return c
        })
      var c = a.a.memo(function(e) {
        var n = e.children,
          r = e.className,
          c = void 0 === r ? '' : r,
          x = e.themed,
          s = void 0 === x ? [] : x,
          C = Object(t.a)(e, ['children', 'className', 'themed']),
          l = Object(i.useMemo)(
            function() {
              return 'Container '.concat(c)
            },
            [c]
          ),
          y = Object(i.useMemo)(
            function() {
              return [b].concat(Object(o.a)(s))
            },
            [b, s]
          )
        return a.a.createElement(
          d.Base,
          Object.assign({ className: l, themed: y }, C),
          n
        )
      })
      'undefined' !== typeof c &&
        c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
      n.b = c
      'undefined' !== typeof c &&
        c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Container', filename: 'src/Container/Container.tsx' },
        })
    },
    './src/Container/container.types.ts': function(e, n) {
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
    './src/Container/index.tsx': function(e, n, r) {
      'use strict'
      var o = r('./src/Container/Container.tsx')
      r.d(n, 'Container', function() {
        return o.a
      })
      r('./src/Container/container.types.ts')
    },
    './src/Flex/Flex.tsx': function(e, n, r) {
      'use strict'
      var o = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        t = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        i = r('./node_modules/react/index.js'),
        a = r.n(i),
        d = r('./node_modules/lodash/kebabCase.js'),
        b = r.n(d)
      function c(e) {
        var n = e.alignItems,
          r = e.basis,
          o = e.display,
          t = e.grow,
          i = e.justifyContent,
          a = e.shrink,
          d = e.wrap
        return {
          display: o || 'flex',
          basis: r ? ''.concat(r) : '',
          grow: t ? ''.concat(t) : '',
          shrink: a ? ''.concat(a) : '',
          justifyContent: (i && [b()(i)]) || '',
          alignItems: (n && [b()(n)]) || '',
          flexWrap: (d && [b()(d)]) || '',
        }
      }
      function x(e) {
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
      'undefined' !== typeof c &&
        c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'flexTheme', filename: 'src/Flex/flex.theme.ts' },
        }),
        'undefined' !== typeof x &&
          x &&
          x === Object(x) &&
          Object.isExtensible(x) &&
          Object.defineProperty(x, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'flexDirectionTheme',
              filename: 'src/Flex/flex.theme.ts',
            },
          })
      var s = r('./src/Base/index.tsx')
      r.d(n, 'a', function() {
        return C
      })
      var C = a.a.memo(function(e) {
        var n = e.children,
          r = e.className,
          d = void 0 === r ? '' : r,
          b = e.themed,
          C = void 0 === b ? [] : b,
          l = Object(t.a)(e, ['children', 'className', 'themed']),
          y = Object(i.useMemo)(
            function() {
              return 'Flex '.concat(d)
            },
            [d]
          ),
          p = Object(i.useMemo)(
            function() {
              return [c, x].concat(Object(o.a)(C))
            },
            [c, x, C]
          )
        return a.a.createElement(
          s.Base,
          Object.assign({ className: y, themed: p }, l),
          n
        )
      })
      'undefined' !== typeof C &&
        C &&
        C === Object(C) &&
        Object.isExtensible(C) &&
        Object.defineProperty(C, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
      n.b = C
      'undefined' !== typeof C &&
        C &&
        C === Object(C) &&
        Object.isExtensible(C) &&
        Object.defineProperty(C, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Flex', filename: 'src/Flex/Flex.tsx' },
        })
    },
    './src/Flex/flex.mdx': function(e, n, r) {
      'use strict'
      r.r(n),
        r.d(n, 'default', function() {
          return s
        })
      var o = r(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        t =
          (r('./node_modules/react/index.js'),
          r('./node_modules/@mdx-js/react/dist/index.es.js')),
        i = r('./node_modules/docz/dist/index.esm.js'),
        a = r('./src/Container/index.tsx'),
        d = r('./src/ThemeContext/ThemeProvider.tsx'),
        b = r('./src/Flex/Flex.tsx'),
        c = {},
        x = 'wrapper'
      function s(e) {
        var n = e.components,
          r = Object(o.a)(e, ['components'])
        return Object(t.b)(
          x,
          Object.assign({}, c, r, { components: n, mdxType: 'MDXLayout' }),
          Object(t.b)('h1', { id: 'flex' }, 'Flex'),
          Object(t.b)('h2', { id: 'properties' }, 'Properties'),
          Object(t.b)(i.d, { of: b.b, mdxType: 'Props' }),
          Object(t.b)('h2', { id: 'default' }, 'Default'),
          Object(t.b)(
            i.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Flex>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h2', { id: 'justify-content' }, 'Justify Content'),
          Object(t.b)('h3', { id: 'center' }, 'Center'),
          Object(t.b)(
            i.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <Flex justifyContent="center">\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { justifyContent: 'center', mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'flex-start' }, 'Flex Start'),
          Object(t.b)(
            i.c,
            {
              __position: 3,
              __code:
                '<ThemeProvider>\n  <Flex justifyContent="flexStart">\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { justifyContent: 'flexStart', mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'flex-end' }, 'Flex End'),
          Object(t.b)(
            i.c,
            {
              __position: 4,
              __code:
                '<ThemeProvider>\n  <Flex justifyContent="flexEnd">\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { justifyContent: 'flexEnd', mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'stretch' }, 'Stretch'),
          Object(t.b)(
            i.c,
            {
              __position: 5,
              __code:
                '<ThemeProvider>\n  <Flex justifyContent="stretch">\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { justifyContent: 'stretch', mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'space-around' }, 'Space Around'),
          Object(t.b)(
            i.c,
            {
              __position: 6,
              __code:
                '<ThemeProvider>\n  <Flex justifyContent="spaceAround">\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { justifyContent: 'spaceAround', mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'space-evenly' }, 'Space Evenly'),
          Object(t.b)(
            i.c,
            {
              __position: 7,
              __code:
                '<ThemeProvider>\n  <Flex justifyContent="spaceEvenly">\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { justifyContent: 'spaceEvenly', mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'space-between' }, 'Space Between'),
          Object(t.b)(
            i.c,
            {
              __position: 8,
              __code:
                '<ThemeProvider>\n  <Flex justifyContent="spaceBetween">\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { justifyContent: 'spaceBetween', mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h2', { id: 'align-items' }, 'Align Items'),
          Object(t.b)('h3', { id: 'center-1' }, 'Center'),
          Object(t.b)(
            i.c,
            {
              __position: 9,
              __code:
                '<ThemeProvider>\n  <Flex alignItems="center" style={{ height: \'200px\' }}>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                {
                  alignItems: 'center',
                  style: { height: '200px' },
                  mdxType: 'Flex',
                },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'flex-start-1' }, 'Flex Start'),
          Object(t.b)(
            i.c,
            {
              __position: 10,
              __code:
                '<ThemeProvider>\n  <Flex alignItems="flexStart" style={{ height: \'200px\' }}>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                {
                  alignItems: 'flexStart',
                  style: { height: '200px' },
                  mdxType: 'Flex',
                },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'flex-end-1' }, 'Flex End'),
          Object(t.b)(
            i.c,
            {
              __position: 11,
              __code:
                '<ThemeProvider>\n  <Flex alignItems="flexEnd" style={{ height: \'200px\' }}>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                {
                  alignItems: 'flexEnd',
                  style: { height: '200px' },
                  mdxType: 'Flex',
                },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'stretch-1' }, 'Stretch'),
          Object(t.b)(
            i.c,
            {
              __position: 12,
              __code:
                '<ThemeProvider>\n  <Flex alignItems="stretch" style={{ height: \'200px\' }}>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                {
                  alignItems: 'stretch',
                  style: { height: '200px' },
                  mdxType: 'Flex',
                },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'space-around-1' }, 'Space Around'),
          Object(t.b)(
            i.c,
            {
              __position: 13,
              __code:
                '<ThemeProvider>\n  <Flex alignItems="spaceAround" style={{ height: \'200px\' }}>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                {
                  alignItems: 'spaceAround',
                  style: { height: '200px' },
                  mdxType: 'Flex',
                },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'space-between-1' }, 'Space Between'),
          Object(t.b)(
            i.c,
            {
              __position: 14,
              __code:
                '<ThemeProvider>\n  <Flex alignItems="spaceBetween" style={{ height: \'200px\' }}>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                {
                  alignItems: 'spaceBetween',
                  style: { height: '200px' },
                  mdxType: 'Flex',
                },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'space-evenly-1' }, 'Space Evenly'),
          Object(t.b)(
            i.c,
            {
              __position: 15,
              __code:
                '<ThemeProvider>\n  <Flex alignItems="spaceEvenly">\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n    <Container border="thinGrey500">Box</Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { alignItems: 'spaceEvenly', mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', mdxType: 'Container' },
                  'Box'
                )
              )
            )
          ),
          Object(t.b)('h2', { id: 'wrap' }, 'Wrap'),
          Object(t.b)('h3', { id: 'wrap-1' }, 'Wrap'),
          Object(t.b)(
            i.c,
            {
              __position: 16,
              __code:
                '<ThemeProvider>\n  <Flex wrap="wrap">\n    <Container border="thinGrey500" flex={6}>\n      1\n    </Container>\n    <Container border="thinGrey500" flex={3}>\n      2\n    </Container>\n    <Container border="thinGrey500" flex={4}>\n      3\n    </Container>\n    <Container border="thinGrey500" flex={5}>\n      4\n    </Container>\n    <Container border="thinGrey500" flex={1}>\n      5\n    </Container>\n    <Container border="thinGrey500" flex={2}>\n      6\n    </Container>\n    <Container border="thinGrey500" flex={6}>\n      7\n    </Container>\n    <Container border="thinGrey500" flex={3}>\n      8\n    </Container>\n    <Container border="thinGrey500" flex={4}>\n      9\n    </Container>\n    <Container border="thinGrey500" flex={5}>\n      10\n    </Container>\n    <Container border="thinGrey500" flex={1}>\n      11\n    </Container>\n    <Container border="thinGrey500" flex={2}>\n      12\n    </Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { wrap: 'wrap', mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 6, mdxType: 'Container' },
                  '1'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 3, mdxType: 'Container' },
                  '2'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 4, mdxType: 'Container' },
                  '3'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 5, mdxType: 'Container' },
                  '4'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 1, mdxType: 'Container' },
                  '5'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 2, mdxType: 'Container' },
                  '6'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 6, mdxType: 'Container' },
                  '7'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 3, mdxType: 'Container' },
                  '8'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 4, mdxType: 'Container' },
                  '9'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 5, mdxType: 'Container' },
                  '10'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 1, mdxType: 'Container' },
                  '11'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 2, mdxType: 'Container' },
                  '12'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'no-wrap' }, 'No Wrap'),
          Object(t.b)(
            i.c,
            {
              __position: 17,
              __code:
                '<ThemeProvider>\n  <Flex wrap="nowrap">\n    <Container border="thinGrey500" flex={6}>\n      1\n    </Container>\n    <Container border="thinGrey500" flex={6}>\n      1\n    </Container>\n    <Container border="thinGrey500" flex={3}>\n      2\n    </Container>\n    <Container border="thinGrey500" flex={4}>\n      3\n    </Container>\n    <Container border="thinGrey500" flex={5}>\n      4\n    </Container>\n    <Container border="thinGrey500" flex={1}>\n      5\n    </Container>\n    <Container border="thinGrey500" flex={2}>\n      6\n    </Container>\n    <Container border="thinGrey500" flex={6}>\n      7\n    </Container>\n    <Container border="thinGrey500" flex={3}>\n      8\n    </Container>\n    <Container border="thinGrey500" flex={4}>\n      9\n    </Container>\n    <Container border="thinGrey500" flex={5}>\n      10\n    </Container>\n    <Container border="thinGrey500" flex={1}>\n      11\n    </Container>\n    <Container border="thinGrey500" flex={2}>\n      12\n    </Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { wrap: 'nowrap', mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 6, mdxType: 'Container' },
                  '1'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 6, mdxType: 'Container' },
                  '1'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 3, mdxType: 'Container' },
                  '2'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 4, mdxType: 'Container' },
                  '3'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 5, mdxType: 'Container' },
                  '4'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 1, mdxType: 'Container' },
                  '5'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 2, mdxType: 'Container' },
                  '6'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 6, mdxType: 'Container' },
                  '7'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 3, mdxType: 'Container' },
                  '8'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 4, mdxType: 'Container' },
                  '9'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 5, mdxType: 'Container' },
                  '10'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 1, mdxType: 'Container' },
                  '11'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 2, mdxType: 'Container' },
                  '12'
                )
              )
            )
          ),
          Object(t.b)('h3', { id: 'wrap-reverse' }, 'Wrap Reverse'),
          Object(t.b)(
            i.c,
            {
              __position: 18,
              __code:
                '<ThemeProvider>\n  <Flex wrap="wrapReverse">\n    <Container border="thinGrey500" flex={6}>\n      1\n    </Container>\n    <Container border="thinGrey500" flex={3}>\n      2\n    </Container>\n    <Container border="thinGrey500" flex={4}>\n      3\n    </Container>\n    <Container border="thinGrey500" flex={5}>\n      4\n    </Container>\n    <Container border="thinGrey500" flex={1}>\n      5\n    </Container>\n    <Container border="thinGrey500" flex={2}>\n      6\n    </Container>\n    <Container border="thinGrey500" flex={6}>\n      7\n    </Container>\n    <Container border="thinGrey500" flex={3}>\n      8\n    </Container>\n    <Container border="thinGrey500" flex={4}>\n      9\n    </Container>\n    <Container border="thinGrey500" flex={5}>\n      10\n    </Container>\n    <Container border="thinGrey500" flex={1}>\n      11\n    </Container>\n    <Container border="thinGrey500" flex={2}>\n      12\n    </Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { wrap: 'wrapReverse', mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 6, mdxType: 'Container' },
                  '1'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 3, mdxType: 'Container' },
                  '2'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 4, mdxType: 'Container' },
                  '3'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 5, mdxType: 'Container' },
                  '4'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 1, mdxType: 'Container' },
                  '5'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 2, mdxType: 'Container' },
                  '6'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 6, mdxType: 'Container' },
                  '7'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 3, mdxType: 'Container' },
                  '8'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 4, mdxType: 'Container' },
                  '9'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 5, mdxType: 'Container' },
                  '10'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 1, mdxType: 'Container' },
                  '11'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', flex: 2, mdxType: 'Container' },
                  '12'
                )
              )
            )
          ),
          Object(t.b)('h2', { id: 'order' }, 'Order'),
          Object(t.b)(
            i.c,
            {
              __position: 19,
              __code:
                '<ThemeProvider>\n  <Flex>\n    <Container border="thinGrey500" order={3}>\n      1\n    </Container>\n    <Container border="thinGrey500" order={1}>\n      2\n    </Container>\n    <Container border="thinGrey500" order={2}>\n      3\n    </Container>\n  </Flex>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : r,
                Playground: i.c,
                Props: i.d,
                Container: a.Container,
                ThemeProvider: d.a,
                Flex: b.b,
              },
              mdxType: 'Playground',
            },
            Object(t.b)(
              d.a,
              { mdxType: 'ThemeProvider' },
              Object(t.b)(
                b.b,
                { mdxType: 'Flex' },
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', order: 3, mdxType: 'Container' },
                  '1'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', order: 1, mdxType: 'Container' },
                  '2'
                ),
                Object(t.b)(
                  a.Container,
                  { border: 'thinGrey500', order: 2, mdxType: 'Container' },
                  '3'
                )
              )
            )
          )
        )
      }
      s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/Flex/flex.mdx' },
        }),
        (s.isMDXComponent = !0)
    },
  },
])
//# sourceMappingURL=src-flex-flex.f74c2ab9f6d2313a0e74.js.map

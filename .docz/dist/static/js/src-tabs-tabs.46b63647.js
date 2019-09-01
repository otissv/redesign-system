;(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    './src/ButtonGroup/ButtonGroupButton.tsx': function(e, t, a) {
      'use strict'
      a.d(t, 'a', function() {
        return b
      })
      var n = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        i = a('./node_modules/react/index.js'),
        u = a.n(i),
        s = a('./src/Button/Button.tsx'),
        l = a('./src/ButtonGroup/ButtonGroup.tsx'),
        b = u.a.memo(function(e) {
          var t = e.children,
            a = e.className,
            b = void 0 === a ? '' : a,
            r = e.themed,
            o = void 0 === r ? [] : r,
            c = Object(n.a)(e, ['children', 'className', 'themed']),
            d = Object(l.c)(),
            m = Object(i.useMemo)(
              function() {
                return 'ButtonGroupButton '.concat(b || '')
              },
              [b]
            )
          return u.a.createElement(
            s.b,
            Object.assign({ className: m }, d, { themed: o }, c),
            t
          )
        })
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroupButton',
            filename: 'src/ButtonGroup/ButtonGroupButton.tsx',
          },
        }),
        (t.b = b),
        'undefined' !== typeof b &&
          b &&
          b === Object(b) &&
          Object.isExtensible(b) &&
          Object.defineProperty(b, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ButtonGroupButton',
              filename: 'src/ButtonGroup/ButtonGroupButton.tsx',
            },
          })
    },
    './src/Tabs/TabContext.tsx': function(e, t, a) {
      'use strict'
      a.d(t, 'b', function() {
        return o
      }),
        a.d(t, 'a', function() {
          return c
        })
      var n = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        i = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        u = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        s = a('./node_modules/react/index.js'),
        l = a.n(s),
        b = a('./src/reusable/collectionHash/index.ts'),
        r = l.a.createContext({})
      function o() {
        return Object(s.useContext)(r)
      }
      'undefined' !== typeof r &&
        r &&
        r === Object(r) &&
        Object.isExtensible(r) &&
        Object.defineProperty(r, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabContext', filename: 'src/Tabs/TabContext.tsx' },
        }),
        o &&
          o === Object(o) &&
          Object.isExtensible(o) &&
          Object.defineProperty(o, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'useTabs', filename: 'src/Tabs/TabContext.tsx' },
          })
      var c = l.a.memo(function(e) {
        var t = e.active,
          a = (e.selected, e.children),
          o = e.stacked,
          c = Object(u.a)(e, ['active', 'selected', 'children', 'stacked']),
          d = { active: t, items: [], selected: [], stacked: o },
          m = Object(b.useCollectionHashReducer)(d),
          p = Object(i.a)(m, 2),
          T = p[0],
          v = p[1],
          g = Object(s.useMemo)(
            function() {
              return Object(n.a)({}, T, { dispatch: v }, c)
            },
            [T, v, c]
          )
        return l.a.createElement(r.Provider, { value: g }, a)
      })
      'undefined' !== typeof c &&
        c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabProvider', filename: 'src/Tabs/TabContext.tsx' },
        })
      'undefined' !== typeof r &&
        r &&
        r === Object(r) &&
        Object.isExtensible(r) &&
        Object.defineProperty(r, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabContext', filename: 'src/Tabs/TabContext.tsx' },
        })
    },
    './src/Tabs/TabList.tsx': function(e, t, a) {
      'use strict'
      a.d(t, 'a', function() {
        return o
      })
      var n = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        i = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        u = a('./node_modules/react/index.js'),
        s = a.n(u),
        l = a('./src/ButtonGroup/ButtonGroup.tsx'),
        b = a('./src/Tabs/tabs.theme.ts'),
        r = a('./src/Tabs/TabContext.tsx'),
        o = s.a.memo(function(e) {
          var t = e.active,
            a = e.children,
            o = e.className,
            c = void 0 === o ? '' : o,
            d = e.themed,
            m = void 0 === d ? [] : d,
            p = Object(i.a)(e, ['active', 'children', 'className', 'themed']),
            T = Object(u.useMemo)(
              function() {
                return 'TabList '.concat(c)
              },
              [c]
            ),
            v = Object(u.useMemo)(
              function() {
                return [b.b].concat(Object(n.a)(m))
              },
              [b.b, m]
            ),
            g = Object(r.b)(),
            h = g.dispatch,
            q = g.appearance,
            j = g.stacked,
            O = g.stretch,
            f = g.size,
            L = Object(u.useCallback)(function(e) {
              e.preventDefault(),
                (e.currentTarget.scrollLeft =
                  -e.nativeEvent.wheelDelta || -e.nativeEvent.detail)
            }, [])
          return (
            Object(u.useEffect)(
              function() {
                h({ type: 'SET_ACTIVE', active: t })
              },
              [t]
            ),
            s.a.createElement(
              l.b,
              Object.assign(
                {
                  className: T,
                  onWheel: L,
                  styled: 'overflow:hidden;',
                  appearance: q,
                  stretch: O,
                  size: f,
                  stacked: j,
                },
                p,
                { themed: v }
              ),
              a
            )
          )
        })
      'undefined' !== typeof o &&
        o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabList', filename: 'src/Tabs/TabList.tsx' },
        })
      'undefined' !== typeof o &&
        o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabList', filename: 'src/Tabs/TabList.tsx' },
        })
    },
    './src/Tabs/TabListButton.tsx': function(e, t, a) {
      'use strict'
      a.d(t, 'a', function() {
        return o
      })
      var n = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        i = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        u = a('./node_modules/react/index.js'),
        s = a.n(u),
        l = a('./src/Tabs/tabs.theme.ts'),
        b = a('./src/ButtonGroup/ButtonGroupButton.tsx'),
        r = a('./src/Tabs/TabContext.tsx'),
        o = s.a.memo(function(e) {
          var t = e.children,
            a = e.className,
            o = void 0 === a ? '' : a,
            c = e.uid,
            d = e.onClick,
            m = e.themed,
            p = void 0 === m ? [] : m,
            T = Object(i.a)(e, [
              'children',
              'className',
              'uid',
              'onClick',
              'themed',
            ]),
            v = Object(u.useMemo)(
              function() {
                return 'TabListButton '.concat(o)
              },
              [o]
            ),
            g = Object(u.useMemo)(
              function() {
                return [l.a].concat(Object(n.a)(p))
              },
              [l.a, p]
            ),
            h = Object(r.b)(),
            q = h.active,
            j = h.appearance,
            O = h.dispatch,
            f = h.stacked,
            L = Object(u.useCallback)(
              function(e) {
                e.preventDefault(),
                  O({
                    type: 'SET_ACTIVE',
                    active: e.currentTarget.dataset.uid,
                  }),
                  d && d(e)
              },
              [O]
            ),
            P = Object(u.useMemo)(
              function() {
                return q === c ? 'active' : j
              },
              [q, j, c]
            )
          return s.a.createElement(
            b.b,
            Object.assign({ className: v, themed: g }, T, {
              onClick: L,
              appearance: P,
              stacked: f,
              'data-uid': c,
            }),
            t
          )
        })
      'undefined' !== typeof o &&
        o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TabListButton',
            filename: 'src/Tabs/TabListButton.tsx',
          },
        })
      'undefined' !== typeof o &&
        o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TabListButton',
            filename: 'src/Tabs/TabListButton.tsx',
          },
        })
    },
    './src/Tabs/TabPanel.tsx': function(e, t, a) {
      'use strict'
      a.d(t, 'a', function() {
        return o
      })
      var n = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        i = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        u = a('./node_modules/react/index.js'),
        s = a.n(u),
        l = a('./src/Tabs/TabContext.tsx'),
        b = a('./src/Tabs/tabs.theme.ts'),
        r = a('./src/Base/Base.tsx'),
        o = s.a.memo(function(e) {
          var t = e.css,
            a = e.children,
            o = e.className,
            c = void 0 === o ? '' : o,
            d = e.uid,
            m = e.themed,
            p = void 0 === m ? [] : m,
            T = Object(i.a)(e, [
              'css',
              'children',
              'className',
              'uid',
              'themed',
            ]),
            v = Object(u.useMemo)(
              function() {
                return 'TabPanel '.concat(c)
              },
              [c]
            ),
            g = Object(u.useMemo)(
              function() {
                return [b.c].concat(Object(n.a)(p))
              },
              [b.c, p]
            ),
            h = Object(l.b)(),
            q = h.active,
            j = h.height,
            O = h.width,
            f = Object(u.useMemo)(
              function() {
                return q === d ? 'display: block;' : 'display: none;'
              },
              [q, d]
            )
          return Object(u.useMemo)(
            function() {
              return q === d
                ? s.a.createElement(
                    r.b,
                    Object.assign(
                      { className: v, height: j, width: O, themed: g },
                      T,
                      {
                        css: ''
                          .concat(f, ' height: ')
                          .concat(j, '; width: ')
                          .concat(O, '; ')
                          .concat(t),
                        'data-uid': d,
                      }
                    ),
                    a
                  )
                : null
            },
            [q, d, j, T, f, t, v, O, g, a]
          )
        })
      'undefined' !== typeof o &&
        o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabPanel', filename: 'src/Tabs/TabPanel.tsx' },
        })
      'undefined' !== typeof o &&
        o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TabPanel', filename: 'src/Tabs/TabPanel.tsx' },
        })
    },
    './src/Tabs/Tabs.tsx': function(e, t, a) {
      'use strict'
      a.d(t, 'a', function() {
        return o
      })
      var n = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        i = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        u = a('./node_modules/react/index.js'),
        s = a.n(u),
        l = a('./src/Base/Base.tsx'),
        b = a('./src/Tabs/TabContext.tsx'),
        r = a('./src/Tabs/tabs.theme.ts'),
        o = s.a.memo(function(e) {
          var t = e.className,
            a = void 0 === t ? '' : t,
            o = e.children,
            c = e.appearance,
            d = e.stretch,
            m = e.size,
            p = e.themed,
            T = void 0 === p ? [] : p,
            v = e.height,
            g = e.width,
            h = e.stacked,
            q = Object(i.a)(e, [
              'className',
              'children',
              'appearance',
              'stretch',
              'size',
              'themed',
              'height',
              'width',
              'stacked',
            ]),
            j = Object(u.useMemo)(
              function() {
                return 'Tabs '.concat(a)
              },
              [a]
            ),
            O = Object(u.useMemo)(
              function() {
                return [r.d].concat(Object(n.a)(T))
              },
              [r.d, T]
            )
          return s.a.createElement(
            b.a,
            {
              appearance: c,
              height: v,
              width: g,
              stretch: d,
              size: m,
              stacked: h,
            },
            s.a.createElement(
              l.b,
              Object.assign({ className: j, themed: O, stacked: h }, q),
              o
            )
          )
        })
      'undefined' !== typeof o &&
        o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Tabs', filename: 'src/Tabs/Tabs.tsx' },
        }),
        (t.b = o),
        'undefined' !== typeof o &&
          o &&
          o === Object(o) &&
          Object.isExtensible(o) &&
          Object.defineProperty(o, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Tabs', filename: 'src/Tabs/Tabs.tsx' },
          })
    },
    './src/Tabs/tabs.mdx': function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'default', function() {
          return p
        })
      var n = a(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        i = a('./node_modules/react/index.js'),
        u = a('./node_modules/@mdx-js/react/dist/index.es.js'),
        s = a('./node_modules/docz/dist/index.esm.js'),
        l = a('./src/Tabs/Tabs.tsx'),
        b = a('./src/Tabs/TabList.tsx'),
        r = a('./src/Tabs/TabListButton.tsx'),
        o = a('./src/Tabs/TabPanel.tsx'),
        c = a('./src/ThemeContext/ThemeProvider.tsx'),
        d = {},
        m = 'wrapper'
      function p(e) {
        var t = e.components,
          a = Object(n.a)(e, ['components'])
        return Object(u.b)(
          m,
          Object.assign({}, d, a, { components: t, mdxType: 'MDXLayout' }),
          Object(u.b)('h1', { id: 'tabs' }, 'Tabs'),
          Object(u.b)('h2', { id: 'properties' }, 'Properties'),
          Object(u.b)(s.d, { of: l.b, mdxType: 'Props' }),
          Object(u.b)(
            s.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Tabs css="background: #2b313e">\n    <TabList active="1">\n      <TabListButton title="Tab1" uid="1">\n        Tab 1\n      </TabListButton>\n      <TabListButton title="Tab2" uid="2">\n        Tab 2\n      </TabListButton>\n      <TabListButton title="Tab3" uid="3">\n        Tab 3\n      </TabListButton>\n    </TabList>\n    <TabPanel uid="1" padding={5}>\n      <h4>Tab 1</h4>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at\n        leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor,\n        quis fermentum orci tristique ut. Etiam tristique sollicitudin\n        feugiat.\n      </p>\n    </TabPanel>\n    <TabPanel uid="2" padding={5}>\n      <h4>Tab 2</h4>\n      <p>\n        In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et\n        malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at\n        risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur\n        libero. Maecenas pharetra convallis posuere morbi leo.\n      </p>\n    </TabPanel>\n    <TabPanel uid="3" padding={5}>\n      <h4>Tab 3</h4>\n      <p>\n        Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.\n        Dolor sit amet consectetur adipiscing elit pellentesque. Quisque\n        sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in\n        nulla posuere sollicitudin aliquam.\n      </p>\n    </TabPanel>\n  </Tabs>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : a,
                Fragment: i.Fragment,
                Playground: s.c,
                Props: s.d,
                Tabs: l.b,
                TabList: b.a,
                TabListButton: r.a,
                TabPanel: o.a,
                ThemeProvider: c.a,
              },
              mdxType: 'Playground',
            },
            Object(u.b)(
              c.a,
              { mdxType: 'ThemeProvider' },
              Object(u.b)(
                l.b,
                { css: 'background: #2b313e', mdxType: 'Tabs' },
                Object(u.b)(
                  b.a,
                  { active: '1', mdxType: 'TabList' },
                  Object(u.b)(
                    r.a,
                    { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                    'Tab 1'
                  ),
                  Object(u.b)(
                    r.a,
                    { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                    'Tab 2'
                  ),
                  Object(u.b)(
                    r.a,
                    { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                    'Tab 3'
                  )
                ),
                Object(u.b)(
                  o.a,
                  { uid: '1', padding: 5, mdxType: 'TabPanel' },
                  Object(u.b)('h4', null, 'Tab 1'),
                  Object(u.b)(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                  )
                ),
                Object(u.b)(
                  o.a,
                  { uid: '2', padding: 5, mdxType: 'TabPanel' },
                  Object(u.b)('h4', null, 'Tab 2'),
                  Object(u.b)(
                    'p',
                    null,
                    'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                  )
                ),
                Object(u.b)(
                  o.a,
                  { uid: '3', padding: 5, mdxType: 'TabPanel' },
                  Object(u.b)('h4', null, 'Tab 3'),
                  Object(u.b)(
                    'p',
                    null,
                    'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                  )
                )
              )
            )
          ),
          Object(u.b)(
            s.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <div>\n    <h3>Primary</h3>\n    <Tabs stretch marginBottom={5} height="200px" css="background: #2b313e">\n      <TabList active="1">\n        <TabListButton title="Tab1" uid="1">\n          Tab 1\n        </TabListButton>\n        <TabListButton title="Tab2" uid="2">\n          Tab 2\n        </TabListButton>\n        <TabListButton title="Tab3" uid="3">\n          Tab 3\n        </TabListButton>\n        <TabListButton title="Tab4" uid="4">\n          Tab 4\n        </TabListButton>\n        <TabListButton title="Tab5" uid="5">\n          Tab 5\n        </TabListButton>\n        <TabListButton title="Tab6" uid="6">\n          Tab 6\n        </TabListButton>\n        <TabListButton title="Tab7" uid="7">\n          Tab 7\n        </TabListButton>\n        <TabListButton title="Tab8" uid="8">\n          Tab 8\n        </TabListButton>\n        <TabListButton title="Tab9" uid="9">\n          Tab 9\n        </TabListButton>\n      </TabList>\n      <TabPanel uid="1" padding={5}>\n        <h4>Tab 1</h4>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl\n          at leo porta suscipit et vel diam. Maecenas venenatis consectetur\n          tortor, quis fermentum orci tristique ut. Etiam tristique\n          sollicitudin feugiat.\n        </p>\n      </TabPanel>\n      <TabPanel uid="2" padding={5}>\n        <h4>Tab 2</h4>\n        <p>\n          In eu mi bibendum neque. In ante metus dictum at. Senectus et netus\n          et malesuada fames ac. Ac tortor dignissim convallis aenean et\n          tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum\n          consectetur libero. Maecenas pharetra convallis posuere morbi leo.\n        </p>\n      </TabPanel>\n      <TabPanel uid="3" padding={5}>\n        <h4>Tab 3</h4>\n        <p>\n          Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.\n          Dolor sit amet consectetur adipiscing elit pellentesque. Quisque\n          sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in\n          nulla posuere sollicitudin aliquam.\n        </p>\n      </TabPanel>\n      <TabPanel uid="4" padding={5}>\n        <h4>Tab 4</h4>\n        <p>\n          Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Et\n          netus et malesuada fames ac. Cursus turpis massa tincidunt dui ut\n          ornare lectus. Integer feugiat scelerisque varius morbi enim nunc\n          faucibus a pellentesque. Maecenas accumsan lacus vel facilisis\n          volutpat est.\n        </p>\n      </TabPanel>\n      <TabPanel uid="5" padding={5}>\n        <h4>Tab 5</h4>\n        <p>\n          Id cursus metus aliquam eleifend mi in. Vestibulum morbi blandit\n          cursus risus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet.\n          Velit aliquet sagittis id consectetur. Dolor sit amet consectetur\n          adipiscing elit duis tristique sollicitudin.\n        </p>\n      </TabPanel>\n      <TabPanel uid="6" padding={5}>\n        <h4>Tab 6</h4>\n        <p>\n          Diam volutpat commodo sed egestas. Hac habitasse platea dictumst\n          quisque sagittis purus sit amet volutpat. Elementum sagittis vitae\n          et leo duis ut diam quam nulla. Eget duis at tellus at urna\n          condimentum mattis.\n        </p>\n      </TabPanel>\n      <TabPanel uid="7" padding={5}>\n        <h4>Tab 7</h4>\n        <p>\n          Enim tortor at auctor urna nunc. Elementum tempus egestas sed sed\n          risus pretium quam. Vitae congue eu consequat ac felis donec et.\n          Eget nunc scelerisque viverra mauris in. Id cursus metus aliquam\n          eleifend mi. Euismod quis viverra nibh cras pulvinar. Cursus metus\n          aliquam eleifend mi. Ullamcorper morbi tincidunt ornare massa eget\n          egestas.\n        </p>\n      </TabPanel>\n      <TabPanel uid="8" padding={5}>\n        <h4>Tab 8</h4>\n        <p>\n          Quam quisque id diam vel quam elementum pulvinar etiam non. Est ante\n          in nibh mauris cursus mattis molestie. Id semper risus in hendrerit\n          gravida rutrum quisque non. Mauris in aliquam sem fringilla ut morbi\n          tincidunt augue interdum.\n        </p>\n      </TabPanel>\n      <TabPanel uid="9" padding={5}>\n        <h4>Tab 9</h4>\n        <p>\n          Luctus venenatis lectus magna fringilla urna porttitor. Laoreet non\n          curabitur gravida arcu ac tortor dignissim. Semper feugiat nibh sed\n          pulvinar proin gravida hendrerit lectus. Eu facilisis sed odio\n          morbi.\n        </p>\n      </TabPanel>\n    </Tabs>\n  </div>\n\n  <div>\n    <h3>Secondary</h3>\n    <Tabs\n      stretch\n      marginBottom={5}\n      height="200px"\n      appearance="secondary"\n      css="background: #2b313e"\n    >\n      <TabList active="1">\n        <TabListButton title="Tab1" uid="1">\n          Tab 1\n        </TabListButton>\n        <TabListButton title="Tab2" uid="2">\n          Tab 2\n        </TabListButton>\n        <TabListButton title="Tab3" uid="3">\n          Tab 3\n        </TabListButton>\n        <TabListButton title="Tab4" uid="4">\n          Tab 4\n        </TabListButton>\n        <TabListButton title="Tab5" uid="5">\n          Tab 5\n        </TabListButton>\n        <TabListButton title="Tab6" uid="6">\n          Tab 6\n        </TabListButton>\n        <TabListButton title="Tab7" uid="7">\n          Tab 7\n        </TabListButton>\n        <TabListButton title="Tab8" uid="8">\n          Tab 8\n        </TabListButton>\n        <TabListButton title="Tab9" uid="9">\n          Tab 9\n        </TabListButton>\n      </TabList>\n\n      <TabPanel uid="1" padding={5}>\n        <h4>Tab 1</h4>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl\n          at leo porta suscipit et vel diam. Maecenas venenatis consectetur\n          tortor, quis fermentum orci tristique ut. Etiam tristique\n          sollicitudin feugiat.\n        </p>\n      </TabPanel>\n      <TabPanel uid="2" padding={5}>\n        <h4>Tab 2</h4>\n        <p>\n          In eu mi bibendum neque. In ante metus dictum at. Senectus et netus\n          et malesuada fames ac. Ac tortor dignissim convallis aenean et\n          tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum\n          consectetur libero. Maecenas pharetra convallis posuere morbi leo.\n        </p>\n      </TabPanel>\n      <TabPanel uid="3" padding={5}>\n        <h4>Tab 3</h4>\n        <p>\n          Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.\n          Dolor sit amet consectetur adipiscing elit pellentesque. Quisque\n          sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in\n          nulla posuere sollicitudin aliquam.\n        </p>\n      </TabPanel>\n      <TabPanel uid="4" padding={5}>\n        <h4>Tab 4</h4>\n        <p>\n          Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Et\n          netus et malesuada fames ac. Cursus turpis massa tincidunt dui ut\n          ornare lectus. Integer feugiat scelerisque varius morbi enim nunc\n          faucibus a pellentesque. Maecenas accumsan lacus vel facilisis\n          volutpat est.\n        </p>\n      </TabPanel>\n      <TabPanel uid="5" padding={5}>\n        <h4>Tab 5</h4>\n        <p>\n          Id cursus metus aliquam eleifend mi in. Vestibulum morbi blandit\n          cursus risus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet.\n          Velit aliquet sagittis id consectetur. Dolor sit amet consectetur\n          adipiscing elit duis tristique sollicitudin.\n        </p>\n      </TabPanel>\n      <TabPanel uid="6" padding={5}>\n        <h4>Tab 6</h4>\n        <p>\n          Diam volutpat commodo sed egestas. Hac habitasse platea dictumst\n          quisque sagittis purus sit amet volutpat. Elementum sagittis vitae\n          et leo duis ut diam quam nulla. Eget duis at tellus at urna\n          condimentum mattis.\n        </p>\n      </TabPanel>\n      <TabPanel uid="7" padding={5}>\n        <h4>Tab 7</h4>\n        <p>\n          Enim tortor at auctor urna nunc. Elementum tempus egestas sed sed\n          risus pretium quam. Vitae congue eu consequat ac felis donec et.\n          Eget nunc scelerisque viverra mauris in. Id cursus metus aliquam\n          eleifend mi. Euismod quis viverra nibh cras pulvinar. Cursus metus\n          aliquam eleifend mi. Ullamcorper morbi tincidunt ornare massa eget\n          egestas.\n        </p>\n      </TabPanel>\n      <TabPanel uid="8" padding={5}>\n        <h4>Tab 8</h4>\n        <p>\n          Quam quisque id diam vel quam elementum pulvinar etiam non. Est ante\n          in nibh mauris cursus mattis molestie. Id semper risus in hendrerit\n          gravida rutrum quisque non. Mauris in aliquam sem fringilla ut morbi\n          tincidunt augue interdum.\n        </p>\n      </TabPanel>\n      <TabPanel uid="9" padding={5}>\n        <h4>Tab 9</h4>\n        <p>\n          Luctus venenatis lectus magna fringilla urna porttitor. Laoreet non\n          curabitur gravida arcu ac tortor dignissim. Semper feugiat nibh sed\n          pulvinar proin gravida hendrerit lectus. Eu facilisis sed odio\n          morbi.\n        </p>\n      </TabPanel>\n    </Tabs>\n  </div>\n\n  <div>\n    <h3>Tertiary</h3>\n    <Tabs\n      stretch\n      marginBottom={5}\n      height="200px"\n      appearance="tertiary"\n      css="background: #2b313e"\n    >\n      <TabList active="1">\n        <TabListButton title="Tab1" uid="1">\n          Tab 1\n        </TabListButton>\n        <TabListButton title="Tab2" uid="2">\n          Tab 2\n        </TabListButton>\n        <TabListButton title="Tab3" uid="3">\n          Tab 3\n        </TabListButton>\n        <TabListButton title="Tab4" uid="4">\n          Tab 4\n        </TabListButton>\n        <TabListButton title="Tab5" uid="5">\n          Tab 5\n        </TabListButton>\n        <TabListButton title="Tab6" uid="6">\n          Tab 6\n        </TabListButton>\n        <TabListButton title="Tab7" uid="7">\n          Tab 7\n        </TabListButton>\n        <TabListButton title="Tab8" uid="8">\n          Tab 8\n        </TabListButton>\n        <TabListButton title="Tab9" uid="9">\n          Tab 9\n        </TabListButton>\n      </TabList>\n\n      <TabPanel uid="1" padding={5}>\n        <h4>Tab 1</h4>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl\n          at leo porta suscipit et vel diam. Maecenas venenatis consectetur\n          tortor, quis fermentum orci tristique ut. Etiam tristique\n          sollicitudin feugiat.\n        </p>\n      </TabPanel>\n      <TabPanel uid="2" padding={5}>\n        <h4>Tab 2</h4>\n        <p>\n          In eu mi bibendum neque. In ante metus dictum at. Senectus et netus\n          et malesuada fames ac. Ac tortor dignissim convallis aenean et\n          tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum\n          consectetur libero. Maecenas pharetra convallis posuere morbi leo.\n        </p>\n      </TabPanel>\n      <TabPanel uid="3" padding={5}>\n        <h4>Tab 3</h4>\n        <p>\n          Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.\n          Dolor sit amet consectetur adipiscing elit pellentesque. Quisque\n          sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in\n          nulla posuere sollicitudin aliquam.\n        </p>\n      </TabPanel>\n      <TabPanel uid="4" padding={5}>\n        <h4>Tab 4</h4>\n        <p>\n          Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Et\n          netus et malesuada fames ac. Cursus turpis massa tincidunt dui ut\n          ornare lectus. Integer feugiat scelerisque varius morbi enim nunc\n          faucibus a pellentesque. Maecenas accumsan lacus vel facilisis\n          volutpat est.\n        </p>\n      </TabPanel>\n      <TabPanel uid="5" padding={5}>\n        <h4>Tab 5</h4>\n        <p>\n          Id cursus metus aliquam eleifend mi in. Vestibulum morbi blandit\n          cursus risus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet.\n          Velit aliquet sagittis id consectetur. Dolor sit amet consectetur\n          adipiscing elit duis tristique sollicitudin.\n        </p>\n      </TabPanel>\n      <TabPanel uid="6" padding={5}>\n        <h4>Tab 6</h4>\n        <p>\n          Diam volutpat commodo sed egestas. Hac habitasse platea dictumst\n          quisque sagittis purus sit amet volutpat. Elementum sagittis vitae\n          et leo duis ut diam quam nulla. Eget duis at tellus at urna\n          condimentum mattis.\n        </p>\n      </TabPanel>\n      <TabPanel uid="7" padding={5}>\n        <h4>Tab 7</h4>\n        <p>\n          Enim tortor at auctor urna nunc. Elementum tempus egestas sed sed\n          risus pretium quam. Vitae congue eu consequat ac felis donec et.\n          Eget nunc scelerisque viverra mauris in. Id cursus metus aliquam\n          eleifend mi. Euismod quis viverra nibh cras pulvinar. Cursus metus\n          aliquam eleifend mi. Ullamcorper morbi tincidunt ornare massa eget\n          egestas.\n        </p>\n      </TabPanel>\n      <TabPanel uid="8" padding={5}>\n        <h4>Tab 8</h4>\n        <p>\n          Quam quisque id diam vel quam elementum pulvinar etiam non. Est ante\n          in nibh mauris cursus mattis molestie. Id semper risus in hendrerit\n          gravida rutrum quisque non. Mauris in aliquam sem fringilla ut morbi\n          tincidunt augue interdum.\n        </p>\n      </TabPanel>\n      <TabPanel uid="9" padding={5}>\n        <h4>Tab 9</h4>\n        <p>\n          Luctus venenatis lectus magna fringilla urna porttitor. Laoreet non\n          curabitur gravida arcu ac tortor dignissim. Semper feugiat nibh sed\n          pulvinar proin gravida hendrerit lectus. Eu facilisis sed odio\n          morbi.\n        </p>\n      </TabPanel>\n    </Tabs>\n  </div>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : a,
                Fragment: i.Fragment,
                Playground: s.c,
                Props: s.d,
                Tabs: l.b,
                TabList: b.a,
                TabListButton: r.a,
                TabPanel: o.a,
                ThemeProvider: c.a,
              },
              mdxType: 'Playground',
            },
            Object(u.b)(
              c.a,
              { mdxType: 'ThemeProvider' },
              Object(u.b)(
                'div',
                null,
                Object(u.b)('h3', null, 'Primary'),
                Object(u.b)(
                  l.b,
                  {
                    stretch: !0,
                    marginBottom: 5,
                    height: '200px',
                    css: 'background: #2b313e',
                    mdxType: 'Tabs',
                  },
                  Object(u.b)(
                    b.a,
                    { active: '1', mdxType: 'TabList' },
                    Object(u.b)(
                      r.a,
                      { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                      'Tab 1'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                      'Tab 2'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                      'Tab 3'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab4', uid: '4', mdxType: 'TabListButton' },
                      'Tab 4'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab5', uid: '5', mdxType: 'TabListButton' },
                      'Tab 5'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab6', uid: '6', mdxType: 'TabListButton' },
                      'Tab 6'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab7', uid: '7', mdxType: 'TabListButton' },
                      'Tab 7'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab8', uid: '8', mdxType: 'TabListButton' },
                      'Tab 8'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab9', uid: '9', mdxType: 'TabListButton' },
                      'Tab 9'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '1', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 1'),
                    Object(u.b)(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '2', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 2'),
                    Object(u.b)(
                      'p',
                      null,
                      'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '3', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 3'),
                    Object(u.b)(
                      'p',
                      null,
                      'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '4', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 4'),
                    Object(u.b)(
                      'p',
                      null,
                      'Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Et netus et malesuada fames ac. Cursus turpis massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Maecenas accumsan lacus vel facilisis volutpat est.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '5', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 5'),
                    Object(u.b)(
                      'p',
                      null,
                      'Id cursus metus aliquam eleifend mi in. Vestibulum morbi blandit cursus risus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Velit aliquet sagittis id consectetur. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '6', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 6'),
                    Object(u.b)(
                      'p',
                      null,
                      'Diam volutpat commodo sed egestas. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Elementum sagittis vitae et leo duis ut diam quam nulla. Eget duis at tellus at urna condimentum mattis.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '7', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 7'),
                    Object(u.b)(
                      'p',
                      null,
                      'Enim tortor at auctor urna nunc. Elementum tempus egestas sed sed risus pretium quam. Vitae congue eu consequat ac felis donec et. Eget nunc scelerisque viverra mauris in. Id cursus metus aliquam eleifend mi. Euismod quis viverra nibh cras pulvinar. Cursus metus aliquam eleifend mi. Ullamcorper morbi tincidunt ornare massa eget egestas.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '8', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 8'),
                    Object(u.b)(
                      'p',
                      null,
                      'Quam quisque id diam vel quam elementum pulvinar etiam non. Est ante in nibh mauris cursus mattis molestie. Id semper risus in hendrerit gravida rutrum quisque non. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '9', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 9'),
                    Object(u.b)(
                      'p',
                      null,
                      'Luctus venenatis lectus magna fringilla urna porttitor. Laoreet non curabitur gravida arcu ac tortor dignissim. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Eu facilisis sed odio morbi.'
                    )
                  )
                )
              ),
              Object(u.b)(
                'div',
                null,
                Object(u.b)('h3', null, 'Secondary'),
                Object(u.b)(
                  l.b,
                  {
                    stretch: !0,
                    marginBottom: 5,
                    height: '200px',
                    appearance: 'secondary',
                    css: 'background: #2b313e',
                    mdxType: 'Tabs',
                  },
                  Object(u.b)(
                    b.a,
                    { active: '1', mdxType: 'TabList' },
                    Object(u.b)(
                      r.a,
                      { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                      'Tab 1'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                      'Tab 2'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                      'Tab 3'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab4', uid: '4', mdxType: 'TabListButton' },
                      'Tab 4'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab5', uid: '5', mdxType: 'TabListButton' },
                      'Tab 5'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab6', uid: '6', mdxType: 'TabListButton' },
                      'Tab 6'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab7', uid: '7', mdxType: 'TabListButton' },
                      'Tab 7'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab8', uid: '8', mdxType: 'TabListButton' },
                      'Tab 8'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab9', uid: '9', mdxType: 'TabListButton' },
                      'Tab 9'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '1', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 1'),
                    Object(u.b)(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '2', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 2'),
                    Object(u.b)(
                      'p',
                      null,
                      'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '3', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 3'),
                    Object(u.b)(
                      'p',
                      null,
                      'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '4', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 4'),
                    Object(u.b)(
                      'p',
                      null,
                      'Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Et netus et malesuada fames ac. Cursus turpis massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Maecenas accumsan lacus vel facilisis volutpat est.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '5', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 5'),
                    Object(u.b)(
                      'p',
                      null,
                      'Id cursus metus aliquam eleifend mi in. Vestibulum morbi blandit cursus risus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Velit aliquet sagittis id consectetur. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '6', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 6'),
                    Object(u.b)(
                      'p',
                      null,
                      'Diam volutpat commodo sed egestas. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Elementum sagittis vitae et leo duis ut diam quam nulla. Eget duis at tellus at urna condimentum mattis.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '7', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 7'),
                    Object(u.b)(
                      'p',
                      null,
                      'Enim tortor at auctor urna nunc. Elementum tempus egestas sed sed risus pretium quam. Vitae congue eu consequat ac felis donec et. Eget nunc scelerisque viverra mauris in. Id cursus metus aliquam eleifend mi. Euismod quis viverra nibh cras pulvinar. Cursus metus aliquam eleifend mi. Ullamcorper morbi tincidunt ornare massa eget egestas.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '8', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 8'),
                    Object(u.b)(
                      'p',
                      null,
                      'Quam quisque id diam vel quam elementum pulvinar etiam non. Est ante in nibh mauris cursus mattis molestie. Id semper risus in hendrerit gravida rutrum quisque non. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '9', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 9'),
                    Object(u.b)(
                      'p',
                      null,
                      'Luctus venenatis lectus magna fringilla urna porttitor. Laoreet non curabitur gravida arcu ac tortor dignissim. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Eu facilisis sed odio morbi.'
                    )
                  )
                )
              ),
              Object(u.b)(
                'div',
                null,
                Object(u.b)('h3', null, 'Tertiary'),
                Object(u.b)(
                  l.b,
                  {
                    stretch: !0,
                    marginBottom: 5,
                    height: '200px',
                    appearance: 'tertiary',
                    css: 'background: #2b313e',
                    mdxType: 'Tabs',
                  },
                  Object(u.b)(
                    b.a,
                    { active: '1', mdxType: 'TabList' },
                    Object(u.b)(
                      r.a,
                      { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                      'Tab 1'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                      'Tab 2'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                      'Tab 3'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab4', uid: '4', mdxType: 'TabListButton' },
                      'Tab 4'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab5', uid: '5', mdxType: 'TabListButton' },
                      'Tab 5'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab6', uid: '6', mdxType: 'TabListButton' },
                      'Tab 6'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab7', uid: '7', mdxType: 'TabListButton' },
                      'Tab 7'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab8', uid: '8', mdxType: 'TabListButton' },
                      'Tab 8'
                    ),
                    Object(u.b)(
                      r.a,
                      { title: 'Tab9', uid: '9', mdxType: 'TabListButton' },
                      'Tab 9'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '1', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 1'),
                    Object(u.b)(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '2', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 2'),
                    Object(u.b)(
                      'p',
                      null,
                      'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '3', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 3'),
                    Object(u.b)(
                      'p',
                      null,
                      'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '4', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 4'),
                    Object(u.b)(
                      'p',
                      null,
                      'Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Et netus et malesuada fames ac. Cursus turpis massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Maecenas accumsan lacus vel facilisis volutpat est.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '5', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 5'),
                    Object(u.b)(
                      'p',
                      null,
                      'Id cursus metus aliquam eleifend mi in. Vestibulum morbi blandit cursus risus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Velit aliquet sagittis id consectetur. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '6', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 6'),
                    Object(u.b)(
                      'p',
                      null,
                      'Diam volutpat commodo sed egestas. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Elementum sagittis vitae et leo duis ut diam quam nulla. Eget duis at tellus at urna condimentum mattis.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '7', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 7'),
                    Object(u.b)(
                      'p',
                      null,
                      'Enim tortor at auctor urna nunc. Elementum tempus egestas sed sed risus pretium quam. Vitae congue eu consequat ac felis donec et. Eget nunc scelerisque viverra mauris in. Id cursus metus aliquam eleifend mi. Euismod quis viverra nibh cras pulvinar. Cursus metus aliquam eleifend mi. Ullamcorper morbi tincidunt ornare massa eget egestas.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '8', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 8'),
                    Object(u.b)(
                      'p',
                      null,
                      'Quam quisque id diam vel quam elementum pulvinar etiam non. Est ante in nibh mauris cursus mattis molestie. Id semper risus in hendrerit gravida rutrum quisque non. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum.'
                    )
                  ),
                  Object(u.b)(
                    o.a,
                    { uid: '9', padding: 5, mdxType: 'TabPanel' },
                    Object(u.b)('h4', null, 'Tab 9'),
                    Object(u.b)(
                      'p',
                      null,
                      'Luctus venenatis lectus magna fringilla urna porttitor. Laoreet non curabitur gravida arcu ac tortor dignissim. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Eu facilisis sed odio morbi.'
                    )
                  )
                )
              )
            )
          ),
          Object(u.b)('h2', { id: 'stack' }, 'Stack'),
          Object(u.b)(
            s.c,
            {
              __position: 3,
              __code:
                '<ThemeProvider>\n  <Tabs stacked height="200px" css="background: #2b313e" marginBottom={5}>\n    <TabList active="1">\n      <TabListButton title="Tab1" uid="1">\n        Tab 1\n      </TabListButton>\n      <TabListButton title="Tab2" uid="2">\n        Tab 2\n      </TabListButton>\n      <TabListButton title="Tab3" uid="3">\n        Tab 3\n      </TabListButton>\n    </TabList>\n    <TabPanel uid="1" padding={5}>\n      <h4>Tab 1</h4>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at\n        leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor,\n        quis fermentum orci tristique ut. Etiam tristique sollicitudin\n        feugiat.\n      </p>\n    </TabPanel>\n    <TabPanel uid="2" padding={5}>\n      <h4>Tab 2</h4>\n      <p>\n        In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et\n        malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at\n        risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur\n        libero. Maecenas pharetra convallis posuere morbi leo.\n      </p>\n    </TabPanel>\n    <TabPanel uid="3" padding={5}>\n      <h4>Tab 3</h4>\n      <p>\n        Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.\n        Dolor sit amet consectetur adipiscing elit pellentesque. Quisque\n        sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in\n        nulla posuere sollicitudin aliquam.\n      </p>\n    </TabPanel>\n  </Tabs>\n\n  <Tabs stacked height="200px" css="background: #2b313e">\n    <TabPanel uid="1" padding5="top left bottom">\n      <h4>Tab 1</h4>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at\n        leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor,\n        quis fermentum orci tristique ut. Etiam tristique sollicitudin\n        feugiat.\n      </p>\n    </TabPanel>\n    <TabPanel uid="2" padding5="top left bottom">\n      <h4>Tab 2</h4>\n      <p>\n        In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et\n        malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at\n        risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur\n        libero. Maecenas pharetra convallis posuere morbi leo.\n      </p>\n    </TabPanel>\n    <TabPanel uid="3" padding5="top left bottom">\n      <h4>Tab 3</h4>\n      <p>\n        Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.\n        Dolor sit amet consectetur adipiscing elit pellentesque. Quisque\n        sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in\n        nulla posuere sollicitudin aliquam.\n      </p>\n    </TabPanel>\n\n    <TabList active="1">\n      <TabListButton title="Tab1" uid="1">\n        Tab 1\n      </TabListButton>\n      <TabListButton title="Tab2" uid="2">\n        Tab 2\n      </TabListButton>\n      <TabListButton title="Tab3" uid="3">\n        Tab 3\n      </TabListButton>\n    </TabList>\n  </Tabs>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : a,
                Fragment: i.Fragment,
                Playground: s.c,
                Props: s.d,
                Tabs: l.b,
                TabList: b.a,
                TabListButton: r.a,
                TabPanel: o.a,
                ThemeProvider: c.a,
              },
              mdxType: 'Playground',
            },
            Object(u.b)(
              c.a,
              { mdxType: 'ThemeProvider' },
              Object(u.b)(
                l.b,
                {
                  stacked: !0,
                  height: '200px',
                  css: 'background: #2b313e',
                  marginBottom: 5,
                  mdxType: 'Tabs',
                },
                Object(u.b)(
                  b.a,
                  { active: '1', mdxType: 'TabList' },
                  Object(u.b)(
                    r.a,
                    { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                    'Tab 1'
                  ),
                  Object(u.b)(
                    r.a,
                    { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                    'Tab 2'
                  ),
                  Object(u.b)(
                    r.a,
                    { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                    'Tab 3'
                  )
                ),
                Object(u.b)(
                  o.a,
                  { uid: '1', padding: 5, mdxType: 'TabPanel' },
                  Object(u.b)('h4', null, 'Tab 1'),
                  Object(u.b)(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                  )
                ),
                Object(u.b)(
                  o.a,
                  { uid: '2', padding: 5, mdxType: 'TabPanel' },
                  Object(u.b)('h4', null, 'Tab 2'),
                  Object(u.b)(
                    'p',
                    null,
                    'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                  )
                ),
                Object(u.b)(
                  o.a,
                  { uid: '3', padding: 5, mdxType: 'TabPanel' },
                  Object(u.b)('h4', null, 'Tab 3'),
                  Object(u.b)(
                    'p',
                    null,
                    'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                  )
                )
              ),
              Object(u.b)(
                l.b,
                {
                  stacked: !0,
                  height: '200px',
                  css: 'background: #2b313e',
                  mdxType: 'Tabs',
                },
                Object(u.b)(
                  o.a,
                  {
                    uid: '1',
                    padding5: 'top left bottom',
                    mdxType: 'TabPanel',
                  },
                  Object(u.b)('h4', null, 'Tab 1'),
                  Object(u.b)(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                  )
                ),
                Object(u.b)(
                  o.a,
                  {
                    uid: '2',
                    padding5: 'top left bottom',
                    mdxType: 'TabPanel',
                  },
                  Object(u.b)('h4', null, 'Tab 2'),
                  Object(u.b)(
                    'p',
                    null,
                    'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                  )
                ),
                Object(u.b)(
                  o.a,
                  {
                    uid: '3',
                    padding5: 'top left bottom',
                    mdxType: 'TabPanel',
                  },
                  Object(u.b)('h4', null, 'Tab 3'),
                  Object(u.b)(
                    'p',
                    null,
                    'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                  )
                ),
                Object(u.b)(
                  b.a,
                  { active: '1', mdxType: 'TabList' },
                  Object(u.b)(
                    r.a,
                    { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                    'Tab 1'
                  ),
                  Object(u.b)(
                    r.a,
                    { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                    'Tab 2'
                  ),
                  Object(u.b)(
                    r.a,
                    { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                    'Tab 3'
                  )
                )
              )
            )
          ),
          Object(u.b)('h2', { id: 'apperance' }, 'Apperance'),
          Object(u.b)(
            s.c,
            {
              __position: 4,
              __code:
                '<ThemeProvider>\n  <div>\n    <h3>Accent</h3>\n    <div>\n      <h3>Primary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="accent"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n\n    <div>\n      <h3>Secondary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="secondary-accent"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n\n    <div>\n      <h3>Tertiary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="tertiary-accent"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n  </div>\n\n  <div>\n    <h3>Action</h3>\n    <div>\n      <h3>Primary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="action"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n\n    <div>\n      <h3>Secondary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="secondary-action"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n\n    <div>\n      <h3>Tertiary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="tertiary-action"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n  </div>\n\n  <div>\n    <h3>Danger</h3>\n    <div>\n      <h3>Primary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="danger"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n\n    <div>\n      <h3>Secondary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="secondary-danger"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n\n    <div>\n      <h3>Tertiary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="danger-tertiary-danger"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n  </div>\n\n  <div>\n    <h3>Success</h3>\n    <div>\n      <h3>Primary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="success"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n\n    <div>\n      <h3>Secondary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="secondary-success"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n\n    <div>\n      <h3>Tertiary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="tertiary-success"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n  </div>\n\n  <div>\n    <h3>Warning</h3>\n    <div>\n      <h3>Primary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="warning"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n\n    <div>\n      <h3>Secondary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="secondary-warning"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n\n    <div>\n      <h3>Tertiary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="tertiary-warning"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n  </div>\n\n  <div>\n    <h3>Disabled</h3>\n    <div>\n      <h3>Primary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="disabled"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n\n    <div>\n      <h3>Secondary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="secondary-disabled"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n\n    <div>\n      <h3>Tertiary</h3>\n      <Tabs\n        stretch\n        marginBottom={5}\n        height="200px"\n        appearance="tertiary-disabled"\n        css="background: #2b313e"\n      >\n        <TabList active="1">\n          <TabListButton title="Tab1" uid="1">\n            Tab 1\n          </TabListButton>\n          <TabListButton title="Tab2" uid="2">\n            Tab 2\n          </TabListButton>\n          <TabListButton title="Tab3" uid="3">\n            Tab 3\n          </TabListButton>\n        </TabList>\n\n        <TabPanel uid="1" padding={5}>\n          <h4>Tab 1</h4>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a\n            nisl at leo porta suscipit et vel diam. Maecenas venenatis\n            consectetur tortor, quis fermentum orci tristique ut. Etiam\n            tristique sollicitudin feugiat.\n          </p>\n        </TabPanel>\n        <TabPanel uid="2" padding={5}>\n          <h4>Tab 2</h4>\n          <p>\n            In eu mi bibendum neque. In ante metus dictum at. Senectus et\n            netus et malesuada fames ac. Ac tortor dignissim convallis aenean\n            et tortor at risus viverra. Pulvinar neque laoreet suspendisse\n            interdum consectetur libero. Maecenas pharetra convallis posuere\n            morbi leo.\n          </p>\n        </TabPanel>\n        <TabPanel uid="3" padding={5}>\n          <h4>Tab 3</h4>\n          <p>\n            Volutpat diam ut venenatis tellus in metus vulputate eu\n            scelerisque. Dolor sit amet consectetur adipiscing elit\n            pellentesque. Quisque sagittis purus sit amet volutpat consequat.\n            Aliquam eleifend mi in nulla posuere sollicitudin aliquam.\n          </p>\n        </TabPanel>\n      </Tabs>\n    </div>\n  </div>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : a,
                Fragment: i.Fragment,
                Playground: s.c,
                Props: s.d,
                Tabs: l.b,
                TabList: b.a,
                TabListButton: r.a,
                TabPanel: o.a,
                ThemeProvider: c.a,
              },
              mdxType: 'Playground',
            },
            Object(u.b)(
              c.a,
              { mdxType: 'ThemeProvider' },
              Object(u.b)(
                'div',
                null,
                Object(u.b)('h3', null, 'Accent'),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Primary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'accent',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Secondary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'secondary-accent',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Tertiary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'tertiary-accent',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                )
              ),
              Object(u.b)(
                'div',
                null,
                Object(u.b)('h3', null, 'Action'),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Primary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'action',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Secondary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'secondary-action',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Tertiary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'tertiary-action',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                )
              ),
              Object(u.b)(
                'div',
                null,
                Object(u.b)('h3', null, 'Danger'),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Primary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'danger',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Secondary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'secondary-danger',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Tertiary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'danger-tertiary-danger',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                )
              ),
              Object(u.b)(
                'div',
                null,
                Object(u.b)('h3', null, 'Success'),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Primary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'success',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Secondary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'secondary-success',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Tertiary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'tertiary-success',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                )
              ),
              Object(u.b)(
                'div',
                null,
                Object(u.b)('h3', null, 'Warning'),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Primary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'warning',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Secondary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'secondary-warning',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Tertiary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'tertiary-warning',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                )
              ),
              Object(u.b)(
                'div',
                null,
                Object(u.b)('h3', null, 'Disabled'),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Primary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'disabled',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Secondary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'secondary-disabled',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
                      )
                    )
                  )
                ),
                Object(u.b)(
                  'div',
                  null,
                  Object(u.b)('h3', null, 'Tertiary'),
                  Object(u.b)(
                    l.b,
                    {
                      stretch: !0,
                      marginBottom: 5,
                      height: '200px',
                      appearance: 'tertiary-disabled',
                      css: 'background: #2b313e',
                      mdxType: 'Tabs',
                    },
                    Object(u.b)(
                      b.a,
                      { active: '1', mdxType: 'TabList' },
                      Object(u.b)(
                        r.a,
                        { title: 'Tab1', uid: '1', mdxType: 'TabListButton' },
                        'Tab 1'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab2', uid: '2', mdxType: 'TabListButton' },
                        'Tab 2'
                      ),
                      Object(u.b)(
                        r.a,
                        { title: 'Tab3', uid: '3', mdxType: 'TabListButton' },
                        'Tab 3'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '1', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 1'),
                      Object(u.b)(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisl at leo porta suscipit et vel diam. Maecenas venenatis consectetur tortor, quis fermentum orci tristique ut. Etiam tristique sollicitudin feugiat.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '2', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 2'),
                      Object(u.b)(
                        'p',
                        null,
                        'In eu mi bibendum neque. In ante metus dictum at. Senectus et netus et malesuada fames ac. Ac tortor dignissim convallis aenean et tortor at risus viverra. Pulvinar neque laoreet suspendisse interdum consectetur libero. Maecenas pharetra convallis posuere morbi leo.'
                      )
                    ),
                    Object(u.b)(
                      o.a,
                      { uid: '3', padding: 5, mdxType: 'TabPanel' },
                      Object(u.b)('h4', null, 'Tab 3'),
                      Object(u.b)(
                        'p',
                        null,
                        'Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Dolor sit amet consectetur adipiscing elit pellentesque. Quisque sagittis purus sit amet volutpat consequat. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.'
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
          value: { name: 'MDXContent', filename: 'src/Tabs/tabs.mdx' },
        }),
        (p.isMDXComponent = !0)
    },
    './src/Tabs/tabs.theme.ts': function(e, t, a) {
      'use strict'
      a.d(t, 'd', function() {
        return i
      }),
        a.d(t, 'a', function() {
          return u
        }),
        a.d(t, 'b', function() {
          return s
        }),
        a.d(t, 'c', function() {
          return l
        })
      var n = a(
        './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
      )
      function i(e) {
        return {
          display: 'flex',
          flexDirection: e.stacked ? 'row' : 'column',
          justifyContent: 'center',
          overflow: 'hidden',
          alignItems: 'stretch',
          alignContent: 'stretch',
        }
      }
      function u(e) {
        return e.item ? { width: 'auto', flex: 'none' } : {}
      }
      function s(e) {
        return Object(n.a)(e), { overflow: 'auto hidden', whiteSpace: 'nowrap' }
      }
      function l(e) {
        return Object(n.a)(e), { overflow: 'hidden auto', flex: 1 }
      }
      i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'tabsTheme', filename: 'src/Tabs/tabs.theme.ts' },
        }),
        u &&
          u === Object(u) &&
          Object.isExtensible(u) &&
          Object.defineProperty(u, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tabsListButtonTheme',
              filename: 'src/Tabs/tabs.theme.ts',
            },
          }),
        s &&
          s === Object(s) &&
          Object.isExtensible(s) &&
          Object.defineProperty(s, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tabsListTheme',
              filename: 'src/Tabs/tabs.theme.ts',
            },
          }),
        l &&
          l === Object(l) &&
          Object.isExtensible(l) &&
          Object.defineProperty(l, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tabsPanelTheme',
              filename: 'src/Tabs/tabs.theme.ts',
            },
          })
    },
  },
])
//# sourceMappingURL=src-tabs-tabs.ba0686dcc6594edec57b.js.map

;(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    './src/ButtonGroup/ButtonGroup.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        l = n('./node_modules/react/index.js'),
        o = n.n(l),
        r = n('./src/Base/Base.tsx')
      function i(e) {
        var t = e.stacked
        return {
          display: 'inline-flex',
          position: 'relative',
          transition: e.theme.animation.easeMedium(),
          verticalAlign: 'middle',
          flexDirection: t ? 'column' : 'row',
        }
      }
      function s(e) {
        return e.stretch ? { width: '100%' } : {}
      }
      'undefined' !== typeof i &&
        i &&
        i === Object(i) &&
        Object.isExtensible(i) &&
        Object.defineProperty(i, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'buttonGroupTheme',
            filename: 'src/ButtonGroup/buttonGroup.theme.ts',
          },
        }),
        'undefined' !== typeof s &&
          s &&
          s === Object(s) &&
          Object.isExtensible(s) &&
          Object.defineProperty(s, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'buttonStretchGroupTheme',
              filename: 'src/ButtonGroup/buttonGroup.theme.ts',
            },
          }),
        n.d(t, 'c', function() {
          return b
        }),
        n.d(t, 'a', function() {
          return d
        })
      var u = o.a.createContext({})
      function b() {
        return Object(l.useContext)(u)
      }
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroupContext',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        }),
        b &&
          b === Object(b) &&
          Object.isExtensible(b) &&
          Object.defineProperty(b, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useButtonGroup',
              filename: 'src/ButtonGroup/ButtonGroup.tsx',
            },
          })
      var d = o.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          b = void 0 === n ? '' : n,
          d = (e.onClick, e.themed),
          m = void 0 === d ? [] : d,
          f = Object(c.a)(e, ['children', 'className', 'onClick', 'themed']),
          p = Object(l.useMemo)(
            function() {
              return 'ButtonGroup '.concat(b)
            },
            [b]
          ),
          j = Object(l.useMemo)(
            function() {
              return [i, s].concat(Object(a.a)(m))
            },
            [i, s, m]
          ),
          O = f.appearance,
          h = f.context,
          x = f.size,
          y = f.stretch,
          v = Object(l.useMemo)(
            function() {
              return { appearance: O, context: h, size: x, stretch: y }
            },
            [O, h, x, y]
          )
        return o.a.createElement(
          u.Provider,
          { value: v },
          o.a.createElement(
            r.b,
            Object.assign({ role: 'group', className: p, themed: j }, f),
            t
          )
        )
      })
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroup',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        })
      t.b = d
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroup',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        })
    },
    './src/ButtonIcon/buttonIcon.types.ts': function(e, t) {
      'undefined' !== typeof ButtonIconInterface &&
        ButtonIconInterface &&
        ButtonIconInterface === Object(ButtonIconInterface) &&
        Object.isExtensible(ButtonIconInterface) &&
        Object.defineProperty(ButtonIconInterface, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonIconInterface',
            filename: 'src/ButtonIcon/buttonIcon.types.ts',
          },
        })
    },
    './src/ButtonIcon/index.ts': function(e, t, n) {
      'use strict'
      var a = n('./src/ButtonIcon/ButtonIcon.tsx')
      n.d(t, 'ButtonIcon', function() {
        return a.a
      })
      n('./src/ButtonIcon/buttonIcon.types.ts')
    },
    './src/Checkbox/Checkbox.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        l = n('./node_modules/react/index.js'),
        o = n.n(l),
        r = n('./src/Base/index.tsx'),
        i = n('./node_modules/lodash/fp/upperFirst.js'),
        s = n.n(i)
      function u(e) {
        var t = e.appearance,
          n = e.color
        return n[t] || n.default
      }
      function b(e) {
        var t = e.appearance,
          n = e.theme,
          a = n.color,
          c = n.animation,
          l = n.border,
          o = n.unit
        return {
          position: 'relative',
          height: o[5],
          width: o[5],
          border: l['thick'.concat(s()(t))] || l.thin,
          color: '#fff',
          cursor: 'pointer',
          display: 'inline-block',
          top: '5px',
          input: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0,
            opacity: 0,
            cursor: 'inherit',
          },
          '.CheckboxBackground': {
            width: 'inherit',
            height: 'inherit',
            pointerEvents: 'none',
            position: 'relative',
            top: '-2px',
            left: '-2px',
          },
          '.CheckboxCheckmark': {
            strokeWidth: '3.12px',
            strokeDasharray: 29.7833385,
            opacity: 0,
            transform: 'scale(0)',
            position: 'absolute',
            top: 0,
            left: 0,
            transformOrigin: 'center center',
            transition: c.easeFast(),
          },
          '.CheckboxBackground, .CheckboxCheckmark': {
            transition: c.easeFast(),
          },
          'input:checked+.CheckboxBackground, input:indeterminate+.CheckboxBackground': {
            background: u({ appearance: t, color: a }),
            '.CheckboxCheckmark': { opacity: 1, transform: 'scale(0.7)' },
          },
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
            name: 'checkboxTheme',
            filename: 'src/Checkbox/checkbox.theme.ts',
          },
        }),
        n.d(t, 'a', function() {
          return d
        })
      var d = o.a.memo(function(e) {
        var t = e.checked,
          n = e.className,
          i = void 0 === n ? '' : n,
          s = e.id,
          u = e.name,
          d = e.onChange,
          m = e.themed,
          f = void 0 === m ? [] : m,
          p = Object(c.a)(e, [
            'checked',
            'className',
            'id',
            'name',
            'onChange',
            'themed',
          ]),
          j = Object(l.useMemo)(
            function() {
              return 'Checkbox '.concat(i)
            },
            [i]
          ),
          O = Object(l.useMemo)(
            function() {
              return [b].concat(Object(a.a)(f))
            },
            [b, f]
          ),
          h = Object(l.useMemo)(
            function() {
              return 'disabled' === p.appearance
            },
            [p.appearance]
          )
        return o.a.createElement(
          r.Base,
          Object.assign({ className: j, themed: O }, p),
          o.a.createElement('input', {
            checked: t,
            className: 'CheckboxInput',
            disabled: h,
            id: s,
            name: u,
            onChange: d,
            type: 'checkbox',
          }),
          o.a.createElement(
            'div',
            { className: 'CheckboxBackground' },
            o.a.createElement(
              'svg',
              { className: 'CheckboxCheckmark', viewBox: '0 0 24 24' },
              o.a.createElement('path', {
                className: 'mdc-checkbox__checkmark-path',
                fill: 'none',
                stroke: 'white',
                d: 'M1.73,12.91 8.1,19.28 22.79,4.59',
              })
            )
          )
        )
      })
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Checkbox', filename: 'src/Checkbox/Checkbox.tsx' },
        })
      t.b = d
      'undefined' !== typeof d &&
        d &&
        d === Object(d) &&
        Object.isExtensible(d) &&
        Object.defineProperty(d, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Checkbox', filename: 'src/Checkbox/Checkbox.tsx' },
        })
    },
    './src/Checkbox/checkbox.types.ts': function(e, t) {
      'undefined' !== typeof CheckboxInterface &&
        CheckboxInterface &&
        CheckboxInterface === Object(CheckboxInterface) &&
        Object.isExtensible(CheckboxInterface) &&
        Object.defineProperty(CheckboxInterface, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'CheckboxInterface',
            filename: 'src/Checkbox/checkbox.types.ts',
          },
        })
    },
    './src/Checkbox/index.ts': function(e, t, n) {
      'use strict'
      var a = n('./src/Checkbox/Checkbox.tsx')
      n.d(t, 'Checkbox', function() {
        return a.a
      })
      n('./src/Checkbox/checkbox.types.ts')
    },
    './src/Flex/Flex.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        l = n('./node_modules/react/index.js'),
        o = n.n(l),
        r = n('./node_modules/lodash/kebabCase.js'),
        i = n.n(r)
      function s(e) {
        var t = e.alignItems,
          n = e.basis,
          a = e.display,
          c = e.grow,
          l = e.justifyContent,
          o = e.shrink,
          r = e.wrap
        return {
          display: a || 'flex',
          basis: n ? ''.concat(n) : '',
          grow: c ? ''.concat(c) : '',
          shrink: o ? ''.concat(o) : '',
          justifyContent: (l && [i()(l)]) || '',
          alignItems: (t && [i()(t)]) || '',
          flexWrap: (r && [i()(r)]) || '',
        }
      }
      function u(e) {
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
        'undefined' !== typeof u &&
          u &&
          u === Object(u) &&
          Object.isExtensible(u) &&
          Object.defineProperty(u, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'flexDirectionTheme',
              filename: 'src/Flex/flex.theme.ts',
            },
          })
      var b = n('./src/Base/index.tsx')
      n.d(t, 'a', function() {
        return d
      })
      var d = o.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          r = void 0 === n ? '' : n,
          i = e.themed,
          d = void 0 === i ? [] : i,
          m = Object(c.a)(e, ['children', 'className', 'themed']),
          f = Object(l.useMemo)(
            function() {
              return 'Flex '.concat(r)
            },
            [r]
          ),
          p = Object(l.useMemo)(
            function() {
              return [s, u].concat(Object(a.a)(d))
            },
            [s, u, d]
          )
        return o.a.createElement(
          b.Base,
          Object.assign({ className: f, themed: p }, m),
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
    './src/MaterialIcons/CaretRight.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return o
      })
      var a = n('./node_modules/react/index.js'),
        c = n.n(a),
        l = n('./src/Icon/index.ts')
      function o(e) {
        return c.a.createElement(
          l.Icon,
          Object.assign({ viewBox: '0 0 480 480' }, e),
          c.a.createElement('path', {
            id: 'path4',
            d: 'M 190,340 290,240 190,140 Z',
          })
        )
      }
      o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'CaretRight',
            filename: 'src/MaterialIcons/CaretRight.tsx',
          },
        }),
        (t.b = o),
        o &&
          o === Object(o) &&
          Object.isExtensible(o) &&
          Object.defineProperty(o, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CaretRight',
              filename: 'src/MaterialIcons/CaretRight.tsx',
            },
          })
    },
    './src/MaterialIcons/Code.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return o
      })
      var a = n('./node_modules/react/index.js'),
        c = n.n(a),
        l = n('./src/Icon/index.ts')
      function o(e) {
        return c.a.createElement(
          l.Icon,
          e,
          c.a.createElement('path', {
            d:
              'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
          })
        )
      }
      o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Code', filename: 'src/MaterialIcons/Code.tsx' },
        }),
        (t.b = o),
        o &&
          o === Object(o) &&
          Object.isExtensible(o) &&
          Object.defineProperty(o, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Code', filename: 'src/MaterialIcons/Code.tsx' },
          })
    },
    './src/MaterialIcons/PlayCircle.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return o
      })
      var a = n('./node_modules/react/index.js'),
        c = n.n(a),
        l = n('./src/Icon/index.ts')
      function o(e) {
        return c.a.createElement(
          l.Icon,
          e,
          c.a.createElement('path', {
            d:
              'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z',
          })
        )
      }
      o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'PlayCircle',
            filename: 'src/MaterialIcons/PlayCircle.tsx',
          },
        }),
        (t.b = o),
        o &&
          o === Object(o) &&
          Object.isExtensible(o) &&
          Object.defineProperty(o, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'PlayCircle',
              filename: 'src/MaterialIcons/PlayCircle.tsx',
            },
          })
    },
    './src/MaterialIcons/ViewList.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return o
      })
      var a = n('./node_modules/react/index.js'),
        c = n.n(a),
        l = n('./src/Icon/index.ts')
      function o(e) {
        return c.a.createElement(
          l.Icon,
          e,
          c.a.createElement('path', {
            d:
              'M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z',
          })
        )
      }
      o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ViewList',
            filename: 'src/MaterialIcons/ViewList.tsx',
          },
        }),
        (t.b = o),
        o &&
          o === Object(o) &&
          Object.isExtensible(o) &&
          Object.defineProperty(o, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ViewList',
              filename: 'src/MaterialIcons/ViewList.tsx',
            },
          })
    },
    './src/Table/table.mdx': function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        l = n.n(c),
        o = n('./node_modules/@mdx-js/react/dist/index.es.js'),
        r = n('./node_modules/docz/dist/index.esm.js'),
        i = n('./src/Flex/Flex.tsx'),
        s = n(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        u = n('./src/ThemeContext/ThemeProvider.tsx'),
        b = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        d = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        m = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        )
      function f(e, t, n) {
        var a = Object(c.useState)(t),
          l = Object(m.a)(a, 2),
          o = l[0],
          r = l[1],
          i =
            'sessionStorage' === n ? window.sessionStorage : window.localStorage
        Object(c.useEffect)(function() {
          var n = i.getItem(e),
            a = n ? JSON.parse(n) : n
          s(a || t)
        }, [])
        var s = Object(c.useCallback)(
          function(t) {
            if (t !== o) {
              var n = JSON.stringify(t)
              return r(t), i.setItem(e, n)
            }
          },
          [o, r]
        )
        function u() {
          r(void 0), i.removeItem(e)
        }
        return Object(c.useMemo)(
          function() {
            return { state: o, setItem: s, removeItem: u }
          },
          [[o, s, u]]
        )
      }
      f &&
        f === Object(f) &&
        Object.isExtensible(f) &&
        Object.defineProperty(f, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'useCacheState',
            filename: 'src/reusable/cacheState/useCacheState.ts',
          },
        })
      var p = n('./src/Base/Base.tsx'),
        j = l.a.memo(function(e) {
          var t = e.items
          return l.a.createElement(
            'pre',
            null,
            l.a.createElement(
              'code',
              { className: 'language-javascript' },
              JSON.stringify(t, null, 2)
            )
          )
        })
      'undefined' !== typeof j &&
        j &&
        j === Object(j) &&
        Object.isExtensible(j) &&
        Object.defineProperty(j, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'JsonView', filename: 'src/Table/JsonView.tsx' },
        })
      'undefined' !== typeof j &&
        j &&
        j === Object(j) &&
        Object.isExtensible(j) &&
        Object.defineProperty(j, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'JsonView', filename: 'src/Table/JsonView.tsx' },
        })
      var O = n('./src/MaterialIcons/Copy.tsx'),
        h = n('./src/MaterialIcons/Delete.tsx'),
        x = n('./src/MaterialIcons/Edit.tsx'),
        y = n('./src/MaterialIcons/Download.tsx'),
        v = n('./src/ButtonIcon/index.ts'),
        T = l.a.memo(function(e) {
          var t = e.icon,
            n = e.uid,
            o = Object(a.a)(e, ['icon', 'uid']),
            r = Object(c.useMemo)(
              function() {
                return t
              },
              [t]
            )
          return l.a.createElement(
            v.ButtonIcon,
            Object.assign({ 'data-uid': n, icon: r }, o)
          )
        })
      function _(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          o = Object(c.useMemo)(
            function() {
              return O.a
            },
            [O.a]
          )
        return l.a.createElement(
          T,
          Object.assign({ name: 'copy', onClick: t, icon: o, title: 'Copy' }, n)
        )
      }
      'undefined' !== typeof T &&
        T &&
        T === Object(T) &&
        Object.isExtensible(T) &&
        Object.defineProperty(T, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableButton', filename: 'src/Table/TableButton.tsx' },
        }),
        _ &&
          _ === Object(_) &&
          Object.isExtensible(_) &&
          Object.defineProperty(_, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableCopyButton',
              filename: 'src/Table/TableButton.tsx',
            },
          })
      var g = function(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          o = Object(c.useMemo)(
            function() {
              return h.a
            },
            [h.a]
          )
        return l.a.createElement(
          T,
          Object.assign(
            { name: 'delete', onClick: t, icon: o, title: 'Delete' },
            n
          )
        )
      }
      g &&
        g === Object(g) &&
        Object.isExtensible(g) &&
        Object.defineProperty(g, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableDeleteButton',
            filename: 'src/Table/TableButton.tsx',
          },
        })
      var C = function(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          o = Object(c.useMemo)(
            function() {
              return y.a
            },
            [y.a]
          )
        return l.a.createElement(
          T,
          Object.assign(
            { name: 'Download', onClick: t, icon: o, title: 'Download' },
            n
          )
        )
      }
      C &&
        C === Object(C) &&
        Object.isExtensible(C) &&
        Object.defineProperty(C, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableDownloadButton',
            filename: 'src/Table/TableButton.tsx',
          },
        })
      var E = function(e) {
        var t = e.children,
          n = e.uid,
          o = Object(a.a)(e, ['children', 'uid']),
          r = Object(c.useMemo)(
            function() {
              return x.a
            },
            [x.a]
          )
        return l.a.createElement(
          T,
          Object.assign(
            { as: 'a', name: 'Edit', icon: r, title: 'Edit', 'data-uid': n },
            o
          ),
          t
        )
      }
      E &&
        E === Object(E) &&
        Object.isExtensible(E) &&
        Object.defineProperty(E, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableEditLink',
            filename: 'src/Table/TableButton.tsx',
          },
        })
      'undefined' !== typeof T &&
        T &&
        T === Object(T) &&
        Object.isExtensible(T) &&
        Object.defineProperty(T, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableButton', filename: 'src/Table/TableButton.tsx' },
        })
      var k = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        I = n('./src/Base/index.tsx'),
        P = n('./src/MaterialIcons/CaretRight.tsx')
      function w() {
        var e = Object(k.a)(['\n  ', '\n'])
        return (
          (w = function() {
            return e
          }),
          e
        )
      }
      var S = l.a.createContext({})
      function B() {
        return Object(c.useContext)(S)
      }
      function H(e) {
        var t = e.children,
          n = e.checked,
          o = void 0 !== n && n,
          r = e.expanded,
          i = void 0 !== r && r,
          s = e.tableName,
          u = e.data,
          m = Object(a.a)(e, [
            'children',
            'checked',
            'expanded',
            'tableName',
            'data',
          ]),
          p = f(''.concat(s, '_').concat(u.id, '_checked'), o),
          j = p.state,
          O = p.setItem,
          h = f(''.concat(s, '_').concat(u.id, '_expanded'), i),
          x = h.state,
          y = h.setItem
        Object(c.useEffect)(
          function() {
            O(o)
          },
          [o]
        ),
          Object(c.useEffect)(
            function() {
              y(i)
            },
            [i]
          )
        var v = l.a.useRef(function() {
            return null
          }),
          T = l.a.useRef(!1),
          _ = Object(c.useMemo)(
            function() {
              return t.reduce(function(e, t) {
                return 'detail' === t.props.uid
                  ? ((v.current = function() {
                      return t
                    }),
                    (T.current = !0),
                    e)
                  : [].concat(Object(d.a)(e), [t])
              }, [])
            },
            [t, v]
          ),
          g = Object(c.useMemo)(
            function() {
              return Object(b.a)({}, m, {
                data: u,
                checked: j,
                expanded: x,
                setChecked: O,
                setExpanded: y,
              })
            },
            [j, O, x, y, m]
          )
        return l.a.createElement(
          S.Provider,
          { value: g },
          l.a.createElement(
            'tr',
            null,
            T.current && l.a.createElement(A, { expanded: x, setExpanded: y }),
            _
          ),
          l.a.createElement(
            D,
            { expanded: x, colSpan: t.length },
            l.a.createElement(v.current, null)
          )
        )
      }
      'undefined' !== typeof S &&
        S &&
        S === Object(S) &&
        Object.isExtensible(S) &&
        Object.defineProperty(S, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableColumnContext',
            filename: 'src/Table/TableColumnContext.tsx',
          },
        }),
        B &&
          B === Object(B) &&
          Object.isExtensible(B) &&
          Object.defineProperty(B, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useTableColumn',
              filename: 'src/Table/TableColumnContext.tsx',
            },
          }),
        H &&
          H === Object(H) &&
          Object.isExtensible(H) &&
          Object.defineProperty(H, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableColumnProvider',
              filename: 'src/Table/TableColumnContext.tsx',
            },
          })
      var D = l.a.memo(function(e) {
          var t = e.children,
            n = e.colSpan,
            a = e.expanded,
            o = Object(c.useMemo)(function() {
              return {
                expanded: {
                  height: 'auto',
                  opacity: 1,
                  delay: 100,
                  applyAtStart: { display: 'block' },
                },
                collapsed: {
                  height: 0,
                  opacity: 0,
                  delay: 300,
                  applyAtEnd: { display: 'none' },
                },
              }
            }, [])
          return l.a.createElement(
            'tr',
            {
              className: 'RowDetail',
              style: { display: a ? 'table-row' : 'none' },
            },
            l.a.createElement(
              'td',
              { colSpan: n },
              l.a.createElement(
                I.Base,
                { animate: o, state: a ? 'expanded' : 'collapsed', as: 'div' },
                t
              )
            )
          )
        }),
        M = s.default.button(w(), function(e) {
          var t = e.expanded
          return '\n  background: none;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 30px;\n  margin: 3px;\n  outline: none;\n  padding-right: 0;\n  text-align: left;\n  transform: rotate('.concat(
            t ? '45deg' : '0deg',
            ');\n  transition: all 0.2s ease;\n\n  &:hover,\n  &:active {\n    background: none;\n    border-bottom: #0000;\n  }\n'
          )
        }),
        A = l.a.memo(function(e) {
          var t = e.expanded,
            n = e.setExpanded,
            c = Object(a.a)(e, ['expanded', 'setExpanded']),
            o = l.a.useCallback(
              function(e) {
                e.preventDefault(), n(!t)
              },
              [n, t]
            )
          return l.a.createElement(
            'td',
            c,
            l.a.createElement(
              M,
              { onClick: o, expanded: t },
              l.a.createElement(P.a, { alt: 'indicator' })
            )
          )
        }),
        R = l.a.memo(function(e) {
          var t = e.baseRoute,
            n = void 0 === t ? '' : t,
            o = e.children,
            r = e.data,
            i = e.dispatch,
            s = e.onAdd,
            u = e.onDeleteSelected,
            b = e.itemsToArray,
            d = e.loading,
            m = e.onRowClick,
            f = (e.rows, e.selected),
            p = e.tableName,
            j = Object(a.a)(e, [
              'baseRoute',
              'children',
              'data',
              'dispatch',
              'onAdd',
              'onDeleteSelected',
              'itemsToArray',
              'loading',
              'onRowClick',
              'rows',
              'selected',
              'tableName',
            ]),
            O = Object(c.useCallback)(
              function(e) {
                i({
                  type: 'TOGGLE_SELECTED_ITEMS',
                  selected: [e.currentTarget.name],
                })
              },
              [i]
            ),
            h = Object(c.useCallback)(function(e) {
              e.preventDefault()
            }, []),
            x = Object(c.useCallback)(
              function(e) {
                e.preventDefault()
                var t = e.currentTarget.dataset.uid
                m && m(e, t)
              },
              [m]
            ),
            y = Object(c.useMemo)(
              function() {
                return {
                  Copy: function(e) {
                    return l.a.createElement(_, e)
                  },
                  Edit: function(e) {
                    return l.a.createElement(
                      E,
                      Object.assign({}, e, { href: ''.concat(n, '/edit') })
                    )
                  },
                  Delete: function(e) {
                    return l.a.createElement(
                      g,
                      Object.assign({ onClick: h }, e)
                    )
                  },
                  Download: function(e) {
                    return l.a.createElement(C, e)
                  },
                  dispatch: i,
                  itemsToArray: b,
                  loading: d,
                  onAdd: s,
                  onChange: O,
                  onDelete: h,
                  onDeleteSelected: u,
                  onRowClick: x,
                  selected: f,
                }
              },
              [_, g, C, E, i, O, h, x, b, d, s, u, f]
            ),
            v = Object(c.useMemo)(
              function() {
                return r.map(function(e, t) {
                  return l.a.createElement(
                    H,
                    Object.assign(
                      {
                        key: e.id,
                        data: e,
                        checked: f.includes(e.id),
                        index: t,
                        tableName: p,
                      },
                      y
                    ),
                    o
                  )
                })
              },
              [o, r, y]
            )
          return l.a.createElement(
            'tbody',
            Object.assign({ className: 'TableBody' }, j),
            v
          )
        })
      'undefined' !== typeof R &&
        R &&
        R === Object(R) &&
        Object.isExtensible(R) &&
        Object.defineProperty(R, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableBody', filename: 'src/Table/TableBody.tsx' },
        })
      var N = R
      'undefined' !== typeof R &&
        R &&
        R === Object(R) &&
        Object.isExtensible(R) &&
        Object.defineProperty(R, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableBody', filename: 'src/Table/TableBody.tsx' },
        })
      var V = l.a.createContext({})
      function L() {
        return Object(c.useContext)(V)
      }
      function G(e) {
        var t = e.allSelected,
          n = void 0 !== t && t,
          a = e.children,
          o = e.data,
          r = e.onAllSelectedChange,
          i = Object(c.useMemo)(
            function() {
              return { allSelected: n, data: o, onAllSelectedChange: r }
            },
            [n, r]
          )
        return l.a.createElement(V.Provider, { value: i }, a)
      }
      'undefined' !== typeof V &&
        V &&
        V === Object(V) &&
        Object.isExtensible(V) &&
        Object.defineProperty(V, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableHeadingsContext',
            filename: 'src/Table/TableHeadingsContext.tsx',
          },
        }),
        L &&
          L === Object(L) &&
          Object.isExtensible(L) &&
          Object.defineProperty(L, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useTableHeading',
              filename: 'src/Table/TableHeadingsContext.tsx',
            },
          }),
        G &&
          G === Object(G) &&
          Object.isExtensible(G) &&
          Object.defineProperty(G, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableHeadingsProvider',
              filename: 'src/Table/TableHeadingsContext.tsx',
            },
          })
      var z = l.a.memo(function(e) {
        var t = e.allSelected,
          n = e.baseRoute,
          o = void 0 === n ? '' : n,
          r = e.children,
          i = e.data,
          s = e.dispatch,
          u = e.itemsToArray,
          b = e.loading,
          m = e.onAdd,
          f = e.onAllSelectedChange,
          p = e.onDeleteSelected,
          j = e.selected,
          O = e.tableName,
          h = Object(a.a)(e, [
            'allSelected',
            'baseRoute',
            'children',
            'data',
            'dispatch',
            'itemsToArray',
            'loading',
            'onAdd',
            'onAllSelectedChange',
            'onDeleteSelected',
            'selected',
            'tableName',
          ]),
          x = Object(c.useMemo)(
            function() {
              return l.a.createElement(
                'thead',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  r.reduce(function(e, t, n) {
                    var a = t.props,
                      c = a.heading
                    return 'detail' === a.uid
                      ? [l.a.createElement('th', { key: n })].concat(
                          Object(d.a)(e)
                        )
                      : [].concat(Object(d.a)(e), [
                          l.a.createElement('th', { key: n }, c),
                        ])
                  }, [])
                )
              )
            },
            [r]
          )
        return l.a.createElement(
          c.Fragment,
          null,
          l.a.createElement(
            G,
            { allSelected: t, data: i, onAllSelectedChange: f },
            x,
            l.a.createElement(
              N,
              Object.assign(
                {
                  baseRoute: o,
                  className: 'TableView',
                  dispatch: s,
                  onAdd: m,
                  onDeleteSelected: p,
                  tableName: O,
                  loading: b,
                  selected: j,
                  itemsToArray: u,
                  data: i,
                },
                h
              ),
              r
            )
          )
        )
      })
      'undefined' !== typeof z &&
        z &&
        z === Object(z) &&
        Object.isExtensible(z) &&
        Object.defineProperty(z, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableView', filename: 'src/Table/TableView.tsx' },
        })
      'undefined' !== typeof z &&
        z &&
        z === Object(z) &&
        Object.isExtensible(z) &&
        Object.defineProperty(z, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableView', filename: 'src/Table/TableView.tsx' },
        })
      var F = n(
        './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
      )
      function J(e) {
        return { height: e.height || '100%', overflow: 'auto' }
      }
      function W(e) {
        var t = e.condensed,
          n = e.hover,
          a = e.theme,
          c = a.animation,
          l = a.border,
          o = a.color,
          r = a.elevate,
          i = a.unit
        return {
          borderCollapse: 'collapse',
          transition: c.easeMedium(),
          'td, th': {
            lineHeight: t ? 2 : 2.5,
            padding: 0,
            '&:first-child': { paddingLeft: i[4] },
            '&:last-child': { paddingRight: i[4] },
          },
          td: { borderTop: l.thin },
          'tr:hover': {
            background: n ? o['grey-800'] : '',
            boxShadow: n ? r[2] : '',
          },
          '.TableView': {
            '.RowDetail >td': { padding: '0 0 '.concat(i[7], ' 0') },
          },
          a: {
            background: 'none',
            display: 'block',
            height: '100%',
            marginRight: '3px',
            border: l.thinTransparent,
          },
          'a:hover, a:active': {
            background: 'none',
            border: l.thinTransparent,
            color: o.link,
          },
        }
      }
      function X(e) {
        return Object(F.a)(e.theme), { height: 0, visibility: 'hidden' }
      }
      function U(e) {
        return Object(F.a)(e.theme), { display: 'flex', marginLeft: 'auto' }
      }
      function Z(e) {
        var t = e.theme.unit
        return { padding: ''.concat(t[2], ' 0') }
      }
      function q(e) {
        var t = e.theme,
          n = t.color,
          a = t.unit
        return {
          background: n.active,
          padding: ''.concat(a[2], ' ').concat(a[4]),
        }
      }
      J &&
        J === Object(J) &&
        Object.isExtensible(J) &&
        Object.defineProperty(J, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'tableContainerTheme',
            filename: 'src/Table/table.theme.ts',
          },
        }),
        'undefined' !== typeof W &&
          W &&
          W === Object(W) &&
          Object.isExtensible(W) &&
          Object.defineProperty(W, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'tableTheme', filename: 'src/Table/table.theme.ts' },
          }),
        'undefined' !== typeof X &&
          X &&
          X === Object(X) &&
          Object.isExtensible(X) &&
          Object.defineProperty(X, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableCaptionTheme',
              filename: 'src/Table/table.theme.ts',
            },
          }),
        'undefined' !== typeof U &&
          U &&
          U === Object(U) &&
          Object.isExtensible(U) &&
          Object.defineProperty(U, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableViewsButtonTheme',
              filename: 'src/Table/table.theme.ts',
            },
          }),
        Z &&
          Z === Object(Z) &&
          Object.isExtensible(Z) &&
          Object.defineProperty(Z, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableToolbarTheme',
              filename: 'src/Table/table.theme.ts',
            },
          }),
        'undefined' !== typeof q &&
          q &&
          q === Object(q) &&
          Object.isExtensible(q) &&
          Object.defineProperty(q, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableSelectedToolbarTheme',
              filename: 'src/Table/table.theme.ts',
            },
          })
      var K = function(e) {
        var t = e.children,
          n = e.className,
          o = e.themed,
          r = Object(a.a)(e, ['children', 'className', 'themed']),
          i = Object(c.useMemo)(
            function() {
              return 'TableCaption '.concat(n)
            },
            [n]
          ),
          s = Object(c.useMemo)(
            function() {
              return [X].concat(Object(d.a)(o))
            },
            [X, o]
          )
        return l.a.createElement(
          p.b,
          Object.assign({ as: 'caption', className: i, themed: s }, r),
          t
        )
      }
      K &&
        K === Object(K) &&
        Object.isExtensible(K) &&
        Object.defineProperty(K, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableCaption',
            filename: 'src/Table/TableCaption.tsx',
          },
        }),
        (K.defaultProps = { className: '', themed: [] })
      K &&
        K === Object(K) &&
        Object.isExtensible(K) &&
        Object.defineProperty(K, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableCaption',
            filename: 'src/Table/TableCaption.tsx',
          },
        })
      var Q = n('./src/ButtonIcon/ButtonIcon.tsx'),
        Y = function(e) {
          var t = e.onClick,
            n = Object(a.a)(e, ['onClick']),
            o = Object(c.useCallback)(
              function(e) {
                e.preventDefault(), t && t(e)
              },
              [t]
            ),
            r = Object(c.useMemo)(
              function() {
                return h.a
              },
              [h.a]
            )
          return l.a.createElement(
            Q.b,
            Object.assign(
              {
                alt: 'delete',
                appearance: 'active',
                uid: 'delete',
                onClick: o,
                icon: r,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              n
            ),
            'Delete'
          )
        }
      Y &&
        Y === Object(Y) &&
        Object.isExtensible(Y) &&
        Object.defineProperty(Y, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDeleteButton',
            filename: 'src/Table/ToolbarDeleteButton.tsx',
          },
        })
      Y &&
        Y === Object(Y) &&
        Object.isExtensible(Y) &&
        Object.defineProperty(Y, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDeleteButton',
            filename: 'src/Table/ToolbarDeleteButton.tsx',
          },
        })
      var $ = n('./src/Toolbar/Toolbar.tsx')
      function ee() {
        var e = Object(k.a)(['\n  display: inline-block;\n'])
        return (
          (ee = function() {
            return e
          }),
          e
        )
      }
      var te = s.default.span(ee()),
        ne = l.a.memo(function(e) {
          var t = e.className,
            n = void 0 === t ? '' : t,
            o = e.selected,
            r = e.handleDeleteSelected,
            i = e.themed,
            s = void 0 === i ? [] : i,
            u = Object(a.a)(e, [
              'className',
              'selected',
              'handleDeleteSelected',
              'themed',
            ]),
            b = Object(c.useMemo)(
              function() {
                return 'TableSelectToolbar '.concat(n)
              },
              [n]
            ),
            m = Object(c.useMemo)(
              function() {
                return [q].concat(Object(d.a)(s))
              },
              [q, s]
            )
          return l.a.createElement(
            $.a,
            Object.assign({ className: b, themed: m }, u),
            l.a.createElement(te, null, o, ' selected '),
            l.a.createElement(Y, {
              alt: 'delete',
              onClick: r,
              title: 'Delete Collection',
            })
          )
        })
      'undefined' !== typeof ne &&
        ne &&
        ne === Object(ne) &&
        Object.isExtensible(ne) &&
        Object.defineProperty(ne, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'SelectToolbar',
            filename: 'src/Table/SelectToolbar.tsx',
          },
        })
      var ae = n('./src/MaterialIcons/Plus.tsx'),
        ce = function(e) {
          var t = e.onClick,
            n = Object(a.a)(e, ['onClick']),
            o = Object(c.useCallback)(
              function(e) {
                e.preventDefault(), t && t(e)
              },
              [t]
            ),
            r = Object(c.useMemo)(
              function() {
                return ae.a
              },
              [ae.a]
            )
          return l.a.createElement(
            Q.b,
            Object.assign(
              {
                as: 'a',
                alt: 'add',
                appearance: 'active',
                uid: 'add',
                onClick: o,
                icon: r,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              n
            ),
            'Add'
          )
        }
      ce &&
        ce === Object(ce) &&
        Object.isExtensible(ce) &&
        Object.defineProperty(ce, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarAddButton',
            filename: 'src/Table/ToolbarAddButton.tsx',
          },
        })
      ce &&
        ce === Object(ce) &&
        Object.isExtensible(ce) &&
        Object.defineProperty(ce, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarAddButton',
            filename: 'src/Table/ToolbarAddButton.tsx',
          },
        })
      var le = n('./node_modules/react-copy-to-clipboard/lib/index.js'),
        oe = function(e) {
          var t = e.data,
            n = e.onClick,
            o = Object(a.a)(e, ['data', 'onClick']),
            r = Object(c.useMemo)(
              function() {
                return 'string' === typeof t ? t : JSON.stringify(t, null, 2)
              },
              [t]
            ),
            i = Object(c.useCallback)(
              function(e) {
                e.preventDefault(), n && n(e)
              },
              [n]
            ),
            s = Object(c.useMemo)(
              function() {
                return O.a
              },
              [O.a]
            )
          return l.a.createElement(
            le.CopyToClipboard,
            { text: r, copy: i },
            l.a.createElement(
              Q.b,
              Object.assign(
                {
                  alt: 'copy',
                  appearance: 'active',
                  uid: 'copy',
                  icon: s,
                  css:
                    '\n          svg.Icon {\n            padding-right: 5px;\n          }\n        ',
                },
                o
              ),
              'Copy'
            )
          )
        }
      oe &&
        oe === Object(oe) &&
        Object.isExtensible(oe) &&
        Object.defineProperty(oe, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarCopyButton',
            filename: 'src/Table/ToolbarCopyButton.tsx',
          },
        })
      oe &&
        oe === Object(oe) &&
        Object.isExtensible(oe) &&
        Object.defineProperty(oe, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarCopyButton',
            filename: 'src/Table/ToolbarCopyButton.tsx',
          },
        })
      var re = n('./node_modules/js-file-download/file-download.js'),
        ie = n.n(re),
        se = function(e) {
          var t = e.onClick,
            n = e.data,
            o = e.fileName,
            r = Object(a.a)(e, ['onClick', 'data', 'fileName']),
            i = Object(c.useMemo)(
              function() {
                return 'string' === typeof n ? n : JSON.stringify(n, null, 2)
              },
              [n]
            ),
            s = Object(c.useCallback)(
              function(e) {
                e.preventDefault(), i && ie()(i, o), t && t(e)
              },
              [t]
            ),
            u = Object(c.useMemo)(
              function() {
                return y.a
              },
              [y.a]
            )
          return l.a.createElement(
            Q.b,
            Object.assign(
              {
                alt: 'download',
                appearance: 'active',
                uid: 'delete',
                onClick: s,
                icon: u,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              r
            ),
            'Download'
          )
        }
      se &&
        se === Object(se) &&
        Object.isExtensible(se) &&
        Object.defineProperty(se, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDownloadButton',
            filename: 'src/Table/ToolbarDownloadButton.tsx',
          },
        })
      se &&
        se === Object(se) &&
        Object.isExtensible(se) &&
        Object.defineProperty(se, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDownloadButton',
            filename: 'src/Table/ToolbarDownloadButton.tsx',
          },
        })
      var ue = function(e) {
        var t = e.onClick,
          n = Object(a.a)(e, ['onClick']),
          o = Object(c.useCallback)(
            function(e) {
              e.preventDefault(), t && t(e)
            },
            [t]
          ),
          r = Object(c.useMemo)(
            function() {
              return x.a
            },
            [x.a]
          )
        return l.a.createElement(
          Q.b,
          Object.assign(
            {
              as: 'a',
              alt: 'edit',
              appearance: 'active',
              uid: 'edit',
              onClick: o,
              icon: r,
              css:
                '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
            },
            n
          ),
          'Edit'
        )
      }
      ue &&
        ue === Object(ue) &&
        Object.isExtensible(ue) &&
        Object.defineProperty(ue, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarEditButton',
            filename: 'src/Table/ToolbarEditButton.tsx',
          },
        })
      ue &&
        ue === Object(ue) &&
        Object.isExtensible(ue) &&
        Object.defineProperty(ue, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarEditButton',
            filename: 'src/Table/ToolbarEditButton.tsx',
          },
        })
      var be = n('./src/MaterialIcons/PlayCircle.tsx'),
        de = function(e) {
          var t = e.onClick,
            n = Object(a.a)(e, ['onClick']),
            o = Object(c.useCallback)(
              function(e) {
                e.preventDefault(), t && t(e)
              },
              [t]
            ),
            r = Object(c.useMemo)(
              function() {
                return be.a
              },
              [be.a]
            )
          return l.a.createElement(
            Q.b,
            Object.assign(
              {
                alt: 'execute',
                appearance: 'active',
                uid: 'execute',
                onClick: o,
                icon: r,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              n
            ),
            'Run'
          )
        }
      de &&
        de === Object(de) &&
        Object.isExtensible(de) &&
        Object.defineProperty(de, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarExecuteButton',
            filename: 'src/Table/ToolbarExecuteButton.tsx',
          },
        })
      de &&
        de === Object(de) &&
        Object.isExtensible(de) &&
        Object.defineProperty(de, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarExecuteButton',
            filename: 'src/Table/ToolbarExecuteButton.tsx',
          },
        })
      var me = n('./src/ButtonGroup/ButtonGroup.tsx'),
        fe = n('./src/MaterialIcons/Code.tsx'),
        pe = n('./src/MaterialIcons/ViewList.tsx'),
        je = function(e) {
          var t = e.className,
            n = e.currentView,
            o = e.onClick,
            r = e.themed,
            i = Object(a.a)(e, [
              'className',
              'currentView',
              'onClick',
              'themed',
            ]),
            s = Object(c.useMemo)(
              function() {
                return 'ToolbarViewsButton '.concat(t)
              },
              [t]
            ),
            u = Object(c.useMemo)(
              function() {
                return [U].concat(Object(d.a)(r))
              },
              [U, r]
            ),
            b = Object(c.useCallback)(
              function(e) {
                e.preventDefault()
                var t = e.currentTarget.dataset.uid
                o && o(e, { id: t })
              },
              [o]
            ),
            m = Object(c.useCallback)(
              function(e) {
                return n === e ? 'border-bottom: 1px solid #fff;' : ''
              },
              [n]
            ),
            f = Object(c.useMemo)(
              function() {
                return pe.a
              },
              [pe.a]
            ),
            p = Object(c.useMemo)(
              function() {
                return fe.a
              },
              [fe.a]
            )
          return l.a.createElement(
            I.Base,
            Object.assign({ className: s, themed: u }, i),
            l.a.createElement(
              me.b,
              null,
              l.a.createElement(
                Q.b,
                {
                  alt: 'Tabular',
                  appearance: 'active',
                  icon: f,
                  onClick: b,
                  styled: m('table'),
                  title: 'Table',
                  uid: 'table',
                  css:
                    '\n            svg.Icon {\n              padding-right: 5px;\n            }\n          ',
                },
                'Tabular'
              ),
              l.a.createElement(
                Q.b,
                {
                  Json: !0,
                  alt: 'json',
                  appearance: 'secondary',
                  icon: p,
                  onClick: b,
                  styled: m('json'),
                  title: 'JSON',
                  uid: 'json',
                  css:
                    '\n            svg.Icon {\n              padding-right: 5px;\n            }\n          ',
                },
                'JSON'
              )
            )
          )
        }
      je &&
        je === Object(je) &&
        Object.isExtensible(je) &&
        Object.defineProperty(je, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarViewsButton',
            filename: 'src/Table/ToolbarViewsButton.tsx',
          },
        }),
        (je.defaultProps = { className: '', themed: [] })
      je &&
        je === Object(je) &&
        Object.isExtensible(je) &&
        Object.defineProperty(je, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarViewsButton',
            filename: 'src/Table/ToolbarViewsButton.tsx',
          },
        })
      var Oe = l.a.memo(function(e) {
        var t = e.baseRoute,
          n = e.items,
          a = e.onDeleteSelected,
          o = e.onSwitchView,
          r = e.currentView,
          i = e.data,
          s = e.onAdd,
          u = e.onCopy,
          b = e.onDelete,
          d = e.onDownload,
          m = e.onEdit,
          f = e.onExecute,
          p = e.title,
          j = e.toolbar,
          O = function(e) {
            switch (e) {
              case 'add':
                return l.a.createElement(ce, {
                  alt: 'add',
                  key: 'add',
                  onClick: s,
                  href: '/'.concat(t, '/new'),
                })
              case 'copy':
                return l.a.createElement(oe, {
                  alt: 'copy',
                  key: 'copy',
                  data: i,
                  onClick: u,
                })
              case 'edit':
                return l.a.createElement(ue, {
                  alt: 'edit',
                  key: 'edit',
                  onClick: m,
                  href: '/'.concat(t, '/edit'),
                })
              case 'delete':
                return l.a.createElement(Y, {
                  alt: 'delete',
                  key: 'delete',
                  onClick: b,
                  title: 'Delete',
                })
              case 'download':
                return l.a.createElement(se, {
                  alt: 'download',
                  key: 'download',
                  data: i,
                  onClick: d,
                  fileName: p
                    ? 'guru_download_'.concat(p, '.json')
                    : 'guru_download.json',
                })
              case 'execute':
                return l.a.createElement(de, {
                  alt: 'execute',
                  key: 'execute',
                  onClick: f,
                  title: 'Execute',
                })
              case 'views':
                return l.a.createElement(je, {
                  key: 'views',
                  onClick: o,
                  currentView: r,
                })
              default:
                return null
            }
          },
          h = Object(c.useMemo)(
            function() {
              return l.a.createElement(
                c.Fragment,
                null,
                j.map(function(e) {
                  return 'function' === typeof e
                    ? e({ onSwitchView: o, currentView: r, onAdd: s })
                    : O(e)
                })
              )
            },
            [O, r, s, o, j]
          ),
          x = Object(c.useCallback)(
            function(e) {
              e.preventDefault(), a && a(e)
            },
            [a]
          ),
          y = Object(c.useMemo)(
            function() {
              return [Z]
            },
            [Z]
          )
        return n.length > 0
          ? l.a.createElement(ne, {
              selected: n.length,
              handleDeleteSelected: x,
            })
          : l.a.createElement(
              $.a,
              {
                className: 'TableToolbar',
                baseRoute: t,
                onSwitchView: o,
                borderBottom: 'thin',
                paddingBottom: 2,
                themed: y,
              },
              h
            )
      })
      'undefined' !== typeof Oe &&
        Oe &&
        Oe === Object(Oe) &&
        Object.isExtensible(Oe) &&
        Object.defineProperty(Oe, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableToolbar',
            filename: 'src/Table/TableToolbar.tsx',
          },
        })
      var he = l.a.memo(function(e) {
        var t = e.baseRoute,
          n = void 0 === t ? '' : t,
          o = e.caption,
          r = e.children,
          i = e.className,
          s = void 0 === i ? '' : i,
          u = e.condensed,
          m = e.height,
          O = e.hook,
          h = e.hover,
          x = e.initialValue,
          y = e.name,
          v = (e.numbered, e.onAdd),
          T = e.onCopy,
          _ = e.onDelete,
          g = e.onDeleteSelected,
          C = e.onDownload,
          E = e.onEdit,
          k = e.onExecute,
          I = e.onRowClick,
          P = e.themed,
          w = void 0 === P ? [] : P,
          S = e.title,
          B = e.toolbar,
          H = void 0 === B ? [] : B,
          D = Object(a.a)(e, [
            'baseRoute',
            'caption',
            'children',
            'className',
            'condensed',
            'height',
            'hook',
            'hover',
            'initialValue',
            'name',
            'numbered',
            'onAdd',
            'onCopy',
            'onDelete',
            'onDeleteSelected',
            'onDownload',
            'onEdit',
            'onExecute',
            'onRowClick',
            'themed',
            'title',
            'toolbar',
          ]),
          M = Object(c.useMemo)(
            function() {
              return 'TableContainer '.concat(s)
            },
            [s]
          ),
          A = Object(c.useMemo)(
            function() {
              return [W].concat(Object(d.a)(w))
            },
            [W, w]
          ),
          R = O(),
          N = R.loading,
          V = R.selected,
          L = R.dispatch,
          G = R.itemsToArray,
          F = R.items,
          X = Object(c.useMemo)(
            function() {
              return F
            },
            [F]
          ),
          U = Object(c.useMemo)(
            function() {
              return x || G()
            },
            [x, G]
          )
        Object(c.useEffect)(
          function() {
            q({ type: 'SET_ITEM_LIST', itemList: U })
          },
          [U]
        )
        var Z = Object(c.useCallback)(function(e, t) {
            switch (t.type) {
              case 'SET_ITEM_LIST':
                return Object(b.a)({}, e, { itemList: t.itemList })
              case 'SET_VARIABLES':
                return Object(b.a)({}, e, { variables: t.variables })
              default:
                return e
            }
          }, []),
          q = Object(c.useReducer)(Z, { variables: {}, itemList: [] })[1],
          Q = f(''.concat(y, '_Table'), 'table'),
          Y = Q.state,
          $ = Q.setItem,
          ee = Object(c.useCallback)(
            function(e) {
              e.preventDefault(), v && v(e)
            },
            [v]
          ),
          te = Object(c.useCallback)(
            function(e) {
              e.preventDefault(), _ && _(e)
            },
            [_]
          ),
          ae = Object(c.useCallback)(
            function(e) {
              e.preventDefault(),
                window.confirm(
                  'Delete selected items?\n'.concat(V.join('\n'))
                ) &&
                  g &&
                  g(e)
            },
            [g]
          ),
          ce = Object(c.useCallback)(
            function(e) {
              e.preventDefault(), E && E(e)
            },
            [E]
          ),
          le = Object(c.useCallback)(
            function(e) {
              e.preventDefault(),
                k().then(function(e) {
                  e && q({ type: 'SET_ITEM_LIST', itemList: e })
                })
            },
            [q, k]
          ),
          oe = Object(c.useCallback)(
            function(e, t) {
              var n = t.id
              e.preventDefault(), n !== Y && $(n)
            },
            [$]
          ),
          re = f(''.concat(y, '_allSelected'), V.length === U.length),
          ie = re.state,
          se = re.setItem
        Object(c.useEffect)(
          function() {
            se(V.length === U.length)
          },
          [U, V]
        )
        var ue = l.a.useCallback(
          function(e) {
            var t = Array.isArray(F)
              ? F.reduce(function(e, t) {
                  return [].concat(Object(d.a)(e), [t.id])
                }, [])
              : Object.keys(F)
            L({
              type: 'SET_SELECTED',
              selected: e.currentTarget.checked ? t : [],
            })
          },
          [L, F]
        )
        return l.a.createElement(
          c.Fragment,
          null,
          H.length > 0
            ? l.a.createElement(Oe, {
                baseRoute: n,
                borderBottom: 'thin',
                currentView: Y,
                data: U,
                items: V,
                onAdd: ee,
                onCopy: T,
                onDelete: te,
                onDeleteSelected: ae,
                onDownload: C,
                onEdit: ce,
                onExecute: le,
                onSwitchView: oe,
                paddingBottom: 2,
                selectToolbar: ne,
                title: S,
                toolbar: H,
              })
            : null,
          'table' === Y
            ? l.a.createElement(
                p.b,
                Object.assign({ className: M, themed: [J], height: m }, D),
                l.a.createElement(
                  p.b,
                  {
                    as: 'table',
                    className: 'Table',
                    themed: A,
                    condensed: u,
                    hover: h,
                  },
                  o ? l.a.createElement(K, null, o) : null,
                  l.a.createElement(
                    z,
                    {
                      allSelected: ie,
                      baseRoute: n,
                      dispatch: L,
                      onAdd: ee,
                      onDeleteSelected: ae,
                      onAllSelectedChange: ue,
                      itemsToArray: G,
                      loading: N,
                      selected: V,
                      tableName: y,
                      onRowClick: I,
                      data: U,
                    },
                    r
                  )
                )
              )
            : l.a.createElement(
                p.b,
                Object.assign({ className: M, themed: [J], height: m }, D),
                l.a.createElement(j, { items: X })
              )
        )
      })
      'undefined' !== typeof he &&
        he &&
        he === Object(he) &&
        Object.isExtensible(he) &&
        Object.defineProperty(he, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Table', filename: 'src/Table/Table.tsx' },
        })
      'undefined' !== typeof he &&
        he &&
        he === Object(he) &&
        Object.isExtensible(he) &&
        Object.defineProperty(he, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Table', filename: 'src/Table/Table.tsx' },
        })
      var xe = n('./src/reusable/collectionHash/index.ts'),
        ye = Object(d.a)(new Array(1))
      function ve() {
        var e = {
            uid: 'id',
            items: ye.map(function(e, t) {
              return {
                id: 'id_'.concat(t),
                name: 'Project '.concat(t),
                endpoint: 'http://project'.concat(t, '.com'),
                ip: '0.0.0.'.concat(t),
                repo: 'repo'.concat(t),
                port: ''.concat(t, '000'),
              }
            }),
          },
          t = Object(xe.useCollectionHashReducer)(e),
          n = Object(m.a)(t, 2),
          a = n[0],
          l = n[1]
        return Object(c.useMemo)(
          function() {
            return Object(b.a)({}, a, {
              dispatch: l,
              itemsToArray: function() {
                return Object(xe.itemsToArray)(a.items)
              },
            })
          },
          [a, l]
        )
      }
      ve &&
        ve === Object(ve) &&
        Object.isExtensible(ve) &&
        Object.defineProperty(ve, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'useTable', filename: 'src/Table/table.example.tsx' },
        })
      var Te = n('./src/Checkbox/index.ts'),
        _e = function(e) {
          var t = e.className,
            n = void 0 === t ? '' : t,
            c = Object(a.a)(e, ['className']),
            o = 'TableRowSelect '.concat(n),
            r = B(),
            i = r.checked,
            s = r.data.id,
            u = r.onChange,
            b = r.setChecked
          return l.a.createElement(
            'td',
            { className: o },
            l.a.createElement(
              Te.Checkbox,
              Object.assign(
                {
                  checked: i,
                  onChange: function(e) {
                    b(e.currentTarget.checked), u && u(e)
                  },
                  name: s,
                },
                c
              )
            )
          )
        }
      'undefined' !== typeof _e &&
        _e &&
        _e === Object(_e) &&
        Object.isExtensible(_e) &&
        Object.defineProperty(_e, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableRowSelect',
            filename: 'src/Table/TableRowSelect.tsx',
          },
        })
      'undefined' !== typeof _e &&
        _e &&
        _e === Object(_e) &&
        Object.isExtensible(_e) &&
        Object.defineProperty(_e, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableRowSelect',
            filename: 'src/Table/TableRowSelect.tsx',
          },
        })
      var ge = l.a.memo(function(e) {
        var t = e.className,
          n = void 0 === t ? '' : t,
          o = Object(a.a)(e, ['className']),
          r = 'AllSelectedHeading '.concat(n),
          i = L(),
          s = i.allSelected,
          u = i.onAllSelectedChange,
          b = Object(c.useCallback)(
            function(e) {
              u && u(e)
            },
            [u]
          )
        return l.a.createElement(
          Te.Checkbox,
          Object.assign(
            { className: r, checked: s, name: 'allSelected', onChange: b },
            o
          )
        )
      })
      'undefined' !== typeof ge &&
        ge &&
        ge === Object(ge) &&
        Object.isExtensible(ge) &&
        Object.defineProperty(ge, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'AllSelectedHeading',
            filename: 'src/Table/AllSelectedHeading.tsx',
          },
        })
      function Ce(e) {
        var t = e.children,
          n = e.prop,
          o = Object(a.a)(e, ['children', 'prop']),
          r = B(),
          i = r.data,
          s = r.index,
          u = Object(c.useMemo)(
            function() {
              return 'function' === typeof t
                ? t(Object(b.a)({ data: i, prop: n }, o, { index: s }))
                : t
            },
            [t, i, s, n, o]
          )
        return l.a.createElement(
          l.a.Fragment,
          null,
          u ||
            l.a.createElement(
              I.Base,
              Object.assign({ as: 'td' }, o),
              '__index' === n ? s : i[n]
            )
        )
      }
      function Ee(e) {
        var t = e.children,
          n = Object(a.a)(e, ['children']),
          o = B(),
          r = o.data,
          i = o.index,
          s = l.a.cloneElement(t, Object(b.a)({ data: r }, n, { index: i }))
        return Object(c.useMemo)(
          function() {
            return 'function' === typeof t
              ? t(Object(b.a)({ data: r }, n, { index: i }))
              : s
          },
          [t, s, r, i, n]
        )
      }
      'undefined' !== typeof ge &&
        ge &&
        ge === Object(ge) &&
        Object.isExtensible(ge) &&
        Object.defineProperty(ge, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'AllSelectedHeading',
            filename: 'src/Table/AllSelectedHeading.tsx',
          },
        }),
        Ce &&
          Ce === Object(Ce) &&
          Object.isExtensible(Ce) &&
          Object.defineProperty(Ce, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableColumn',
              filename: 'src/Table/TableColumn.tsx',
            },
          }),
        Ee &&
          Ee === Object(Ee) &&
          Object.isExtensible(Ee) &&
          Object.defineProperty(Ee, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableRowDetail',
              filename: 'src/Table/TableRowDetail.tsx',
            },
          }),
        n.d(t, 'default', function() {
          return Pe
        })
      var ke = {},
        Ie = 'wrapper'
      function Pe(e) {
        var t = e.components,
          n = Object(a.a)(e, ['components'])
        return Object(o.b)(
          Ie,
          Object.assign({}, ke, n, { components: t, mdxType: 'MDXLayout' }),
          Object(o.b)(
            'h3',
            { id: 'render-props-detail' },
            'Render Props Detail'
          ),
          Object(o.b)(
            r.c,
            {
              __position: 0,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableRowDetailRenderProps"\n    caption="Table caption"\n    baseRoute="/table/#"\n    hook={useTable}\n  >\n    <TableColumn heading="#" uid="index" prop="__index" />\n\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint">\n      {({ data }) => (\n        <td>\n          <a href="/table/#" onClick={e => e.preventDefault()}>\n            {data.endpoint}\n          </a>\n        </td>\n      )}\n    </TableColumn>\n\n    <TableRowDetail uid="detail">\n      {({ data }) => (\n        <table>\n          <thead>\n            <tr>\n              <th>IP</th>\n              <th>Repository</th>\n              <th>Port</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{data.ip}</td>\n              <td>{data.repo}</td>\n              <td>{data.port}</td>\n            </tr>\n          </tbody>\n        </table>\n      )}\n    </TableRowDetail>\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: r.c,
                Props: r.d,
                Flex: i.a,
                styled: s.default,
                ThemeProvider: u.a,
                Table: he,
                useTable: ve,
                TableRowSelect: _e,
                AllSelectedHeading: ge,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              u.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(
                he,
                {
                  height: '250px',
                  name: 'TableRowDetailRenderProps',
                  caption: 'Table caption',
                  baseRoute: '/table/#',
                  hook: ve,
                  mdxType: 'Table',
                },
                Object(o.b)(Ce, {
                  heading: '#',
                  uid: 'index',
                  prop: '__index',
                  mdxType: 'TableColumn',
                }),
                Object(o.b)(Ce, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(o.b)(Ce, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(o.b)(
                  Ce,
                  {
                    heading: 'Endpoint',
                    uid: 'endpoint',
                    mdxType: 'TableColumn',
                  },
                  function(e) {
                    var t = e.data
                    return Object(o.b)(
                      'td',
                      null,
                      Object(o.b)(
                        'a',
                        {
                          href: '/table/#',
                          onClick: function(e) {
                            return e.preventDefault()
                          },
                        },
                        t.endpoint
                      )
                    )
                  }
                ),
                Object(o.b)(
                  Ee,
                  { uid: 'detail', mdxType: 'TableRowDetail' },
                  function(e) {
                    var t = e.data
                    return Object(o.b)(
                      'table',
                      null,
                      Object(o.b)(
                        'thead',
                        null,
                        Object(o.b)(
                          'tr',
                          null,
                          Object(o.b)('th', null, 'IP'),
                          Object(o.b)('th', null, 'Repository'),
                          Object(o.b)('th', null, 'Port')
                        )
                      ),
                      Object(o.b)(
                        'tbody',
                        null,
                        Object(o.b)(
                          'tr',
                          null,
                          Object(o.b)('td', null, t.ip),
                          Object(o.b)('td', null, t.repo),
                          Object(o.b)('td', null, t.port)
                        )
                      )
                    )
                  }
                )
              )
            )
          )
        )
      }
      Pe &&
        Pe === Object(Pe) &&
        Object.isExtensible(Pe) &&
        Object.defineProperty(Pe, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'MDXContent', filename: 'src/Table/table.mdx' },
        }),
        (Pe.isMDXComponent = !0)
    },
    './src/reusable/collectionHash/collectionHash.hooks.ts': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        c = n('./node_modules/react/index.js')
      function l(e) {
        var t = e(),
          n = t.items,
          l = t.itemsToArray,
          o = Object(c.useState)([]),
          r = Object(a.a)(o, 2),
          i = r[0],
          s = r[1]
        return (
          Object(c.useEffect)(
            function() {
              s(l(n))
            },
            [n]
          ),
          Object(c.useMemo)(
            function() {
              return i
            },
            [i]
          )
        )
      }
      function o(e, t) {
        var n = Object(c.useState)(t),
          l = Object(a.a)(n, 2),
          o = l[0],
          r = l[1],
          i = e(),
          s = i.active,
          u = i.items
        return (
          Object(c.useEffect)(
            function() {
              u && u[s] && r(u[s])
            },
            [s, u]
          ),
          Object(c.useMemo)(
            function() {
              return o
            },
            [o]
          )
        )
      }
      function r(e) {
        var t = e(),
          n = t.active,
          a = t.dispatch
        Object(c.useEffect)(function() {
          '' !== n && a({ type: 'SET_ACTIVE', active: '' })
        }, [])
      }
      function i(e, t) {
        var n = e(),
          a = n.active,
          l = n.dispatch
        Object(c.useEffect)(
          function() {
            a !== t && l({ type: 'SET_ACTIVE', active: t })
          },
          [a, t]
        )
      }
      l &&
        l === Object(l) &&
        Object.isExtensible(l) &&
        Object.defineProperty(l, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'useGetItems',
            filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
          },
        }),
        o &&
          o === Object(o) &&
          Object.isExtensible(o) &&
          Object.defineProperty(o, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useGetActiveItem',
              filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
            },
          }),
        r &&
          r === Object(r) &&
          Object.isExtensible(r) &&
          Object.defineProperty(r, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useResetActive',
              filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
            },
          }),
        i &&
          i === Object(i) &&
          Object.isExtensible(i) &&
          Object.defineProperty(i, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useSetActive',
              filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
            },
          })
    },
    './src/reusable/collectionHash/collectionHash.types.ts': function(e, t) {
      'undefined' !== typeof CollectionHashType &&
        CollectionHashType &&
        CollectionHashType === Object(CollectionHashType) &&
        Object.isExtensible(CollectionHashType) &&
        Object.defineProperty(CollectionHashType, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'CollectionHashType',
            filename: 'src/reusable/collectionHash/collectionHash.types.ts',
          },
        }),
        'undefined' !== typeof CollectionHashInitialValueInterface &&
          CollectionHashInitialValueInterface &&
          CollectionHashInitialValueInterface ===
            Object(CollectionHashInitialValueInterface) &&
          Object.isExtensible(CollectionHashInitialValueInterface) &&
          Object.defineProperty(
            CollectionHashInitialValueInterface,
            '__filemeta',
            {
              enumerable: !0,
              configurable: !0,
              value: {
                name: 'CollectionHashInitialValueInterface',
                filename: 'src/reusable/collectionHash/collectionHash.types.ts',
              },
            }
          ),
        'undefined' !== typeof CollectionHashStateInterface &&
          CollectionHashStateInterface &&
          CollectionHashStateInterface ===
            Object(CollectionHashStateInterface) &&
          Object.isExtensible(CollectionHashStateInterface) &&
          Object.defineProperty(CollectionHashStateInterface, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CollectionHashStateInterface',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof BuildInitialValueType &&
          BuildInitialValueType &&
          BuildInitialValueType === Object(BuildInitialValueType) &&
          Object.isExtensible(BuildInitialValueType) &&
          Object.defineProperty(BuildInitialValueType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'BuildInitialValueType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof CreateInitialStateType &&
          CreateInitialStateType &&
          CreateInitialStateType === Object(CreateInitialStateType) &&
          Object.isExtensible(CreateInitialStateType) &&
          Object.defineProperty(CreateInitialStateType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CreateInitialStateType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof ReducerType &&
          ReducerType &&
          ReducerType === Object(ReducerType) &&
          Object.isExtensible(ReducerType) &&
          Object.defineProperty(ReducerType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ReducerType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof CollectionHashActionInterface &&
          CollectionHashActionInterface &&
          CollectionHashActionInterface ===
            Object(CollectionHashActionInterface) &&
          Object.isExtensible(CollectionHashActionInterface) &&
          Object.defineProperty(CollectionHashActionInterface, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CollectionHashActionInterface',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof CollectionHashReducerType &&
          CollectionHashReducerType &&
          CollectionHashReducerType === Object(CollectionHashReducerType) &&
          Object.isExtensible(CollectionHashReducerType) &&
          Object.defineProperty(CollectionHashReducerType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'CollectionHashReducerType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          }),
        'undefined' !== typeof ItemsToArrayType &&
          ItemsToArrayType &&
          ItemsToArrayType === Object(ItemsToArrayType) &&
          Object.isExtensible(ItemsToArrayType) &&
          Object.defineProperty(ItemsToArrayType, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'ItemsToArrayType',
              filename: 'src/reusable/collectionHash/collectionHash.types.ts',
            },
          })
    },
    './src/reusable/collectionHash/collectionHashConstants.ts': function(
      e,
      t,
      n
    ) {
      'use strict'
      n.d(t, 'a', function() {
        return a
      })
      var a = { active: '', items: [], loading: !1, selected: [], uid: 'id' }
      'undefined' !== typeof a &&
        a &&
        a === Object(a) &&
        Object.isExtensible(a) &&
        Object.defineProperty(a, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'COLLECTION_HASH_INITIAL_STATE',
            filename: 'src/reusable/collectionHash/collectionHashConstants.ts',
          },
        })
    },
    './src/reusable/collectionHash/collectionHashReducer.ts': function(
      e,
      t,
      n
    ) {
      'use strict'
      n.d(t, 'a', function() {
        return u
      }),
        n.d(t, 'b', function() {
          return b
        })
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        l = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        o = n('./node_modules/react/index.js'),
        r = n('./src/reusable/collectionHash/collectionHashConstants.ts'),
        i = function(e) {
          return Object(l.a)({}, r.a, e)
        },
        s = function(e) {
          return i(e)
        }
      s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'createInitialState',
            filename: 'src/reusable/collectionHash/collectionHashReducer.ts',
          },
        })
      var u = function(e) {
        var t = []
        for (var n in e) t.push(e[n])
        return t
      }
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'itemsToArray',
            filename: 'src/reusable/collectionHash/collectionHashReducer.ts',
          },
        })
      var b = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function(e) {
                  return e
                },
          n = i(e)
        function r(e, t) {
          var n = {}
          for (var a in e) t.includes(a) || (n[a] = e[a])
          return n
        }
        function s(e) {
          if (Array.isArray(e)) {
            return e.reduce(function(e, t) {
              return Object(l.a)({}, e, Object(c.a)({}, t[n.uid], t))
            }, {})
          }
        }
        function u(e, t, n, o) {
          var i
          switch (t.type) {
            case 'INSERT_ITEMS':
              var u = Array.isArray(t.items)
                ? s(t.items)
                : Object(c.a)({}, t.items[n.uid], t.items)
              return Object(l.a)({}, e, { items: Object(l.a)({}, e.items, u) })
            case 'REDUCER':
              return t.reducer(e)
            case 'REMOVE_ITEMS':
              return (
                (i = t.remove),
                Array.isArray(i)
                  ? Object(l.a)({}, e, {
                      active: t.remove.includes(e.active) ? '' : e.active,
                      selected: e.selected.filter(function(e) {
                        return !t.remove.includes(e)
                      }),
                      items: r(e.items, t.remove),
                    })
                  : e
              )
            case 'REPLACE_ITEMS':
              var b = s(t.items)
              return Object(l.a)({}, e, { items: b })
            case 'RESET':
              return n
            case 'SET_ACTIVE':
              return (function(e) {
                return 'string' !== typeof e
              })(t.active)
                ? e
                : Object(l.a)({}, e, {
                    active: (function(e) {
                      return null == e
                    })(t.active)
                      ? ''
                      : t.active.trim(),
                  })
            case 'SET_LOADING':
              return Object(l.a)({}, e, { loading: !!t.loading })
            case 'SET_SELECTED':
              return Object(l.a)({}, e, { selected: t.selected })
            case 'TOGGLE_SELECTED_ITEMS':
              var d = Object(a.a)(e.selected),
                m = !0,
                f = !1,
                p = void 0
              try {
                for (
                  var j, O = t.selected[Symbol.iterator]();
                  !(m = (j = O.next()).done);
                  m = !0
                ) {
                  var h = j.value,
                    x = d.indexOf(h),
                    y = h.trim()
                  e.items[x]
                    ? (d =
                        0 === x
                          ? d.slice(1)
                          : x === d.length - 1
                          ? d.slice(0, d.length - 1)
                          : [].concat(
                              Object(a.a)(d.slice(0, x)),
                              Object(a.a)(d.slice(x + 1))
                            ))
                    : d.push(y)
                }
              } catch (_) {
                ;(f = !0), (p = _)
              } finally {
                try {
                  m || null == O.return || O.return()
                } finally {
                  if (f) throw p
                }
              }
              return Object(l.a)({}, e, { selected: d })
            case 'UPDATE_ITEM':
              if (!e.items[t.select]) return e
              var v = Object(c.a)(
                  {},
                  t.item.name || t.select,
                  Object(l.a)({}, e.items[t.select], t.item)
                ),
                T = t.item[n.uid]
                  ? Object(l.a)({}, r(e.items, [t.select]), v)
                  : Object(l.a)({}, e.items, v)
              return Object(l.a)({}, e, {
                active: e.active === t.select ? t.item.name : e.active,
                selected: (function(n, c, l) {
                  return e.selected.includes(t.select)
                    ? (function() {
                        var e = n.indexOf(c)
                        return 0 === e
                          ? [l].concat(Object(a.a)(n.slice(1)))
                          : e === n.length - 1
                          ? [].concat(Object(a.a)(n.slice(0, n.length - 1)), [
                              l,
                            ])
                          : [].concat(
                              Object(a.a)(n.slice(0, e)),
                              [l],
                              Object(a.a)(n.slice(e + 1))
                            )
                      })()
                    : e.selected
                })(e.selected, t.select, t.item.name),
                items: T,
              })
            default:
              return o ? o(e, t) : e
          }
        }
        function b(e, a) {
          return u(e, a, n, t)
        }
        return Object(o.useReducer)(b, n)
      }
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'useCollectionHashReducer',
            filename: 'src/reusable/collectionHash/collectionHashReducer.ts',
          },
        })
    },
    './src/reusable/collectionHash/index.ts': function(e, t, n) {
      'use strict'
      n('./src/reusable/collectionHash/collectionHashConstants.ts')
      var a = n('./src/reusable/collectionHash/collectionHashReducer.ts')
      n.d(t, 'itemsToArray', function() {
        return a.a
      }),
        n.d(t, 'useCollectionHashReducer', function() {
          return a.b
        })
      n('./src/reusable/collectionHash/collectionHash.hooks.ts'),
        n('./src/reusable/collectionHash/collectionHash.types.ts')
    },
  },
])
//# sourceMappingURL=src-table-table.e87bed39511fd489c1d4.js.map

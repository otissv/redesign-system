;(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    './src/ButtonGroup/ButtonGroup.tsx': function(e, t, n) {
      'use strict'
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        l = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        o = n.n(c),
        i = n('./src/Base/Base.tsx')
      function r(e) {
        var t = e.stacked
        return {
          display: 'inline-flex',
          position: 'relative',
          transition: e.theme.animation.easeMedium(),
          verticalAlign: 'middle',
          flexDirection: t ? 'column' : 'row',
        }
      }
      function b(e) {
        return e.stretch ? { width: '100%' } : {}
      }
      'undefined' !== typeof r &&
        r &&
        r === Object(r) &&
        Object.isExtensible(r) &&
        Object.defineProperty(r, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'buttonGroupTheme',
            filename: 'src/ButtonGroup/buttonGroup.theme.ts',
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
              name: 'buttonStretchGroupTheme',
              filename: 'src/ButtonGroup/buttonGroup.theme.ts',
            },
          }),
        n.d(t, 'c', function() {
          return u
        }),
        n.d(t, 'a', function() {
          return d
        })
      var s = o.a.createContext({})
      function u() {
        return Object(c.useContext)(s)
      }
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ButtonGroupContext',
            filename: 'src/ButtonGroup/ButtonGroup.tsx',
          },
        }),
        u &&
          u === Object(u) &&
          Object.isExtensible(u) &&
          Object.defineProperty(u, '__filemeta', {
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
          u = void 0 === n ? '' : n,
          d = (e.onClick, e.themed),
          m = void 0 === d ? [] : d,
          f = Object(l.a)(e, ['children', 'className', 'onClick', 'themed']),
          p = Object(c.useMemo)(
            function() {
              return 'ButtonGroup '.concat(u)
            },
            [u]
          ),
          j = Object(c.useMemo)(
            function() {
              return [r, b].concat(Object(a.a)(m))
            },
            [r, b, m]
          ),
          h = f.appearance,
          O = f.context,
          T = f.size,
          x = f.stretch,
          y = Object(c.useMemo)(
            function() {
              return { appearance: h, context: O, size: T, stretch: x }
            },
            [h, O, T, x]
          )
        return o.a.createElement(
          s.Provider,
          { value: y },
          o.a.createElement(
            i.b,
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
        l = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        o = n.n(c),
        i = n('./src/Base/index.tsx'),
        r = n('./node_modules/lodash/fp/upperFirst.js'),
        b = n.n(r)
      function s(e) {
        var t = e.appearance,
          n = e.color
        return n[t] || n.default
      }
      function u(e) {
        var t = e.appearance,
          n = e.theme,
          a = n.color,
          l = n.animation,
          c = n.border,
          o = n.unit
        return {
          position: 'relative',
          height: o[5],
          width: o[5],
          border: c['thick'.concat(b()(t))] || c.thin,
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
            transition: l.easeFast(),
          },
          '.CheckboxBackground, .CheckboxCheckmark': {
            transition: l.easeFast(),
          },
          'input:checked+.CheckboxBackground, input:indeterminate+.CheckboxBackground': {
            background: s({ appearance: t, color: a }),
            '.CheckboxCheckmark': { opacity: 1, transform: 'scale(0.7)' },
          },
        }
      }
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
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
          r = void 0 === n ? '' : n,
          b = e.id,
          s = e.name,
          d = e.onChange,
          m = e.themed,
          f = void 0 === m ? [] : m,
          p = Object(l.a)(e, [
            'checked',
            'className',
            'id',
            'name',
            'onChange',
            'themed',
          ]),
          j = Object(c.useMemo)(
            function() {
              return 'Checkbox '.concat(r)
            },
            [r]
          ),
          h = Object(c.useMemo)(
            function() {
              return [u].concat(Object(a.a)(f))
            },
            [u, f]
          ),
          O = Object(c.useMemo)(
            function() {
              return 'disabled' === p.appearance
            },
            [p.appearance]
          )
        return o.a.createElement(
          i.Base,
          Object.assign({ className: j, themed: h }, p),
          o.a.createElement('input', {
            checked: t,
            className: 'CheckboxInput',
            disabled: O,
            id: b,
            name: s,
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
        l = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        ),
        c = n('./node_modules/react/index.js'),
        o = n.n(c),
        i = n('./node_modules/lodash/kebabCase.js'),
        r = n.n(i)
      function b(e) {
        var t = e.alignItems,
          n = e.basis,
          a = e.display,
          l = e.grow,
          c = e.justifyContent,
          o = e.shrink,
          i = e.wrap
        return {
          display: a || 'flex',
          basis: n ? ''.concat(n) : '',
          grow: l ? ''.concat(l) : '',
          shrink: o ? ''.concat(o) : '',
          justifyContent: (c && [r()(c)]) || '',
          alignItems: (t && [r()(t)]) || '',
          flexWrap: (i && [r()(i)]) || '',
        }
      }
      function s(e) {
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
      'undefined' !== typeof b &&
        b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'flexTheme', filename: 'src/Flex/flex.theme.ts' },
        }),
        'undefined' !== typeof s &&
          s &&
          s === Object(s) &&
          Object.isExtensible(s) &&
          Object.defineProperty(s, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'flexDirectionTheme',
              filename: 'src/Flex/flex.theme.ts',
            },
          })
      var u = n('./src/Base/index.tsx')
      n.d(t, 'a', function() {
        return d
      })
      var d = o.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          i = void 0 === n ? '' : n,
          r = e.themed,
          d = void 0 === r ? [] : r,
          m = Object(l.a)(e, ['children', 'className', 'themed']),
          f = Object(c.useMemo)(
            function() {
              return 'Flex '.concat(i)
            },
            [i]
          ),
          p = Object(c.useMemo)(
            function() {
              return [b, s].concat(Object(a.a)(d))
            },
            [b, s, d]
          )
        return o.a.createElement(
          u.Base,
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
        l = n.n(a),
        c = n('./src/Icon/index.ts')
      function o(e) {
        return l.a.createElement(
          c.Icon,
          Object.assign({ viewBox: '0 0 480 480' }, e),
          l.a.createElement('path', {
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
        l = n.n(a),
        c = n('./src/Icon/index.ts')
      function o(e) {
        return l.a.createElement(
          c.Icon,
          e,
          l.a.createElement('path', {
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
        l = n.n(a),
        c = n('./src/Icon/index.ts')
      function o(e) {
        return l.a.createElement(
          c.Icon,
          e,
          l.a.createElement('path', {
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
        l = n.n(a),
        c = n('./src/Icon/index.ts')
      function o(e) {
        return l.a.createElement(
          c.Icon,
          e,
          l.a.createElement('path', {
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
        l = n('./node_modules/react/index.js'),
        c = n.n(l),
        o = n('./node_modules/@mdx-js/react/dist/index.es.js'),
        i = n('./node_modules/docz/dist/index.esm.js'),
        r = n('./src/Flex/Flex.tsx'),
        b = n(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        s = n('./src/ThemeContext/ThemeProvider.tsx'),
        u = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        d = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        m = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        )
      function f(e, t, n) {
        var a = Object(l.useState)(t),
          c = Object(m.a)(a, 2),
          o = c[0],
          i = c[1],
          r =
            'sessionStorage' === n ? window.sessionStorage : window.localStorage
        Object(l.useEffect)(function() {
          var n = r.getItem(e),
            a = n ? JSON.parse(n) : n
          b(a || t)
        }, [])
        var b = Object(l.useCallback)(
          function(t) {
            if (t !== o) {
              var n = JSON.stringify(t)
              return i(t), r.setItem(e, n)
            }
          },
          [o, i]
        )
        function s() {
          i(void 0), r.removeItem(e)
        }
        return Object(l.useMemo)(
          function() {
            return { state: o, setItem: b, removeItem: s }
          },
          [[o, b, s]]
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
        j = c.a.memo(function(e) {
          var t = e.items
          return c.a.createElement(
            'pre',
            null,
            c.a.createElement(
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
      var h = n('./src/MaterialIcons/Copy.tsx'),
        O = n('./src/MaterialIcons/Delete.tsx'),
        T = n('./src/MaterialIcons/Edit.tsx'),
        x = n('./src/MaterialIcons/Download.tsx'),
        y = n('./src/ButtonIcon/index.ts'),
        v = c.a.memo(function(e) {
          var t = e.icon,
            n = e.uid,
            o = Object(a.a)(e, ['icon', 'uid']),
            i = Object(l.useMemo)(
              function() {
                return t
              },
              [t]
            )
          return c.a.createElement(
            y.ButtonIcon,
            Object.assign({ 'data-uid': n, icon: i }, o)
          )
        })
      function g(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          o = Object(l.useMemo)(
            function() {
              return h.a
            },
            [h.a]
          )
        return c.a.createElement(
          v,
          Object.assign({ name: 'copy', onClick: t, icon: o, title: 'Copy' }, n)
        )
      }
      'undefined' !== typeof v &&
        v &&
        v === Object(v) &&
        Object.isExtensible(v) &&
        Object.defineProperty(v, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableButton', filename: 'src/Table/TableButton.tsx' },
        }),
        g &&
          g === Object(g) &&
          Object.isExtensible(g) &&
          Object.defineProperty(g, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableCopyButton',
              filename: 'src/Table/TableButton.tsx',
            },
          })
      var _ = function(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          o = Object(l.useMemo)(
            function() {
              return O.a
            },
            [O.a]
          )
        return c.a.createElement(
          v,
          Object.assign(
            { name: 'delete', onClick: t, icon: o, title: 'Delete' },
            n
          )
        )
      }
      _ &&
        _ === Object(_) &&
        Object.isExtensible(_) &&
        Object.defineProperty(_, '__filemeta', {
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
          o = Object(l.useMemo)(
            function() {
              return x.a
            },
            [x.a]
          )
        return c.a.createElement(
          v,
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
          i = Object(l.useMemo)(
            function() {
              return T.a
            },
            [T.a]
          )
        return c.a.createElement(
          v,
          Object.assign(
            { as: 'a', name: 'Edit', icon: i, title: 'Edit', 'data-uid': n },
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
      'undefined' !== typeof v &&
        v &&
        v === Object(v) &&
        Object.isExtensible(v) &&
        Object.defineProperty(v, '__filemeta', {
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
      var S = c.a.createContext({})
      function D() {
        return Object(l.useContext)(S)
      }
      function H(e) {
        var t = e.children,
          n = e.checked,
          o = void 0 !== n && n,
          i = e.expanded,
          r = void 0 !== i && i,
          b = e.tableName,
          s = e.data,
          m = Object(a.a)(e, [
            'children',
            'checked',
            'expanded',
            'tableName',
            'data',
          ]),
          p = f(''.concat(b, '_').concat(s.id, '_checked'), o),
          j = p.state,
          h = p.setItem,
          O = f(''.concat(b, '_').concat(s.id, '_expanded'), r),
          T = O.state,
          x = O.setItem
        Object(l.useEffect)(
          function() {
            h(o)
          },
          [o]
        ),
          Object(l.useEffect)(
            function() {
              x(r)
            },
            [r]
          )
        var y = c.a.useRef(function() {
            return null
          }),
          v = c.a.useRef(!1),
          g = Object(l.useMemo)(
            function() {
              return t.reduce(function(e, t) {
                return 'detail' === t.props.uid
                  ? ((y.current = function() {
                      return t
                    }),
                    (v.current = !0),
                    e)
                  : [].concat(Object(d.a)(e), [t])
              }, [])
            },
            [t, y]
          ),
          _ = Object(l.useMemo)(
            function() {
              return Object(u.a)({}, m, {
                data: s,
                checked: j,
                expanded: T,
                setChecked: h,
                setExpanded: x,
              })
            },
            [j, h, T, x, m]
          )
        return c.a.createElement(
          S.Provider,
          { value: _ },
          c.a.createElement(
            'tr',
            null,
            v.current && c.a.createElement(A, { expanded: T, setExpanded: x }),
            g
          ),
          c.a.createElement(
            R,
            { expanded: T, colSpan: t.length },
            c.a.createElement(y.current, null)
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
        D &&
          D === Object(D) &&
          Object.isExtensible(D) &&
          Object.defineProperty(D, '__filemeta', {
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
      var R = c.a.memo(function(e) {
          var t = e.children,
            n = e.colSpan,
            a = e.expanded,
            o = Object(l.useMemo)(function() {
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
          return c.a.createElement(
            'tr',
            {
              className: 'RowDetail',
              style: { display: a ? 'table-row' : 'none' },
            },
            c.a.createElement(
              'td',
              { colSpan: n },
              c.a.createElement(
                I.Base,
                { animate: o, state: a ? 'expanded' : 'collapsed', as: 'div' },
                t
              )
            )
          )
        }),
        B = b.default.button(w(), function(e) {
          var t = e.expanded
          return '\n  background: none;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 30px;\n  margin: 3px;\n  outline: none;\n  padding-right: 0;\n  text-align: left;\n  transform: rotate('.concat(
            t ? '45deg' : '0deg',
            ');\n  transition: all 0.2s ease;\n\n  &:hover,\n  &:active {\n    background: none;\n    border-bottom: #0000;\n  }\n'
          )
        }),
        A = c.a.memo(function(e) {
          var t = e.expanded,
            n = e.setExpanded,
            l = Object(a.a)(e, ['expanded', 'setExpanded']),
            o = c.a.useCallback(
              function(e) {
                e.preventDefault(), n(!t)
              },
              [n, t]
            )
          return c.a.createElement(
            'td',
            l,
            c.a.createElement(
              B,
              { onClick: o, expanded: t },
              c.a.createElement(P.a, { alt: 'indicator' })
            )
          )
        }),
        M = c.a.memo(function(e) {
          var t = e.baseRoute,
            n = void 0 === t ? '' : t,
            o = e.children,
            i = e.data,
            r = e.dispatch,
            b = e.onAdd,
            s = e.onDeleteSelected,
            u = e.itemsToArray,
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
            h = Object(l.useCallback)(
              function(e) {
                r({
                  type: 'TOGGLE_SELECTED_ITEMS',
                  selected: [e.currentTarget.name],
                })
              },
              [r]
            ),
            O = Object(l.useCallback)(function(e) {
              e.preventDefault()
            }, []),
            T = Object(l.useCallback)(
              function(e) {
                e.preventDefault()
                var t = e.currentTarget.dataset.uid
                m && m(e, t)
              },
              [m]
            ),
            x = Object(l.useMemo)(
              function() {
                return {
                  Copy: function(e) {
                    return c.a.createElement(g, e)
                  },
                  Edit: function(e) {
                    return c.a.createElement(
                      E,
                      Object.assign({}, e, { href: ''.concat(n, '/edit') })
                    )
                  },
                  Delete: function(e) {
                    return c.a.createElement(
                      _,
                      Object.assign({ onClick: O }, e)
                    )
                  },
                  Download: function(e) {
                    return c.a.createElement(C, e)
                  },
                  dispatch: r,
                  itemsToArray: u,
                  loading: d,
                  onAdd: b,
                  onChange: h,
                  onDelete: O,
                  onDeleteSelected: s,
                  onRowClick: T,
                  selected: f,
                }
              },
              [g, _, C, E, r, h, O, T, u, d, b, s, f]
            ),
            y = Object(l.useMemo)(
              function() {
                return i.map(function(e, t) {
                  return c.a.createElement(
                    H,
                    Object.assign(
                      {
                        key: e.id,
                        data: e,
                        checked: f.includes(e.id),
                        index: t,
                        tableName: p,
                      },
                      x
                    ),
                    o
                  )
                })
              },
              [o, i, x]
            )
          return c.a.createElement(
            'tbody',
            Object.assign({ className: 'TableBody' }, j),
            y
          )
        })
      'undefined' !== typeof M &&
        M &&
        M === Object(M) &&
        Object.isExtensible(M) &&
        Object.defineProperty(M, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableBody', filename: 'src/Table/TableBody.tsx' },
        })
      var N = M
      'undefined' !== typeof M &&
        M &&
        M === Object(M) &&
        Object.isExtensible(M) &&
        Object.defineProperty(M, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableBody', filename: 'src/Table/TableBody.tsx' },
        })
      var V = c.a.createContext({})
      function L() {
        return Object(l.useContext)(V)
      }
      function G(e) {
        var t = e.allSelected,
          n = void 0 !== t && t,
          a = e.children,
          o = e.data,
          i = e.onAllSelectedChange,
          r = Object(l.useMemo)(
            function() {
              return { allSelected: n, data: o, onAllSelectedChange: i }
            },
            [n, i]
          )
        return c.a.createElement(V.Provider, { value: r }, a)
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
      var z = c.a.memo(function(e) {
        var t = e.allSelected,
          n = e.baseRoute,
          o = void 0 === n ? '' : n,
          i = e.children,
          r = e.data,
          b = e.dispatch,
          s = e.itemsToArray,
          u = e.loading,
          m = e.onAdd,
          f = e.onAllSelectedChange,
          p = e.onDeleteSelected,
          j = e.selected,
          h = e.tableName,
          O = Object(a.a)(e, [
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
          T = Object(l.useMemo)(
            function() {
              return c.a.createElement(
                'thead',
                null,
                c.a.createElement(
                  'tr',
                  null,
                  i.reduce(function(e, t, n) {
                    var a = t.props,
                      l = a.heading
                    return 'detail' === a.uid
                      ? [c.a.createElement('th', { key: n })].concat(
                          Object(d.a)(e)
                        )
                      : [].concat(Object(d.a)(e), [
                          c.a.createElement('th', { key: n }, l),
                        ])
                  }, [])
                )
              )
            },
            [i]
          )
        return c.a.createElement(
          l.Fragment,
          null,
          c.a.createElement(
            G,
            { allSelected: t, data: r, onAllSelectedChange: f },
            T,
            c.a.createElement(
              N,
              Object.assign(
                {
                  baseRoute: o,
                  className: 'TableView',
                  dispatch: b,
                  onAdd: m,
                  onDeleteSelected: p,
                  tableName: h,
                  loading: u,
                  selected: j,
                  itemsToArray: s,
                  data: r,
                },
                O
              ),
              i
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
          l = a.animation,
          c = a.border,
          o = a.color,
          i = a.elevate,
          r = a.unit
        return {
          borderCollapse: 'collapse',
          transition: l.easeMedium(),
          'td, th': {
            lineHeight: t ? 2 : 2.5,
            padding: 0,
            '&:first-child': { paddingLeft: r[4] },
            '&:last-child': { paddingRight: r[4] },
          },
          td: { borderTop: c.thin },
          'tr:hover': {
            background: n ? o['grey-800'] : '',
            boxShadow: n ? i[2] : '',
          },
          '.TableView': {
            '.RowDetail >td': { padding: '0 0 '.concat(r[7], ' 0') },
          },
          a: {
            background: 'none',
            display: 'block',
            height: '100%',
            marginRight: '3px',
            border: c.thinTransparent,
          },
          'a:hover, a:active': {
            background: 'none',
            border: c.thinTransparent,
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
          i = Object(a.a)(e, ['children', 'className', 'themed']),
          r = Object(l.useMemo)(
            function() {
              return 'TableCaption '.concat(n)
            },
            [n]
          ),
          b = Object(l.useMemo)(
            function() {
              return [X].concat(Object(d.a)(o))
            },
            [X, o]
          )
        return c.a.createElement(
          p.b,
          Object.assign({ as: 'caption', className: r, themed: b }, i),
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
            o = Object(l.useCallback)(
              function(e) {
                e.preventDefault(), t && t(e)
              },
              [t]
            ),
            i = Object(l.useMemo)(
              function() {
                return O.a
              },
              [O.a]
            )
          return c.a.createElement(
            Q.b,
            Object.assign(
              {
                alt: 'delete',
                appearance: 'active',
                uid: 'delete',
                onClick: o,
                icon: i,
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
      var te = b.default.span(ee()),
        ne = c.a.memo(function(e) {
          var t = e.className,
            n = void 0 === t ? '' : t,
            o = e.selected,
            i = e.handleDeleteSelected,
            r = e.themed,
            b = void 0 === r ? [] : r,
            s = Object(a.a)(e, [
              'className',
              'selected',
              'handleDeleteSelected',
              'themed',
            ]),
            u = Object(l.useMemo)(
              function() {
                return 'TableSelectToolbar '.concat(n)
              },
              [n]
            ),
            m = Object(l.useMemo)(
              function() {
                return [q].concat(Object(d.a)(b))
              },
              [q, b]
            )
          return c.a.createElement(
            $.a,
            Object.assign({ className: u, themed: m }, s),
            c.a.createElement(te, null, o, ' selected '),
            c.a.createElement(Y, {
              alt: 'delete',
              onClick: i,
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
        le = function(e) {
          var t = e.onClick,
            n = Object(a.a)(e, ['onClick']),
            o = Object(l.useCallback)(
              function(e) {
                e.preventDefault(), t && t(e)
              },
              [t]
            ),
            i = Object(l.useMemo)(
              function() {
                return ae.a
              },
              [ae.a]
            )
          return c.a.createElement(
            Q.b,
            Object.assign(
              {
                as: 'a',
                alt: 'add',
                appearance: 'active',
                uid: 'add',
                onClick: o,
                icon: i,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              n
            ),
            'Add'
          )
        }
      le &&
        le === Object(le) &&
        Object.isExtensible(le) &&
        Object.defineProperty(le, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarAddButton',
            filename: 'src/Table/ToolbarAddButton.tsx',
          },
        })
      le &&
        le === Object(le) &&
        Object.isExtensible(le) &&
        Object.defineProperty(le, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarAddButton',
            filename: 'src/Table/ToolbarAddButton.tsx',
          },
        })
      var ce = n('./node_modules/react-copy-to-clipboard/lib/index.js'),
        oe = function(e) {
          var t = e.data,
            n = e.onClick,
            o = Object(a.a)(e, ['data', 'onClick']),
            i = Object(l.useMemo)(
              function() {
                return 'string' === typeof t ? t : JSON.stringify(t, null, 2)
              },
              [t]
            ),
            r = Object(l.useCallback)(
              function(e) {
                e.preventDefault(), n && n(e)
              },
              [n]
            ),
            b = Object(l.useMemo)(
              function() {
                return h.a
              },
              [h.a]
            )
          return c.a.createElement(
            ce.CopyToClipboard,
            { text: i, copy: r },
            c.a.createElement(
              Q.b,
              Object.assign(
                {
                  alt: 'copy',
                  appearance: 'active',
                  uid: 'copy',
                  icon: b,
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
      var ie = n('./node_modules/js-file-download/file-download.js'),
        re = n.n(ie),
        be = function(e) {
          var t = e.onClick,
            n = e.data,
            o = e.fileName,
            i = Object(a.a)(e, ['onClick', 'data', 'fileName']),
            r = Object(l.useMemo)(
              function() {
                return 'string' === typeof n ? n : JSON.stringify(n, null, 2)
              },
              [n]
            ),
            b = Object(l.useCallback)(
              function(e) {
                e.preventDefault(), r && re()(r, o), t && t(e)
              },
              [t]
            ),
            s = Object(l.useMemo)(
              function() {
                return x.a
              },
              [x.a]
            )
          return c.a.createElement(
            Q.b,
            Object.assign(
              {
                alt: 'download',
                appearance: 'active',
                uid: 'delete',
                onClick: b,
                icon: s,
                css:
                  '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
              },
              i
            ),
            'Download'
          )
        }
      be &&
        be === Object(be) &&
        Object.isExtensible(be) &&
        Object.defineProperty(be, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDownloadButton',
            filename: 'src/Table/ToolbarDownloadButton.tsx',
          },
        })
      be &&
        be === Object(be) &&
        Object.isExtensible(be) &&
        Object.defineProperty(be, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarDownloadButton',
            filename: 'src/Table/ToolbarDownloadButton.tsx',
          },
        })
      var se = function(e) {
        var t = e.onClick,
          n = Object(a.a)(e, ['onClick']),
          o = Object(l.useCallback)(
            function(e) {
              e.preventDefault(), t && t(e)
            },
            [t]
          ),
          i = Object(l.useMemo)(
            function() {
              return T.a
            },
            [T.a]
          )
        return c.a.createElement(
          Q.b,
          Object.assign(
            {
              as: 'a',
              alt: 'edit',
              appearance: 'active',
              uid: 'edit',
              onClick: o,
              icon: i,
              css:
                '\n        svg.Icon {\n          padding-right: 5px;\n        }\n      ',
            },
            n
          ),
          'Edit'
        )
      }
      se &&
        se === Object(se) &&
        Object.isExtensible(se) &&
        Object.defineProperty(se, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarEditButton',
            filename: 'src/Table/ToolbarEditButton.tsx',
          },
        })
      se &&
        se === Object(se) &&
        Object.isExtensible(se) &&
        Object.defineProperty(se, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarEditButton',
            filename: 'src/Table/ToolbarEditButton.tsx',
          },
        })
      var ue = n('./src/MaterialIcons/PlayCircle.tsx'),
        de = function(e) {
          var t = e.onClick,
            n = Object(a.a)(e, ['onClick']),
            o = Object(l.useCallback)(
              function(e) {
                e.preventDefault(), t && t(e)
              },
              [t]
            ),
            i = Object(l.useMemo)(
              function() {
                return ue.a
              },
              [ue.a]
            )
          return c.a.createElement(
            Q.b,
            Object.assign(
              {
                alt: 'execute',
                appearance: 'active',
                uid: 'execute',
                onClick: o,
                icon: i,
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
            i = e.themed,
            r = Object(a.a)(e, [
              'className',
              'currentView',
              'onClick',
              'themed',
            ]),
            b = Object(l.useMemo)(
              function() {
                return 'ToolbarViewsButton '.concat(t)
              },
              [t]
            ),
            s = Object(l.useMemo)(
              function() {
                return [U].concat(Object(d.a)(i))
              },
              [U, i]
            ),
            u = Object(l.useCallback)(
              function(e) {
                e.preventDefault()
                var t = e.currentTarget.dataset.uid
                o && o(e, { id: t })
              },
              [o]
            ),
            m = Object(l.useCallback)(
              function(e) {
                return n === e ? 'border-bottom: 1px solid #fff;' : ''
              },
              [n]
            ),
            f = Object(l.useMemo)(
              function() {
                return pe.a
              },
              [pe.a]
            ),
            p = Object(l.useMemo)(
              function() {
                return fe.a
              },
              [fe.a]
            )
          return c.a.createElement(
            I.Base,
            Object.assign({ className: b, themed: s }, r),
            c.a.createElement(
              me.b,
              null,
              c.a.createElement(
                Q.b,
                {
                  alt: 'Tabular',
                  appearance: 'active',
                  icon: f,
                  onClick: u,
                  styled: m('table'),
                  title: 'Table',
                  uid: 'table',
                  css:
                    '\n            svg.Icon {\n              padding-right: 5px;\n            }\n          ',
                },
                'Tabular'
              ),
              c.a.createElement(
                Q.b,
                {
                  Json: !0,
                  alt: 'json',
                  appearance: 'secondary',
                  icon: p,
                  onClick: u,
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
      var he = c.a.memo(function(e) {
        var t = e.baseRoute,
          n = e.items,
          a = e.onDeleteSelected,
          o = e.onSwitchView,
          i = e.currentView,
          r = e.data,
          b = e.onAdd,
          s = e.onCopy,
          u = e.onDelete,
          d = e.onDownload,
          m = e.onEdit,
          f = e.onExecute,
          p = e.title,
          j = e.toolbar,
          h = function(e) {
            switch (e) {
              case 'add':
                return c.a.createElement(le, {
                  alt: 'add',
                  key: 'add',
                  onClick: b,
                  href: '/'.concat(t, '/new'),
                })
              case 'copy':
                return c.a.createElement(oe, {
                  alt: 'copy',
                  key: 'copy',
                  data: r,
                  onClick: s,
                })
              case 'edit':
                return c.a.createElement(se, {
                  alt: 'edit',
                  key: 'edit',
                  onClick: m,
                  href: '/'.concat(t, '/edit'),
                })
              case 'delete':
                return c.a.createElement(Y, {
                  alt: 'delete',
                  key: 'delete',
                  onClick: u,
                  title: 'Delete',
                })
              case 'download':
                return c.a.createElement(be, {
                  alt: 'download',
                  key: 'download',
                  data: r,
                  onClick: d,
                  fileName: p
                    ? 'guru_download_'.concat(p, '.json')
                    : 'guru_download.json',
                })
              case 'execute':
                return c.a.createElement(de, {
                  alt: 'execute',
                  key: 'execute',
                  onClick: f,
                  title: 'Execute',
                })
              case 'views':
                return c.a.createElement(je, {
                  key: 'views',
                  onClick: o,
                  currentView: i,
                })
              default:
                return null
            }
          },
          O = Object(l.useMemo)(
            function() {
              return c.a.createElement(
                l.Fragment,
                null,
                j.map(function(e) {
                  return 'function' === typeof e
                    ? e({ onSwitchView: o, currentView: i, onAdd: b })
                    : h(e)
                })
              )
            },
            [h, i, b, o, j]
          ),
          T = Object(l.useCallback)(
            function(e) {
              e.preventDefault(), a && a(e)
            },
            [a]
          ),
          x = Object(l.useMemo)(
            function() {
              return [Z]
            },
            [Z]
          )
        return n.length > 0
          ? c.a.createElement(ne, {
              selected: n.length,
              handleDeleteSelected: T,
            })
          : c.a.createElement(
              $.a,
              {
                className: 'TableToolbar',
                baseRoute: t,
                onSwitchView: o,
                borderBottom: 'thin',
                paddingBottom: 2,
                themed: x,
              },
              O
            )
      })
      'undefined' !== typeof he &&
        he &&
        he === Object(he) &&
        Object.isExtensible(he) &&
        Object.defineProperty(he, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableToolbar',
            filename: 'src/Table/TableToolbar.tsx',
          },
        })
      var Oe = c.a.memo(function(e) {
        var t = e.baseRoute,
          n = void 0 === t ? '' : t,
          o = e.caption,
          i = e.children,
          r = e.className,
          b = void 0 === r ? '' : r,
          s = e.condensed,
          m = e.height,
          h = e.hook,
          O = e.hover,
          T = e.initialValue,
          x = e.name,
          y = (e.numbered, e.onAdd),
          v = e.onCopy,
          g = e.onDelete,
          _ = e.onDeleteSelected,
          C = e.onDownload,
          E = e.onEdit,
          k = e.onExecute,
          I = e.onRowClick,
          P = e.themed,
          w = void 0 === P ? [] : P,
          S = e.title,
          D = e.toolbar,
          H = void 0 === D ? [] : D,
          R = Object(a.a)(e, [
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
          B = Object(l.useMemo)(
            function() {
              return 'TableContainer '.concat(b)
            },
            [b]
          ),
          A = Object(l.useMemo)(
            function() {
              return [W].concat(Object(d.a)(w))
            },
            [W, w]
          ),
          M = h(),
          N = M.loading,
          V = M.selected,
          L = M.dispatch,
          G = M.itemsToArray,
          F = M.items,
          X = Object(l.useMemo)(
            function() {
              return F
            },
            [F]
          ),
          U = Object(l.useMemo)(
            function() {
              return T || G()
            },
            [T, G]
          )
        Object(l.useEffect)(
          function() {
            q({ type: 'SET_ITEM_LIST', itemList: U })
          },
          [U]
        )
        var Z = Object(l.useCallback)(function(e, t) {
            switch (t.type) {
              case 'SET_ITEM_LIST':
                return Object(u.a)({}, e, { itemList: t.itemList })
              case 'SET_VARIABLES':
                return Object(u.a)({}, e, { variables: t.variables })
              default:
                return e
            }
          }, []),
          q = Object(l.useReducer)(Z, { variables: {}, itemList: [] })[1],
          Q = f(''.concat(x, '_Table'), 'table'),
          Y = Q.state,
          $ = Q.setItem,
          ee = Object(l.useCallback)(
            function(e) {
              e.preventDefault(), y && y(e)
            },
            [y]
          ),
          te = Object(l.useCallback)(
            function(e) {
              e.preventDefault(), g && g(e)
            },
            [g]
          ),
          ae = Object(l.useCallback)(
            function(e) {
              e.preventDefault(),
                window.confirm(
                  'Delete selected items?\n'.concat(V.join('\n'))
                ) &&
                  _ &&
                  _(e)
            },
            [_]
          ),
          le = Object(l.useCallback)(
            function(e) {
              e.preventDefault(), E && E(e)
            },
            [E]
          ),
          ce = Object(l.useCallback)(
            function(e) {
              e.preventDefault(),
                k().then(function(e) {
                  e && q({ type: 'SET_ITEM_LIST', itemList: e })
                })
            },
            [q, k]
          ),
          oe = Object(l.useCallback)(
            function(e, t) {
              var n = t.id
              e.preventDefault(), n !== Y && $(n)
            },
            [$]
          ),
          ie = f(''.concat(x, '_allSelected'), V.length === U.length),
          re = ie.state,
          be = ie.setItem
        Object(l.useEffect)(
          function() {
            be(V.length === U.length)
          },
          [U, V]
        )
        var se = c.a.useCallback(
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
        return c.a.createElement(
          l.Fragment,
          null,
          H.length > 0
            ? c.a.createElement(he, {
                baseRoute: n,
                borderBottom: 'thin',
                currentView: Y,
                data: U,
                items: V,
                onAdd: ee,
                onCopy: v,
                onDelete: te,
                onDeleteSelected: ae,
                onDownload: C,
                onEdit: le,
                onExecute: ce,
                onSwitchView: oe,
                paddingBottom: 2,
                selectToolbar: ne,
                title: S,
                toolbar: H,
              })
            : null,
          'table' === Y
            ? c.a.createElement(
                p.b,
                Object.assign({ className: B, themed: [J], height: m }, R),
                c.a.createElement(
                  p.b,
                  {
                    as: 'table',
                    className: 'Table',
                    themed: A,
                    condensed: s,
                    hover: O,
                  },
                  o ? c.a.createElement(K, null, o) : null,
                  c.a.createElement(
                    z,
                    {
                      allSelected: re,
                      baseRoute: n,
                      dispatch: L,
                      onAdd: ee,
                      onDeleteSelected: ae,
                      onAllSelectedChange: se,
                      itemsToArray: G,
                      loading: N,
                      selected: V,
                      tableName: x,
                      onRowClick: I,
                      data: U,
                    },
                    i
                  )
                )
              )
            : c.a.createElement(
                p.b,
                Object.assign({ className: B, themed: [J], height: m }, R),
                c.a.createElement(j, { items: X })
              )
        )
      })
      'undefined' !== typeof Oe &&
        Oe &&
        Oe === Object(Oe) &&
        Object.isExtensible(Oe) &&
        Object.defineProperty(Oe, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Table', filename: 'src/Table/Table.tsx' },
        })
      'undefined' !== typeof Oe &&
        Oe &&
        Oe === Object(Oe) &&
        Object.isExtensible(Oe) &&
        Object.defineProperty(Oe, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Table', filename: 'src/Table/Table.tsx' },
        })
      var Te = n('./src/reusable/collectionHash/index.ts'),
        xe = Object(d.a)(new Array(100))
      function ye() {
        var e = {
            uid: 'id',
            items: xe.map(function(e, t) {
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
          t = Object(Te.useCollectionHashReducer)(e),
          n = Object(m.a)(t, 2),
          a = n[0],
          c = n[1]
        return Object(l.useMemo)(
          function() {
            return Object(u.a)({}, a, {
              dispatch: c,
              itemsToArray: function() {
                return Object(Te.itemsToArray)(a.items)
              },
            })
          },
          [a, c]
        )
      }
      ye &&
        ye === Object(ye) &&
        Object.isExtensible(ye) &&
        Object.defineProperty(ye, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'useTable', filename: 'src/Table/table.example.tsx' },
        })
      var ve = n('./src/Checkbox/index.ts'),
        ge = function(e) {
          var t = e.className,
            n = void 0 === t ? '' : t,
            l = Object(a.a)(e, ['className']),
            o = 'TableRowSelect '.concat(n),
            i = D(),
            r = i.checked,
            b = i.data.id,
            s = i.onChange,
            u = i.setChecked
          return c.a.createElement(
            'td',
            { className: o },
            c.a.createElement(
              ve.Checkbox,
              Object.assign(
                {
                  checked: r,
                  onChange: function(e) {
                    u(e.currentTarget.checked), s && s(e)
                  },
                  name: b,
                },
                l
              )
            )
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
            name: 'TableRowSelect',
            filename: 'src/Table/TableRowSelect.tsx',
          },
        })
      'undefined' !== typeof ge &&
        ge &&
        ge === Object(ge) &&
        Object.isExtensible(ge) &&
        Object.defineProperty(ge, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableRowSelect',
            filename: 'src/Table/TableRowSelect.tsx',
          },
        })
      var _e = c.a.memo(function(e) {
        var t = e.className,
          n = void 0 === t ? '' : t,
          o = Object(a.a)(e, ['className']),
          i = 'AllSelectedHeading '.concat(n),
          r = L(),
          b = r.allSelected,
          s = r.onAllSelectedChange,
          u = Object(l.useCallback)(
            function(e) {
              s && s(e)
            },
            [s]
          )
        return c.a.createElement(
          ve.Checkbox,
          Object.assign(
            { className: i, checked: b, name: 'allSelected', onChange: u },
            o
          )
        )
      })
      'undefined' !== typeof _e &&
        _e &&
        _e === Object(_e) &&
        Object.isExtensible(_e) &&
        Object.defineProperty(_e, '__filemeta', {
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
          i = D(),
          r = i.data,
          b = i.index,
          s = Object(l.useMemo)(
            function() {
              return 'function' === typeof t
                ? t(Object(u.a)({ data: r, prop: n }, o, { index: b }))
                : t
            },
            [t, r, b, n, o]
          )
        return c.a.createElement(
          c.a.Fragment,
          null,
          s ||
            c.a.createElement(
              I.Base,
              Object.assign({ as: 'td' }, o),
              '__index' === n ? b : r[n]
            )
        )
      }
      function Ee(e) {
        var t = e.children,
          n = Object(a.a)(e, ['children']),
          o = D(),
          i = o.data,
          r = o.index,
          b = c.a.cloneElement(t, Object(u.a)({ data: i }, n, { index: r }))
        return Object(l.useMemo)(
          function() {
            return 'function' === typeof t
              ? t(Object(u.a)({ data: i }, n, { index: r }))
              : b
          },
          [t, b, i, r, n]
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
          Object(o.b)('h1', { id: 'table' }, 'Table'),
          Object(o.b)('h2', { id: 'properties' }, 'Properties'),
          Object(o.b)(i.d, { of: Oe, mdxType: 'Props' }),
          Object(o.b)('h2', { id: 'default' }, 'Default'),
          Object(o.b)(
            i.c,
            {
              __position: 1,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableDeafult"\n    caption="Table caption"\n    baseRoute="/table/#"\n    hook={useTable}\n  >\n    <TableColumn heading="#" uid="index" prop="__index" />\n\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint">\n      {({ data }) => (\n        <td>\n          <a href="/table/#" onClick={e => e.preventDefault()}>\n            {data.endpoint}\n          </a>\n        </td>\n      )}\n    </TableColumn>\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                Flex: r.a,
                styled: b.default,
                ThemeProvider: s.a,
                Table: Oe,
                useTable: ye,
                TableRowSelect: ge,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableDeafult',
                  caption: 'Table caption',
                  baseRoute: '/table/#',
                  hook: ye,
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
                )
              )
            )
          ),
          Object(o.b)('h2', { id: 'selectable' }, 'Selectable'),
          Object(o.b)(
            i.c,
            {
              __position: 2,
              __code:
                '<ThemeProvider>\n  <Table height="250px" name="TableSelect" selectable hook={useTable}>\n    <TableColumn uid="select" heading={<AllSelectedHeading />}>\n      <TableRowSelect />\n    </TableColumn>\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint" prop="endpoint" />\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                Flex: r.a,
                styled: b.default,
                ThemeProvider: s.a,
                Table: Oe,
                useTable: ye,
                TableRowSelect: ge,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableSelect',
                  selectable: !0,
                  hook: ye,
                  mdxType: 'Table',
                },
                Object(o.b)(
                  Ce,
                  {
                    uid: 'select',
                    heading: Object(o.b)(_e, { mdxType: 'AllSelectedHeading' }),
                    mdxType: 'TableColumn',
                  },
                  Object(o.b)(ge, { mdxType: 'TableRowSelect' })
                ),
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
                Object(o.b)(Ce, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(o.b)('h2', { id: 'hover' }, 'Hover'),
          Object(o.b)(
            i.c,
            {
              __position: 3,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableHover"\n    hover\n    headings={[\'ID\', \'Name\', \'Endpoint\']}\n    hook={useTable}\n  >\n    <TableColumn heading="ID" uid="id" prop="id" />\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint" prop="endpoint" />\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                Flex: r.a,
                styled: b.default,
                ThemeProvider: s.a,
                Table: Oe,
                useTable: ye,
                TableRowSelect: ge,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableHover',
                  hover: !0,
                  headings: ['ID', 'Name', 'Endpoint'],
                  hook: ye,
                  mdxType: 'Table',
                },
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
                Object(o.b)(Ce, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(o.b)('h2', { id: 'condensed' }, 'Condensed'),
          Object(o.b)(
            i.c,
            {
              __position: 4,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableCondensed"\n    condensed\n    headings={[\'ID\', \'Name\', \'Endpoint\']}\n    hook={useTable}\n  >\n    <TableColumn heading="ID" uid="id" prop="id" />\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint" prop="endpoint" />\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                Flex: r.a,
                styled: b.default,
                ThemeProvider: s.a,
                Table: Oe,
                useTable: ye,
                TableRowSelect: ge,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableCondensed',
                  condensed: !0,
                  headings: ['ID', 'Name', 'Endpoint'],
                  hook: ye,
                  mdxType: 'Table',
                },
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
                Object(o.b)(Ce, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(o.b)('h2', { id: 'toolbar' }, 'Toolbar'),
          Object(o.b)(
            i.c,
            {
              __position: 5,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    baseRoute="/table/#"\n    name="TableToolbar"\n    caption="Table caption"\n    hook={useTable}\n    toolbar={[\'add\', \'copy\', \'download\', \'views\']}\n  >\n    <TableColumn uid="select" heading={<AllSelectedHeading />}>\n      <TableRowSelect />\n    </TableColumn>\n\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint" prop="endpoint" />\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                Flex: r.a,
                styled: b.default,
                ThemeProvider: s.a,
                Table: Oe,
                useTable: ye,
                TableRowSelect: ge,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(
                Oe,
                {
                  height: '250px',
                  baseRoute: '/table/#',
                  name: 'TableToolbar',
                  caption: 'Table caption',
                  hook: ye,
                  toolbar: ['add', 'copy', 'download', 'views'],
                  mdxType: 'Table',
                },
                Object(o.b)(
                  Ce,
                  {
                    uid: 'select',
                    heading: Object(o.b)(_e, { mdxType: 'AllSelectedHeading' }),
                    mdxType: 'TableColumn',
                  },
                  Object(o.b)(ge, { mdxType: 'TableRowSelect' })
                ),
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
                Object(o.b)(Ce, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(o.b)('h2', { id: 'row-detail' }, 'Row Detail'),
          Object(o.b)(
            i.c,
            {
              __position: 6,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableRowDetail"\n    caption="Table caption"\n    baseRoute="/table/#"\n    hook={useTable}\n  >\n    <TableColumn heading="#" uid="index" prop="__index" />\n\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint">\n      {({ data }) => (\n        <td>\n          <a href="/table/#" onClick={e => e.preventDefault()}>\n            {data.endpoint}\n          </a>\n        </td>\n      )}\n    </TableColumn>\n\n    <TableRowDetail uid="detail">\n      <table>\n        <thead>\n          <tr>\n            <th>IP</th>\n            <th>Repository</th>\n            <th>Port</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>0.0.0.1</td>\n            <td>repo1</td>\n            <td>8081</td>\n          </tr>\n        </tbody>\n      </table>\n    </TableRowDetail>\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                Flex: r.a,
                styled: b.default,
                ThemeProvider: s.a,
                Table: Oe,
                useTable: ye,
                TableRowSelect: ge,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableRowDetail',
                  caption: 'Table caption',
                  baseRoute: '/table/#',
                  hook: ye,
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
                  Object(o.b)(
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
                        Object(o.b)('td', null, '0.0.0.1'),
                        Object(o.b)('td', null, 'repo1'),
                        Object(o.b)('td', null, '8081')
                      )
                    )
                  )
                )
              )
            )
          ),
          Object(o.b)(
            'h3',
            { id: 'render-props-detail' },
            'Render Props Detail'
          ),
          Object(o.b)(
            i.c,
            {
              __position: 7,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableRowDetailRenderProps"\n    caption="Table caption"\n    baseRoute="/table/#"\n    hook={useTable}\n  >\n    <TableColumn heading="#" uid="index" prop="__index" />\n\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint">\n      {({ data }) => (\n        <td>\n          <a href="/table/#" onClick={e => e.preventDefault()}>\n            {data.endpoint}\n          </a>\n        </td>\n      )}\n    </TableColumn>\n\n    <TableRowDetail uid="detail">\n      {({ data }) => (\n        <table>\n          <thead>\n            <tr>\n              <th>IP</th>\n              <th>Repository</th>\n              <th>Port</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{data.ip}</td>\n              <td>{data.repo}</td>\n              <td>{data.port}</td>\n            </tr>\n          </tbody>\n        </table>\n      )}\n    </TableRowDetail>\n  </Table>\n</ThemeProvider>',
              __scope: {
                props: this ? this.props : n,
                Playground: i.c,
                Props: i.d,
                Flex: r.a,
                styled: b.default,
                ThemeProvider: s.a,
                Table: Oe,
                useTable: ye,
                TableRowSelect: ge,
                AllSelectedHeading: _e,
                TableColumn: Ce,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(o.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(o.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableRowDetailRenderProps',
                  caption: 'Table caption',
                  baseRoute: '/table/#',
                  hook: ye,
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
        l = n('./node_modules/react/index.js')
      function c(e) {
        var t = e(),
          n = t.items,
          c = t.itemsToArray,
          o = Object(l.useState)([]),
          i = Object(a.a)(o, 2),
          r = i[0],
          b = i[1]
        return (
          Object(l.useEffect)(
            function() {
              b(c(n))
            },
            [n]
          ),
          Object(l.useMemo)(
            function() {
              return r
            },
            [r]
          )
        )
      }
      function o(e, t) {
        var n = Object(l.useState)(t),
          c = Object(a.a)(n, 2),
          o = c[0],
          i = c[1],
          r = e(),
          b = r.active,
          s = r.items
        return (
          Object(l.useEffect)(
            function() {
              s && s[b] && i(s[b])
            },
            [b, s]
          ),
          Object(l.useMemo)(
            function() {
              return o
            },
            [o]
          )
        )
      }
      function i(e) {
        var t = e(),
          n = t.active,
          a = t.dispatch
        Object(l.useEffect)(function() {
          '' !== n && a({ type: 'SET_ACTIVE', active: '' })
        }, [])
      }
      function r(e, t) {
        var n = e(),
          a = n.active,
          c = n.dispatch
        Object(l.useEffect)(
          function() {
            a !== t && c({ type: 'SET_ACTIVE', active: t })
          },
          [a, t]
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
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
        i &&
          i === Object(i) &&
          Object.isExtensible(i) &&
          Object.defineProperty(i, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useResetActive',
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
        return s
      }),
        n.d(t, 'b', function() {
          return u
        })
      var a = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js'
        ),
        l = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js'
        ),
        c = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        o = n('./node_modules/react/index.js'),
        i = n('./src/reusable/collectionHash/collectionHashConstants.ts'),
        r = function(e) {
          return Object(c.a)({}, i.a, e)
        },
        b = function(e) {
          return r(e)
        }
      b &&
        b === Object(b) &&
        Object.isExtensible(b) &&
        Object.defineProperty(b, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'createInitialState',
            filename: 'src/reusable/collectionHash/collectionHashReducer.ts',
          },
        })
      var s = function(e) {
        var t = []
        for (var n in e) t.push(e[n])
        return t
      }
      'undefined' !== typeof s &&
        s &&
        s === Object(s) &&
        Object.isExtensible(s) &&
        Object.defineProperty(s, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'itemsToArray',
            filename: 'src/reusable/collectionHash/collectionHashReducer.ts',
          },
        })
      var u = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function(e) {
                  return e
                },
          n = r(e)
        function i(e, t) {
          var n = {}
          for (var a in e) t.includes(a) || (n[a] = e[a])
          return n
        }
        function b(e) {
          if (Array.isArray(e)) {
            return e.reduce(function(e, t) {
              return Object(c.a)({}, e, Object(l.a)({}, t[n.uid], t))
            }, {})
          }
        }
        function s(e, t, n, o) {
          var r
          switch (t.type) {
            case 'INSERT_ITEMS':
              var s = Array.isArray(t.items)
                ? b(t.items)
                : Object(l.a)({}, t.items[n.uid], t.items)
              return Object(c.a)({}, e, { items: Object(c.a)({}, e.items, s) })
            case 'REDUCER':
              return t.reducer(e)
            case 'REMOVE_ITEMS':
              return (
                (r = t.remove),
                Array.isArray(r)
                  ? Object(c.a)({}, e, {
                      active: t.remove.includes(e.active) ? '' : e.active,
                      selected: e.selected.filter(function(e) {
                        return !t.remove.includes(e)
                      }),
                      items: i(e.items, t.remove),
                    })
                  : e
              )
            case 'REPLACE_ITEMS':
              var u = b(t.items)
              return Object(c.a)({}, e, { items: u })
            case 'RESET':
              return n
            case 'SET_ACTIVE':
              return (function(e) {
                return 'string' !== typeof e
              })(t.active)
                ? e
                : Object(c.a)({}, e, {
                    active: (function(e) {
                      return null == e
                    })(t.active)
                      ? ''
                      : t.active.trim(),
                  })
            case 'SET_LOADING':
              return Object(c.a)({}, e, { loading: !!t.loading })
            case 'SET_SELECTED':
              return Object(c.a)({}, e, { selected: t.selected })
            case 'TOGGLE_SELECTED_ITEMS':
              var d = Object(a.a)(e.selected),
                m = !0,
                f = !1,
                p = void 0
              try {
                for (
                  var j, h = t.selected[Symbol.iterator]();
                  !(m = (j = h.next()).done);
                  m = !0
                ) {
                  var O = j.value,
                    T = d.indexOf(O),
                    x = O.trim()
                  e.items[T]
                    ? (d =
                        0 === T
                          ? d.slice(1)
                          : T === d.length - 1
                          ? d.slice(0, d.length - 1)
                          : [].concat(
                              Object(a.a)(d.slice(0, T)),
                              Object(a.a)(d.slice(T + 1))
                            ))
                    : d.push(x)
                }
              } catch (g) {
                ;(f = !0), (p = g)
              } finally {
                try {
                  m || null == h.return || h.return()
                } finally {
                  if (f) throw p
                }
              }
              return Object(c.a)({}, e, { selected: d })
            case 'UPDATE_ITEM':
              if (!e.items[t.select]) return e
              var y = Object(l.a)(
                  {},
                  t.item.name || t.select,
                  Object(c.a)({}, e.items[t.select], t.item)
                ),
                v = t.item[n.uid]
                  ? Object(c.a)({}, i(e.items, [t.select]), y)
                  : Object(c.a)({}, e.items, y)
              return Object(c.a)({}, e, {
                active: e.active === t.select ? t.item.name : e.active,
                selected: (function(n, l, c) {
                  return e.selected.includes(t.select)
                    ? (function() {
                        var e = n.indexOf(l)
                        return 0 === e
                          ? [c].concat(Object(a.a)(n.slice(1)))
                          : e === n.length - 1
                          ? [].concat(Object(a.a)(n.slice(0, n.length - 1)), [
                              c,
                            ])
                          : [].concat(
                              Object(a.a)(n.slice(0, e)),
                              [c],
                              Object(a.a)(n.slice(e + 1))
                            )
                      })()
                    : e.selected
                })(e.selected, t.select, t.item.name),
                items: v,
              })
            default:
              return o ? o(e, t) : e
          }
        }
        function u(e, a) {
          return s(e, a, n, t)
        }
        return Object(o.useReducer)(u, n)
      }
      'undefined' !== typeof u &&
        u &&
        u === Object(u) &&
        Object.isExtensible(u) &&
        Object.defineProperty(u, '__filemeta', {
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
//# sourceMappingURL=src-table-table.30387d098bf5891c84b1.js.map

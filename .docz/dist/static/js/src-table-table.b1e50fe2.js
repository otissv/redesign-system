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
        o = n('./node_modules/react/index.js'),
        c = n.n(o),
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
      var s = c.a.createContext({})
      function u() {
        return Object(o.useContext)(s)
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
      var d = c.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          u = void 0 === n ? '' : n,
          d = (e.onClick, e.themed),
          m = void 0 === d ? [] : d,
          f = Object(l.a)(e, ['children', 'className', 'onClick', 'themed']),
          p = Object(o.useMemo)(
            function() {
              return 'ButtonGroup '.concat(u)
            },
            [u]
          ),
          j = Object(o.useMemo)(
            function() {
              return [r, b].concat(Object(a.a)(m))
            },
            [r, b, m]
          ),
          h = f.appearance,
          O = f.context,
          T = f.size,
          x = f.stretch,
          y = Object(o.useMemo)(
            function() {
              return { appearance: h, context: O, size: T, stretch: x }
            },
            [h, O, T, x]
          )
        return c.a.createElement(
          s.Provider,
          { value: y },
          c.a.createElement(
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
        o = n('./node_modules/react/index.js'),
        c = n.n(o),
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
          o = n.border,
          c = n.unit
        return {
          position: 'relative',
          height: c[5],
          width: c[5],
          border: o['thick'.concat(b()(t))] || o.thin,
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
      var d = c.a.memo(function(e) {
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
          j = Object(o.useMemo)(
            function() {
              return 'Checkbox '.concat(r)
            },
            [r]
          ),
          h = Object(o.useMemo)(
            function() {
              return [u].concat(Object(a.a)(f))
            },
            [u, f]
          ),
          O = Object(o.useMemo)(
            function() {
              return 'disabled' === p.appearance
            },
            [p.appearance]
          )
        return c.a.createElement(
          i.Base,
          Object.assign({ className: j, themed: h }, p),
          c.a.createElement('input', {
            checked: t,
            className: 'CheckboxInput',
            disabled: O,
            id: b,
            name: s,
            onChange: d,
            type: 'checkbox',
          }),
          c.a.createElement(
            'div',
            { className: 'CheckboxBackground' },
            c.a.createElement(
              'svg',
              { className: 'CheckboxCheckmark', viewBox: '0 0 24 24' },
              c.a.createElement('path', {
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
        o = n('./node_modules/react/index.js'),
        c = n.n(o),
        i = n('./node_modules/lodash/kebabCase.js'),
        r = n.n(i)
      function b(e) {
        var t = e.alignItems,
          n = e.basis,
          a = e.display,
          l = e.grow,
          o = e.justifyContent,
          c = e.shrink,
          i = e.wrap
        return {
          display: a || 'flex',
          basis: n ? ''.concat(n) : '',
          grow: l ? ''.concat(l) : '',
          shrink: c ? ''.concat(c) : '',
          justifyContent: (o && [r()(o)]) || '',
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
      var d = c.a.memo(function(e) {
        var t = e.children,
          n = e.className,
          i = void 0 === n ? '' : n,
          r = e.themed,
          d = void 0 === r ? [] : r,
          m = Object(l.a)(e, ['children', 'className', 'themed']),
          f = Object(o.useMemo)(
            function() {
              return 'Flex '.concat(i)
            },
            [i]
          ),
          p = Object(o.useMemo)(
            function() {
              return [b, s].concat(Object(a.a)(d))
            },
            [b, s, d]
          )
        return c.a.createElement(
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
        return c
      })
      var a = n('./node_modules/react/index.js'),
        l = n.n(a),
        o = n('./src/Icon/index.ts')
      function c(e) {
        return l.a.createElement(
          o.Icon,
          Object.assign({ viewBox: '0 0 480 480' }, e),
          l.a.createElement('path', {
            id: 'path4',
            d: 'M 190,340 290,240 190,140 Z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'CaretRight',
            filename: 'src/MaterialIcons/CaretRight.tsx',
          },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
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
        return c
      })
      var a = n('./node_modules/react/index.js'),
        l = n.n(a),
        o = n('./src/Icon/index.ts')
      function c(e) {
        return l.a.createElement(
          o.Icon,
          e,
          l.a.createElement('path', {
            d:
              'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'Code', filename: 'src/MaterialIcons/Code.tsx' },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'Code', filename: 'src/MaterialIcons/Code.tsx' },
          })
    },
    './src/MaterialIcons/PlayCircle.tsx': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      var a = n('./node_modules/react/index.js'),
        l = n.n(a),
        o = n('./src/Icon/index.ts')
      function c(e) {
        return l.a.createElement(
          o.Icon,
          e,
          l.a.createElement('path', {
            d:
              'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'PlayCircle',
            filename: 'src/MaterialIcons/PlayCircle.tsx',
          },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
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
        return c
      })
      var a = n('./node_modules/react/index.js'),
        l = n.n(a),
        o = n('./src/Icon/index.ts')
      function c(e) {
        return l.a.createElement(
          o.Icon,
          e,
          l.a.createElement('path', {
            d:
              'M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z',
          })
        )
      }
      c &&
        c === Object(c) &&
        Object.isExtensible(c) &&
        Object.defineProperty(c, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ViewList',
            filename: 'src/MaterialIcons/ViewList.tsx',
          },
        }),
        (t.b = c),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
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
        o = n.n(l),
        c = n('./node_modules/@mdx-js/react/dist/index.es.js'),
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
        m = n('./src/Base/Base.tsx'),
        f = o.a.memo(function(e) {
          var t = e.items
          return o.a.createElement(
            'pre',
            null,
            o.a.createElement(
              'code',
              { className: 'language-javascript' },
              JSON.stringify(t, null, 2)
            )
          )
        })
      'undefined' !== typeof f &&
        f &&
        f === Object(f) &&
        Object.isExtensible(f) &&
        Object.defineProperty(f, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'JsonView', filename: 'src/Table/JsonView.tsx' },
        })
      'undefined' !== typeof f &&
        f &&
        f === Object(f) &&
        Object.isExtensible(f) &&
        Object.defineProperty(f, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'JsonView', filename: 'src/Table/JsonView.tsx' },
        })
      var p = n('./src/MaterialIcons/Copy.tsx'),
        j = n('./src/MaterialIcons/Delete.tsx'),
        h = n('./src/MaterialIcons/Edit.tsx'),
        O = n('./src/MaterialIcons/Download.tsx'),
        T = n('./src/ButtonIcon/index.ts'),
        x = o.a.memo(function(e) {
          var t = e.icon,
            n = e.uid,
            c = Object(a.a)(e, ['icon', 'uid']),
            i = Object(l.useMemo)(
              function() {
                return t
              },
              [t]
            )
          return o.a.createElement(
            T.ButtonIcon,
            Object.assign({ 'data-uid': n, icon: i }, c)
          )
        })
      function y(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          c = Object(l.useMemo)(
            function() {
              return p.a
            },
            [p.a]
          )
        return o.a.createElement(
          x,
          Object.assign({ name: 'copy', onClick: t, icon: c, title: 'Copy' }, n)
        )
      }
      'undefined' !== typeof x &&
        x &&
        x === Object(x) &&
        Object.isExtensible(x) &&
        Object.defineProperty(x, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableButton', filename: 'src/Table/TableButton.tsx' },
        }),
        y &&
          y === Object(y) &&
          Object.isExtensible(y) &&
          Object.defineProperty(y, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'TableCopyButton',
              filename: 'src/Table/TableButton.tsx',
            },
          })
      var v = function(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          c = Object(l.useMemo)(
            function() {
              return j.a
            },
            [j.a]
          )
        return o.a.createElement(
          x,
          Object.assign(
            { name: 'delete', onClick: t, icon: c, title: 'Delete' },
            n
          )
        )
      }
      v &&
        v === Object(v) &&
        Object.isExtensible(v) &&
        Object.defineProperty(v, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableDeleteButton',
            filename: 'src/Table/TableButton.tsx',
          },
        })
      var g = function(e) {
        var t = e.onClick,
          n = (e.uid, Object(a.a)(e, ['onClick', 'uid'])),
          c = Object(l.useMemo)(
            function() {
              return O.a
            },
            [O.a]
          )
        return o.a.createElement(
          x,
          Object.assign(
            { name: 'Download', onClick: t, icon: c, title: 'Download' },
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
            name: 'TableDownloadButton',
            filename: 'src/Table/TableButton.tsx',
          },
        })
      var C = function(e) {
        var t = e.children,
          n = e.uid,
          c = Object(a.a)(e, ['children', 'uid']),
          i = Object(l.useMemo)(
            function() {
              return h.a
            },
            [h.a]
          )
        return o.a.createElement(
          x,
          Object.assign(
            { as: 'a', name: 'Edit', icon: i, title: 'Edit', 'data-uid': n },
            c
          ),
          t
        )
      }
      C &&
        C === Object(C) &&
        Object.isExtensible(C) &&
        Object.defineProperty(C, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableEditLink',
            filename: 'src/Table/TableButton.tsx',
          },
        })
      'undefined' !== typeof x &&
        x &&
        x === Object(x) &&
        Object.isExtensible(x) &&
        Object.defineProperty(x, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableButton', filename: 'src/Table/TableButton.tsx' },
        })
      var _ = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        E = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
        ),
        k = n('./src/Base/index.tsx'),
        I = n('./src/MaterialIcons/CaretRight.tsx')
      function P() {
        var e = Object(_.a)(['\n  ', '\n'])
        return (
          (P = function() {
            return e
          }),
          e
        )
      }
      var w = o.a.createContext({})
      function S() {
        return Object(l.useContext)(w)
      }
      function D(e) {
        var t = e.children,
          n = e.checked,
          c = void 0 !== n && n,
          i = e.expanded,
          r = void 0 !== i && i,
          b = Object(a.a)(e, ['children', 'checked', 'expanded']),
          s = Object(l.useState)(c),
          m = Object(E.a)(s, 2),
          f = m[0],
          p = m[1],
          j = Object(l.useState)(r),
          h = Object(E.a)(j, 2),
          O = h[0],
          T = h[1]
        Object(l.useEffect)(
          function() {
            p(c)
          },
          [c, p]
        ),
          Object(l.useEffect)(
            function() {
              T(r)
            },
            [r, T]
          )
        var x = o.a.useRef(function() {
            return null
          }),
          y = o.a.useRef(!1),
          v = Object(l.useMemo)(
            function() {
              return t.reduce(function(e, t) {
                return 'TableRowDetail' === t.type.displayName
                  ? ((x.current = function() {
                      return t
                    }),
                    (y.current = !0),
                    e)
                  : [].concat(Object(d.a)(e), [t])
              }, [])
            },
            [t, x]
          ),
          g = Object(l.useMemo)(
            function() {
              return Object(u.a)({}, b, {
                checked: f,
                expanded: O,
                setChecked: p,
                setExpanded: T,
              })
            },
            [f, p, O, T, b]
          )
        return o.a.createElement(
          w.Provider,
          { value: g },
          o.a.createElement(
            'tr',
            null,
            y.current && o.a.createElement(R, { expanded: O, setExpanded: T }),
            v
          ),
          o.a.createElement(
            H,
            { expanded: O, colSpan: t.length },
            o.a.createElement(x.current, null)
          )
        )
      }
      'undefined' !== typeof w &&
        w &&
        w === Object(w) &&
        Object.isExtensible(w) &&
        Object.defineProperty(w, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableColumnContext',
            filename: 'src/Table/TableColumnContext.tsx',
          },
        }),
        S &&
          S === Object(S) &&
          Object.isExtensible(S) &&
          Object.defineProperty(S, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useTableColumn',
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
              name: 'TableColumnProvider',
              filename: 'src/Table/TableColumnContext.tsx',
            },
          })
      var H = o.a.memo(function(e) {
          var t = e.children,
            n = e.colSpan,
            a = e.expanded,
            c = Object(l.useMemo)(function() {
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
          return o.a.createElement(
            'tr',
            {
              className: 'RowDetail',
              style: { display: a ? 'table-row' : 'none' },
            },
            o.a.createElement(
              'td',
              { colSpan: n },
              o.a.createElement(
                k.Base,
                { animate: c, state: a ? 'expanded' : 'collapsed', as: 'div' },
                t
              )
            )
          )
        }),
        B = b.default.button(P(), function(e) {
          var t = e.expanded
          return '\n  background: none;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  height: 30px;\n  margin: 3px;\n  outline: none;\n  padding-right: 0;\n  text-align: left;\n  transform: rotate('.concat(
            t ? '45deg' : '0deg',
            ');\n  transition: all 0.2s ease;\n\n  &:hover,\n  &:active {\n    background: none;\n    border-bottom: #0000;\n  }\n'
          )
        }),
        R = o.a.memo(function(e) {
          var t = e.expanded,
            n = e.setExpanded,
            l = Object(a.a)(e, ['expanded', 'setExpanded']),
            c = o.a.useCallback(
              function(e) {
                e.preventDefault(), n(!t)
              },
              [n, t]
            )
          return o.a.createElement(
            'td',
            l,
            o.a.createElement(
              B,
              { onClick: c, expanded: t },
              o.a.createElement(I.a, { alt: 'indicator' })
            )
          )
        }),
        A = o.a.memo(function(e) {
          var t = e.baseRoute,
            n = void 0 === t ? '' : t,
            c = e.children,
            i = e.data,
            r = e.dispatch,
            b = e.onAdd,
            s = e.onDeleteSelected,
            u = e.itemsToArray,
            d = e.loading,
            m = e.onRowClick,
            f = (e.rows, e.selected),
            p =
              (e.tableName,
              Object(a.a)(e, [
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
              ])),
            j = Object(l.useCallback)(
              function(e) {
                r({
                  type: 'TOGGLE_SELECTED_ITEMS',
                  selected: [e.currentTarget.name],
                })
              },
              [r]
            ),
            h = Object(l.useCallback)(function(e) {
              e.preventDefault()
            }, []),
            O = Object(l.useCallback)(
              function(e) {
                e.preventDefault()
                var t = e.currentTarget.dataset.uid
                m && m(e, t)
              },
              [m]
            ),
            T = Object(l.useMemo)(
              function() {
                return {
                  Copy: function(e) {
                    return o.a.createElement(y, e)
                  },
                  Edit: function(e) {
                    return o.a.createElement(
                      C,
                      Object.assign({}, e, { href: ''.concat(n, '/edit') })
                    )
                  },
                  Delete: function(e) {
                    return o.a.createElement(
                      v,
                      Object.assign({ onClick: h }, e)
                    )
                  },
                  Download: function(e) {
                    return o.a.createElement(g, e)
                  },
                  dispatch: r,
                  itemsToArray: u,
                  loading: d,
                  onAdd: b,
                  onChange: j,
                  onDelete: h,
                  onDeleteSelected: s,
                  onRowClick: O,
                  selected: f,
                }
              },
              [y, v, g, C, r, j, h, O, u, d, b, s, f]
            ),
            x = Object(l.useMemo)(
              function() {
                return i.map(function(e, t) {
                  return o.a.createElement(
                    D,
                    Object.assign(
                      {
                        key: e.id,
                        data: e,
                        checked: f.includes(e.id),
                        index: t,
                      },
                      T
                    ),
                    c
                  )
                })
              },
              [c, i, T]
            )
          return o.a.createElement(
            'tbody',
            Object.assign({ className: 'TableBody' }, p),
            x
          )
        })
      'undefined' !== typeof A &&
        A &&
        A === Object(A) &&
        Object.isExtensible(A) &&
        Object.defineProperty(A, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableBody', filename: 'src/Table/TableBody.tsx' },
        })
      var M = A
      'undefined' !== typeof A &&
        A &&
        A === Object(A) &&
        Object.isExtensible(A) &&
        Object.defineProperty(A, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableBody', filename: 'src/Table/TableBody.tsx' },
        })
      var N = o.a.createContext({})
      function V() {
        return Object(l.useContext)(N)
      }
      function L(e) {
        var t = e.allSelected,
          n = void 0 !== t && t,
          a = e.children,
          c = e.data,
          i = e.onAllSelectedChange,
          r = Object(l.useMemo)(
            function() {
              return { allSelected: n, data: c, onAllSelectedChange: i }
            },
            [n, i]
          )
        return o.a.createElement(N.Provider, { value: r }, a)
      }
      'undefined' !== typeof N &&
        N &&
        N === Object(N) &&
        Object.isExtensible(N) &&
        Object.defineProperty(N, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'TableHeadingsContext',
            filename: 'src/Table/TableHeadingsContext.tsx',
          },
        }),
        V &&
          V === Object(V) &&
          Object.isExtensible(V) &&
          Object.defineProperty(V, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useTableHeading',
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
              name: 'TableHeadingsProvider',
              filename: 'src/Table/TableHeadingsContext.tsx',
            },
          })
      var G = o.a.memo(function(e) {
        var t = e.allSelected,
          n = e.baseRoute,
          c = void 0 === n ? '' : n,
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
              return o.a.createElement(
                'thead',
                null,
                o.a.createElement(
                  'tr',
                  null,
                  i.reduce(function(e, t, n) {
                    var a = t.type,
                      l = t.props.heading
                    return 'TableRowDetail' === a.displayName
                      ? [o.a.createElement('th', { key: n })].concat(
                          Object(d.a)(e)
                        )
                      : [].concat(Object(d.a)(e), [
                          o.a.createElement('th', { key: n }, l),
                        ])
                  }, [])
                )
              )
            },
            [i]
          )
        return o.a.createElement(
          l.Fragment,
          null,
          o.a.createElement(
            L,
            { allSelected: t, data: r, onAllSelectedChange: f },
            T,
            o.a.createElement(
              M,
              Object.assign(
                {
                  baseRoute: c,
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
      'undefined' !== typeof G &&
        G &&
        G === Object(G) &&
        Object.isExtensible(G) &&
        Object.defineProperty(G, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableView', filename: 'src/Table/TableView.tsx' },
        })
      'undefined' !== typeof G &&
        G &&
        G === Object(G) &&
        Object.isExtensible(G) &&
        Object.defineProperty(G, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: { name: 'TableView', filename: 'src/Table/TableView.tsx' },
        })
      var z = n(
        './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js'
      )
      function F(e) {
        return { height: e.height || '100%', overflow: 'auto' }
      }
      function J(e) {
        var t = e.condensed,
          n = e.hover,
          a = e.theme,
          l = a.animation,
          o = a.border,
          c = a.color,
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
          td: { borderTop: o.thin },
          'tr:hover': {
            background: n ? c['grey-800'] : '',
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
            border: o.thinTransparent,
          },
          'a:hover, a:active': {
            background: 'none',
            border: o.thinTransparent,
            color: c.link,
          },
        }
      }
      function W(e) {
        return Object(z.a)(e.theme), { height: 0, visibility: 'hidden' }
      }
      function X(e) {
        return Object(z.a)(e.theme), { display: 'flex', marginLeft: 'auto' }
      }
      function U(e) {
        var t = e.theme.unit
        return { padding: ''.concat(t[2], ' 0') }
      }
      function Z(e) {
        var t = e.theme,
          n = t.color,
          a = t.unit
        return {
          background: n.active,
          padding: ''.concat(a[2], ' ').concat(a[4]),
        }
      }
      function q(e, t, n) {
        var a = Object(l.useState)(t),
          o = Object(E.a)(a, 2),
          c = o[0],
          i = o[1],
          r =
            'sessionStorage' === n ? window.sessionStorage : window.localStorage
        function b(t) {
          if (t !== c) {
            var n = JSON.stringify(t)
            return i(t), r.setItem(e, n)
          }
        }
        function s() {
          i(void 0), r.removeItem(e)
        }
        return (
          Object(l.useEffect)(function() {
            var n = r.getItem(e)
            b((n ? JSON.parse(n) : n) || t)
          }, []),
          Object(l.useMemo)(
            function() {
              return { state: c, setItem: b, removeItem: s }
            },
            [[c, b, s]]
          )
        )
      }
      F &&
        F === Object(F) &&
        Object.isExtensible(F) &&
        Object.defineProperty(F, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'tableContainerTheme',
            filename: 'src/Table/table.theme.ts',
          },
        }),
        'undefined' !== typeof J &&
          J &&
          J === Object(J) &&
          Object.isExtensible(J) &&
          Object.defineProperty(J, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: { name: 'tableTheme', filename: 'src/Table/table.theme.ts' },
          }),
        'undefined' !== typeof W &&
          W &&
          W === Object(W) &&
          Object.isExtensible(W) &&
          Object.defineProperty(W, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableCaptionTheme',
              filename: 'src/Table/table.theme.ts',
            },
          }),
        'undefined' !== typeof X &&
          X &&
          X === Object(X) &&
          Object.isExtensible(X) &&
          Object.defineProperty(X, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableViewsButtonTheme',
              filename: 'src/Table/table.theme.ts',
            },
          }),
        U &&
          U === Object(U) &&
          Object.isExtensible(U) &&
          Object.defineProperty(U, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableToolbarTheme',
              filename: 'src/Table/table.theme.ts',
            },
          }),
        'undefined' !== typeof Z &&
          Z &&
          Z === Object(Z) &&
          Object.isExtensible(Z) &&
          Object.defineProperty(Z, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'tableSelectedToolbarTheme',
              filename: 'src/Table/table.theme.ts',
            },
          }),
        q &&
          q === Object(q) &&
          Object.isExtensible(q) &&
          Object.defineProperty(q, '__filemeta', {
            enumerable: !0,
            configurable: !0,
            value: {
              name: 'useCacheState',
              filename: 'src/reusable/cacheState/useCacheState.ts',
            },
          })
      var K = function(e) {
        var t = e.children,
          n = e.className,
          c = e.themed,
          i = Object(a.a)(e, ['children', 'className', 'themed']),
          r = Object(l.useMemo)(
            function() {
              return 'TableCaption '.concat(n)
            },
            [n]
          ),
          b = Object(l.useMemo)(
            function() {
              return [W].concat(Object(d.a)(c))
            },
            [W, c]
          )
        return o.a.createElement(
          m.b,
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
            c = Object(l.useCallback)(
              function(e) {
                e.preventDefault(), t && t(e)
              },
              [t]
            ),
            i = Object(l.useMemo)(
              function() {
                return j.a
              },
              [j.a]
            )
          return o.a.createElement(
            Q.b,
            Object.assign(
              {
                alt: 'delete',
                appearance: 'active',
                uid: 'delete',
                onClick: c,
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
        var e = Object(_.a)(['\n  display: inline-block;\n'])
        return (
          (ee = function() {
            return e
          }),
          e
        )
      }
      var te = b.default.span(ee()),
        ne = o.a.memo(function(e) {
          var t = e.className,
            n = void 0 === t ? '' : t,
            c = e.selected,
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
                return [Z].concat(Object(d.a)(b))
              },
              [Z, b]
            )
          return o.a.createElement(
            $.a,
            Object.assign({ className: u, themed: m }, s),
            o.a.createElement(te, null, c, ' selected '),
            o.a.createElement(Y, {
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
            c = Object(l.useCallback)(
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
          return o.a.createElement(
            Q.b,
            Object.assign(
              {
                as: 'a',
                alt: 'add',
                appearance: 'active',
                uid: 'add',
                onClick: c,
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
      var oe = n('./node_modules/react-copy-to-clipboard/lib/index.js'),
        ce = function(e) {
          var t = e.data,
            n = e.onClick,
            c = Object(a.a)(e, ['data', 'onClick']),
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
                return p.a
              },
              [p.a]
            )
          return o.a.createElement(
            oe.CopyToClipboard,
            { text: i, copy: r },
            o.a.createElement(
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
                c
              ),
              'Copy'
            )
          )
        }
      ce &&
        ce === Object(ce) &&
        Object.isExtensible(ce) &&
        Object.defineProperty(ce, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'ToolbarCopyButton',
            filename: 'src/Table/ToolbarCopyButton.tsx',
          },
        })
      ce &&
        ce === Object(ce) &&
        Object.isExtensible(ce) &&
        Object.defineProperty(ce, '__filemeta', {
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
            c = e.fileName,
            i = Object(a.a)(e, ['onClick', 'data', 'fileName']),
            r = Object(l.useMemo)(
              function() {
                return 'string' === typeof n ? n : JSON.stringify(n, null, 2)
              },
              [n]
            ),
            b = Object(l.useCallback)(
              function(e) {
                e.preventDefault(), r && re()(r, c), t && t(e)
              },
              [t]
            ),
            s = Object(l.useMemo)(
              function() {
                return O.a
              },
              [O.a]
            )
          return o.a.createElement(
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
          c = Object(l.useCallback)(
            function(e) {
              e.preventDefault(), t && t(e)
            },
            [t]
          ),
          i = Object(l.useMemo)(
            function() {
              return h.a
            },
            [h.a]
          )
        return o.a.createElement(
          Q.b,
          Object.assign(
            {
              as: 'a',
              alt: 'edit',
              appearance: 'active',
              uid: 'edit',
              onClick: c,
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
            c = Object(l.useCallback)(
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
          return o.a.createElement(
            Q.b,
            Object.assign(
              {
                alt: 'execute',
                appearance: 'active',
                uid: 'execute',
                onClick: c,
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
            c = e.onClick,
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
                return [X].concat(Object(d.a)(i))
              },
              [X, i]
            ),
            u = Object(l.useCallback)(
              function(e) {
                e.preventDefault()
                var t = e.currentTarget.dataset.uid
                c && c(e, { id: t })
              },
              [c]
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
          return o.a.createElement(
            k.Base,
            Object.assign({ className: b, themed: s }, r),
            o.a.createElement(
              me.b,
              null,
              o.a.createElement(
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
              o.a.createElement(
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
      var he = o.a.memo(function(e) {
        var t = e.baseRoute,
          n = e.items,
          a = e.onDeleteSelected,
          c = e.onSwitchView,
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
                return o.a.createElement(le, {
                  alt: 'add',
                  key: 'add',
                  onClick: b,
                  href: '/'.concat(t, '/new'),
                })
              case 'copy':
                return o.a.createElement(ce, {
                  alt: 'copy',
                  key: 'copy',
                  data: r,
                  onClick: s,
                })
              case 'edit':
                return o.a.createElement(se, {
                  alt: 'edit',
                  key: 'edit',
                  onClick: m,
                  href: '/'.concat(t, '/edit'),
                })
              case 'delete':
                return o.a.createElement(Y, {
                  alt: 'delete',
                  key: 'delete',
                  onClick: u,
                  title: 'Delete',
                })
              case 'download':
                return o.a.createElement(be, {
                  alt: 'download',
                  key: 'download',
                  data: r,
                  onClick: d,
                  fileName: p
                    ? 'guru_download_'.concat(p, '.json')
                    : 'guru_download.json',
                })
              case 'execute':
                return o.a.createElement(de, {
                  alt: 'execute',
                  key: 'execute',
                  onClick: f,
                  title: 'Execute',
                })
              case 'views':
                return o.a.createElement(je, {
                  key: 'views',
                  onClick: c,
                  currentView: i,
                })
              default:
                return null
            }
          },
          O = Object(l.useMemo)(
            function() {
              return o.a.createElement(
                l.Fragment,
                null,
                j.map(function(e) {
                  return 'function' === typeof e
                    ? e({ onSwitchView: c, currentView: i, onAdd: b })
                    : h(e)
                })
              )
            },
            [h, i, b, c, j]
          ),
          T = Object(l.useCallback)(
            function(e) {
              e.preventDefault(), a && a(e)
            },
            [a]
          ),
          x = Object(l.useMemo)(
            function() {
              return [U]
            },
            [U]
          )
        return n.length > 0
          ? o.a.createElement(ne, {
              selected: n.length,
              handleDeleteSelected: T,
            })
          : o.a.createElement(
              $.a,
              {
                className: 'TableToolbar',
                baseRoute: t,
                onSwitchView: c,
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
      var Oe = o.a.memo(function(e) {
        var t = e.baseRoute,
          n = void 0 === t ? '' : t,
          c = e.caption,
          i = e.children,
          r = e.className,
          b = void 0 === r ? '' : r,
          s = e.condensed,
          p = e.height,
          j = e.hook,
          h = e.hover,
          O = e.initialValue,
          T = e.name,
          x = (e.numbered, e.onAdd),
          y = e.onCopy,
          v = e.onDelete,
          g = e.onDeleteSelected,
          C = e.onDownload,
          _ = e.onEdit,
          E = e.onExecute,
          k = e.onRowClick,
          I = e.themed,
          P = void 0 === I ? [] : I,
          w = e.title,
          S = e.toolbar,
          D = void 0 === S ? [] : S,
          H = Object(a.a)(e, [
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
          R = Object(l.useMemo)(
            function() {
              return [J].concat(Object(d.a)(P))
            },
            [J, P]
          ),
          A = j(),
          M = A.loading,
          N = A.selected,
          V = A.dispatch,
          L = A.itemsToArray,
          z = A.items,
          W = Object(l.useMemo)(
            function() {
              return z
            },
            [z]
          ),
          X = Object(l.useMemo)(
            function() {
              return O || L()
            },
            [O, L]
          )
        Object(l.useEffect)(
          function() {
            Z({ type: 'SET_ITEM_LIST', itemList: X })
          },
          [X]
        )
        var U = Object(l.useCallback)(function(e, t) {
            switch (t.type) {
              case 'SET_ITEM_LIST':
                return Object(u.a)({}, e, { itemList: t.itemList })
              case 'SET_VARIABLES':
                return Object(u.a)({}, e, { variables: t.variables })
              default:
                return e
            }
          }, []),
          Z = Object(l.useReducer)(U, { variables: {}, itemList: [] })[1],
          Q = q(''.concat(T, '_Table'), 'table'),
          Y = Q.state,
          $ = Q.setItem,
          ee = Object(l.useCallback)(
            function(e) {
              e.preventDefault(), x && x(e)
            },
            [x]
          ),
          te = Object(l.useCallback)(
            function(e) {
              e.preventDefault(), v && v(e)
            },
            [v]
          ),
          ae = Object(l.useCallback)(
            function(e) {
              e.preventDefault(),
                window.confirm(
                  'Delete selected items?\n'.concat(N.join('\n'))
                ) &&
                  g &&
                  g(e)
            },
            [g]
          ),
          le = Object(l.useCallback)(
            function(e) {
              e.preventDefault(), _ && _(e)
            },
            [_]
          ),
          oe = Object(l.useCallback)(
            function(e) {
              e.preventDefault(),
                E().then(function(e) {
                  e && Z({ type: 'SET_ITEM_LIST', itemList: e })
                })
            },
            [Z, E]
          ),
          ce = Object(l.useCallback)(
            function(e, t) {
              var n = t.id
              e.preventDefault(), n !== Y && $(n)
            },
            [$]
          ),
          ie = Object(l.useMemo)(
            function() {
              return N.length === X.length
            },
            [X, N]
          ),
          re = o.a.useCallback(
            function(e) {
              var t = Array.isArray(z)
                ? z.reduce(function(e, t) {
                    return [].concat(Object(d.a)(e), [t.id])
                  }, [])
                : Object.keys(z)
              V({
                type: 'SET_SELECTED',
                selected: e.currentTarget.checked ? t : [],
              })
            },
            [V, z]
          )
        return o.a.createElement(
          l.Fragment,
          null,
          D.length > 0
            ? o.a.createElement(he, {
                baseRoute: n,
                borderBottom: 'thin',
                currentView: Y,
                data: X,
                items: N,
                onAdd: ee,
                onCopy: y,
                onDelete: te,
                onDeleteSelected: ae,
                onDownload: C,
                onEdit: le,
                onExecute: oe,
                onSwitchView: ce,
                paddingBottom: 2,
                selectToolbar: ne,
                title: w,
                toolbar: D,
              })
            : null,
          'table' === Y
            ? o.a.createElement(
                m.b,
                Object.assign({ className: B, themed: [F], height: p }, H),
                o.a.createElement(
                  m.b,
                  {
                    as: 'table',
                    className: 'Table',
                    themed: R,
                    condensed: s,
                    hover: h,
                  },
                  c ? o.a.createElement(K, null, c) : null,
                  o.a.createElement(
                    G,
                    {
                      allSelected: ie,
                      baseRoute: n,
                      dispatch: V,
                      onAdd: ee,
                      onDeleteSelected: ae,
                      onAllSelectedChange: re,
                      itemsToArray: L,
                      loading: M,
                      selected: N,
                      tableName: T,
                      onRowClick: k,
                      data: X,
                    },
                    i
                  )
                )
              )
            : o.a.createElement(
                m.b,
                Object.assign({ className: B, themed: [F], height: p }, H),
                o.a.createElement(f, { items: W })
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
          n = Object(E.a)(t, 2),
          a = n[0],
          o = n[1]
        return Object(l.useMemo)(
          function() {
            return Object(u.a)({}, a, {
              dispatch: o,
              itemsToArray: function() {
                return Object(Te.itemsToArray)(a.items)
              },
            })
          },
          [a, o]
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
            c = 'TableRowSelect '.concat(n),
            i = S(),
            r = i.checked,
            b = i.data.id,
            s = i.onChange,
            u = i.setChecked
          return o.a.createElement(
            'td',
            { className: c },
            o.a.createElement(
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
      var Ce = o.a.memo(function(e) {
        var t = e.className,
          n = void 0 === t ? '' : t,
          c = Object(a.a)(e, ['className']),
          i = 'AllSelectedHeading '.concat(n),
          r = V(),
          b = r.allSelected,
          s = r.onAllSelectedChange,
          u = Object(l.useCallback)(
            function(e) {
              s && s(e)
            },
            [s]
          )
        return o.a.createElement(
          ve.Checkbox,
          Object.assign(
            { className: i, checked: b, name: 'allSelected', onChange: u },
            c
          )
        )
      })
      'undefined' !== typeof Ce &&
        Ce &&
        Ce === Object(Ce) &&
        Object.isExtensible(Ce) &&
        Object.defineProperty(Ce, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'AllSelectedHeading',
            filename: 'src/Table/AllSelectedHeading.tsx',
          },
        })
      function _e(e) {
        var t = e.children,
          n = e.prop,
          c = Object(a.a)(e, ['children', 'prop']),
          i = S(),
          r = i.data,
          b = i.index,
          s = Object(l.useMemo)(
            function() {
              return 'function' === typeof t
                ? t(Object(u.a)({ data: r, prop: n }, c, { index: b }))
                : t
            },
            [t, r, b, n, c]
          )
        return o.a.createElement(
          o.a.Fragment,
          null,
          s ||
            o.a.createElement(
              k.Base,
              Object.assign({ as: 'td' }, c),
              '__index' === n ? b : r[n]
            )
        )
      }
      function Ee(e) {
        var t = e.children,
          n = Object(a.a)(e, ['children']),
          c = S(),
          i = c.data,
          r = c.index,
          b = o.a.cloneElement(t, Object(u.a)({ data: i }, n, { index: r }))
        return Object(l.useMemo)(
          function() {
            return 'function' === typeof t
              ? t(Object(u.a)({ data: i }, n, { index: r }))
              : b
          },
          [t, b, i, r, n]
        )
      }
      'undefined' !== typeof Ce &&
        Ce &&
        Ce === Object(Ce) &&
        Object.isExtensible(Ce) &&
        Object.defineProperty(Ce, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'AllSelectedHeading',
            filename: 'src/Table/AllSelectedHeading.tsx',
          },
        }),
        _e &&
          _e === Object(_e) &&
          Object.isExtensible(_e) &&
          Object.defineProperty(_e, '__filemeta', {
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
        return Object(c.b)(
          Ie,
          Object.assign({}, ke, n, { components: t, mdxType: 'MDXLayout' }),
          Object(c.b)('h1', { id: 'table' }, 'Table'),
          Object(c.b)('h2', { id: 'properties' }, 'Properties'),
          Object(c.b)(i.d, { of: Oe, mdxType: 'Props' }),
          Object(c.b)('h2', { id: 'default' }, 'Default'),
          Object(c.b)(
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
                AllSelectedHeading: Ce,
                TableColumn: _e,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableDeafult',
                  caption: 'Table caption',
                  baseRoute: '/table/#',
                  hook: ye,
                  mdxType: 'Table',
                },
                Object(c.b)(_e, {
                  heading: '#',
                  uid: 'index',
                  prop: '__index',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(
                  _e,
                  {
                    heading: 'Endpoint',
                    uid: 'endpoint',
                    mdxType: 'TableColumn',
                  },
                  function(e) {
                    var t = e.data
                    return Object(c.b)(
                      'td',
                      null,
                      Object(c.b)(
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
          Object(c.b)('h2', { id: 'selectable' }, 'Selectable'),
          Object(c.b)(
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
                AllSelectedHeading: Ce,
                TableColumn: _e,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableSelect',
                  selectable: !0,
                  hook: ye,
                  mdxType: 'Table',
                },
                Object(c.b)(
                  _e,
                  {
                    uid: 'select',
                    heading: Object(c.b)(Ce, { mdxType: 'AllSelectedHeading' }),
                    mdxType: 'TableColumn',
                  },
                  Object(c.b)(ge, { mdxType: 'TableRowSelect' })
                ),
                Object(c.b)(_e, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(c.b)('h2', { id: 'hover' }, 'Hover'),
          Object(c.b)(
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
                AllSelectedHeading: Ce,
                TableColumn: _e,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableHover',
                  hover: !0,
                  headings: ['ID', 'Name', 'Endpoint'],
                  hook: ye,
                  mdxType: 'Table',
                },
                Object(c.b)(_e, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(c.b)('h2', { id: 'condensed' }, 'Condensed'),
          Object(c.b)(
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
                AllSelectedHeading: Ce,
                TableColumn: _e,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableCondensed',
                  condensed: !0,
                  headings: ['ID', 'Name', 'Endpoint'],
                  hook: ye,
                  mdxType: 'Table',
                },
                Object(c.b)(_e, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(c.b)('h2', { id: 'toolbar' }, 'Toolbar'),
          Object(c.b)(
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
                AllSelectedHeading: Ce,
                TableColumn: _e,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
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
                Object(c.b)(
                  _e,
                  {
                    uid: 'select',
                    heading: Object(c.b)(Ce, { mdxType: 'AllSelectedHeading' }),
                    mdxType: 'TableColumn',
                  },
                  Object(c.b)(ge, { mdxType: 'TableRowSelect' })
                ),
                Object(c.b)(_e, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'Endpoint',
                  uid: 'endpoint',
                  prop: 'endpoint',
                  mdxType: 'TableColumn',
                })
              )
            )
          ),
          Object(c.b)('h2', { id: 'row-detail' }, 'Row Detail'),
          Object(c.b)(
            i.c,
            {
              __position: 6,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableDeafult"\n    caption="Table caption"\n    baseRoute="/table/#"\n    hook={useTable}\n  >\n    <TableColumn heading="#" uid="index" prop="__index" />\n\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint">\n      {({ data }) => (\n        <td>\n          <a href="/table/#" onClick={e => e.preventDefault()}>\n            {data.endpoint}\n          </a>\n        </td>\n      )}\n    </TableColumn>\n\n    <TableRowDetail>\n      <table>\n        <thead>\n          <tr>\n            <th>IP</th>\n            <th>Repository</th>\n            <th>Port</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>0.0.0.1</td>\n            <td>repo1</td>\n            <td>8081</td>\n          </tr>\n        </tbody>\n      </table>\n    </TableRowDetail>\n  </Table>\n</ThemeProvider>',
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
                AllSelectedHeading: Ce,
                TableColumn: _e,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableDeafult',
                  caption: 'Table caption',
                  baseRoute: '/table/#',
                  hook: ye,
                  mdxType: 'Table',
                },
                Object(c.b)(_e, {
                  heading: '#',
                  uid: 'index',
                  prop: '__index',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(
                  _e,
                  {
                    heading: 'Endpoint',
                    uid: 'endpoint',
                    mdxType: 'TableColumn',
                  },
                  function(e) {
                    var t = e.data
                    return Object(c.b)(
                      'td',
                      null,
                      Object(c.b)(
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
                Object(c.b)(
                  Ee,
                  { mdxType: 'TableRowDetail' },
                  Object(c.b)(
                    'table',
                    null,
                    Object(c.b)(
                      'thead',
                      null,
                      Object(c.b)(
                        'tr',
                        null,
                        Object(c.b)('th', null, 'IP'),
                        Object(c.b)('th', null, 'Repository'),
                        Object(c.b)('th', null, 'Port')
                      )
                    ),
                    Object(c.b)(
                      'tbody',
                      null,
                      Object(c.b)(
                        'tr',
                        null,
                        Object(c.b)('td', null, '0.0.0.1'),
                        Object(c.b)('td', null, 'repo1'),
                        Object(c.b)('td', null, '8081')
                      )
                    )
                  )
                )
              )
            )
          ),
          Object(c.b)(
            'h3',
            { id: 'render-props-detail' },
            'Render Props Detail'
          ),
          Object(c.b)(
            i.c,
            {
              __position: 7,
              __code:
                '<ThemeProvider>\n  <Table\n    height="250px"\n    name="TableDeafult"\n    caption="Table caption"\n    baseRoute="/table/#"\n    hook={useTable}\n  >\n    <TableColumn heading="#" uid="index" prop="__index" />\n\n    <TableColumn heading="ID" uid="id" prop="id" />\n\n    <TableColumn heading="Name" uid="name" prop="name" />\n\n    <TableColumn heading="Endpoint" uid="endpoint">\n      {({ data }) => (\n        <td>\n          <a href="/table/#" onClick={e => e.preventDefault()}>\n            {data.endpoint}\n          </a>\n        </td>\n      )}\n    </TableColumn>\n\n    <TableRowDetail>\n      {({ data }) => (\n        <table>\n          <thead>\n            <tr>\n              <th>IP</th>\n              <th>Repository</th>\n              <th>Port</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{data.ip}</td>\n              <td>{data.repo}</td>\n              <td>{data.port}</td>\n            </tr>\n          </tbody>\n        </table>\n      )}\n    </TableRowDetail>\n  </Table>\n</ThemeProvider>',
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
                AllSelectedHeading: Ce,
                TableColumn: _e,
                TableRowDetail: Ee,
              },
              mdxType: 'Playground',
            },
            Object(c.b)(
              s.a,
              { mdxType: 'ThemeProvider' },
              Object(c.b)(
                Oe,
                {
                  height: '250px',
                  name: 'TableDeafult',
                  caption: 'Table caption',
                  baseRoute: '/table/#',
                  hook: ye,
                  mdxType: 'Table',
                },
                Object(c.b)(_e, {
                  heading: '#',
                  uid: 'index',
                  prop: '__index',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'ID',
                  uid: 'id',
                  prop: 'id',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(_e, {
                  heading: 'Name',
                  uid: 'name',
                  prop: 'name',
                  mdxType: 'TableColumn',
                }),
                Object(c.b)(
                  _e,
                  {
                    heading: 'Endpoint',
                    uid: 'endpoint',
                    mdxType: 'TableColumn',
                  },
                  function(e) {
                    var t = e.data
                    return Object(c.b)(
                      'td',
                      null,
                      Object(c.b)(
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
                Object(c.b)(Ee, { mdxType: 'TableRowDetail' }, function(e) {
                  var t = e.data
                  return Object(
                    c.b
                  )('table', null, Object(c.b)('thead', null, Object(c.b)('tr', null, Object(c.b)('th', null, 'IP'), Object(c.b)('th', null, 'Repository'), Object(c.b)('th', null, 'Port'))), Object(c.b)('tbody', null, Object(c.b)('tr', null, Object(c.b)('td', null, t.ip), Object(c.b)('td', null, t.repo), Object(c.b)('td', null, t.port))))
                })
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
      function o(e) {
        var t = e(),
          n = t.items,
          o = t.itemsToArray,
          c = Object(l.useState)([]),
          i = Object(a.a)(c, 2),
          r = i[0],
          b = i[1]
        return (
          Object(l.useEffect)(
            function() {
              b(o(n))
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
      function c(e, t) {
        var n = Object(l.useState)(t),
          o = Object(a.a)(n, 2),
          c = o[0],
          i = o[1],
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
              return c
            },
            [c]
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
          o = n.dispatch
        Object(l.useEffect)(
          function() {
            a !== t && o({ type: 'SET_ACTIVE', active: t })
          },
          [a, t]
        )
      }
      o &&
        o === Object(o) &&
        Object.isExtensible(o) &&
        Object.defineProperty(o, '__filemeta', {
          enumerable: !0,
          configurable: !0,
          value: {
            name: 'useGetItems',
            filename: 'src/reusable/collectionHash/collectionHash.hooks.ts',
          },
        }),
        c &&
          c === Object(c) &&
          Object.isExtensible(c) &&
          Object.defineProperty(c, '__filemeta', {
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
        o = n(
          './node_modules/docz/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js'
        ),
        c = n('./node_modules/react/index.js'),
        i = n('./src/reusable/collectionHash/collectionHashConstants.ts'),
        r = function(e) {
          return Object(o.a)({}, i.a, e)
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
              return Object(o.a)({}, e, Object(l.a)({}, t[n.uid], t))
            }, {})
          }
        }
        function s(e, t, n, c) {
          var r
          switch (t.type) {
            case 'INSERT_ITEMS':
              var s = Array.isArray(t.items)
                ? b(t.items)
                : Object(l.a)({}, t.items[n.uid], t.items)
              return Object(o.a)({}, e, { items: Object(o.a)({}, e.items, s) })
            case 'REDUCER':
              return t.reducer(e)
            case 'REMOVE_ITEMS':
              return (
                (r = t.remove),
                Array.isArray(r)
                  ? Object(o.a)({}, e, {
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
              return Object(o.a)({}, e, { items: u })
            case 'RESET':
              return n
            case 'SET_ACTIVE':
              return (function(e) {
                return 'string' !== typeof e
              })(t.active)
                ? e
                : Object(o.a)({}, e, {
                    active: (function(e) {
                      return null == e
                    })(t.active)
                      ? ''
                      : t.active.trim(),
                  })
            case 'SET_LOADING':
              return Object(o.a)({}, e, { loading: !!t.loading })
            case 'SET_SELECTED':
              return Object(o.a)({}, e, { selected: t.selected })
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
              return Object(o.a)({}, e, { selected: d })
            case 'UPDATE_ITEM':
              if (!e.items[t.select]) return e
              var y = Object(l.a)(
                  {},
                  t.item.name || t.select,
                  Object(o.a)({}, e.items[t.select], t.item)
                ),
                v = t.item[n.uid]
                  ? Object(o.a)({}, i(e.items, [t.select]), y)
                  : Object(o.a)({}, e.items, y)
              return Object(o.a)({}, e, {
                active: e.active === t.select ? t.item.name : e.active,
                selected: (function(n, l, o) {
                  return e.selected.includes(t.select)
                    ? (function() {
                        var e = n.indexOf(l)
                        return 0 === e
                          ? [o].concat(Object(a.a)(n.slice(1)))
                          : e === n.length - 1
                          ? [].concat(Object(a.a)(n.slice(0, n.length - 1)), [
                              o,
                            ])
                          : [].concat(
                              Object(a.a)(n.slice(0, e)),
                              [o],
                              Object(a.a)(n.slice(e + 1))
                            )
                      })()
                    : e.selected
                })(e.selected, t.select, t.item.name),
                items: v,
              })
            default:
              return c ? c(e, t) : e
          }
        }
        function u(e, a) {
          return s(e, a, n, t)
        }
        return Object(c.useReducer)(u, n)
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
//# sourceMappingURL=src-table-table.123d966e15eeb904531a.js.map

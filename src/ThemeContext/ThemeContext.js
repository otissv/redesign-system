import React, { useMemo, useState, useContext } from 'react'
import PropTypes from 'prop-types'

import { theme as themeFn } from '../theme'
import GlobalStyle from '../GlobalStyle/GlobalStyle'

export const ThemeContext = React.createContext({})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children, theme }) {
  const _theme = themeFn({
    color: {
      accent: 'pink',
      active: 'pink',
      danger: 'red',
      disabled: 'grey',
      action: 'blue',
      info: 'light-blue',
      success: 'green',
      warning: 'yellow',
      foreground: 'grey-050',
      background: 'grey-900',
      foregroundInvert: 'grey-900',
      backgroundInvert: 'grey-050',
    },
    ...theme,
  })

  const [themeContext, setTheme] = useState({ ..._theme })

  const context = useMemo(() => ({ theme: themeContext, setTheme }), [
    themeContext,
    setTheme,
  ])
  return (
    <ThemeContext.Provider value={context}>
      <GlobalStyle />
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  theme: PropTypes.object,
}

ThemeProvider.defaultProps = {
  theme: {},
}

export default ThemeContext

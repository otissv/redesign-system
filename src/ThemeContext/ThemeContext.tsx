import * as React from 'react'

import { ThemeInterface } from '../theme'

export const ThemeContext = React.createContext({} as ThemeInterface)

export function useTheme() {
  return React.useContext(ThemeContext)
}

export default ThemeContext

import * as React from 'react';
import ThemeContext from './ThemeContext';

import { theme as themeFn } from '../theme';
import { GlobalStyle } from '../GlobalStyle';
import { ThemeProviderInterface } from '../ThemeContext';

export const ThemeProvider = function ThemeProvider({
  children,
  theme,
}: ThemeProviderInterface) {
  const _theme = themeFn({
    color: {
      accent: 'pink',
      action: 'blue',
      active: 'pink',
      background: 'grey-900',
      backgroundInvert: 'grey-050',
      danger: 'red',
      default: 'grey',
      disabled: 'grey',
      foreground: 'grey-050',
      foregroundInvert: 'grey-900',
      info: 'light-blue',
      success: 'green',
      warning: 'yellow',
    },
    ...theme,
  });

  const [themeContext, setTheme] = React.useState({ ..._theme });

  const context = React.useMemo(() => ({ theme: themeContext, setTheme }), [
    themeContext,
    setTheme,
  ]);
  return (
    <ThemeContext.Provider value={context}>
      <GlobalStyle />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

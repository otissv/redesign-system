import * as tslib_1 from "tslib";
import * as React from 'react';
import ThemeContext from './ThemeContext';
import { theme as themeFn } from '../theme';
import { GlobalStyle } from '../GlobalStyle';
export function ThemeProvider(_a) {
    var children = _a.children, theme = _a.theme;
    var _theme = themeFn(tslib_1.__assign({ color: {
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
        } }, theme));
    var _b = React.useState(tslib_1.__assign({}, _theme)), themeContext = _b[0], setTheme = _b[1];
    var context = React.useMemo(function () { return ({ theme: themeContext, setTheme: setTheme }); }, [
        themeContext,
        setTheme,
    ]);
    return (React.createElement(ThemeContext.Provider, { value: context },
        React.createElement(GlobalStyle, null),
        children));
}
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map
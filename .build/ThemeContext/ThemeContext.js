export * from './ThemeContext';
import * as React from 'react';
export var ThemeContext = React.createContext({});
export function useTheme() {
    return React.useContext(ThemeContext);
}
export default ThemeContext;
//# sourceMappingURL=ThemeContext.js.map
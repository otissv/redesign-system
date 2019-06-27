export * from './ThemeContext';
import * as React from 'react';
import { ThemeInterface } from '../theme';
export declare const ThemeContext: React.Context<ThemeInterface>;
export declare function useTheme(): ThemeInterface;
export default ThemeContext;

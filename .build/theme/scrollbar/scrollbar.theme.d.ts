import { scrollbarInterface, ThemeInterface } from '../theme.types';
export declare function scrollbarTheme({ color, scrollbar, unit }: ThemeInterface): {
    [key: string]: any;
} & scrollbarInterface;

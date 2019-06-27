import { TextAreaInterface } from './textarea.types';
export declare function textareaTheme({ theme: { animation, border, color, font, unit }, }: TextAreaInterface): {
    border: string;
    background: any;
    borderRadius: number;
    color: any;
    lineHeight: number;
    maxWidth: string;
    minHeight: string;
    outline: number;
    padding: any;
    verticalAlign: string;
    webkitAppearance: string;
    width: string;
    transition: any;
    '&::placeholder': {
        color: any;
    };
    '&:hover': {
        background: any;
        border: string;
    };
    '&:active': {
        background: any;
        border: string;
    };
    '&:focus': {
        background: any;
        border: string;
        boxShadow: string;
        zIndex: number;
    };
};
export declare function textareaAppearanceTheme({ appearance, theme: { border, color }, }: TextAreaInterface): {};
export declare function textareaWidthsTheme({ widths }: TextAreaInterface): {
    width: string;
} | {
    width?: undefined;
};

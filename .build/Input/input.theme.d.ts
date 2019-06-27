import { InputInterface } from './input.types';
export declare function inputTheme({ theme: { animation, border, color, font, unit }, }: InputInterface): {
    '-webkitAppearance': string;
    background: any;
    border: string;
    borderBottom: string;
    color: any;
    display: string;
    fontSize: string;
    lineHeight: number;
    outline: number;
    overflow: string;
    padding: string;
    verticalAlign: string;
    transition: any;
    width: string;
    '&:hover': {
        background: any;
    };
    '&:focus': {
        background: any;
        boxShadow: string;
        zIndex: number;
    };
    '&:active': {
        background: any;
    };
    '&::placeholder': {
        color: any;
    };
};
export declare function inputAppearanceTheme({ appearance, theme: { color, border }, }: InputInterface): {
    background: any;
    borderBottom: string;
    '&:hover': {
        background: any;
    };
    '&:focus': {
        background: any;
        boxShadow: string;
        zIndex: number;
    };
    '&:active': {
        background: any;
    };
} | {
    background: string;
    border: string;
    borderBottom: string;
    '&:active': {
        borderBottom: string;
    };
    '&:focus': {
        borderBottom: string;
        boxShadow: string;
        zIndex: number;
    };
    '&:hover': {
        borderBottom: string;
        background: any;
    };
} | {
    background: string;
    border: string;
    '&:hover': {
        background: any;
        borderBottom?: undefined;
    };
    '&:focus': {
        background: any;
        boxShadow: string;
        zIndex: number;
        borderBottom?: undefined;
    };
    '&:active': {
        background: any;
        borderBottom?: undefined;
    };
    borderBottom?: undefined;
} | {
    border: string;
    borderBottom: string;
    background: any;
    '&:hover': {
        background: any;
        borderBottom?: undefined;
    };
    '&:focus': {
        background: any;
        boxShadow: string;
        zIndex: number;
        borderBottom?: undefined;
    };
    '&:active': {
        background: any;
        borderBottom?: undefined;
    };
} | {
    background: any;
    border: string;
    borderBottom: string;
    '&:active': {
        background: any;
        borderBottom: string;
    };
    '&:focus': {
        borderBottom: string;
        boxShadow: string;
        zIndex: number;
        background?: undefined;
    };
    '&:hover': {
        borderBottom: string;
        background: any;
    };
} | {
    background?: undefined;
    border?: undefined;
    '&:hover'?: undefined;
    '&:focus'?: undefined;
    '&:active'?: undefined;
    borderBottom?: undefined;
};
export declare function inputSizeTheme({ size, theme: { font } }: InputInterface): {
    fontSize: string;
} | {
    fontSize?: undefined;
};
export declare function inputWidthsTheme({ widths }: InputInterface): {
    width: string;
} | {
    width?: undefined;
};

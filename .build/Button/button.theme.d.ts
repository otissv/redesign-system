import { ButtonInterface } from './button.types';
export declare function buttonTheme({ theme: { animation, color, border, font, unit }, }: ButtonInterface): {
    color: any;
    background: any;
    border: string;
    boxShadow: string;
    boxSizing: string;
    cursor: string;
    display: string;
    font: string;
    lineHeight: number;
    margin: number;
    overflow: string;
    padding: string;
    textAlign: string;
    transition: any;
    verticalAlign: string;
    outline: number;
    position: string;
    '&:hover': {
        background: any;
        borderBottom: string;
    };
    '&:focus': {
        boxShadow: string;
        zIndex: number;
    };
    '&:active': {
        background: any;
        borderBottom: string;
    };
};
export declare function buttonAppearanceTheme({ appearance, theme: { color, border }, }: ButtonInterface): {
    background: any;
    border: string;
    color: any;
    '&:hover': {
        background: any;
        borderBottom: string;
    };
    '&:focus': {
        boxShadow: string;
        zIndex: number;
    };
    '&:active': {
        background: any;
        border: string;
    };
} | {
    background: any;
    border: string;
    color: any;
    '&:hover': {
        background: any;
        border: string;
    };
    '&:focus': {
        boxShadow: string;
        zIndex: number;
    };
    '&:active': {
        background: any;
        border: string;
    };
} | {
    background: any;
    border: string;
    color: any;
    '&:hover': {
        background: any;
        border: string;
    };
    '&:focus': {
        boxShadow: string;
        zIndex: number;
    };
    '&:action': {
        background: any;
        border: string;
    };
} | {
    background: string;
    border: string;
    color: any;
    '&:hover': {
        borderBottom: string;
        background?: undefined;
        border?: undefined;
        color?: undefined;
    };
    '&:focus': {
        boxShadow: string;
        zIndex: number;
        color?: undefined;
        background?: undefined;
        border?: undefined;
    };
    '&:active': {
        borderBottom: string;
        background: any;
        color?: undefined;
        border?: undefined;
    };
    borderBottom?: undefined;
    cursor?: undefined;
} | {
    background: string;
    border: string;
    color: any;
    '&:hover': {
        borderBottom: string;
        background?: undefined;
        border?: undefined;
        color?: undefined;
    };
    '&:active': {
        background: any;
        borderBottom: string;
        color: any;
        border?: undefined;
    };
    '&:focus': {
        boxShadow: string;
        zIndex: number;
        color?: undefined;
        background?: undefined;
        border?: undefined;
    };
    borderBottom?: undefined;
    cursor?: undefined;
} | {
    background: any;
    border: string;
    color: any;
    '&:hover': {
        background: any;
        border: string;
        color: any;
        borderBottom?: undefined;
    };
    '&:active': {
        background: any;
        border: string;
        color: any;
        borderBottom?: undefined;
    };
    '&:focus': {
        boxShadow: string;
        zIndex: number;
        color?: undefined;
        background?: undefined;
        border?: undefined;
    };
    borderBottom?: undefined;
    cursor?: undefined;
} | {
    background: any;
    border: string;
    borderBottom: string;
    color: any;
    '&:hover': {
        background: any;
        borderBottom: string;
        color: any;
        border?: undefined;
    };
    '&:active': {
        background: any;
        borderBottom: string;
        color: any;
        border?: undefined;
    };
    '&:focus': {
        boxShadow: string;
        zIndex: number;
        color?: undefined;
        background?: undefined;
        border?: undefined;
    };
    cursor?: undefined;
} | {
    background: string;
    border: string;
    color: any;
    cursor: string;
    '&:hover': {
        color: any;
        borderBottom?: undefined;
        background?: undefined;
        border?: undefined;
    };
    '&:active': {
        color: any;
        borderBottom?: undefined;
        background?: undefined;
        border?: undefined;
    };
    '&:focus': {
        color: any;
        boxShadow: string;
        zIndex: number;
        background?: undefined;
        border?: undefined;
    };
    borderBottom?: undefined;
} | {
    background: string;
    border: string;
    color: any;
    cursor: string;
    '&:hover': {
        background: string;
        border: string;
        color: any;
        borderBottom?: undefined;
    };
    '&:active': {
        background: string;
        border: string;
        color: any;
        borderBottom?: undefined;
    };
    '&:focus': {
        background: string;
        border: string;
        color: any;
        boxShadow: string;
        zIndex: number;
    };
    borderBottom?: undefined;
} | {
    background?: undefined;
    border?: undefined;
    color?: undefined;
    '&:hover'?: undefined;
    '&:focus'?: undefined;
    '&:active'?: undefined;
    borderBottom?: undefined;
    cursor?: undefined;
};
export declare function buttonSizeTheme({ size, theme: { font, unit }, }: ButtonInterface): {
    padding: string;
    fontSize: string;
} | {
    padding?: undefined;
    fontSize?: undefined;
};
export declare function buttonStretchTheme({ stretch }: ButtonInterface): {
    width: string;
} | {
    width?: undefined;
};

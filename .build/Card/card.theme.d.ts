import { CardInterface } from './card.types';
export declare function cardTheme({ collapse, theme: { animation, border, color, elevate, unit }, ...props }: CardInterface): {
    '&:hover': {
        boxShadow: string;
        transform: string;
    };
    backgroundColor: any;
    border: string;
    boxShadow: string;
    padding: any;
    transition: any;
} | {
    '&:hover'?: undefined;
    backgroundColor: any;
    border: string;
    boxShadow: string;
    padding: any;
    transition: any;
};
export declare function cardAppearanceTheme({ appearance, hover, theme: { color, elevate, unit }, }: CardInterface): {
    backgroundColor: any;
    border: string;
    color: any;
    '&:active': {
        '&:hover': {
            backgroundColor: any;
            boxShadow: string;
            transform: string;
        };
    } | {
        '&:hover'?: undefined;
    };
    '&:focus': {
        '&:hover': {
            backgroundColor: any;
            boxShadow: string;
            transform: string;
        };
    } | {
        '&:hover'?: undefined;
    };
    '&:hover': {
        '&:hover': {
            backgroundColor: any;
            boxShadow: string;
            transform: string;
        };
    } | {
        '&:hover'?: undefined;
    };
} | {
    backgroundColor?: undefined;
    border?: undefined;
    color?: undefined;
    '&:active'?: undefined;
    '&:focus'?: undefined;
    '&:hover'?: undefined;
};

import { ButtonIconInterface } from './buttonIcon.types';
export declare function buttonIconTheme({ dimension, theme: { animation, unit }, }: ButtonIconInterface): {
    '>svg.Icon': {
        height: string;
        width: string;
    } | {
        transform: string;
    };
    '>span.ButtonIconContent': {
        display: string;
        paddingLeft: any;
    };
    height: string;
    width: string;
    padding: number;
    position: string;
    whiteSpace: string;
    transition: any;
    lineHeight: string;
} | {
    '>svg.Icon': {
        height: string;
        width: string;
    } | {
        transform: string;
    };
    '>span.ButtonIconContent': {
        display: string;
        paddingLeft: any;
    };
    position: string;
    whiteSpace: string;
    transition: any;
    lineHeight: string;
};

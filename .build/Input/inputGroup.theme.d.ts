import { InputInterface } from './input.types';
export declare function inputGroupTheme({ theme: { color, border, font, unit, radius }, }: InputInterface): {
    position: string;
    width: string;
    height: string;
    display: string;
    background: any;
    border: string;
    borderBottom: string;
    lineHeight: number;
    borderTopLeftRadius: string;
    borderTopRightRadius: string;
    '>svg.Icon': {
        marginLeft: any;
    };
    input: {
        display: string;
        width: string;
        margin: number;
        background: string;
        border: string;
        flex: number;
        lineHeight: string;
        '&:hover, &:active, &:focus': {
            background: string;
            border: string;
        };
    };
    button: {
        float: string;
        borderBottom: string;
        height: string;
        '&:hover, &:active, &:focus': {
            borderBottom: string;
        };
    };
    'input+button': {
        borderTopLeftRadius: number;
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
    };
    'button+input': {
        borderTopRightRadius: number;
        borderBottomRightRadius: number;
        borderBottomLeftRadius: number;
    };
};
export declare function inputGroupButtonTheme({ theme: { color, border }, }: InputInterface): {
    background: any;
    border: string;
    borderBottom: string;
};

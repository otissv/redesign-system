import { AppBarInterface } from './appBar.types';
export declare function appBarTheme({ theme: { color } }: AppBarInterface): {
    alignItems: string;
    boxSizing: string;
    display: string;
    flexShrink: number;
    minHeight: string;
    position: string;
    width: string;
    zIndex: string;
    backgroundColor: any;
    color: any;
    '>button.Button': {
        minHeight: string;
        border: string;
        borderRadius: number;
        '>svg.Icon': {
            paddingRight: number;
        };
    };
    'input.Input': {
        color: any;
        background: string;
        border: string;
        flex: number;
        '&::placeholder': {
            color: string;
        };
        '&:hover': {
            background: string;
        };
        '&:focus': {
            background: string;
        };
        '&:active': {
            background: string;
        };
    };
};
export declare function appBarAppearanceTheme({ appearance, theme: { color }, }: AppBarInterface): {};

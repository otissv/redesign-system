import { ErrorMessageInterface } from './errorMessage.types';
export declare function errorMessageTheme({ theme: { animation, color, unit }, }: ErrorMessageInterface): {
    color: any;
    transition: any;
    margin: string;
    paddingTop: any;
    paddingBottom: any;
};
export declare function errorMessageAppearanceTheme({ appearance, theme: { border, color, unit }, }: ErrorMessageInterface): {
    color: any;
    backgroundColor: any;
    paddingLeft: any;
    paddingRight: any;
    border?: undefined;
} | {
    border: string;
    paddingLeft: any;
    paddingRight: any;
    color?: undefined;
    backgroundColor?: undefined;
} | {
    color?: undefined;
    backgroundColor?: undefined;
    paddingLeft?: undefined;
    paddingRight?: undefined;
    border?: undefined;
};

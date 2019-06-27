import { AlertInterface } from './alert.types';
export declare function alertTheme({ theme: { unit } }: AlertInterface): {
    position: string;
    padding: string;
};
export declare function alertAppearanceTheme({ appearance, theme: { border, color }, }: AlertInterface): {
    color: any;
    backgroundColor: any;
    border: string;
} | {
    backgroundColor: string;
    border: string;
} | {
    backgroundColor?: undefined;
    border?: undefined;
};

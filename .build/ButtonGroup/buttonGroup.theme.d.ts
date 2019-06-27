import { ButtonGroupInterface } from './buttonGroup.types';
export declare function buttonGroupTheme({ stacked, theme: { animation }, }: ButtonGroupInterface): {
    display: string;
    position: string;
    transition: any;
    verticalAlign: string;
    flexDirection: string;
};
export declare function buttonStretchGroupTheme({ stretch }: ButtonGroupInterface): {
    width: string;
} | {
    width?: undefined;
};

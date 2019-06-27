import { ContainerInterface } from './container.types';
export declare function containerAppearanceTheme({ appearance, theme: { border, color }, }: ContainerInterface): {
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

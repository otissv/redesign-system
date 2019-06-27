import { CardHeaderInterface } from './card.types';
export declare function cardHeaderTheme({}: CardHeaderInterface): {};
export declare function cardHeaderContextTheme({ appearance, theme: { color }, }: CardHeaderInterface): {
    borderBottom: string;
} | {
    borderBottom?: undefined;
};

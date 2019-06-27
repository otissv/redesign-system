import { CardFooterInterface } from './card.types';
export declare function cardFooterTheme({}: CardFooterInterface): {};
export declare function cardFooterContextTheme({ appearance, theme: { color }, }: CardFooterInterface): {
    borderBottom: string;
} | {
    borderBottom?: undefined;
};

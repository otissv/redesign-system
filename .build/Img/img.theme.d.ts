import { ImgInterface } from './img.types';
export declare function imgTheme({ height, width, theme: { animation }, }: ImgInterface): {
    display: string;
    height: string;
    maxWidth: string;
    width: string;
    transition: any;
};
export declare function imgSizeTheme({ widths }: ImgInterface): {
    width: string;
};

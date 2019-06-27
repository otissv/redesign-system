import { ImgInterface } from '../Img';
export interface ImgResponsiveInterface {
}
export interface CoverImgInterface extends ImgInterface {
    alt: string;
    cover?: boolean;
    height?: string;
    parallax?: boolean;
    position?: string;
    repeat?: boolean;
    src: string;
    width?: string;
    widths?: number;
    overlay?: string;
}

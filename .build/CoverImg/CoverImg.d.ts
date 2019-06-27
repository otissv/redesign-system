/// <reference types="react" />
import { CoverImgInterface } from './coverImg.types';
export declare function Overlay({ background }: {
    background: string;
}): JSX.Element;
export declare const CoverImg: {
    ({ children, className, themed, overlay, ...propsRest }: CoverImgInterface): JSX.Element;
    defaultProps: {
        className: string;
        cover: boolean;
        height: string;
        position: string;
        repeat: boolean;
        themed: any[];
        width: string;
        parallax: boolean;
    };
};
export default CoverImg;

/// <reference types="react" />
import { CardInterface } from './card.types';
export declare const Card: {
    ({ children, className, context, hover, size, themed, ...propsRest }: CardInterface): JSX.Element;
    defaultProps: {
        className: string;
        hover: boolean;
        themed: any[];
    };
};
export default Card;

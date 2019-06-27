/// <reference types="react" />
import { CardHeaderInterface } from './card.types';
export declare const CardFooter: {
    ({ children, className, themed, ...propsRest }: CardHeaderInterface): JSX.Element;
    defaultProps: {
        className: string;
        themed: any[];
    };
};
export default CardFooter;

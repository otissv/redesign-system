/// <reference types="react" />
import { ButtonInterface } from './button.types';
export declare const Button: {
    ({ children, className, onClick, themed: themed, ...propsRest }: ButtonInterface): JSX.Element;
    defaultProps: {
        className: string;
        themed: any[];
    };
};
export default Button;

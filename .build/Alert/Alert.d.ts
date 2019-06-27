/// <reference types="react" />
import { AlertInterface } from './alert.types';
export declare const Alert: {
    ({ children, className, themed, ...propsRest }: AlertInterface): JSX.Element;
    defaultProps: {
        className: string;
        themed: any[];
    };
};
export default Alert;

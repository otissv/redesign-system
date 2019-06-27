/// <reference types="react" />
import { ErrorMessageInterface } from './errorMessage.types';
export declare const ErrorMessage: {
    ({ children, className, themed, ...propsRest }: ErrorMessageInterface): JSX.Element;
    defaultProps: {
        className: string;
        themed: any[];
    };
};
export default ErrorMessage;

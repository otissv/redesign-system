/// <reference types="react" />
import { TextAreaInterface } from './textarea.types';
export declare const Textarea: {
    ({ children, className, themed, ...propsRest }: TextAreaInterface): JSX.Element;
    defaultProps: {
        className: string;
        themed: any[];
    };
};
export default Textarea;

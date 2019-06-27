/// <reference types="react" />
import { InputInterface } from './input.types';
export declare const Input: {
    ({ children, className, valid, themed, ...propsRest }: InputInterface): JSX.Element;
    defaultProps: {
        className: string;
        context: any;
        onBlur: () => void;
        onChange: () => void;
        onFocus: () => void;
        placeholder: any;
        size: any;
        themed: any[];
        valid: boolean;
        widths: any;
    };
};
export default Input;

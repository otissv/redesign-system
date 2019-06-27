import React from 'react';
import { ToastInterface, ToastContextType } from './toast.types';
export declare const ToastContext: React.Context<ToastContextType>;
export declare const Toast: {
    ({ children, messages, timeout, themed, ...propsRest }: ToastInterface): JSX.Element;
    defaultProps: {
        messages: any[];
        timeout: number;
        themed: any[];
    };
};
export default Toast;

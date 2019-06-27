import React from 'react';
import { ButtonGroupInterface } from './buttonGroup.types';
export declare const ButtonGroupContext: React.Context<{}>;
export declare function useButtonGroup(): {};
export declare const ButtonGroup: {
    ({ children, className, onClick, themed: propsThemed, ...propsRest }: ButtonGroupInterface): JSX.Element;
    defaultProps: {
        className: string;
        themed: any[];
    };
};
export default ButtonGroup;

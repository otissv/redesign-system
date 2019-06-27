/// <reference types="react" />
import { FlexInterface } from './flex.types';
export declare const Flex: {
    ({ children, className, themed, ...propsRest }: FlexInterface): JSX.Element;
    defaultProps: {
        className: string;
        themed: any[];
    };
};
export default Flex;

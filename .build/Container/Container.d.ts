/// <reference types="react" />
import { ContainerInterface } from './container.types';
declare function Container({ children, className, themed, ...propsRest }: ContainerInterface): JSX.Element;
declare namespace Container {
    var defaultProps: {
        className: string;
        themed: any[];
    };
}
export default Container;
export default Container;

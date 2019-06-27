/// <reference types="react" />
import { DropdownInterface } from './dropdown.types';
declare function Dropdown({ children, className, label, animate, themed, stretch, ...propsRest }: DropdownInterface): JSX.Element;
declare namespace Dropdown {
    var defaultProps: {
        className: string;
        themed: any[];
        stretch: boolean;
    };
}
export default Dropdown;
export default Dropdown;

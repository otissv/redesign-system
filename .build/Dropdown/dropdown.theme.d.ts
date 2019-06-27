import { DropdownInterface } from './dropdown.types';
export declare function dropdownTheme({}: DropdownInterface): {
    position: string;
};
export declare function dropdownContainerTheme({ stretch }: DropdownInterface): {
    display: string;
    width: string;
};
export declare function dropdownContentTheme({}: DropdownInterface): {
    position: string;
    zIndex: number;
};

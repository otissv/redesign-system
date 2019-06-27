import { DropdownInterface } from './dropdown.types';

export function dropdownTheme({  }: DropdownInterface) {
  return {
    position: 'relative',
  };
}

export function dropdownContainerTheme({ stretch }: DropdownInterface) {
  return {
    display: 'inline-block',
    width: stretch ? '100%' : 'auto',
  };
}

export function dropdownContentTheme({  }: DropdownInterface) {
  return {
    position: 'absolute',
    zIndex: 8,
  };
}

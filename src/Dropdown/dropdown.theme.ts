import { DropdownInterface } from './dropdown.types'

export function dropdownTheme({  }: DropdownInterface) {
  return {
    position: 'relative',
  }
}

export function dropdownContentTheme({  }: DropdownInterface) {
  return {
    position: 'absolute',
    zIndex: 8,
  }
}

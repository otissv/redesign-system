import { TableRowsInterface } from './table.types'

export function TableRows({ children, data }: TableRowsInterface) {
  return typeof children === 'function' ? children({ data }) : children
}

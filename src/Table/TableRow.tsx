import { TableRowInterface } from './table.types'

export function TableRow({ children, data }: TableRowInterface) {
  return typeof children === 'function' ? children({ data }) : children
}

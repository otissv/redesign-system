import React, { useContext, useMemo } from 'react'

import { TableHeadingsInterface } from './table.types'

export const TableHeadingsContext = React.createContext<TableHeadingsInterface>(
  {}
)

export function useTableHeading() {
  return useContext(TableHeadingsContext)
}

export function TableHeadingsProvider({
  allSelected = false,
  children,
  data,
  onAllSelectedChange,
}: TableHeadingsInterface) {
  const context = useMemo(
    () => ({
      allSelected,
      data,
      onAllSelectedChange,
    }),
    [allSelected, onAllSelectedChange]
  )
  return (
    <TableHeadingsContext.Provider value={context}>
      {children}
    </TableHeadingsContext.Provider>
  )
}

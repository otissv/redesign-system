import React, { Fragment, useMemo } from 'react'

import { TableViewInterface } from './table.types'
import TableBody from './TableBody'
import { TableHeadingsProvider } from './TableHeadingsContext'
export const TableView = React.memo(function TableView({
  allSelected,
  baseRoute = '',
  children,
  data,
  dispatch,
  itemsToArray,
  loading,
  onAdd,
  onAllSelectedChange,
  onDeleteSelected,
  selected,
  tableName,
  ...propsRest
}: TableViewInterface) {
  const tableHeadings = useMemo(
    () => (
      <thead>
        <tr>
          {children.reduce(
            (acc: any[], { type, props: { heading } }, i: number) =>
              type.displayName === 'TableRowDetail'
                ? [<th key={i}></th>, ...acc]
                : [...acc, <th key={i}>{heading}</th>],
            []
          )}
        </tr>
      </thead>
    ),
    [children]
  )

  return (
    <Fragment>
      <TableHeadingsProvider
        allSelected={allSelected}
        data={data}
        onAllSelectedChange={onAllSelectedChange}
      >
        {tableHeadings}

        <TableBody
          baseRoute={baseRoute}
          className="TableView"
          dispatch={dispatch}
          onAdd={onAdd}
          onDeleteSelected={onDeleteSelected}
          tableName={tableName}
          loading={loading}
          selected={selected}
          itemsToArray={itemsToArray}
          data={data}
          {...propsRest}
        >
          {children}
        </TableBody>
      </TableHeadingsProvider>
    </Fragment>
  )
})

export default TableView

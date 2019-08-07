import React, { Fragment, useMemo } from 'react'

import { TableViewInterface } from './table.types'
import TableBody from './TableBody'

export const TableView = React.memo(function TableView({
  allSelected,
  baseRoute = '',
  dispatch,
  handleAdd,
  handleDeleteSelected,
  headings,
  itemsToArray,
  loading,
  rows,
  selected,
  tableName,
  ...propsRest
}: TableViewInterface) {
  const tableHeadings = useMemo(
    () =>
      headings && (
        <thead>
          <tr>
            {headings.map((heading, i) =>
              typeof heading === 'function' ? (
                <th key={i}>{heading()}</th>
              ) : (
                <th key={i}>{heading}</th>
              )
            )}
          </tr>
        </thead>
      ),
    [headings]
  )

  return (
    <Fragment>
      {tableHeadings}

      <TableBody
        allSelected={allSelected}
        baseRoute={baseRoute}
        className="TableView"
        dispatch={dispatch}
        handleAdd={handleAdd}
        handleDeleteSelected={handleDeleteSelected}
        rows={rows}
        tableName={tableName}
        loading={loading}
        selected={selected}
        itemsToArray={itemsToArray}
        {...propsRest}
      />
    </Fragment>
  )
})

export default TableView

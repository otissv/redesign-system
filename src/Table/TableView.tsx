import React, { Fragment, useCallback, useMemo } from 'react'

import { TableViewInterface } from './table.types'
import TableBody from './TableBody'
import { TableHeadingsProvider } from './TableHeadingsContext'

export const TableView = React.memo(function TableView({
  allSelected,
  baseRoute = '',
  children = [],
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
  const row = useCallback(
    function row() {
      if (Array.isArray(children)) {
        return children.reduce(
          (acc: any[], { props: { heading, uid } }, i: number) =>
            uid === 'detail'
              ? [<th key={i}></th>, ...acc]
              : [...acc, <th key={i}>{heading}</th>],
          []
        )
      } else {
        return children.props.uid === 'detail' ? (
          <th></th>
        ) : (
          <th>{children.props.heading}</th>
        )
      }
    },
    [children]
  )

  const tableHeadings = useMemo(
    () => (
      <thead>
        <tr>{row()}</tr>
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

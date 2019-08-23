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
  function reduceChildren(children: any, initialValue: any[] = []) {
    function reducer(acc: any[], child: any, i: number) {
      if (Array.isArray(child)) {
        return reduceChildren(child, acc)
      } else if (!child.props) {
        return child
      }

      const { heading, uid } = child.props

      if (uid === 'detail') {
        return [<th key={i}></th>, ...acc]
      } else {
        return [...acc, <th key={i}>{heading}</th>]
      }
    }

    return children.reduce(reducer, initialValue)
  }

  const headings = useCallback(
    function headings() {
      if (Array.isArray(children)) {
        return reduceChildren(children)
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
        <tr>{headings()}</tr>
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

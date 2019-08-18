import React, { useCallback, useMemo } from 'react'

import {
  TableCopyButton,
  TableDeleteButton,
  TableDownloadButton,
  TableEditLink,
} from './TableButton'
import {
  TableBodyInterface,
  TableToolbarButtonInterface,
  TableToolbarCopyButtonInterface,
  TableToolbarDownloadButtonInterface,
} from './table.types'
import { TableColumnProvider } from './TableColumnContext'

export const TableBody = React.memo(function TableBody({
  baseRoute = '',
  children,
  data,
  dispatch,
  onAdd,
  onDeleteSelected,
  itemsToArray,
  loading,
  onRowClick,
  rows = [],
  selected,
  tableName,
  ...propsRest
}: TableBodyInterface) {
  const handleChange = useCallback(
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      dispatch({
        type: 'TOGGLE_SELECTED_ITEMS',
        selected: [e.currentTarget.name],
      })
    },
    [dispatch]
  )

  const handleDelete = useCallback(function handleDelete(
    e: React.MouseEvent<HTMLElement>
  ) {
    e.preventDefault()
    // onDelete && onDelete(e)
  },
  [])

  const handleRowClick = useCallback(
    function handleRowClick(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()
      const id = e.currentTarget.dataset.uid
      onRowClick && onRowClick(e, id)
    },
    [onRowClick]
  )

  const columnContext = useMemo(
    () => ({
      Copy: (props: TableToolbarCopyButtonInterface) => (
        <TableCopyButton {...props} />
      ),
      Edit: (props: TableToolbarButtonInterface) => (
        <TableEditLink {...props} href={`${baseRoute}/edit`} />
      ),

      Delete: (props: TableToolbarButtonInterface) => (
        <TableDeleteButton onClick={handleDelete} {...props} />
      ),
      Download: (props: TableToolbarDownloadButtonInterface) => (
        <TableDownloadButton {...props} />
      ),
      dispatch,
      itemsToArray,
      loading,
      onAdd,
      onChange: handleChange,
      onDelete: handleDelete,
      onDeleteSelected,
      onRowClick: handleRowClick,
      selected,
    }),
    [
      TableCopyButton,
      TableDeleteButton,
      TableDownloadButton,
      TableEditLink,
      dispatch,
      handleChange,
      handleDelete,
      handleRowClick,
      itemsToArray,
      loading,
      onAdd,
      onDeleteSelected,
      selected,
    ]
  )

  const columns = useMemo(() => {
    return data.map((item: { [key: string]: any }, index: number) => {
      return (
        <TableColumnProvider
          key={item.id}
          data={item}
          checked={selected.includes(item.id)}
          index={index}
          tableName={tableName}
          {...columnContext}
        >
          {children}
        </TableColumnProvider>
      )
    })
  }, [children, data, columnContext])

  return (
    <tbody className="TableBody" {...propsRest}>
      {columns}
    </tbody>
  )
})

export default TableBody

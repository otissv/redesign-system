import React, { Fragment, useCallback, useMemo } from 'react'

import { useCacheState } from '../reusable/cacheState'
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
  TableRowInterface,
  TableRowDetailType,
} from './table.types'

interface RowInterface {
  column: TableRowInterface[]
  rowDetail?: TableRowDetailType
}

export const TableBody = React.memo(function TableBody({
  allSelected,
  baseRoute = '',
  dispatch,
  handleAdd,
  handleDeleteSelected,
  itemsToArray,
  loading,
  onRowClick,
  rows = [],
  selected,
  tableName,
  ...propsRest
}: TableBodyInterface) {
  const { state: expandRows, setItem: setExpandRows } = useCacheState<string[]>(
    `${tableName}ExpandRows`,
    []
  )

  const handleChange = useCallback(
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault()
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

  const handleExpandRows = useCallback(
    function handleExpandRows(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()

      const id = e.currentTarget.dataset.uid
      const isStringEqual = (r: string) => r === id

      if (expandRows.find(isStringEqual)) {
        setExpandRows(expandRows.filter(r => !isStringEqual(r)))
      } else {
        setExpandRows([...expandRows, id])
      }
    },
    [setExpandRows]
  )

  const handleRowClick = useCallback(
    function handleRowClick(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()
      const id = e.currentTarget.dataset.uid
      onRowClick && onRowClick(e, id)
    },
    [onRowClick]
  )

  const body = useMemo(
    () =>
      rows.map(({ column, rowDetail }: RowInterface, i: number) => {
        const RowDetail = rowDetail
        return (
          <Fragment key={i}>
            <tr>
              {column.map((item: TableRowInterface) => {
                return (
                  <Fragment key={item.key}>
                    {item.component({
                      dispatch,
                      expandRows,
                      handleAdd,
                      handleChange,
                      handleDelete,
                      handleDeleteSelected,
                      handleExpandRows,
                      handleRowClick,
                      itemsToArray,
                      loading,
                      selected,
                      allSelected,
                      Copy: (props: TableToolbarCopyButtonInterface) => (
                        <TableCopyButton {...props} />
                      ),
                      Edit: (props: TableToolbarButtonInterface) => (
                        <TableEditLink {...props} href={`${baseRoute}/edit`} />
                      ),

                      Delete: (props: TableToolbarButtonInterface) => (
                        <TableDeleteButton onClick={handleDelete} {...props} />
                      ),
                      Download: (
                        props: TableToolbarDownloadButtonInterface
                      ) => <TableDownloadButton {...props} />,
                    })}
                  </Fragment>
                )
              })}
            </tr>
            {rowDetail && <RowDetail expandRows={expandRows} />}
          </Fragment>
        )
      }),
    [
      expandRows,
      handleAdd,
      handleChange,
      handleDelete,
      handleDeleteSelected,
      handleExpandRows,
      rows,
    ]
  )

  return (
    <tbody className="TableBody" {...propsRest}>
      {body}
    </tbody>
  )
})

export default TableBody

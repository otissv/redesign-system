import React, { Fragment, useMemo } from 'react'

import { useCacheState } from '../reusable/cacheState'
import {
  TableCopyButton,
  TableDeleteButton,
  TableDownloadButton,
  TableEditLink,
} from './TableButton'
import Base from '../Base/Base'

export const TableBody = React.memo(function TableBody({
  dispatch,
  handleAdd,
  handleDeleteSelected,
  itemsToArray,
  loading,
  onViewChange,
  rows = [],
  selected,
  tableName,
  ...propsRest
}) {
  const [expandRows, setExpandRows] = useCacheState(
    `${tableName}ExpandRows`,
    []
  )

  function handleChange(e) {
    e.preventDefault()
    dispatch({
      type: 'TOGGLE_SELECTED_ITEMS',
      selected: [e.currentTarget.name],
    })
  }

  function handleDelete(e) {
    e.preventDefault()
    // onDelete && onDelete(e)
  }

  function handleExpandRows(e) {
    e.preventDefault()

    const id = e.currentTarget.dataset.uid

    if (expandRows.find(r => r === id)) {
      const newExpandedRows = r => r !== id
      setExpandRows(expandRows.filter(newExpandedRows))
    } else {
      setExpandRows([...expandRows, id])
    }
  }

  function handleView(e) {
    e.preventDefault()
    const id = e.currentTarget.dataset.uid
    onViewChange && onViewChange(id)
  }

  const body = useMemo(
    () =>
      rows.map(({ row, rowDetail }, i) => {
        const RowDetail = rowDetail
        return (
          <Fragment key={i}>
            <tr>
              {row.map(item => {
                return (
                  <Fragment key={item.key}>
                    {item.component({
                      handleAdd,
                      handleChange,
                      handleDelete,
                      handleDeleteSelected,
                      handleExpandRows,
                      expandRows,
                      handleView,
                      loading,
                      selected,
                      dispatch,
                      itemsToArray,
                      Copy: props => <TableCopyButton {...props} />,
                      Edit: props => <TableEditLink {...props} />,

                      Delete: props => (
                        <TableDeleteButton onClick={handleDelete} {...props} />
                      ),
                      Download: props => <TableDownloadButton {...props} />,
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
      handleView,
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

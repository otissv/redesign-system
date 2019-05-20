import React, { Fragment, useMemo } from 'react'
import styled from 'styled-components'

import { useTheme } from '../ThemeContext'
import { TableBody } from './TableBody'

const TableViewStyled = styled.div`
  ${props => `
    position: relative;
    height: 100%;
    overflow: scroll;
    margin-left: ${props.theme.unit[5]};
    margin-right: ${props.theme.unit[5]};
    flex: 1;
  `}
`

export const TableView = React.memo(function TableView({
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
}) {
  const { theme } = useTheme()

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
        className="TableView"
        dispatch={dispatch}
        handleAdd={handleAdd}
        handleDeleteSelected={handleDeleteSelected}
        rows={rows}
        tableName={tableName}
        loading={loading}
        selected={selected}
        dispatch={dispatch}
        itemsToArray={itemsToArray}
        {...propsRest}
      />
    </Fragment>
  )
})

export default TableView

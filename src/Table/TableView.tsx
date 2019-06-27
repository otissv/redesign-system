import React, { Fragment, useMemo } from 'react';

import { TableViewInterface } from './table.types';
import TableBody from './TableBody';

export function TableView({
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
  );

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
        itemsToArray={itemsToArray}
        {...propsRest}
      />
    </Fragment>
  );
}

export default TableView;

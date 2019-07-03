import React, { Fragment, useMemo } from 'react';

import { useCacheState } from '../reusable/cacheState';
import {
  TableCopyButton,
  TableDeleteButton,
  TableDownloadButton,
  TableEditLink,
} from './TableButton';
import {
  TableBodyInterface,
  TableToolbarButtonInterface,
  TableToolbarCopyButtonInterface,
  TableToolbarDownloadButtonInterface,
  TableRowInterface,
  TableRowDetailType,
} from './table.types';

interface RowInterface {
  row: TableRowInterface[];
  rowDetail?: TableRowDetailType;
}

export const TableBody = function TableBody({
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
  const { state, setItem } = useCacheState<string[]>(
    `${tableName}ExpandRows`,
    []
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    dispatch({
      type: 'TOGGLE_SELECTED_ITEMS',
      selected: [e.currentTarget.name],
    });
  }

  function handleDelete(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    // onDelete && onDelete(e)
  }

  function handleExpandRows(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    const id = e.currentTarget.dataset.uid;
    const isStringEqual = (r: string) => r === id;

    if (state.find(isStringEqual)) {
      setItem(state.filter(r => !isStringEqual(r)));
    } else {
      setItem([...state, id]);
    }
  }

  function handleRowClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const id = e.currentTarget.dataset.uid;
    onRowClick && onRowClick(e, id);
  }

  const body = useMemo(
    () =>
      rows.map(({ row, rowDetail }: RowInterface, i: number) => {
        const RowDetail = rowDetail;
        return (
          <Fragment key={i}>
            <tr>
              {row.map((item: TableRowInterface) => {
                return (
                  <Fragment key={item.key}>
                    {item.component({
                      dispatch,
                      handleAdd,
                      handleChange,
                      handleDelete,
                      handleDeleteSelected,
                      handleExpandRows,
                      handleRowClick,
                      itemsToArray,
                      loading,
                      selected,
                      state,
                      Copy: (props: TableToolbarCopyButtonInterface) => (
                        <TableCopyButton {...props} />
                      ),
                      Edit: (props: TableToolbarButtonInterface) => (
                        <TableEditLink {...props} />
                      ),

                      Delete: (props: TableToolbarButtonInterface) => (
                        <TableDeleteButton onClick={handleDelete} {...props} />
                      ),
                      Download: (
                        props: TableToolbarDownloadButtonInterface
                      ) => <TableDownloadButton {...props} />,
                    })}
                  </Fragment>
                );
              })}
            </tr>
            {rowDetail && <RowDetail state={state} />}
          </Fragment>
        );
      }),
    [
      state,
      handleAdd,
      handleChange,
      handleDelete,
      handleDeleteSelected,
      handleExpandRows,
      rows,
    ]
  );

  return (
    <tbody className="TableBody" {...propsRest}>
      {body}
    </tbody>
  );
};

export default TableBody;

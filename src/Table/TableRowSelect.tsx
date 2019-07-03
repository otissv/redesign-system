import React from 'react';
import { TableRowSelectInterface } from './table.types';

export const TableRowSelect = function TableRowSelect({
  dispatch,
  handleChange,
  hook,
  id,
  itemsToArray,
  loading,
  selected,
  ...propsRest
}: TableRowSelectInterface) {
  return (
    <td style={{ width: '48px' }}>
      <input
        checked={selected.includes(id)}
        name={id}
        onChange={handleChange}
        style={{ cursor: 'pointer' }}
        type="checkbox"
        {...propsRest}
      />
    </td>
  );
};

export default TableRowSelect;

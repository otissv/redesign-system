/// <reference types="react" />
import { TableViewInterface } from './table.types';
export declare function TableView({ dispatch, handleAdd, handleDeleteSelected, headings, itemsToArray, loading, rows, selected, tableName, ...propsRest }: TableViewInterface): JSX.Element;
export default TableView;

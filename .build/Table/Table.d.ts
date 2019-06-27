/// <reference types="react" />
import { TableInterface } from './table.types';
declare function Table({ className, caption, headings, hook, initialValue, name, numbered, onAdd, onCopy, onDelete, onDeleteSelected, onDownload, onEdit, onExecute, rows, onRowClick, title, toolbar, themed: propsThemed, uid, ...propsRest }: TableInterface): JSX.Element;
declare namespace Table {
    var defaultProps: {
        className: string;
        themed: any[];
    };
}
export default Table;
export default Table;

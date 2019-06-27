/// <reference types="react" />
import { TableButtonInterface, TableLinkInterface } from './table.types';
export declare function TableButton({ icon: Component, uid, ...propsRest }: TableButtonInterface): JSX.Element;
export declare function TableCopyButton({ onClick, uid, ...propsRest }: TableButtonInterface): JSX.Element;
export declare function TableDeleteButton({ onClick, uid, ...propsRest }: TableButtonInterface): JSX.Element;
export declare function TableDownloadButton({ onClick, uid, ...propsRest }: TableButtonInterface): JSX.Element;
export declare function TableEditLink({ children, uid, ...propsRest }: TableLinkInterface): JSX.Element;
export default TableButton;

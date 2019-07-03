import { BaseInterface } from '../Base';
import { ButtonIconInterface } from '../ButtonIcon';
import {
  CollectionHashStateInterface,
  CollectionHashType,
} from '../reusable/collectionHash';
import React from 'react';

export interface JsonViewDocInterface {
  doc: {
    [key: string]: any;
  };
}
export interface JsonViewInterface {
  itemList: Array<JsonViewDocInterface>;
}

export interface TableInterface extends BaseInterface {
  caption?: string;
  condensed?: boolean;
  headings?: Array<((props?: any) => JSX.Element) | string>;
  hook: () => any;
  hover?: boolean;
  initialValue?: any[];
  name?: string;
  onAdd?: (n: any) => any;
  onCopy?: (n: any) => any;
  onDelete?: (n: any) => any;
  onDeleteSelected?: (n: any) => any;
  onDownload?: (n: any) => any;
  onEdit?: (n: any) => any;
  onExecute?: (n: any) => any;
  rows: (n: any) => any;
  title?: string;
  toolbar?: Array<((props?: any) => JSX.Element) | string>;
  uid?: string;
}

export interface TableInitialValueInterface {
  variables: {
    [key: string]: any;
  };
  itemList: any[];
}

export type TableRowInterface = {
  key: string;
  component: ({
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
    Copy,
    Edit,
    Delete,
    Download,
  }: {
    dispatch?: React.Dispatch<any>;
    handleAdd?: (e: React.MouseEvent<HTMLElement>) => void;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDelete?: (e: React.MouseEvent<HTMLElement>) => void;
    handleDeleteSelected?: (e: React.MouseEvent<HTMLElement>) => void;
    handleExpandRows?: (e: React.MouseEvent<HTMLElement>) => void;
    handleRowClick?: (e: React.MouseEvent<HTMLElement>) => void;
    itemsToArray?: (items: any[]) => any[];
    loading?: boolean;
    selected?: string;
    state?: any;
    Copy?: (props: TableToolbarCopyButtonInterface) => React.ReactNode;
    Edit?: (props: TableToolbarButtonInterface) => React.ReactNode;
    Delete?: (props: TableToolbarButtonInterface) => React.ReactNode;
    Download?: (props: TableToolbarDownloadButtonInterface) => React.ReactNode;
  }) => React.ReactNode;
};

export type TableRowDetailType = (props: any) => JSX.Element;

export interface TableBodyInterface extends BaseInterface {
  dispatch: React.Dispatch<any>;
  handleAdd?: (e: React.MouseEvent<HTMLElement>) => void;
  handleDeleteSelected?: (e: React.MouseEvent<HTMLElement>) => void;
  itemsToArray: (items: any[]) => any[];
  loading?: boolean;
  onRowClick?: (e: React.MouseEvent<HTMLElement>, id: string) => void;
  rows: Array<{
    row: TableRowInterface[];
    rowDetail?: TableRowDetailType;
  }>;
  selected: string;
  tableName: string;
}

export interface TableRowSelectInterface extends BaseInterface {
  dispatch: React.Dispatch<any>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hook: any;
  id: string;
  itemsToArray: (items: any[]) => any[];
  loading: boolean;
  selected: string;
}

export interface TableViewInterface extends BaseInterface {
  dispatch: React.Dispatch<any>;
  handleAdd: (e: React.MouseEvent<HTMLElement>) => void;
  handleDeleteSelected: (e: React.MouseEvent<HTMLElement>) => void;
  headings?: Array<((props?: any) => JSX.Element) | string>;
  itemsToArray: (items: any[]) => any[];
  loading: boolean;
  rows: Array<{
    row: TableRowInterface[];
    rowDetail?: TableRowDetailType;
  }>;
  selected: string;
  tableName: string;
}

export interface TableButtonInterface extends ButtonIconInterface {}

export interface TableLinkInterface extends ButtonIconInterface {}

export interface TableCaptionInterface extends BaseInterface {}

export interface TableToolbarViewsButtonInterface extends BaseInterface {
  currentView?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface TableToolbarButtonInterface extends ButtonIconInterface {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface TableToolbarDownloadButtonInterface
  extends TableToolbarButtonInterface {
  fileName: string;
  data: string | { [key: string]: any } | any[];
}

export interface TableToolbarCopyButtonInterface
  extends TableToolbarButtonInterface {
  data: any | any[];
}

export type TableActionType =
  | CollectionHashType
  | 'SET_ITEM_LIST'
  | 'SET_VARIABLES';

export interface TableStateInterface extends CollectionHashStateInterface {
  variables?: { [key: string]: any };
  itemList?: any[];
}

export type TableReducerType = (
  state: {
    variables?: { [key: string]: any };
    itemList?: any[];
  },
  action: {
    type: TableActionType;
    variables?: { [key: string]: any };
    itemList?: any[];
  }
) => TableStateInterface;

import { BaseInterface } from '../Base'
import { ButtonIconInterface } from '../ButtonIcon'
import {
  CollectionHashStateInterface,
  CollectionHashType,
} from '../reusable/collectionHash'
import React from 'react'

export interface SelectToolbarInterface extends BaseInterface {
  selected: number
  handleDeleteSelected: (e: React.MouseEvent<HTMLElement>) => void
}

export interface TableInterface extends BaseInterface {
  baseRoute?: string
  caption?: string
  condensed?: boolean
  headings?: Array<((props?: any) => JSX.Element) | string>
  hook: () => any
  hover?: boolean
  initialValue?: any[]
  name: string
  onAdd?: (n: any) => any
  onCopy?: (n: any) => any
  onDelete?: (n: any) => any
  onDeleteSelected?: (n: any) => any
  onDownload?: (n: any) => any
  onEdit?: (n: any) => any
  onExecute?: () => any
  rows: (n: any) => any
  title?: string
  toolbar?: Array<((props?: any) => JSX.Element) | string>
}

export interface TableInitialValueInterface {
  variables: {
    [key: string]: any
  }
  itemList: any[]
}

export interface TableHeadingInterface {
  allSelected: false
  handleSelectHeadingChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type TableRowInterface = {
  key: string
  component: ({
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
    state,
    Copy,
    Edit,
    Delete,
    Download,
  }: TableRowComponentInterface) => React.ReactNode
}

export interface TableRowComponentInterface {
  allSelected?: boolean
  dispatch?: React.Dispatch<any>
  expandRows?: Array<string>
  handleAdd?: (e: React.MouseEvent<HTMLElement>) => void
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleDelete?: (e: React.MouseEvent<HTMLElement>) => void
  handleDeleteSelected?: (e: React.MouseEvent<HTMLElement>) => void
  handleExpandRows?: (e: React.MouseEvent<HTMLElement>) => void
  handleRowClick?: (e: React.MouseEvent<HTMLElement>) => void
  itemsToArray?: (items: any[]) => any[]
  loading?: boolean
  selected?: string
  state?: any
  Copy?: (props: TableToolbarCopyButtonInterface) => React.ReactNode
  Edit?: (props: TableToolbarButtonInterface) => React.ReactNode
  Delete?: (props: TableToolbarButtonInterface) => React.ReactNode
  Download?: (props: TableToolbarDownloadButtonInterface) => React.ReactNode
}

export type TableRowDetailType = (props: any) => JSX.Element

export interface TableBodyInterface extends BaseInterface {
  baseRoute?: string
  dispatch: React.Dispatch<any>
  handleAdd?: (e: React.MouseEvent<HTMLElement>) => void
  handleDeleteSelected?: (e: React.MouseEvent<HTMLElement>) => void
  itemsToArray: (items: any[]) => any[]
  loading?: boolean
  onRowClick?: (e: React.MouseEvent<HTMLElement>, id: string) => void
  rows: Array<{
    column: TableRowInterface[]
    rowDetail?: TableRowDetailType
  }>
  selected: string
  tableName: string
}

export interface TableRowSelectInterface extends BaseInterface {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  id: string
  checked?: boolean
}

export interface TableViewInterface extends BaseInterface {
  allSelected?: boolean
  dispatch: React.Dispatch<any>
  handleAdd: (e: React.MouseEvent<HTMLElement>) => void
  handleDeleteSelected: (e: React.MouseEvent<HTMLElement>) => void
  headings?: Array<((props?: any) => JSX.Element) | string>
  itemsToArray: (items: any[]) => any[]
  loading: boolean
  rows: Array<{
    column: TableRowInterface[]
    rowDetail?: TableRowDetailType
  }>
  selected: string
  tableName: string
}

export interface TableButtonInterface extends ButtonIconInterface {}

export interface TableLinkInterface extends ButtonIconInterface {}

export interface TableCaptionInterface extends BaseInterface {}

export interface TableToolbarViewsButtonInterface extends BaseInterface {
  currentView?: string
  onClick?: (e: React.MouseEvent<HTMLElement>, { id }: { id: string }) => void
}

export interface TableToolbarButtonInterface extends ButtonIconInterface {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export interface TableToolbarDownloadButtonInterface
  extends TableToolbarButtonInterface {
  fileName: string
  data: string | { [key: string]: any } | any[]
}

export interface TableToolbarCopyButtonInterface
  extends TableToolbarButtonInterface {
  data: any | any[]
}

export type TableActionType =
  | CollectionHashType
  | 'SET_ITEM_LIST'
  | 'SET_VARIABLES'

export interface TableStateInterface extends CollectionHashStateInterface {
  variables?: { [key: string]: any }
  itemList?: any[]
}

export type TableReducerType = (
  state: {
    variables?: { [key: string]: any }
    itemList?: any[]
  },
  action: {
    type: TableActionType
    variables?: { [key: string]: any }
    itemList?: any[]
  }
) => TableStateInterface

export interface TableToolbarInterface extends BaseInterface {
  baseRoute: string
  items: Array<string>
  onDeleteSelected: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onSwitchView: (
    e: React.MouseEvent<HTMLElement>,
    { id }: { id: string }
  ) => void
  selectToolbar: (props: SelectToolbarInterface) => JSX.Element
  currentView: string
  data: any
  onAdd: (n: any) => any
  onCopy: (n: any) => any
  onDelete: (n: any) => any
  onDownload: (n: any) => any
  onEdit: (n: any) => any
  onExecute: (n: any) => any
  title: string
}

import { BaseInterface } from '../Base'
import { ButtonIconInterface } from '../ButtonIcon'
import {
  CollectionHashStateInterface,
  CollectionHashType,
} from '../reusable/collectionHash'
import React from 'react'

export interface RowDetailInterface extends BaseInterface {
  children?: any
  colSpan?: number
  expanded?: boolean
}

export interface SelectToolbarInterface extends BaseInterface {
  selected: number
  handleDeleteSelected: (e: React.MouseEvent<HTMLElement>) => void
}

export interface TableInterface extends BaseInterface {
  children?: any
  baseRoute?: string
  caption?: string
  condensed?: boolean
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
  toolbar?: Array<((props?: any) => JSX.Element) | string>
}

export interface TableColumnInterface extends BaseInterface {
  prop?: string
}

export interface TableColumnContextInterface {
  allSelected?: boolean
  checked?: boolean
  children?: any
  data?: { [key: string]: any }
  dispatch?: React.Dispatch<any>
  expanded?: boolean
  index?: number
  itemsToArray?: (items: any[]) => any[]
  loading?: boolean
  onAdd?: (e: React.MouseEvent<HTMLElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDelete?: (e: React.MouseEvent<HTMLElement>) => void
  onDeleteSelected?: (e: React.MouseEvent<HTMLElement>) => void
  onRowClick?: (e: React.MouseEvent<HTMLElement>) => void
  selected?: Array<string>
  setChecked?: (newState: boolean) => void
  setExpanded?: (newState: boolean) => void
  tableName?: string
  Copy?: (props: TableToolbarCopyButtonInterface) => React.ReactNode
  Edit?: (props: TableToolbarButtonInterface) => React.ReactNode
  Delete?: (props: TableToolbarButtonInterface) => React.ReactNode
  Download?: (props: TableToolbarDownloadButtonInterface) => React.ReactNode
  uidKey?: string
}

export interface TableInitialValueInterface {
  variables: {
    [key: string]: any
  }
  itemList: any[]
}

export interface TableHeadingsInterface {
  children?: React.ReactNode
  allSelected?: boolean
  data?: { [key: string]: any }
  onAllSelectedChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface TableRowDetailInterface extends BaseInterface {
  children?: any
  condition?: (data: { [key: string]: any }) => boolean
}

export interface TableRowProviderInterface {}

export interface TableRowComponentInterface {
  allSelected?: boolean
  dispatch?: React.Dispatch<any>
  handleAdd?: (e: React.MouseEvent<HTMLElement>) => void
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleDelete?: (e: React.MouseEvent<HTMLElement>) => void
  handleDeleteSelected?: (e: React.MouseEvent<HTMLElement>) => void
  handleExpandRows?: (e: React.MouseEvent<HTMLElement>) => void
  handleRowClick?: (e: React.MouseEvent<HTMLElement>) => void
  itemsToArray?: (items: any[]) => any[]
  loading?: boolean
  selected?: Array<string>
  state?: any
  Copy?: (props: TableToolbarCopyButtonInterface) => React.ReactNode
  Edit?: (props: TableToolbarButtonInterface) => React.ReactNode
  Delete?: (props: TableToolbarButtonInterface) => React.ReactNode
  Download?: (props: TableToolbarDownloadButtonInterface) => React.ReactNode
}

export interface TableRowInterface {
  children?: (data: { [key: string]: any }) => React.ReactNode
  data?: { [key: string]: any }
  uid: string
}

export interface TableRowsInterface {
  children?: (data: { [key: string]: any }) => React.ReactNode
  data?: { [key: string]: any }
  uid: string
}

export interface TableBodyInterface extends BaseInterface {
  children?: any
  baseRoute?: string
  data?: { [key: string]: any }
  dispatch: React.Dispatch<any>
  handleAdd?: (e: React.MouseEvent<HTMLElement>) => void
  handleDeleteSelected?: (e: React.MouseEvent<HTMLElement>) => void
  itemsToArray: (items: any[]) => any[]
  loading?: boolean
  onRowClick?: (e: React.MouseEvent<HTMLElement>, id: string) => void
  selected: Array<string>
  tableName: string
}

export interface TableRowSelectInterface extends BaseInterface {}

export interface TableViewInterface extends BaseInterface {
  children?: any
  allSelected?: boolean
  data?: { [key: string]: any }
  dispatch: React.Dispatch<any>
  onAdd: (e: React.MouseEvent<HTMLElement>) => void
  onDeleteSelected: (e: React.MouseEvent<HTMLElement>) => void
  onAllSelectedChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  itemsToArray: (items: any[]) => any[]
  loading: boolean
  selected: Array<string>
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
}

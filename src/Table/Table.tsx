import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react'

import Base from '../Base/Base'
import { JsonView } from './JsonView'
import { TableView } from './TableView'

import { tableTheme, tableContainerTheme } from './table.theme'
import { useCacheState } from '../reusable/cacheState'
import { TableCaption } from './TableCaption'
import {
  TableInterface,
  TableInitialValueInterface,
  TableReducerType,
} from './table.types'
import { SelectToolbar } from './SelectToolbar'
import { TableToolbar } from './TableToolbar'

export const Table = React.memo(function Table({
  baseRoute = '',
  caption,
  children,
  className = '',
  condensed,
  height,
  hook,
  hover,
  initialValue,
  name,
  numbered,
  onAdd,
  onCopy,
  onDelete,
  onDeleteSelected,
  onDownload,
  onEdit,
  onExecute,
  onRowClick,
  themed: propsThemed = [],
  title,
  toolbar = [],
  ...propsRest
}: TableInterface) {
  const classNames = useMemo(() => `TableContainer ${className}`, [className])
  const themed = useMemo(() => [tableTheme, ...propsThemed], [
    tableTheme,
    propsThemed,
  ])

  const {
    loading,
    selected,
    dispatch: dispatchHook,
    itemsToArray,
    items,
  } = hook()
  const itemsMemo = useMemo(() => items, [items])
  const itemListMemo = useMemo(() => initialValue || itemsToArray(), [
    initialValue,
    itemsToArray,
  ])

  const initialState: TableInitialValueInterface = {
    variables: {},
    itemList: [],
  }

  useEffect(() => {
    dispatch({
      type: 'SET_ITEM_LIST',
      itemList: itemListMemo,
    })
  }, [itemListMemo])

  const reducer: TableReducerType = useCallback(function reducer(
    state,
    action
  ) {
    switch (action.type) {
      case 'SET_ITEM_LIST':
        return { ...state, itemList: action.itemList }
      case 'SET_VARIABLES':
        return { ...state, variables: action.variables }
      default:
        return state
    }
  },
  [])

  const dispatch = useReducer(reducer, initialState)[1]

  const { state: currentView, setItem: setCurrentView } = useCacheState(
    `${name}_Table`,
    'table'
  )

  const handleAdd = useCallback(
    function handleAdd(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()
      onAdd && onAdd(e)
    },
    [onAdd]
  )

  const handleDelete = useCallback(
    function handleDelete(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()
      onDelete && onDelete(e)
    },
    [onDelete]
  )

  const handleDeleteSelected = useCallback(
    function handleDeleteSelected(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()

      const result = window.confirm(
        `Delete selected items?\n${selected.join('\n')}`
      )

      if (result) {
        onDeleteSelected && onDeleteSelected(e)
      }
    },
    [onDeleteSelected]
  )

  const handleEdit = useCallback(
    function handleEdit(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()
      onEdit && onEdit(e)
    },
    [onEdit]
  )

  const handleExecute = useCallback(
    function handleExecute(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()

      onExecute().then((result: any) => {
        if (result) {
          dispatch({
            type: 'SET_ITEM_LIST',
            itemList: result,
          })
        }
      })
    },
    [dispatch, onExecute]
  )

  const handleSwitchView = useCallback(
    function handleSwitchView(
      e: React.MouseEvent<HTMLElement>,
      { id }: { id: string }
    ) {
      e.preventDefault()

      if (id !== currentView) {
        setCurrentView(id)
      }
    },
    [setCurrentView]
  )

  const allSelected = useMemo(() => selected.length === itemListMemo.length, [
    itemListMemo,
    selected,
  ])

  const handleAllSelectedChange = React.useCallback(
    function handleAllSelectedChange(e: React.ChangeEvent<HTMLInputElement>) {
      const selected = Array.isArray(items)
        ? items.reduce(
            (acc: string[], item: { [key: string]: any }) => [...acc, item.id],
            []
          )
        : Object.keys(items)

      dispatchHook({
        type: 'SET_SELECTED',
        selected: e.currentTarget.checked ? selected : [],
      })
    },
    [dispatchHook, items]
  )

  return (
    <Fragment>
      {toolbar.length > 0 ? (
        <TableToolbar
          baseRoute={baseRoute}
          borderBottom="thin"
          currentView={currentView}
          data={itemListMemo}
          items={selected}
          onAdd={handleAdd}
          onCopy={onCopy}
          onDelete={handleDelete}
          onDeleteSelected={handleDeleteSelected}
          onDownload={onDownload}
          onEdit={handleEdit}
          onExecute={handleExecute}
          onSwitchView={handleSwitchView}
          paddingBottom={2}
          selectToolbar={SelectToolbar}
          title={title}
          toolbar={toolbar}
        />
      ) : null}
      {currentView === 'table' ? (
        <Base
          className={classNames}
          themed={[tableContainerTheme]}
          height={height}
          {...propsRest}
        >
          <Base
            as="table"
            className="Table"
            themed={themed}
            condensed={condensed}
            hover={hover}
          >
            {caption ? <TableCaption>{caption}</TableCaption> : null}
            <TableView
              allSelected={allSelected}
              baseRoute={baseRoute}
              dispatch={dispatchHook}
              onAdd={handleAdd}
              onDeleteSelected={handleDeleteSelected}
              onAllSelectedChange={handleAllSelectedChange}
              itemsToArray={itemsToArray}
              loading={loading}
              selected={selected}
              tableName={name}
              onRowClick={onRowClick}
              data={itemListMemo}
            >
              {children}
            </TableView>
          </Base>
        </Base>
      ) : (
        <Base
          className={classNames}
          themed={[tableContainerTheme]}
          height={height}
          {...propsRest}
        >
          <JsonView items={itemsMemo} />
        </Base>
      )}
    </Fragment>
  )
})

export default Table

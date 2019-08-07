import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import styled from 'styled-components'

import Base from '../Base/Base'
import { JsonView } from './JsonView'
import { TableView } from './TableView'
import { Toolbar } from '../Toolbar/Toolbar'
import { ToolbarAddButton } from './ToolbarAddButton'
import { ToolbarCopyButton } from './ToolbarCopyButton'
import { ToolbarDeleteButton } from './ToolbarDeleteButton'
import { ToolbarDownloadButton } from './ToolbarDownloadButton'
import { ToolbarEditButton } from './ToolbarEditButton'
import { ToolbarExecuteButton } from './ToolbarExecuteButton'
import { ToolbarViewsButton } from './ToolbarViewsButton'
import { tableTheme, tableContainerTheme } from './table.theme'
import { useCacheState } from '../reusable/cacheState'
import { TableCaption } from './TableCaption'
import {
  TableInterface,
  TableInitialValueInterface,
  TableReducerType,
  TableToolbarInterface,
  SelectToolbarInterface,
} from './table.types'

const SelectedText = styled.span`
  display: inline-block;
`

export const Table = React.memo(function Table({
  baseRoute = '',
  className = '',
  caption,
  headings,
  hook,
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
  rows,
  onRowClick,
  title,
  condensed,
  hover,
  toolbar = [],
  height,
  themed: propsThemed = [],
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
      itemList: itemListMemo, // initialValue || itemListMemo,
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

  const [{ itemList }, dispatch] = useReducer(reducer, initialState)

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

      const result = window.confirm(`Drop collections?\n${selected.join('\n')}`)

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

  const [allSelected, setAllSelected] = React.useState(false)

  const handleSelectHeadingChange = React.useCallback(
    function handleSelectHeadingChange(e: React.ChangeEvent<HTMLInputElement>) {
      setAllSelected(e.currentTarget.checked)
      dispatchHook({
        type: 'SET_SELECTED',
        selected: e.currentTarget.checked ? Object.keys(items) : [],
      })
    },
    [allSelected, dispatch, items]
  )

  const makeHeadings = (heading: any) =>
    typeof heading === 'function'
      ? heading({ allSelected, handleSelectHeadingChange })
      : heading

  const headingsMemo = useMemo(() => headings.map(makeHeadings), [headings])

  const rowsMemo = useMemo(
    () => (typeof rows === 'function' ? rows(itemList) : rows),
    [itemList, rows]
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
              handleAdd={handleAdd}
              handleDeleteSelected={handleDeleteSelected}
              headings={headingsMemo}
              itemsToArray={itemsToArray}
              loading={loading}
              rows={rowsMemo}
              selected={selected}
              tableName={name}
              onRowClick={onRowClick}
            />
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

const SelectToolbar = React.memo(function SelectToolbar({
  selected,
  handleDeleteSelected,
}: SelectToolbarInterface) {
  return (
    <div>
      <SelectedText>{selected} selected </SelectedText>
      <ToolbarDeleteButton
        alt="delete"
        onClick={handleDeleteSelected}
        title="Delete Collection"
      />
    </div>
  )
})

const TableToolbar = React.memo(function TableToolbar({
  baseRoute,
  items,
  onDeleteSelected,
  onSwitchView,
  selectToolbar,
  currentView,
  data,
  onAdd,
  onCopy,
  onDelete,
  onDownload,
  onEdit,
  onExecute,
  title,
  toolbar,
}: TableToolbarInterface) {
  const buttons = (button: string) => {
    switch (button) {
      case 'add':
        return (
          <ToolbarAddButton
            alt="add"
            key="add"
            onClick={onAdd}
            href={`/${baseRoute}/new`}
          />
        )

      case 'copy':
        return (
          <ToolbarCopyButton
            alt="copy"
            key="copy"
            data={data}
            onClick={onCopy}
          />
        )
      case 'edit':
        return (
          <ToolbarEditButton
            alt="edit"
            key="edit"
            onClick={onEdit}
            href={`/${baseRoute}/edit`}
          />
        )
      case 'delete':
        return (
          <ToolbarDeleteButton
            alt="delete"
            key="delete"
            onClick={onDelete}
            title="Delete"
          />
        )
      case 'download':
        return (
          <ToolbarDownloadButton
            alt="download"
            key="download"
            data={data}
            onClick={onDownload}
            fileName={
              title ? `guru_download_${title}.json` : `guru_download.json`
            }
          />
        )
      case 'execute':
        return (
          <ToolbarExecuteButton
            alt="execute"
            key="execute"
            onClick={onExecute}
            title="Execute"
          />
        )
      case 'views':
        return (
          <ToolbarViewsButton
            key="views"
            onClick={onSwitchView}
            currentView={currentView}
          />
        )
      default:
        return null
    }
  }

  const toolbarContent = useMemo(() => {
    return (
      <Fragment>
        {toolbar.map((button: any) => {
          return typeof button === 'function'
            ? button({ onSwitchView, currentView, onAdd })
            : buttons(button)
        })}
      </Fragment>
    )
  }, [buttons, currentView, onAdd, onSwitchView, toolbar])

  return (
    <Toolbar
      baseRoute={baseRoute}
      items={items}
      onDeleteSelected={onDeleteSelected}
      onSwitchView={onSwitchView}
      selectToolbar={selectToolbar}
      borderBottom="thin"
      paddingBottom={2}
    >
      {toolbarContent}
    </Toolbar>
  )
})

export default Table

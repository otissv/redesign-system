import React, { Fragment, useEffect, useMemo, useReducer, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

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
import { ToolbarVariablesButton } from './ToolbarVariablesButton'
import { ToolbarViewsButton } from './ToolbarViewsButton'
import { Typography } from '../Typography'
import { tableTheme } from './table.theme'
import { useCacheState } from '../reusable/cacheState'
import { TableCaption } from './TableCaption'

const SelectedText = styled.span`
  display: inline-block;
`

export const Table = React.memo(function Table({
  className,
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
  // selectedItems,
  title,
  toolbar = [],
  themed: propsThemed,
  uid,
  ...propsRest
}) {
  const classNames = `Table ${className || ''}`
  const themed = useMemo(() => [tableTheme, ...propsThemed], [
    tableTheme,
    propsThemed,
  ])
  const { loading, selected, dispatch: dispatchHook, itemsToArray } = hook()
  const _itemList = useMemo(() => initialValue || itemsToArray(), [
    initialValue,
    itemsToArray,
  ])

  const initialState = {
    variables: {},
    itemList: [],
  }

  function reducer(state, actions) {
    switch (actions.type) {
      case 'SET_ITEM_LIST':
        return { ...state, itemList: actions.itemList }
      case 'SET_VARIABLES':
        return { ...state, variables: actions.variables }
      default:
        return state
    }
  }
  const [{ itemList }, dispatch] = useReducer(reducer, initialState)

  const [currentView, setCurrentView] = useCacheState(`${uid}_Table`)
  const [showVariables, setShowVariables] = useCacheState(
    `${uid}_showVariables`,
    false
  )
  const variablesRef = useRef('')

  const _headings = useMemo(() => headings, [headings])
  const _rows = typeof rows === 'function' ? rows(itemList) : rows

  useEffect(() => {
    dispatch({
      type: 'SET_ITEM_LIST',
      itemList: _itemList, // initialValue || _itemList,
    })
  }, [_itemList])

  function handleAdd(e) {
    e.preventDefault()
    onAdd && onAdd(e)
  }

  function handleDelete(e) {
    e.preventDefault()
    onDelete && onDelete(e)
  }

  function handleDeleteSelected(e) {
    const result = window.confirm(`Drop collections?\n${selected.join('\n')}`)

    if (result) {
      onDeleteSelected && onDeleteSelected(e)
    }
  }

  function handleEdit(e) {
    e.preventDefault()
    onEdit && onEdit(e)
  }

  function handleExecute(e) {
    const variablesObj = isEmpty(variablesRef.current)
      ? {}
      : JSON.parse(variablesRef.current)

    onExecute(variablesObj).then(result => {
      if (result) {
        dispatchTable({
          type: 'SET_ITEM_LIST',
          itemList: result,
        })
      }
    })
  }

  function handleSwitchView(e, { id }) {
    e.preventDefault()
    if (id !== currentView) {
      setCurrentView(id)
    }
  }

  function handleVariables(e) {
    e.preventDefault()
    setShowVariables(!showVariables)
  }

  function handleVariablesChange(values) {
    variablesRef.current = values
    // debounce(() => setVariables(values), 1000)()
  }

  const SelectToolbar = useMemo(
    () => ({ selected, handleDeleteSelected }) => (
      <div>
        <SelectedText>{selected} selected </SelectedText>
        <ToolbarDeleteButton
          onClick={handleDeleteSelected}
          title="Delete Collection"
        />
      </div>
    ),
    [selected, handleDeleteSelected]
  )

  const toolbarContent = useMemo(
    () => ({ handleSwitchView }) => {
      const buttons = {
        add: key => <ToolbarAddButton key="add" onClick={handleAdd} />,
        copy: key => (
          <ToolbarCopyButton key="copy" data={_itemList} onClick={onCopy} />
        ),
        edit: key => <ToolbarEditButton key="edit" onClick={handleEdit} />,
        delete: key => (
          <ToolbarDeleteButton
            key="delete"
            onClick={handleDelete}
            title="Edit"
          />
        ),
        download: key => (
          <ToolbarDownloadButton
            key="download"
            data={_itemList}
            onClick={onDownload}
            fileName={`guru_download_${title}.json`}
          />
        ),
        execute: key => (
          <ToolbarExecuteButton
            key="execute"
            onClick={handleExecute}
            title="Execute"
          />
        ),
        variables: key => (
          <ToolbarVariablesButton key="variables" onClick={handleVariables} />
        ),
        views: key => (
          <ToolbarViewsButton
            key="views"
            onClick={handleSwitchView}
            currentView={currentView}
          />
        ),
      }
      return (
        <Fragment>
          {toolbar.map(button => {
            return typeof button === 'function'
              ? button({ handleSwitchView, currentView, handleAdd })
              : (buttons[button] && buttons[button](button)) || null
          })}
        </Fragment>
      )
    },
    [
      handleSwitchView,
      handleSwitchView,
      currentView,
      handleAdd,
      onCopy,
      toolbar,
      handleDelete,
      handleEdit,
      handleVariables,
      handleExecute,
      onDownload,
      title,
      _itemList,
    ]
  )

  return (
    <Fragment>
      {toolbar.length > 0 ? (
        <Toolbar
          items={selected}
          onDeleteSelected={handleDeleteSelected}
          onSwitchView={handleSwitchView}
          selectToolbar={SelectToolbar}>
          {toolbarContent}
        </Toolbar>
      ) : null}
      <Base el="table" className={classNames} themed={themed} {...propsRest}>
        {caption ? <TableCaption>{caption}</TableCaption> : null}
        <TableView
          dispatch={dispatchHook}
          handleAdd={handleAdd}
          handleDeleteSelected={handleDeleteSelected}
          headings={_headings}
          itemsToArray={itemsToArray}
          loading={loading}
          rows={_rows}
          selected={selected}
          tableName={name}
        />
      </Base>
    </Fragment>
  )
})

Table.propTypes = {
  caption: PropTypes.string,
  className: PropTypes.node,
  condensed: PropTypes.bool,
  headings: PropTypes.node,
  hook: PropTypes.func.isRequired,
  hover: PropTypes.bool,
  initialValue: PropTypes.object,
  name: PropTypes.string,
  onAdd: PropTypes.func,
  onCopy: PropTypes.func,
  onDelete: PropTypes.func,
  onDeleteSelected: PropTypes.func,
  onDownload: PropTypes.func,
  onEdit: PropTypes.func,
  onExecute: PropTypes.func,
  rows: PropTypes.func.isRequired,
  title: PropTypes.string,
  toolbar: PropTypes.arrayOf(PropTypes.string),
  uid: PropTypes.string,
}

Table.defaultProps = {
  themed: [],
}

export default Table

import React, { Fragment, useCallback, useMemo } from 'react'
import { SelectToolbar } from './SelectToolbar'

import { Toolbar } from '../Toolbar/Toolbar'
import { ToolbarAddButton } from './ToolbarAddButton'
import { ToolbarCopyButton } from './ToolbarCopyButton'
import { ToolbarDeleteButton } from './ToolbarDeleteButton'
import { ToolbarDownloadButton } from './ToolbarDownloadButton'
import { ToolbarEditButton } from './ToolbarEditButton'
import { ToolbarExecuteButton } from './ToolbarExecuteButton'
import { ToolbarViewsButton } from './ToolbarViewsButton'
import { tableToolbarTheme } from './table.theme'
import { TableToolbarInterface } from './table.types'

export const TableToolbar = React.memo(function TableToolbar({
  baseRoute,
  items,
  onDeleteSelected,
  onSwitchView,
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

  const handleDeleteSelected = useCallback(
    function handleDeleteSelected(e: React.MouseEvent<HTMLElement>) {
      e.preventDefault()
      onDeleteSelected && onDeleteSelected(e)
    },
    [onDeleteSelected]
  )

  const _themed = useMemo(() => [tableToolbarTheme], [tableToolbarTheme])

  return items.length > 0 ? (
    <SelectToolbar
      selected={items.length}
      handleDeleteSelected={handleDeleteSelected}
    />
  ) : (
    <Toolbar
      className="TableToolbar"
      baseRoute={baseRoute}
      onSwitchView={onSwitchView}
      borderBottom="thin"
      paddingBottom={2}
      themed={_themed}
    >
      {toolbarContent}
    </Toolbar>
  )
})

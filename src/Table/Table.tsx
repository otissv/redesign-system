import React, { Fragment, useEffect, useMemo, useReducer, useRef } from 'react';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';

import Base from '../Base/Base';
import { TableView } from './TableView';
import { Toolbar } from '../Toolbar/Toolbar';
import { ToolbarAddButton } from './ToolbarAddButton';
import { ToolbarCopyButton } from './ToolbarCopyButton';
import { ToolbarDeleteButton } from './ToolbarDeleteButton';
import { ToolbarDownloadButton } from './ToolbarDownloadButton';
import { ToolbarEditButton } from './ToolbarEditButton';
import { ToolbarExecuteButton } from './ToolbarExecuteButton';
import { ToolbarVariablesButton } from './ToolbarVariablesButton';
import { ToolbarViewsButton } from './ToolbarViewsButton';
import { tableTheme } from './table.theme';
import { useCacheState } from '../reusable/cacheState';
import { TableCaption } from './TableCaption';
import {
  TableInterface,
  TableInitialValueInterface,
  TableReducerType,
} from './table.types';

const SelectedText = styled.span`
  display: inline-block;
`;

export function Table({
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
  onRowClick,
  title,
  toolbar = [],
  themed: propsThemed,
  uid,
  ...propsRest
}: TableInterface) {
  const classNames = `Table ${className}`;
  const themed = useMemo(() => [tableTheme, ...propsThemed], [
    tableTheme,
    propsThemed,
  ]);

  const { loading, selected, dispatch: dispatchHook, itemsToArray } = hook();
  const _itemList = useMemo(() => initialValue || itemsToArray(), [
    initialValue,
    itemsToArray,
  ]);

  const initialState: TableInitialValueInterface = {
    variables: {},
    itemList: [],
  };

  const reducer: TableReducerType = function reducer(state, actions) {
    switch (actions.type) {
      case 'SET_ITEM_LIST':
        return { ...state, itemList: actions.itemList };
      case 'SET_VARIABLES':
        return { ...state, variables: actions.variables };
      default:
        return state;
    }
  };
  const [{ itemList }, dispatch] = useReducer(reducer, initialState);

  const { state: currentView, setItem: setCurrentView } = useCacheState(
    `${uid}_Table`
  );
  const { state: showVariables, setItem: setShowVariables } = useCacheState(
    `${uid}_showVariables`,
    false
  );
  const variablesRef = useRef('');

  const _headings = useMemo(() => headings, [headings]);
  const _rows = typeof rows === 'function' ? rows(itemList) : rows;

  useEffect(() => {
    dispatch({
      type: 'SET_ITEM_LIST',
      itemList: _itemList, // initialValue || _itemList,
    });
  }, [_itemList]);

  function handleAdd(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onAdd && onAdd(e);
  }

  function handleDelete(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onDelete && onDelete(e);
  }

  function handleDeleteSelected(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    const result = window.confirm(`Drop collections?\n${selected.join('\n')}`);

    if (result) {
      onDeleteSelected && onDeleteSelected(e);
    }
  }

  function handleEdit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onEdit && onEdit(e);
  }

  function handleExecute(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    const variablesObj = isEmpty(variablesRef.current)
      ? {}
      : JSON.parse(variablesRef.current);

    onExecute(variablesObj).then((result: any) => {
      if (result) {
        dispatch({
          type: 'SET_ITEM_LIST',
          itemList: result,
        });
      }
    });
  }

  function handleSwitchView(
    e: React.MouseEvent<HTMLElement>,
    { id }: { id: string }
  ) {
    e.preventDefault();
    if (id !== currentView) {
      setCurrentView(id);
    }
  }

  function handleVariables(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setShowVariables(!showVariables);
  }

  const SelectToolbar = useMemo(
    () => ({
      selected,
      handleDeleteSelected,
    }: {
      selected: number;
      handleDeleteSelected: (e: React.MouseEvent<HTMLElement>) => void;
    }) => (
      <div>
        <SelectedText>{selected} selected </SelectedText>
        <ToolbarDeleteButton
          alt="delete"
          onClick={handleDeleteSelected}
          title="Delete Collection"
        />
      </div>
    ),
    [selected, handleDeleteSelected]
  );

  const toolbarContent = useMemo(
    () => ({
      handleSwitchView,
    }: {
      handleSwitchView: (e: React.MouseEvent<HTMLElement>) => void;
    }) => {
      const buttons = (button: string) => {
        switch (button) {
          case 'add':
            return <ToolbarAddButton alt="add" key="add" onClick={handleAdd} />;

          case 'copy':
            return (
              <ToolbarCopyButton
                alt="copy"
                key="copy"
                data={_itemList}
                onClick={onCopy}
              />
            );
          case 'edit':
            return (
              <ToolbarEditButton alt="edit" key="edit" onClick={handleEdit} />
            );
          case 'delete':
            return (
              <ToolbarDeleteButton
                alt="delete"
                key="delete"
                onClick={handleDelete}
                title="Edit"
              />
            );
          case 'download':
            return (
              <ToolbarDownloadButton
                alt="download"
                key="download"
                data={_itemList}
                onClick={onDownload}
                fileName={`guru_download_${title}.json`}
              />
            );
          case 'execute':
            return (
              <ToolbarExecuteButton
                alt="execute"
                key="execute"
                onClick={handleExecute}
                title="Execute"
              />
            );
          case 'variables':
            return (
              <ToolbarVariablesButton
                alt="variables"
                key="variables"
                onClick={handleVariables}
              />
            );
          case 'views':
            return (
              <ToolbarViewsButton
                key="views"
                onClick={handleVariables}
                currentView={currentView}
              />
            );
          default:
            return null;
        }
      };

      console.log(
        toolbar.map(button => {
          return typeof button === 'function'
            ? button({ handleSwitchView, currentView, handleAdd })
            : buttons(button);
        })
      );

      return (
        <Fragment>
          {toolbar.map(button => {
            return typeof button === 'function'
              ? button({ handleSwitchView, currentView, handleAdd })
              : buttons(button);
          })}
        </Fragment>
      );
    },
    [
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
  );

  return (
    <Fragment>
      {toolbar.length > 0 ? (
        <Toolbar
          items={selected}
          onDeleteSelected={handleDeleteSelected}
          onSwitchView={handleSwitchView}
          selectToolbar={SelectToolbar}
          borderBottom="thin"
          paddingBottom={2}
        >
          {toolbarContent}
        </Toolbar>
      ) : null}
      <Base as="table" className={classNames} themed={themed} {...propsRest}>
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
          onRowClick={onRowClick}
        />
      </Base>
    </Fragment>
  );
}

Table.defaultProps = {
  className: '',
  themed: [],
};

export default Table;

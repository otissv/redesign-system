import React, { useMemo } from 'react'
import styled from 'styled-components'

import { Copy } from '../MaterialIcons/Copy'
import { Delete } from '../MaterialIcons/Delete'
import { Edit } from '../MaterialIcons/Edit'
import { Download } from '../MaterialIcons/Download'

const ButtonIcon = styled.a`
  background: #0000;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  padding: 0;
  transform: translateY(4px);
  white-space: nowrap;
`

export function TableButton({ Component, label, uid, ...propsRest }) {
  return (
    <ButtonIcon data-uid={uid} {...propsRest}>
      <Component />
      {label && ` ${label}`}
    </ButtonIcon>
  )
}

export function TableCopyButton({ onClick, uid, ...propsRest }) {
  const Component = useMemo(() => Copy, [Copy])

  return (
    <TableButton
      name="copy"
      onClick={onClick}
      Component={Component}
      title="Copy"
      {...propsRest}
    />
  )
}

export function TableDeleteButton({ onClick, uid, ...propsRest }) {
  const Component = useMemo(() => Delete, [Delete])

  return (
    <TableButton
      name="delete"
      onClick={onClick}
      Component={Component}
      title="Delete"
      {...propsRest}
    />
  )
}

export function TableDownloadButton({ onClick, uid, ...propsRest }) {
  const Component = useMemo(() => Download, [Download])

  return (
    <TableButton
      name="Download"
      onClick={onClick}
      Component={Component}
      title="Download"
      {...propsRest}
    />
  )
}

export function TableEditLink({ uid, ...propsRest }) {
  const Component = useMemo(() => Edit, [Edit])

  return (
    <a data-uid={uid} title="Edit" {...propsRest}>
      {children}
    </a>
  )
}

export default TableButton

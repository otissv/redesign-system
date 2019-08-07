import React, { useMemo } from 'react'

import { Copy } from '../MaterialIcons/Copy'
import { Delete } from '../MaterialIcons/Delete'
import { Edit } from '../MaterialIcons/Edit'
import { Download } from '../MaterialIcons/Download'
import { TableButtonInterface, TableLinkInterface } from './table.types'
import { ButtonIcon } from '../ButtonIcon'
// const ButtonIcon = styled.a`
//   background: #0000;
//   border: none;
//   color: #fff;
//   cursor: pointer;
//   outline: none;
//   padding: 0;
//   transform: translateY(4px);
//   white-space: nowrap;
// `;

export const TableButton = React.memo(function TableButton({
  icon: Component,
  uid,
  ...propsRest
}: TableButtonInterface) {
  const icon = useMemo(() => Component, [Component])
  return <ButtonIcon data-uid={uid} icon={icon} {...propsRest} />
})

export function TableCopyButton({
  onClick,
  uid,
  ...propsRest
}: TableButtonInterface) {
  const icon = useMemo(() => Copy, [Copy])

  return (
    <TableButton
      name="copy"
      onClick={onClick}
      icon={icon}
      title="Copy"
      {...propsRest}
    />
  )
}

export const TableDeleteButton = function TableDeleteButton({
  onClick,
  uid,
  ...propsRest
}: TableButtonInterface) {
  const icon = useMemo(() => Delete, [Delete])

  return (
    <TableButton
      name="delete"
      onClick={onClick}
      icon={icon}
      title="Delete"
      {...propsRest}
    />
  )
}

export const TableDownloadButton = function TableDownloadButton({
  onClick,
  uid,
  ...propsRest
}: TableButtonInterface) {
  const icon = useMemo(() => Download, [Download])

  return (
    <TableButton
      name="Download"
      onClick={onClick}
      icon={icon}
      title="Download"
      {...propsRest}
    />
  )
}

export const TableEditLink = function TableEditLink({
  children,
  uid,
  ...propsRest
}: TableLinkInterface) {
  const icon = useMemo(() => Edit, [Edit])

  return (
    <TableButton
      as="a"
      name="Edit"
      icon={icon}
      title="Edit"
      data-uid={uid}
      {...propsRest}
    >
      {children}
    </TableButton>
  )
}

export default TableButton

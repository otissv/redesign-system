import React, { useMemo, useContext, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'

import { Base } from '../Base'
import { RowDetailInterface, TableColumnContextInterface } from './table.types'
import { CaretRight } from '../MaterialIcons/CaretRight'
import { useCacheState } from '../reusable/cacheState'

export const TableColumnContext = React.createContext<
  TableColumnContextInterface
>({})

export function useTableColumn() {
  return useContext(TableColumnContext)
}

export function TableColumnProvider({
  children,
  checked = false,
  expanded = false,
  tableName,
  data,
  ...propsRest
}: TableColumnContextInterface) {
  const { state: isChecked, setItem: setChecked } = useCacheState(
    `${tableName}_${data[propsRest.uidKey]}_checked`,
    checked
  )

  const { state: isExpanded, setItem: setExpanded } = useCacheState(
    `${tableName}_${data[propsRest.uidKey]}_expanded`,
    expanded
  )

  useEffect(() => {
    setChecked(checked)
  }, [checked])

  useEffect(() => {
    setExpanded(expanded)
  }, [expanded])

  let Detail = React.useRef(() => null)
  let hasDetail = React.useRef(false)
  let Rows = React.useRef(() => null)

  const columns = useMemo(() => {
    if (Array.isArray(children)) {
      return children.reduce((acc: any[], child: any) => {
        const { condition, uid } = child.props || {
          condition: null,
          uid: null,
        }

        const isDetail = uid === 'detail'
        const isRow = uid === 'row'
        const isRows = uid === 'rows'
        const showDetail = condition && condition({ data })
        switch (true) {
          case isDetail && condition == null: {
            Detail.current = () => child
            hasDetail.current = true
            return acc
          }
          case isDetail && showDetail: {
            Detail.current = () => child
            hasDetail.current = true
            return acc
          }
          case isDetail && condition && !showDetail: {
            return [<td key="detail"></td>, ...acc]
          }
          case isRow: {
            const row = React.cloneElement(child, { data, key: uid })
            return [...acc, row]
          }
          case isRows: {
            const rows = React.cloneElement(child, { data, key: uid })
            Rows.current = () => rows
            return acc
          }
          case !child.props.children && !child.props.prop: {
            return acc
          }
          default: {
            return [...acc, child]
          }
        }
      }, [])
    } else if (typeof children.props.children === 'function') {
      return children.props.children({ data })
    } else {
      return children
    }
  }, [children, Detail])

  const context = useMemo(
    () => ({
      ...propsRest,
      data,
      checked: isChecked,
      expanded: isExpanded,
      setChecked,
      setExpanded,
    }),
    [isChecked, setChecked, isExpanded, setExpanded, propsRest]
  )

  return (
    <TableColumnContext.Provider value={context}>
      <Columns
        columns={columns}
        hasDetail={hasDetail}
        RowIndicator={RowIndicator}
        isExpanded={isExpanded}
        setExpanded={setExpanded}
      />

      <Rows.current />

      {hasDetail.current && (
        <RowDetail expanded={isExpanded} colSpan={children.length}>
          <Detail.current />
        </RowDetail>
      )}
    </TableColumnContext.Provider>
  )
}

const Columns = React.memo(
  ({ columns, hasDetail, RowIndicator, isExpanded, setExpanded }: any) => {
    switch (true) {
      case !isEmpty(columns) && hasDetail.current: {
        return (
          <tr>
            <RowIndicator expanded={isExpanded} setExpanded={setExpanded} />
            {columns}
          </tr>
        )
      }
      case isEmpty(columns) && hasDetail.current: {
        return (
          <tr>
            <RowIndicator expanded={isExpanded} setExpanded={setExpanded} />
          </tr>
        )
      }
      case !isEmpty(columns) && !hasDetail.current: {
        return <tr>{columns}</tr>
      }
      default:
        return null
    }
  }
)

const RowDetail = React.memo(function RowDetail({
  children,
  colSpan,
  expanded,
}: RowDetailInterface) {
  const _animateNested = useMemo(() => {
    return {
      expanded: {
        height: 'auto',
        opacity: 1,
        delay: 100,
        applyAtStart: { display: 'block' },
      },
      collapsed: {
        height: 0,
        opacity: 0,
        delay: 300,
        applyAtEnd: { display: 'none' },
      },
    }
  }, [])

  return (
    <tr
      className="RowDetail"
      style={{ display: expanded ? 'table-row' : 'none' }}
    >
      <td colSpan={colSpan}>
        <Base
          animate={_animateNested}
          state={expanded ? 'expanded' : 'collapsed'}
          as="div"
        >
          {children}
        </Base>
      </td>
    </tr>
  )
})

const RowIndicatorStyled = styled.button<RowDetailInterface>`
  ${({ expanded }) => `
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 30px;
  margin: 3px;
  outline: none;
  padding-right: 0;
  text-align: left;
  transform: rotate(${expanded ? '45deg' : '0deg'});
  transition: all 0.2s ease;

  &:hover,
  &:active {
    background: none;
    border-bottom: #0000;
  }
`}
`

const RowIndicator = React.memo(function Indicator({
  expanded,
  setExpanded,
  ...propsRest
}: RowDetailInterface) {
  const handleClick = React.useCallback(
    function handleClick(e: React.MouseEvent<HTMLInputElement>) {
      e.preventDefault()
      setExpanded(!expanded)
    },
    [setExpanded, expanded]
  )

  return (
    <td
      {...propsRest}
      className="RowIndicator"
      style={{ padding: 0, width: '50px' }}
    >
      <RowIndicatorStyled onClick={handleClick} expanded={expanded}>
        <CaretRight alt="indicator" />
      </RowIndicatorStyled>
    </td>
  )
})

import { useMemo, useEffect, useState } from 'react'

export function useGetItems(hook: any) {
  const { items, itemsToArray } = hook()
  const [state, setState] = useState([])

  useEffect(() => {
    setState(itemsToArray(items))
  }, [items, itemsToArray])

  return useMemo(() => state, [state])
}

export function useGetActiveItem<T>(hook: any, initialState: T) {
  const [state, setState] = useState<T>(initialState)

  const { active, items } = hook()

  useEffect(() => {
    if (items && items[active]) {
      setState(items[active])
    }
  }, [active, items, setState])

  return useMemo(() => state, [state])
}

export function useResetActive(hook: any) {
  const { active, dispatch } = hook()

  useEffect(() => {
    if (active === '') return

    dispatch({
      type: 'SET_ACTIVE',
      active: '',
    })
  }, [active, dispatch])
}

export function useSetActive(hook: any, value: any) {
  const { active, dispatch } = hook()

  useEffect(() => {
    if (active === value) return
    dispatch({
      type: 'SET_ACTIVE',
      active: value,
    })
  }, [active, value, dispatch])
}

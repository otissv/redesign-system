import { useMemo, useEffect, useState } from 'react'

export function useGetActiveItem(hook) {
  const [state, setState] = useState({})
  const { active, items } = hook()

  useEffect(() => {
    if (items && items[active]) {
      setState(items[active])
    }
  }, [active, items])

  return useMemo(() => state, [state])
}

export function useGetItems(hook) {
  const { items, itemsToArray } = hook()
  const [state, setState] = useState([])

  useEffect(() => {
    setState(itemsToArray(state))
  }, [items])

  return useMemo(() => state, [state])
}

export function useResetActive(hook) {
  const { active, dispatch } = hook()

  useEffect(() => {
    if (active === '') return

    dispatch({
      type: 'SET_ACTIVE',
      active: '',
    })
  }, [])
}

export function useSetActive(hook, value) {
  const { active, dispatch } = hook()

  useEffect(() => {
    if (active === value) return
    dispatch({
      type: 'SET_ACTIVE',
      active: value,
    })
  }, [active, value])
}

import { useCallback, useEffect, useRef, useMemo } from 'react'
import { StackType } from '../stack/stack.types'
import { useStack } from '../stack/useStack'

export function useCacheStack<S>(
  key: string,
  stackType: StackType = 'LIFO',
  initialState: S[] = [],
  storage?: string
) {
  const windowStorage =
    storage === 'sessionStorage' ? window.sessionStorage : window.localStorage
  const cached = useRef(windowStorage.getItem(key))

  const { state, add, delete: del, clear, replace, reset, take } = useStack(
    stackType,
    initialState
  )
  const addItem = useCallback(
    function setItem(payload: any) {
      try {
        add(payload)

        const data = JSON.stringify([...state, payload])
        return windowStorage.setItem(key, data)
      } catch (error) {
        console.log(error)
      }
    },
    [state, add, windowStorage, key]
  )

  const clearItem = useCallback(
    function clearItem() {
      clear()
      windowStorage.setItem(key, '[]')
    },
    [key, clear, windowStorage]
  )

  const deleteItem = useCallback(
    function deleteItem() {
      try {
        del()
        let data

        if (stackType === 'FIFO') {
          data = JSON.stringify(
            state.length === 0 ? [] : state.slice(1, state.length)
          )
        } else {
          data = JSON.stringify(
            state.length === 0 ? [] : state.slice(0, state.length - 1)
          )
        }
        return windowStorage.setItem(key, data)
      } catch (error) {
        console.log(error)
      }
    },
    [key, del, state, stackType, windowStorage]
  )

  const replaceItem = useCallback(
    function setItem(payload: any) {
      try {
        replace(payload)

        const data = JSON.stringify(payload)
        windowStorage.setItem(key, data)
      } catch (error) {
        console.log(error)
      }
    },
    [key, replace, windowStorage]
  )

  const resetStack = useCallback(
    function resetStack() {
      reset()
      windowStorage.setItem(key, '[]')
    },
    [key, reset, windowStorage]
  )

  const takeItem = useCallback(
    function takeItem() {
      try {
        deleteItem()

        return take()
      } catch (error) {
        console.log(error)
      }
    },
    [deleteItem, take]
  )

  useEffect(() => {
    try {
      const data = cached.current ? JSON.parse(cached.current) : initialState
      replace(data || initialState)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return useMemo(
    () => ({
      state,
      add: addItem,
      delete: deleteItem,
      clear: clearItem,
      replace: replaceItem,
      reset: resetStack,
      take: takeItem,
    }),
    [state, addItem, deleteItem, clearItem, replaceItem, resetStack, takeItem]
  )
}

export function useCacheFIFO<S>(
  key: string,
  initialState: S[] = [],
  storage?: string
) {
  return useCacheStack(key, 'FIFO', initialState, storage)
}

export function useCacheLIFO<S>(
  key: string,
  initialState: S[] = [],
  storage?: string
) {
  return useCacheStack(key, 'LIFO', initialState, storage)
}

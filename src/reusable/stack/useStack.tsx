import { useMemo, useReducer } from 'react'
import { StackType, StackActionType } from './stack.types'

export function useStack<S>(
  stackType: StackType = 'LIFO',
  initialState: S[] = []
) {
  const stack = {
    FIFO: {
      add: (state: S[], payload: S) => [...state, payload],

      delete: (state: S[]) =>
        state.length === 0 ? [] : state.slice(1, state.length),

      take: (state: S[]) => [state[0]],
    },

    LIFO: {
      add: (state: S[], payload: S) => [...state, payload],

      delete: (state: S[]) =>
        state.length === 0 ? [] : state.slice(0, state.length - 1),

      take: (state: S[]) => {
        return [state[state.length - 1]]
      },
    },
  }[stackType]

  function reducer(state: S[], action: StackActionType<S>) {
    switch (action.type) {
      case 'ADD_TO_STACK': {
        return action.payload ? stack.add(state, action.payload) : state
      }
      case 'DELETE_FROM_STACK':
        return stack.delete(state)

      case 'CLEAR_STACK':
        return []

      case 'REPLACE_STACK':
        return action.replace ? action.replace : state

      case 'RESET_STACK':
        return initialState

      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const methods = {
    dispatch,
    add: (payload: S) => {
      dispatch({
        type: 'ADD_TO_STACK',
        payload,
      })
    },
    clear: () => {
      dispatch({
        type: 'CLEAR_STACK',
      })
    },
    delete: () => {
      dispatch({
        type: 'DELETE_FROM_STACK',
      })
    },
    replace: (payload: S[]) => {
      dispatch({
        type: 'REPLACE_STACK',
        replace: payload,
      })
    },
    reset: () => {
      dispatch({
        type: 'RESET_STACK',
      })
    },
    take: () => {
      return stack.take(state)
    },
  }

  return useMemo(() => ({ state, ...methods }), [state, methods])
}

export function useFIFO<S>(initialState: S[] = []) {
  return useStack('FIFO', initialState)
}

export function useLIFO<S>(initialState: S[] = []) {
  return useStack('LIFO', initialState)
}

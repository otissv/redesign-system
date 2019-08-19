import React from 'react'
import {
  useCacheReducer,
  ActionInterface,
  StateInterface,
} from './cacheReducer'

export function ReducerDemo() {
  function reducer(
    state: StateInterface,
    action: ActionInterface
  ): StateInterface {
    const count = typeof state.count === 'number' ? state.count : 0
    switch (action.type) {
      case 'DEC': {
        const i = count - 1
        return {
          ...state,
          count: i < 0 ? 0 : i,
        }
      }

      case 'INC': {
        return {
          ...state,
          count: count + 1,
        }
      }

      case 'SET_NAME': {
        return {
          ...state,
          name: action.payload,
        }
      }

      default:
        return state
    }
  }

  const initialState: StateInterface = {
    count: 11,
  }

  const { state, dispatch } = useCacheReducer<StateInterface, ActionInterface>(
    'MyReducer',
    reducer,
    initialState
  )

  React.useEffect(() => {
    dispatch({
      type: 'SET_NAME',
      payload: 'MyReducerTest',
    })
  }, [])

  return (
    <div>
      <h1>Reducer</h1>
      <button
        onClick={e => {
          e.preventDefault()
          dispatch({
            type: 'INC',
          })
        }}
      >
        ADD
      </button>
      <button
        onClick={e => {
          e.preventDefault()
          dispatch({
            type: 'DEC',
          })
        }}
      >
        Minus
      </button>
      <h1>{state.count}</h1>
    </div>
  )
}

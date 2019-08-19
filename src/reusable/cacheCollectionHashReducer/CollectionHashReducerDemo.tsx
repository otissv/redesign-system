import React from 'react'
import { useCacheCollectionHashReducer } from './cacheCollectionHashReducer'
import { CollectionHashInitialValueInterface } from '../collectionHash'

export function CollectionHashReducerDemo() {
  const initialState: CollectionHashInitialValueInterface = {
    uid: 'id',
    items: [
      {
        id: 'a',
        user: 'user_a',
      },
      {
        id: 'b',
        user: 'user_b',
      },
      {
        id: 'c',
        user: 'user_c',
      },
    ],
  }

  const { state, dispatch } = useCacheCollectionHashReducer(
    'MY_COLLECTION_HASH',
    initialState
  )

  return (
    <div>
      <h1>CollectionHash</h1>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: 'INSERT_ITEMS',
              items: [
                {
                  id: '0',
                  user: 'user_0',
                },
                {
                  id: '1',
                  user: 'user_1',
                },
                {
                  id: '2',
                  user: 'user_2',
                },
              ],
            })
          }}
        >
          INSERT_ITEMS
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'REMOVE_ITEMS',
              remove: ['a', 'b'],
            })
          }}
        >
          REMOVE_ITEMS
        </button>
        <button onClick={() => {}}>REPLACE_ITEMS</button>
        <button
          onClick={() => {
            dispatch({
              type: 'RESET',
            })
          }}
        >
          RESET
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'SET_ACTIVE',
              active: 'b',
            })
          }}
        >
          SET_ACTIVE
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'SET_LOADING',
              loading: true,
            })
          }}
        >
          SET_LOADING
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'SET_SELECTED',
              selected: ['a', 'b'],
            })
          }}
        >
          SET_SELECTED
        </button>
        <button onClick={() => {}}>TOGGLE_SELECTED_ITEMS</button>
        <button
          onClick={() => {
            dispatch({
              type: 'UPDATE_ITEM',
              select: 'a',
              item: {
                name: 'A working',
              },
            })
          }}
        >
          UPDATE_ITEM
        </button>
      </div>

      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  )
}
